import { useEffect, useRef, useState } from "react";

interface Message {
    role: "user" | "bot";
    content: string;
}

// Textos de UI bilingües (el cuerpo de las respuestas lo genera la IA).
const UI = {
    es: {
        title: "Raimundo Bot",
        open: "Abrir chat",
        close: "Cerrar chat",
        placeholder: "Escribe un mensaje...",
        send: "Enviar",
        greeting:
            "¡Hola! Soy Raimundo, en versión IA. Pregúntame por mi stack, mis proyectos o cómo sacar adelante la web de tu negocio.",
        error:
            "Ahora no puedo responder. Escríbeme a jrdelriodom@gmail.com y lo vemos.",
    },
    en: {
        title: "Raimundo Bot",
        open: "Open chat",
        close: "Close chat",
        placeholder: "Type a message...",
        send: "Send",
        greeting:
            "Hi! I'm Raimundo, AI edition. Ask me about my stack, my projects, or how to get your business website off the ground.",
        error: "I can't reply right now. Email me at jrdelriodom@gmail.com.",
    },
};

function currentLang(): "es" | "en" {
    if (typeof localStorage === "undefined") return "es";
    const saved = localStorage.getItem("lang");
    return saved === "en" ? "en" : "es";
}

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState<"es" | "en">("es");
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const t = UI[lang];

    useEffect(() => {
        setLang(currentLang());
        const onLang = (e: Event) => {
            const next = (e as CustomEvent).detail === "en" ? "en" : "es";
            setLang(next);
            // Si solo está el saludo, lo cambiamos al nuevo idioma.
            setMessages((m) =>
                m.length === 1 && m[0].role === "bot"
                    ? [{ role: "bot", content: UI[next].greeting }]
                    : m,
            );
        };
        window.addEventListener("langchange", onLang);
        return () => window.removeEventListener("langchange", onLang);
    }, []);

    // Saludo inicial cuando se abre por primera vez.
    useEffect(() => {
        if (open && messages.length === 0) {
            setMessages([{ role: "bot", content: UI[currentLang()].greeting }]);
        }
        if (open) inputRef.current?.focus();
    }, [open]);

    // Auto-scroll al último mensaje.
    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, loading]);

    async function send() {
        const text = input.trim();
        if (!text || loading) return;

        const next: Message[] = [...messages, { role: "user", content: text }];
        setMessages(next);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next }),
            });
            const data = await res.json();
            const reply = res.ok && data?.reply ? data.reply : t.error;
            setMessages((m) => [...m, { role: "bot", content: reply }]);
        } catch {
            setMessages((m) => [...m, { role: "bot", content: t.error }]);
        } finally {
            setLoading(false);
        }
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    }

    return (
        <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-100">
            {open && (
                <div
                    role="dialog"
                    aria-label={t.title}
                    className="absolute bottom-[64px] right-0 w-[min(92vw,380px)] rounded-[10px] overflow-hidden flex flex-col bg-surface border border-[color:var(--border-strong)]"
                >
                    <div className="px-5 py-3 bg-surface border-b border-[color:var(--border-default)] flex justify-between items-center shrink-0">
                        <span className="h4">{t.title}</span>
                        <button
                            type="button"
                            className="text-muted hover:text-ink p-1 -mr-1"
                            onClick={() => setOpen(false)}
                            aria-label={t.close}
                        >
                            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">close</span>
                        </button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="bg-paper p-5 space-y-3 overflow-y-auto h-[min(60vh,360px)] leading-relaxed"
                        aria-live="polite"
                    >
                        {messages.map((m, i) => (
                            <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                                <p
                                    className={
                                        m.role === "user"
                                            ? "px-4 py-2.5 rounded max-w-[85%] bg-accent-fill text-surface whitespace-pre-line"
                                            : "px-4 py-2.5 rounded max-w-[85%] bg-surface border border-[color:var(--border-default)] text-ink whitespace-pre-line"
                                    }
                                >
                                    {m.content}
                                </p>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start" aria-label="…">
                                <p className="px-4 py-3 rounded bg-surface border border-[color:var(--border-default)]">
                                    <span className="inline-flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse [animation-delay:-0.4s]"></span>
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse [animation-delay:-0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-surface border-t border-[color:var(--border-default)] flex gap-2 shrink-0">
                        <input
                            ref={inputRef}
                            className="field flex-1 min-w-0"
                            placeholder={t.placeholder}
                            aria-label={t.placeholder}
                            value={input}
                            onInput={(e) => setInput((e.target as HTMLInputElement).value)}
                            onKeyDown={onKeyDown}
                            type="text"
                            disabled={loading}
                        />
                        <button
                            type="button"
                            onClick={send}
                            disabled={loading || !input.trim()}
                            className="btn btn-primary btn-md !px-3 shrink-0"
                            aria-label={t.send}
                        >
                            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">send</span>
                        </button>
                    </div>
                </div>
            )}

            <button
                className="btn btn-primary w-12 h-12 !p-0"
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? t.close : t.open}
                aria-expanded={open}
            >
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                    {open ? "close" : "chat_bubble"}
                </span>
            </button>
        </div>
    );
}
