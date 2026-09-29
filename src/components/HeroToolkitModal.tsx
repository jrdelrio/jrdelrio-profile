import React, { useState, useEffect } from 'react';

interface Tool {
  name: string;
  icon: string;
}

const tools: Tool[] = [
  { name: 'Next.js', icon: '/icons/stack/nextjs.svg' },
  { name: 'Astro', icon: '/icons/stack/astro.svg' },
  { name: 'Sanity', icon: '/icons/stack/sanity.svg' },
  { name: 'Django', icon: '/icons/stack/django.svg' },
  { name: 'PostgreSQL', icon: '/icons/stack/postgresql.svg' },
  { name: 'Claude', icon: '/icons/stack/claude.svg' },
  { name: 'Docker', icon: '/icons/stack/docker.svg' },
  { name: 'MongoDB', icon: '/icons/stack/mongodb.svg' },
  { name: 'Flask', icon: '/icons/stack/flask.svg' },
  { name: 'Supabase', icon: '/icons/stack/supabase.svg' },
  { name: 'TypeScript', icon: '/icons/stack/typescript.svg' },
  { name: 'Resend', icon: '/icons/stack/resend.svg' },
];

export default function HeroToolkitModal() {
  const [selected, setSelected] = useState<Tool | null>(null);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'es';
    setLang((storedLang as 'es' | 'en') || 'es');

    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: 'es' | 'en' }>;
      setLang(customEvent.detail?.lang || 'es');
    };

    document.addEventListener('langchange', handleLangChange);
    return () => document.removeEventListener('langchange', handleLangChange);
  }, []);

  const getDescription = (toolName: string): string => {
    const key = `hero.tools.${toolName.toLowerCase()}`;
    const translations: Record<string, Record<string, string>> = {
      es: {
        'hero.tools.next.js':
          'Next.js es un framework de React creado por Vercel. Permite crear aplicaciones web optimizadas con renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y enrutamiento automático, mejorando drásticamente el rendimiento y el SEO.',
        'hero.tools.astro':
          'Astro es un framework moderno enfocado en performance. Entrega HTML estático por defecto, carga JavaScript solo donde se necesita, y permite usar componentes de cualquier framework (React, Vue, Svelte). Ideal para sitios rápidos y SEO-optimizados.',
        'hero.tools.sanity':
          'Sanity es un CMS sin cabeza y headless. Ofrece un editor flexible para contenido, una API GraphQL/REST potente y esquemas customizables. Perfecto para separar contenido de presentación y permitir que editores gestionen datos sin tocar código.',
        'hero.tools.django':
          'Django es un framework web full-stack para Python. Incluye ORM, admin, autenticación, validación y todo lo necesario para APIs y aplicaciones web robustas. Su "batteries included" lo hace ideal para productos complejos con lógica de negocio pesada.',
        'hero.tools.postgresql':
          'PostgreSQL es una base de datos relacional avanzada, open source y de confianza. Soporta JSON, arrays, búsqueda de texto, y extensiones poderosas. Es mi base de datos predeterminada para aplicaciones serias.',
        'hero.tools.claude':
          'Claude es un asistente de IA de Anthropic. Lo uso en mi flujo de desarrollo para acelerar programación, generar código, revisar lógica y resolver problemas. Mantiene contexto profundo y es especialmente bueno con análisis y razonamiento complejo.',
        'hero.tools.docker':
          'Docker empaqueta aplicaciones en contenedores aislados. Garantiza que el código que funciona en mi máquina también funciona en producción. Esencial para entornos reproducibles, microservicios y deployes confiables.',
        'hero.tools.mongodb':
          'MongoDB es una base de datos NoSQL orientada a documentos. Almacena datos en JSON-like BSON, escalas horizontalmente y es flexible para esquemas cambiantes. Útil para prototipos rápidos y datos semiestructurados.',
        'hero.tools.flask':
          'Flask es un micro framework web para Python. Minimalista y flexible, permite construir APIs REST y aplicaciones web sin opinioness fuertes. Perfecto para servicios pequeños y cuando necesitas control total.',
        'hero.tools.supabase':
          'Supabase es una alternativa open source a Firebase. Ofrece PostgreSQL hosteado, autenticación, realtime, almacenamiento y APIs generadas automáticamente. Acelera el desarrollo del backend sin vendor lock-in.',
        'hero.tools.typescript':
          'TypeScript añade tipado estático a JavaScript. Detecta errores en tiempo de desarrollo, mejora la documentación del código y facilita refactorización segura. Uso en frontend y backend para code quality.',
        'hero.tools.resend':
          'Resend es una plataforma de email moderno para desarrolladores. Envía emails transaccionales con React Templates, webhooks y tracking. Reemplaza servicios complejos con una API simple y bien documentada.',
      },
      en: {
        'hero.tools.next.js':
          'Next.js is a React framework built by Vercel. It enables building optimized web apps with server-side rendering (SSR), static site generation (SSG), and automatic routing, drastically improving performance and SEO.',
        'hero.tools.astro':
          'Astro is a modern framework focused on performance. It ships static HTML by default, loads JavaScript only where needed, and lets you use components from any framework (React, Vue, Svelte). Ideal for fast, SEO-optimized sites.',
        'hero.tools.sanity':
          'Sanity is a headless CMS. It offers a flexible content editor, powerful GraphQL/REST APIs, and customizable schemas. Perfect for decoupling content from presentation and letting editors manage data without touching code.',
        'hero.tools.django':
          'Django is a full-stack web framework for Python. Includes ORM, admin panel, authentication, validation and everything needed for robust APIs and web apps. Its "batteries included" philosophy makes it ideal for complex products with heavy business logic.',
        'hero.tools.postgresql':
          'PostgreSQL is an advanced, open-source relational database. Supports JSON, arrays, full-text search and powerful extensions. It\'s my default database for serious applications.',
        'hero.tools.claude':
          'Claude is an AI assistant by Anthropic. I use it in my dev workflow to speed up coding, generate code, review logic and solve problems. It maintains deep context and excels at complex analysis and reasoning.',
        'hero.tools.docker':
          'Docker packages applications in isolated containers. Ensures code that works on my machine also works in production. Essential for reproducible environments, microservices and reliable deploys.',
        'hero.tools.mongodb':
          'MongoDB is a NoSQL, document-oriented database. Stores data in JSON-like BSON, scales horizontally and is flexible with changing schemas. Useful for rapid prototyping and semi-structured data.',
        'hero.tools.flask':
          'Flask is a micro web framework for Python. Minimal and flexible, it lets you build REST APIs and web apps without strong opinions. Perfect for small services and when you need full control.',
        'hero.tools.supabase':
          'Supabase is an open-source Firebase alternative. Offers hosted PostgreSQL, authentication, realtime, storage and auto-generated APIs. Accelerates backend development without vendor lock-in.',
        'hero.tools.typescript':
          'TypeScript adds static typing to JavaScript. Catches errors at development time, improves code documentation and enables safe refactoring. I use it in frontend and backend for code quality.',
        'hero.tools.resend':
          'Resend is a modern email platform for developers. Send transactional emails with React Templates, webhooks and tracking. Replaces complex email services with a simple, well-documented API.',
      },
    };

    return translations[lang]?.[key] || '';
  };

  const handleClose = (e?: React.MouseEvent) => {
    if (e && e.target !== e.currentTarget) return;
    setSelected(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <ul className="flex flex-wrap gap-x-3 sm:gap-x-6 gap-y-3">
        {tools.map((tool) => (
          <li key={tool.name}>
            <button
              onClick={() => setSelected(tool)}
              className="cursor-pointer"
              aria-label={`Learn more about ${tool.name}`}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="h-5 sm:h-6 md:h-8 w-auto grayscale opacity-80 transition duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-110 motion-reduce:hover:scale-100"
              />
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <div
          className="toolkit-modal-overlay"
          onClick={handleClose}
        >
          <div className="toolkit-modal">
            <button
              className="toolkit-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selected.icon}
              alt={selected.name}
              className="toolkit-modal-icon"
            />
            <h3 className="toolkit-modal-title">{selected.name}</h3>
            <p className="toolkit-modal-desc">
              {getDescription(selected.name)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
