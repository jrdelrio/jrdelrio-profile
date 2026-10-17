type Localized = { es: string; en: string };

export interface Faq {
    key: string;
    q: Localized;
    a: Localized;
}

// Preguntas del home. Las respuestas van en texto plano: se reutilizan tal cual en el JSON-LD (FAQPage).
export const faqs: Faq[] = [
    {
        key: "static",
        q: {
            es: "¿Por qué una web estática es mejor para el SEO?",
            en: "Why is a static website better for SEO?",
        },
        a: {
            es: "Porque cada página se genera de antemano y llega al navegador como HTML listo, sin esperar a que un servidor la arme. Carga más rápido, Google y los buscadores con IA leen todo el contenido sin ejecutar código, y la velocidad es una señal de posicionamiento. Con un buen SEO técnico desde el primer día, tu sitio parte con ventaja.",
            en: "Because every page is generated ahead of time and reaches the browser as ready-made HTML, without waiting for a server to build it. It loads faster, Google and AI search engines can read all the content without running code, and speed is a ranking signal. With solid technical SEO from day one, your site starts ahead.",
        },
    },
    {
        key: "native",
        q: {
            es: "¿Qué ventajas tiene una web hecha a medida frente a una plantilla de WordPress?",
            en: "What are the advantages of a custom-built website over a WordPress template?",
        },
        a: {
            es: "Una web a medida se diseña para tu negocio, no se adapta a una plantilla que usan otros. Solo lleva el código que necesita, así que es más liviana y rápida, evita depender de muchos plugins que hay que actualizar y puede crecer con nuevas funciones sin pelear contra el tema. Además, el diseño es propio y te diferencia de la competencia.",
            en: "A custom website is designed for your business instead of being adapted to a template that others use. It only ships the code it needs, so it is lighter and faster, avoids relying on many plugins that need updating, and can grow with new features without fighting a theme. The design is also yours, which sets you apart from competitors.",
        },
    },
    {
        key: "ecommerce",
        q: {
            es: "¿Es difícil montar un e-commerce y gestionarlo yo mismo?",
            en: "Is it hard to set up an online store and manage it myself?",
        },
        a: {
            es: "No. Un e-commerce se monta de forma ágil y queda autogestionable: tú administras productos, precios y contenido desde un panel simple, sin tocar código ni depender de mí para cada cambio. Yo me encargo de construirlo, conectarlo y dejarlo funcionando.",
            en: "No. An online store can be set up quickly and stays self-managed: you handle products, prices and content from a simple panel, without touching code or relying on me for every change. I take care of building it, connecting it and getting it live.",
        },
    },
    {
        key: "marketing",
        q: {
            es: "¿Para qué sirve el marketing digital si ya tengo una página web?",
            en: "What is digital marketing for if I already have a website?",
        },
        a: {
            es: "Una web sin visitas no genera clientes. El marketing digital, con SEO y campañas en Google, Meta, LinkedIn o TikTok, lleva a las personas correctas hasta tu sitio y puede marcar la diferencia entre un negocio que se estanca y uno que crece. Con Chilisites lo trabajamos junto con el desarrollo de la web.",
            en: "A website without visitors doesn't bring in customers. Digital marketing, with SEO and campaigns on Google, Meta, LinkedIn or TikTok, brings the right people to your site and can make the difference between a business that stalls and one that grows. With Chilisites we handle it together with the web development.",
        },
    },
];

export function faqTranslations(lang: "es" | "en"): Record<string, string> {
    const out: Record<string, string> = {};
    for (const f of faqs) {
        out[`faq.${f.key}.q`] = f.q[lang];
        out[`faq.${f.key}.a`] = f.a[lang];
    }
    return out;
}
