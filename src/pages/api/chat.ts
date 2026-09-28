import type { APIRoute } from "astro";
import { SYSTEM_PROMPT } from "../../lib/chat-context";

export const prerender = false;

const MODEL = "gemini-2.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// Solo conservamos los últimos N mensajes para no inflar tokens.
const MAX_HISTORY = 10;

interface ChatMessage {
    role: "user" | "bot";
    content: string;
}

export const POST: APIRoute = async ({ request }) => {
    const apiKey = import.meta.env.GEMINI_API_KEY;
    if (!apiKey) {
        return json({ error: "missing_key" }, 500);
    }

    let messages: ChatMessage[];
    try {
        const body = await request.json();
        messages = Array.isArray(body?.messages) ? body.messages : [];
    } catch {
        return json({ error: "bad_request" }, 400);
    }

    if (messages.length === 0) {
        return json({ error: "empty" }, 400);
    }

    // Mapea nuestro formato al de Gemini (role: user | model).
    const contents = messages.slice(-MAX_HISTORY).map((m) => ({
        role: m.role === "bot" ? "model" : "user",
        parts: [{ text: String(m.content ?? "").slice(0, 2000) }],
    }));

    try {
        const res = await fetch(`${API_URL}?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
                contents,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 600,
                    // Sin esto, 2.5-flash gasta casi todo el presupuesto "pensando" y corta la respuesta.
                    thinkingConfig: { thinkingBudget: 0 },
                },
            }),
        });

        if (!res.ok) {
            console.error("gemini upstream", res.status, (await res.text()).slice(0, 300));
            return json({ error: "upstream" }, 502);
        }

        const data = await res.json();
        const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";

        if (!reply) {
            return json({ error: "no_reply" }, 502);
        }

        return json({ reply }, 200);
    } catch {
        return json({ error: "network" }, 502);
    }
};

function json(payload: unknown, status: number): Response {
    return new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}
