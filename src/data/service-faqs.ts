import type { Faq } from "./faqs";

// Preguntas de /servicios. Texto plano: se reutiliza tal cual en el JSON-LD (FAQPage).
// Sin plazos, precios ni métricas: dependen de cada proyecto.
export const serviceFaqs: Faq[] = [
    {
        key: "deliver",
        q: {
            es: "¿Qué necesito tener listo para empezar mi sitio web?",
            en: "What do I need to have ready to start my website?",
        },
        a: {
            es: "Basta con tener claro qué hace tu negocio y a quién le vendes. Si tienes logo, textos o fotos, los usamos; si no, te ayudo a definir qué contenido necesita el sitio y en qué orden prepararlo. El dominio y los correos también los puedo gestionar yo.",
            en: "It's enough to be clear about what your business does and who you sell to. If you have a logo, copy or photos, we use them; if not, I help you define what content the site needs and in what order to prepare it. I can also handle the domain and email.",
        },
    },
    {
        key: "selfmanaged",
        q: {
            es: "¿Puedo editar el contenido de mi sitio sin saber programar?",
            en: "Can I edit my site's content without knowing how to code?",
        },
        a: {
            es: "Sí. Cuando el proyecto lo necesita, conecto el sitio a Sanity, un panel donde cambias textos, imágenes, productos o entradas de blog sin tocar código. Te dejo todo configurado y te explico cómo usarlo.",
            en: "Yes. When the project needs it, I connect the site to Sanity, a panel where you change copy, images, products or blog posts without touching code. I leave everything set up and show you how to use it.",
        },
    },
    {
        key: "remote",
        q: {
            es: "¿Trabajas con clientes fuera de Chile?",
            en: "Do you work with clients outside Chile?",
        },
        a: {
            es: "Sí. Trabajo desde Santiago, pero todo el proceso funciona de forma remota: reuniones por videollamada, avances en un enlace de prueba y comunicación por correo o WhatsApp. Atiendo proyectos en español y en inglés.",
            en: "Yes. I work from Santiago, but the whole process runs remotely: video calls, progress on a preview link, and communication by email or WhatsApp. I take on projects in Spanish and English.",
        },
    },
    {
        key: "after",
        q: {
            es: "¿Qué pasa después de publicar el sitio?",
            en: "What happens after the site goes live?",
        },
        a: {
            es: "El sitio queda publicado en tu dominio, con hosting y correos funcionando. Si después necesitas cambios, nuevas secciones o funciones, seguimos trabajando juntos. Y si quieres atraer más visitas, con Chilisites sumamos SEO y campañas.",
            en: "The site is live on your domain, with hosting and email working. If you later need changes, new sections or features, we keep working together. And if you want more traffic, Chilisites adds SEO and ad campaigns.",
        },
    },
];

export function serviceFaqTranslations(lang: "es" | "en"): Record<string, string> {
    const out: Record<string, string> = {};
    for (const f of serviceFaqs) {
        out[`sfaq.${f.key}.q`] = f.q[lang];
        out[`sfaq.${f.key}.a`] = f.a[lang];
    }
    return out;
}
