import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { translations } from "../i18n/translations.js";

type Lang = "es" | "en";

interface Tool {
  id: string;
  name: string;
  icon: string;
  /** Ancho a 32px de alto según el viewBox, para reservar espacio (CLS). */
  w: number;
}

const tools: Tool[] = [
  { id: "nextjs", name: "Next.js", icon: "/icons/stack/nextjs.svg", w: 32 },
  { id: "astro", name: "Astro", icon: "/icons/stack/astro.svg", w: 25 },
  { id: "sanity", name: "Sanity", icon: "/icons/stack/sanity.svg", w: 27 },
  { id: "django", name: "Django", icon: "/icons/stack/django.svg", w: 32 },
  { id: "postgresql", name: "PostgreSQL", icon: "/icons/stack/postgresql.svg", w: 31 },
  { id: "claude", name: "Claude", icon: "/icons/stack/claude.svg", w: 51 },
  { id: "docker", name: "Docker", icon: "/icons/stack/docker.svg", w: 44 },
  { id: "mongodb", name: "MongoDB", icon: "/icons/stack/mongodb.svg", w: 15 },
  { id: "flask", name: "Flask", icon: "/icons/stack/flask.svg", w: 36 },
  { id: "supabase", name: "Supabase", icon: "/icons/stack/supabase.svg", w: 31 },
  { id: "typescript", name: "TypeScript", icon: "/icons/stack/typescript.svg", w: 32 },
  { id: "resend", name: "Resend", icon: "/icons/stack/resend.svg", w: 32 },
  { id: "github", name: "GitHub", icon: "/icons/stack/github.svg", w: 32 },
];

const CLOSE_MS = 220;

const ui = {
  es: { open: (n: string) => `Qué es ${n}`, close: "Cerrar" },
  en: { open: (n: string) => `What is ${n}`, close: "Close" },
};

function readLang(): Lang {
  try {
    return localStorage.getItem("lang") === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

export default function HeroToolkitModal() {
  const [lang, setLang] = useState<Lang>("es");
  const [selected, setSelected] = useState<Tool | null>(null);
  const [closing, setClosing] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    setLang(readLang());
    const onLang = (e: Event) => setLang((e as CustomEvent<string>).detail === "en" ? "en" : "es");
    window.addEventListener("langchange", onLang);
    return () => {
      window.removeEventListener("langchange", onLang);
      window.clearTimeout(timer.current);
    };
  }, []);

  const open = (tool: Tool, trigger: HTMLButtonElement) => {
    window.clearTimeout(timer.current);
    triggerRef.current = trigger;
    setClosing(false);
    setSelected(tool);
  };

  const close = () => {
    if (!selected || closing) return;
    setClosing(true);
    timer.current = window.setTimeout(() => {
      setSelected(null);
      setClosing(false);
      triggerRef.current?.focus();
    }, CLOSE_MS);
  };

  useEffect(() => {
    if (!selected) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  });

  const t = ui[lang];

  return (
    <>
      <ul className="flex flex-wrap gap-x-3 sm:gap-x-6 gap-y-3">
        {tools.map((tool) => (
          <li key={tool.id}>
            <button
              type="button"
              onClick={(e) => open(tool, e.currentTarget)}
              className="block cursor-pointer rounded-sm"
              aria-label={t.open(tool.name)}
              aria-haspopup="dialog"
            >
              <img
                src={tool.icon}
                alt=""
                width={tool.w}
                height={32}
                className="h-9 sm:h-6 md:h-8 w-auto grayscale opacity-80 transition duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-110 motion-reduce:hover:scale-100"
              />
            </button>
          </li>
        ))}
      </ul>

      {selected && createPortal(
        <div
          className={`toolkit-modal-overlay${closing ? " is-closing" : ""}`}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div
            className="toolkit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="toolkit-modal-title"
            aria-describedby="toolkit-modal-desc"
          >
            <button ref={closeRef} type="button" className="toolkit-modal-close" onClick={close} aria-label={t.close}>
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">close</span>
            </button>
            <img src={selected.icon} alt="" className="toolkit-modal-icon" />
            <h3 id="toolkit-modal-title" className="toolkit-modal-title">{selected.name}</h3>
            <p id="toolkit-modal-desc" className="toolkit-modal-desc">
              {translations[lang][`hero.tools.${selected.id}`]}
            </p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
