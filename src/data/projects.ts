
type Localized = { es: string; en: string };

export interface Project {
    slug: string;
    name: string;
    url: string;
    summary: Localized;
    /** 2–3 cosas concretas que construí o resolví. */
    features: Localized[];
    stack: string[];
    /** Aparece en el home. */
    featured: boolean;
}

// Para agregar un proyecto: guarda su captura como src/assets/projects/<slug>.webp y añade un objeto aquí.
export const projects: Project[] = [
    {
        slug: "decima",
        name: "Décima Propiedades",
        url: "https://www.decimapropiedades.cl",
        summary: {
            es: "Corredora de propiedades en Puerto Varas y la Región de Los Lagos.",
            en: "Real estate agency in Puerto Varas and southern Chile's lake district.",
        },
        features: [
            { es: "Buscador con filtros", en: "Filtered property search" },
            { es: "Propiedades autogestionables", en: "Self-managed listings" },
            { es: "Valor UF al día", en: "Live UF exchange rate" },
        ],
        stack: ["Next.js", "Sanity"],
        featured: true,
    },
    {
        slug: "benesseri",
        name: "Centro Benesseri",
        url: "https://www.centrobenesseri.cl",
        summary: {
            es: "Centro de psicología con terapia online y formación profesional en apego.",
            en: "Psychology center offering online therapy and professional training.",
        },
        features: [
            { es: "Diseño propio", en: "Original design" },
            { es: "Agenda de horas online", en: "Online booking" },
            { es: "Panel de contenido, pacientes y formaciones", en: "Admin for content, patients and courses" },
        ],
        stack: ["Next.js"],
        featured: true,
    },
    {
        slug: "granasur",
        name: "Granasur",
        url: "https://www.granasur.cl",
        summary: {
            es: "Productor de rosa mosqueta orgánica para la industria cosmética y alimentaria.",
            en: "Organic rosehip oil producer for the cosmetics and food industries.",
        },
        features: [
            { es: "Diseño propio", en: "Original design" },
            { es: "Catálogo de productos autogestionable", en: "Self-managed product catalog" },
        ],
        stack: ["Next.js", "Sanity"],
        featured: true,
    },
    {
        slug: "abaqus",
        name: "Abaqus",
        url: "https://abaqus.io/es",
        summary: {
            es: "Software financiero y asesoría patrimonial para instituciones en Chile y LatAm.",
            en: "Financial software and wealth advisory for institutions in Chile and LatAm.",
        },
        features: [
            { es: "Blog", en: "Blog" },
            { es: "Equipo segmentado por área", en: "Team segmented by area" },
            { es: "Sitio bilingüe", en: "Bilingual site" },
        ],
        stack: ["Astro", "Sanity"],
        featured: true,
    },
    {
        slug: "chilisites",
        name: "Chilisites",
        url: "https://www.chilisites.com",
        summary: {
            es: "Mi agencia: desarrollo web y marketing digital para hacer crecer negocios.",
            en: "My agency: web development and digital marketing to grow businesses.",
        },
        features: [
            { es: "Animaciones con Motion", en: "Motion animations" },
            { es: "API propia en Flask", en: "Custom Flask API" },
        ],
        stack: ["React", "SCSS", "Flask", "AWS"],
        featured: true,
    },
    {
        slug: "andiamoo",
        name: "Andiamoo",
        url: "https://andiamoo.cl",
        summary: {
            es: "Plataforma de itinerarios de viaje curados por expertos.",
            en: "Travel platform with expert-curated itineraries.",
        },
        features: [
            { es: "Diseño propio", en: "Original design" },
            { es: "Creador de itinerarios", en: "Itinerary builder" },
            { es: "Cuentas de usuario", en: "User accounts" },
        ],
        stack: ["Next.js", "Sanity"],
        featured: false,
    },
    {
        slug: "alps",
        name: "ALPS Payments",
        url: "https://alpspayments.com",
        summary: {
            es: "Una sola API para todos los medios de pago de Latinoamérica.",
            en: "A single API for every Latin American payment method.",
        },
        features: [
            { es: "Sitio multilingüe", en: "Multilingual site" },
            { es: "90% estático", en: "90% static" },
            { es: "Contenido en Sanity", en: "Content in Sanity" },
        ],
        stack: ["Astro", "Tailwind", "Sanity"],
        featured: false,
    },
    {
        slug: "332",
        name: "332 Arquitectos",
        url: "https://332.cl",
        summary: {
            es: "Estudio de arquitectura eficiente y sustentable.",
            en: "Efficient, sustainable architecture studio.",
        },
        features: [
            { es: "Diseño propio", en: "Original design" },
            { es: "SEO técnico", en: "Technical SEO" },
        ],
        stack: ["Astro"],
        featured: false,
    },
    {
        slug: "labirraesquina",
        name: "La Birra Esquina",
        url: "https://www.labirraesquina.cl",
        summary: {
            es: "Cervecería artesanal en el centro de Pucón.",
            en: "Craft beer bar in downtown Pucón.",
        },
        features: [
            { es: "Maquetación", en: "Front-end build" },
            { es: "SEO técnico", en: "Technical SEO" },
        ],
        stack: ["Astro"],
        featured: false,
    },
];

export const featuredProjects = projects.filter((p) => p.featured);

/** Claves i18n generadas para el diccionario del cliente. */
export function projectTranslations(lang: "es" | "en"): Record<string, string> {
    const out: Record<string, string> = {};
    for (const p of projects) {
        out[`proj.${p.slug}`] = p.summary[lang];
        p.features.forEach((f, i) => (out[`proj.${p.slug}.f${i}`] = f[lang]));
    }
    return out;
}
