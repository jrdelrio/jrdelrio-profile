import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const TO = "jrdelriodom@gmail.com";
// Hasta verificar un dominio propio en Resend, solo se puede enviar desde onboarding@resend.dev.
const FROM = import.meta.env.CONTACT_FROM ?? "Portafolio <onboarding@resend.dev>";

const LIMITS = { name: 100, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) return json({ error: "missing_key" }, 500);

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return json({ error: "bad_request" }, 400);
    }

    // Honeypot: los bots rellenan el campo oculto; respondemos ok sin enviar.
    if (typeof body.company === "string" && body.company.trim() !== "") {
        return json({ ok: true }, 200);
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (
        !name || name.length > LIMITS.name ||
        !EMAIL_RE.test(email) || email.length > LIMITS.email ||
        message.length < 10 || message.length > LIMITS.message
    ) {
        return json({ error: "invalid" }, 400);
    }

    const { error } = await new Resend(apiKey).emails.send({
        from: FROM,
        to: TO,
        replyTo: email,
        subject: `Nuevo contacto desde el portafolio: ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) return json({ error: "send_failed" }, 502);
    return json({ ok: true }, 200);
};

function json(payload: unknown, status: number): Response {
    return new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}
