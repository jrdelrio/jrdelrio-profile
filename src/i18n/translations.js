import { projectTranslations } from "../data/projects";
import { serviceTranslations } from "../data/services";

// Diccionario de traducciones ES/EN. Claves referenciadas vía data-i18n / data-i18n-placeholder.
// Idioma por defecto: es (el markup se escribe en español).
export const translations = {
    es: {
        ...projectTranslations("es"),
        ...serviceTranslations("es"),
        // Navbar
        "nav.projects": "Proyectos",
        "nav.services": "Servicios",
        "nav.about": "Sobre mí",
        "nav.contact": "Contacto",
        "nav.blog": "Blog",
        "blog.heading": "Notas de desarrollo",
        "blog.intro": "Escribo sobre lo que aprendo construyendo sitios y productos: arquitectura, rendimiento, SEO y flujo de trabajo.",
        "blog.empty": "No pude cargar los artículos en este momento.",
        "blog.all": "Ver todos en Medium",

        // Hero
        "hero.badge": "Disponible para nuevos proyectos",
        "hero.role": "Desarrollador web full-stack y fundador de Chilisites",
        "hero.desc": "Diseño y construyo sitios y plataformas con Next.js, Astro y Sanity, y me encargo de dejarlos funcionando: dominio, correos y hosting.",
        "hero.cta_projects": "Ver proyectos",
        "hero.cta_contact": "Hablemos",

        // About
        "about.heading": "Construyo sitios que se ven bien, cargan rápido y ayudan a vender.",
        "about.body": "Soy desarrollador web full-stack. Me hago cargo del proyecto completo: diseño, desarrollo, contenido autogestionable y todo lo que hace falta para que el sitio quede funcionando.",
        "about.cv": "Descargar CV",
        "about.t.spain.place": "España · 2 años",
        "about.t.spain.body": "Trabajé como desarrollador en Compensa Capital Humano, una plataforma de gestión de recursos humanos. Ahí me formé construyendo producto para usuarios reales.",
        "about.t.back.place": "Santiago · 2025",
        "about.t.back.body": "Volví a Chile con una idea clara: ofrecer a los negocios de aquí el mismo estándar técnico con el que trabajaba afuera.",
        "about.t.chili.place": "Chilisites · hoy",
        "about.t.chili.body": "Fundé Chilisites, donde hacemos diseño y desarrollo web completo y marketing digital. Ayudamos a negocios a captar clientes y crecer, y a quienes parten a construir su empresa desde lo digital.",
        "about.stack_label": "Stack con el que trabajo",
        "about.stack.front": "Frontend",
        "about.stack.cms": "Contenido",
        "about.stack.back": "Backend y datos",
        "about.stack.ops": "Correo y operación",

        // ServicesPreview
        "services.heading": "Todo lo que necesita tu web",
        "services.viewall": "Ver todos",

        // FeaturedProjects
        "projects.heading": "Trabajos seleccionados",
        "projects.viewall": "Ver todos",

        // Contact
        "contact.heading":
            'Construyamos algo <span class="text-stone">significativo.</span>',
        "contact.lead": "Cuéntame qué necesitas y te preparo una cotización. También puedes escribirme directo.",
        "contact.email_label": "Correo",
        "contact.follow_label": "Sígueme",
        "contact.name_label": "Nombre completo",
        "contact.email_field": "Correo electrónico",
        "contact.msg_label": "Tu mensaje",
        "contact.send": "Enviar mensaje",
        "contact.sending": "Enviando…",
        "contact.sent": "¡Mensaje enviado! Te respondo pronto.",
        "contact.failed": "No se pudo enviar. Escríbeme a jrdelriodom@gmail.com o por WhatsApp.",
        "contact.ph_name": "Juan Pérez",
        "contact.ph_email": "juan@ejemplo.com",
        "contact.ph_msg": "Cuéntame sobre tu proyecto...",

        // Footer
        "footer.built": "Desarrollo web full-stack · Chilisites",

        // ChatWidget

        // Página Proyectos
        "proyectos.title": "Proyectos",
        "proyectos.intro": "Sitios reales, en producción. Para cada uno, lo que construí y con qué stack.",
        "proyectos.cta_heading": "¿Tienes un proyecto en mente?",
        "proyectos.cta_body": "Cuéntame qué necesitas y te preparo una cotización.",
        "proyectos.cta_btn": "Cotizar",

        // Página Servicios
        "servicios.title": "Servicios",
        "servicios.intro": "Me encargo del proyecto completo: diseño, desarrollo, contenido, dominio, correos y hosting. Y si quieres crecer, con Chilisites sumamos SEO y campañas.",
        "sv.cta.heading": "¿Tienes un proyecto? Hablemos",
        "sv.cta.body": "Cuéntame qué necesitas y te preparo una cotización.",
        "sv.also": "También trabajo con Shopify y WordPress cuando el proyecto lo pide, por ejemplo si ya vendes por esas plataformas.",
        "sv.cta.btn": "Enviar mensaje",
    },
    en: {
        ...projectTranslations("en"),
        ...serviceTranslations("en"),
        // Navbar
        "nav.projects": "Projects",
        "nav.services": "Services",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.blog": "Blog",
        "blog.heading": "Development notes",
        "blog.intro": "I write about what I learn building websites and products: architecture, performance, SEO and workflow. Articles are in Spanish.",
        "blog.empty": "I couldn't load the articles right now.",
        "blog.all": "See all on Medium",

        // Hero
        "hero.badge": "Available for new projects",
        "hero.role": "Full-stack web developer and founder of Chilisites",
        "hero.desc": "I design and build websites and platforms with Next.js, Astro and Sanity, and I take care of getting them live: domain, email and hosting.",
        "hero.cta_projects": "View projects",
        "hero.cta_contact": "Let's talk",

        // About
        "about.heading": "I build websites that look good, load fast and help sell.",
        "about.body": "I'm a full-stack web developer. I take on the whole project: design, development, self-managed content and everything it takes to get the site up and running.",
        "about.cv": "Download CV",
        "about.t.spain.place": "Spain · 2 years",
        "about.t.spain.body": "I worked as a developer at Compensa Capital Humano, an HR management platform. That's where I learned by building product for real users.",
        "about.t.back.place": "Santiago · 2025",
        "about.t.back.body": "I came back to Chile with a clear goal: bring local businesses the same technical standard I worked with abroad.",
        "about.t.chili.place": "Chilisites · today",
        "about.t.chili.body": "I founded Chilisites, where we do end-to-end web design and development plus digital marketing. We help businesses win clients and grow, and help founders build their company from the digital side.",
        "about.stack_label": "My stack",
        "about.stack.front": "Frontend",
        "about.stack.cms": "Content",
        "about.stack.back": "Backend & data",
        "about.stack.ops": "Email & operations",

        // ServicesPreview
        "services.heading": "Everything your website needs",
        "services.viewall": "View all",

        // FeaturedProjects
        "projects.heading": "Selected Works",
        "projects.viewall": "View all",

        // Contact
        "contact.heading":
            'Let\'s build something <span class="text-stone">significant.</span>',
        "contact.lead": "Tell me what you need and I'll put together a quote. You can also write to me directly.",
        "contact.email_label": "Email",
        "contact.follow_label": "Follow",
        "contact.name_label": "Full Name",
        "contact.email_field": "Email Address",
        "contact.msg_label": "Your Message",
        "contact.send": "Send Message",
        "contact.sending": "Sending…",
        "contact.sent": "Message sent! I'll get back to you soon.",
        "contact.failed": "Couldn't send it. Email me at jrdelriodom@gmail.com or on WhatsApp.",
        "contact.ph_name": "John Doe",
        "contact.ph_email": "john@example.com",
        "contact.ph_msg": "Tell me about your project...",

        // Footer
        "footer.built": "Full-stack web development · Chilisites",

        // ChatWidget

        // Projects page
        "proyectos.title": "Projects",
        "proyectos.intro": "Real sites, live in production. For each one, what I built and with which stack.",
        "proyectos.cta_heading": "Have a project in mind?",
        "proyectos.cta_body": "Tell me what you need and I'll put together a quote.",
        "proyectos.cta_btn": "Get a quote",

        // Services page
        "servicios.title": "Services",
        "servicios.intro": "I handle the whole project: design, development, content, domain, email and hosting. And if you want to grow, Chilisites adds SEO and ad campaigns.",
        "sv.cta.heading": "Got a project? Let's talk",
        "sv.cta.body": "Tell me what you need and I’ll put together a quote.",
        "sv.also": "I also work with Shopify and WordPress when the project calls for it, for example if you already sell there.",
        "sv.cta.btn": "Send Message",
    },
};
