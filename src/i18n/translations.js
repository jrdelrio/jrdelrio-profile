import { projectTranslations } from "../data/projects";
import { serviceTranslations } from "../data/services";
import { faqTranslations } from "../data/faqs";

// Diccionario de traducciones ES/EN. Claves referenciadas vía data-i18n / data-i18n-placeholder.
// Idioma por defecto: es (el markup se escribe en español).
export const translations = {
    es: {
        ...projectTranslations("es"),
        ...serviceTranslations("es"),
        ...faqTranslations("es"),
        "faq.heading": "Preguntas frecuentes",
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
        "hero.tools.nextjs": "Next.js es un framework de React para construir aplicaciones web de producción. Combina renderizado en el servidor (SSR), generación estática (SSG) y enrutamiento por archivos, lo que se traduce en sitios más rápidos y mejor posicionados en buscadores.",
        "hero.tools.astro": "Astro es un framework pensado para sitios de contenido. Entrega HTML estático por defecto y solo carga JavaScript en los componentes que lo necesitan, por eso sus sitios cargan muy rápido y rinden bien en SEO. Permite usar componentes de React, Vue o Svelte.",
        "hero.tools.sanity": "Sanity es un CMS headless: separa el contenido del diseño. Los editores trabajan en un panel flexible y el sitio consume ese contenido por API. Lo uso para que mis clientes actualicen textos, imágenes y catálogos sin tocar código.",
        "hero.tools.django": "Django es un framework web de Python con todo incluido: ORM, panel de administración, autenticación y validación. Es ideal para productos con lógica de negocio compleja, APIs robustas y paneles internos.",
        "hero.tools.postgresql": "PostgreSQL es una base de datos relacional open source, madura y confiable. Soporta JSON, búsqueda de texto completo y extensiones potentes. Es mi base de datos por defecto para aplicaciones que manejan datos importantes.",
        "hero.tools.claude": "Claude es el asistente de IA de Anthropic. Lo uso en mi flujo de desarrollo para programar más rápido, revisar lógica y explorar soluciones, sin descuidar la revisión y la calidad del código.",
        "hero.tools.docker": "Docker empaqueta aplicaciones en contenedores con todo lo que necesitan para correr. Así, lo que funciona en desarrollo funciona igual en producción. Lo uso para entornos reproducibles y despliegues confiables.",
        "hero.tools.mongodb": "MongoDB es una base de datos NoSQL orientada a documentos. Guarda la información en un formato similar a JSON, escala horizontalmente y se adapta bien a esquemas que cambian. Es útil para prototipos rápidos y datos semiestructurados.",
        "hero.tools.flask": "Flask es un microframework web de Python: liviano, flexible y sin imponer estructura. Lo uso para APIs REST y servicios pequeños donde quiero control total sobre cada pieza.",
        "hero.tools.supabase": "Supabase es una plataforma open source construida sobre PostgreSQL. Entrega base de datos, autenticación, almacenamiento de archivos, tiempo real y APIs generadas automáticamente, lo que acelera mucho el desarrollo del backend.",
        "hero.tools.typescript": "TypeScript agrega tipos estáticos a JavaScript. Detecta errores mientras programo, documenta el código por sí mismo y permite refactorizar con seguridad. Lo uso tanto en el frontend como en el backend.",
        "hero.tools.resend": "Resend es una plataforma de correo para desarrolladores. Permite enviar correos transaccionales, como confirmaciones y formularios de contacto, con una API simple, plantillas en React y buena entregabilidad.",
        "hero.tools.github": "GitHub es la plataforma donde guardo y versiono el código con Git. Ahí organizo los repositorios de cada proyecto, reviso cambios antes de publicarlos y conecto el despliegue automático, así cada versión del sitio queda registrada y se puede recuperar.",

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
        "about.stack.ai": "Desarrollo con IA",
        "about.offline_label": "Fuera del código",
        "about.offline_intro": "Además de programador, soy músico aficionado.",
        "about.off.music": "Música",
        "about.off.music.v": "Rock, sobre todo. Canto y toco guitarra y piano.",
        "about.off.bike": "Bicicleta",
        "about.off.bike.v": "Me muevo a todos lados en bici.",
        "about.off.tennis": "Tenis",
        "about.off.tennis.v": "Mi deporte para desconectarme.",
        "about.off.chess": "Ajedrez",
        "about.off.chess.v": "Apertura favorita: la española.",
        "about.off.chess.n": "1.e4 e5 2.Cf3 Cc6 3.Ab5",

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
        "footer.built": "Full-stack Software Engineer · Chilisites",

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
        ...faqTranslations("en"),
        "faq.heading": "Frequently asked questions",
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
        "hero.tools.nextjs": "Next.js is a React framework for building production web applications. It combines server-side rendering (SSR), static generation (SSG) and file-based routing, which means faster sites that rank better in search engines.",
        "hero.tools.astro": "Astro is a framework built for content sites. It ships static HTML by default and only loads JavaScript for the components that need it, so its sites load very fast and perform well in SEO. It supports React, Vue and Svelte components.",
        "hero.tools.sanity": "Sanity is a headless CMS: it separates content from design. Editors work in a flexible dashboard and the site consumes that content through an API. I use it so my clients can update text, images and catalogs without touching code.",
        "hero.tools.django": "Django is a batteries-included Python web framework: ORM, admin panel, authentication and validation. It's ideal for products with complex business logic, robust APIs and internal dashboards.",
        "hero.tools.postgresql": "PostgreSQL is a mature, reliable open-source relational database. It supports JSON, full-text search and powerful extensions. It's my default database for applications that handle important data.",
        "hero.tools.claude": "Claude is Anthropic's AI assistant. I use it in my development workflow to code faster, review logic and explore solutions, while keeping code review and quality front and center.",
        "hero.tools.docker": "Docker packages applications into containers with everything they need to run, so what works in development works the same in production. I use it for reproducible environments and reliable deployments.",
        "hero.tools.mongodb": "MongoDB is a document-oriented NoSQL database. It stores data in a JSON-like format, scales horizontally and adapts well to changing schemas. It's useful for fast prototypes and semi-structured data.",
        "hero.tools.flask": "Flask is a lightweight, flexible Python microframework that doesn't impose structure. I use it for REST APIs and small services where I want full control over every piece.",
        "hero.tools.supabase": "Supabase is an open-source platform built on PostgreSQL. It provides a database, authentication, file storage, realtime and auto-generated APIs, which speeds up backend development considerably.",
        "hero.tools.typescript": "TypeScript adds static types to JavaScript. It catches errors while I code, documents the code by itself and makes refactoring safe. I use it on both the frontend and the backend.",
        "hero.tools.resend": "Resend is an email platform for developers. It sends transactional emails, like confirmations and contact forms, through a simple API with React templates and good deliverability.",
        "hero.tools.github": "GitHub is where I store and version code with Git. I keep each project's repositories there, review changes before they go live and connect automatic deployments, so every version of the site is recorded and can be restored.",

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
        "about.stack.ai": "AI-assisted development",
        "about.offline_label": "Off the keyboard",
        "about.offline_intro": "Besides coding, I'm an amateur musician.",
        "about.off.music": "Music",
        "about.off.music.v": "Rock, mostly. I sing and play guitar and piano.",
        "about.off.bike": "Cycling",
        "about.off.bike.v": "I get everywhere by bike.",
        "about.off.tennis": "Tennis",
        "about.off.tennis.v": "My way to switch off.",
        "about.off.chess": "Chess",
        "about.off.chess.v": "Favorite opening: the Ruy López.",
        "about.off.chess.n": "1.e4 e5 2.Nf3 Nc6 3.Bb5",

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
