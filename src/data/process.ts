type Localized = { es: string; en: string };

export interface Step {
    key: string;
    title: Localized;
    body: Localized;
    /** Paso opcional: se muestra con la etiqueta "Opcional". */
    optional?: boolean;
}

// Pasos de "Cómo trabajo" en /servicios. Sin plazos ni precios.
export const processSteps: Step[] = [
    {
        key: "talk",
        title: { es: "Conversamos", en: "We talk" },
        body: {
            es: "Me cuentas qué hace tu negocio, qué necesitas y qué esperas del sitio. Si ya tienes una web, la revisamos juntos.",
            en: "You tell me what your business does, what you need and what you expect from the site. If you already have one, we review it together.",
        },
    },
    {
        key: "proposal",
        title: { es: "Propuesta y cotización", en: "Proposal and quote" },
        body: {
            es: "Te envío una propuesta con el alcance del proyecto, las secciones y funciones incluidas, y la cotización.",
            en: "I send you a proposal with the project scope, the sections and features included, and the quote.",
        },
    },
    {
        key: "design",
        title: { es: "Diseño", en: "Design" },
        body: {
            es: "Diseño el sitio a partir de tu marca y tu contenido. Lo revisas y ajustamos antes de construir.",
            en: "I design the site around your brand and content. You review it and we adjust before building.",
        },
    },
    {
        key: "build",
        title: { es: "Desarrollo y contenido", en: "Development and content" },
        body: {
            es: "Construyo el sitio con SEO técnico desde el inicio. Ves los avances en un enlace de prueba.",
            en: "I build the site with technical SEO from the start. You follow progress on a preview link.",
        },
    },
    {
        key: "launch",
        title: { es: "Publicación y entrega", en: "Launch and handover" },
        body: {
            es: "Publico el sitio en tu dominio, dejo configurados los correos y el hosting, y te explico cómo administrarlo.",
            en: "I launch the site on your domain, set up email and hosting, and show you how to manage it.",
        },
    },
    {
        key: "maintain",
        optional: true,
        title: { es: "Mantenimiento continuo", en: "Ongoing maintenance" },
        body: {
            es: "Si quieres, sigo a cargo del sitio después de la entrega: cambios de contenido, hosting y correos, actualizaciones y nuevas funciones a medida que tu negocio crece.",
            en: "If you want, I stay in charge of the site after handover: content changes, hosting and email, updates and new features as your business grows.",
        },
    },
];

export function processTranslations(lang: "es" | "en"): Record<string, string> {
    const out: Record<string, string> = {};
    for (const s of processSteps) {
        out[`proc.${s.key}.title`] = s.title[lang];
        out[`proc.${s.key}.body`] = s.body[lang];
    }
    return out;
}
