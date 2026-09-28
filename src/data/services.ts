type Localized = { es: string; en: string };

export interface Service {
    key: string;
    icon: string;
    title: Localized;
    desc: Localized;
    /** Qué incluye, para la página /servicios. */
    includes: Localized[];
}

export const services: Service[] = [
    {
        key: "web",
        icon: "web",
        title: { es: "Diseño y desarrollo web", en: "Web design & development" },
        desc: {
            es: "Sitios y plataformas a medida con Next.js o Astro, diseñados desde cero y optimizados para SEO y velocidad.",
            en: "Custom websites and platforms built with Next.js or Astro, designed from scratch and optimized for SEO and speed.",
        },
        includes: [
            { es: "Diseño propio, sin plantillas", en: "Original design, no templates" },
            { es: "SEO técnico desde el primer día", en: "Technical SEO from day one" },
            { es: "Sitios bilingües cuando hace falta", en: "Bilingual sites when needed" },
        ],
    },
    {
        key: "cms",
        icon: "edit_note",
        title: { es: "Contenido autogestionable", en: "Self-managed content" },
        desc: {
            es: "Un panel con Sanity para que edites textos, fotos, productos o propiedades sin depender de nadie.",
            en: "A Sanity dashboard so you can edit copy, photos, products or listings on your own.",
        },
        includes: [
            { es: "Panel a la medida de tu negocio", en: "Dashboard tailored to your business" },
            { es: "Blog, catálogos y fichas", en: "Blogs, catalogs and listings" },
        ],
    },
    {
        key: "launch",
        icon: "dns",
        title: { es: "Dominio, correos y hosting", en: "Domain, email & hosting" },
        desc: {
            es: "Compro el dominio, configuro los correos corporativos y dejo el sitio publicado, seguro y mantenido.",
            en: "I buy the domain, set up business email and keep the site live, secure and maintained.",
        },
        includes: [
            { es: "Correos con tu dominio", en: "Email on your own domain" },
            { es: "Hosting con SSL incluido", en: "Hosting with SSL included" },
            { es: "Mantención y soporte", en: "Maintenance and support" },
        ],
    },
    {
        key: "backend",
        icon: "database",
        title: { es: "Backend a medida", en: "Custom backend" },
        desc: {
            es: "Login de usuarios, reservas, paneles de administración y APIs con Django, Flask y PostgreSQL.",
            en: "User logins, bookings, admin panels and APIs with Django, Flask and PostgreSQL.",
        },
        includes: [
            { es: "Cuentas y roles de usuario", en: "User accounts and roles" },
            { es: "Integraciones y envío de correos", en: "Integrations and transactional email" },
        ],
    },
    {
        key: "marketing",
        icon: "campaign",
        title: { es: "Marketing digital", en: "Digital marketing" },
        desc: {
            es: "Con Chilisites llevamos tráfico al sitio: SEO y campañas en Google Ads, Meta, LinkedIn y TikTok.",
            en: "Through Chilisites we bring traffic to your site: SEO plus Google Ads, Meta, LinkedIn and TikTok campaigns.",
        },
        includes: [
            { es: "Campañas enfocadas en conseguir clientes", en: "Campaigns focused on winning clients" },
            { es: "SEO para crecer en Google", en: "SEO to grow on Google" },
        ],
    },
];

export function serviceTranslations(lang: "es" | "en"): Record<string, string> {
    const out: Record<string, string> = {};
    for (const s of services) {
        out[`svc.${s.key}.title`] = s.title[lang];
        out[`svc.${s.key}.desc`] = s.desc[lang];
        s.includes.forEach((x, i) => (out[`svc.${s.key}.i${i}`] = x[lang]));
    }
    return out;
}
