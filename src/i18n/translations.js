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
        // Toolkit descriptions
        "hero.tools.next.js": "Next.js es un framework de React creado por Vercel. Permite crear aplicaciones web optimizadas con renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y enrutamiento automático, mejorando drásticamente el rendimiento y el SEO.",
        "hero.tools.astro": "Astro es un framework moderno enfocado en performance. Entrega HTML estático por defecto, carga JavaScript solo donde se necesita, y permite usar componentes de cualquier framework (React, Vue, Svelte). Ideal para sitios rápidos y SEO-optimizados.",
        "hero.tools.sanity": "Sanity es un CMS sin cabeza y headless. Ofrece un editor flexible para contenido, una API GraphQL/REST potente y esquemas customizables. Perfecto para separar contenido de presentación y permitir que editores gestionen datos sin tocar código.",
        "hero.tools.django": "Django es un framework web full-stack para Python. Incluye ORM, admin, autenticación, validación y todo lo necesario para APIs y aplicaciones web robustas. Su 'batteries included' lo hace ideal para productos complejos con lógica de negocio pesada.",
        "hero.tools.postgresql": "PostgreSQL es una base de datos relacional avanzada, open source y de confianza. Soporta JSON, arrays, búsqueda de texto, y extensiones poderosas. Es mi base de datos predeterminada para aplicaciones serias.",
        "hero.tools.claude": "Claude es un asistente de IA de Anthropic. Lo uso en mi flujo de desarrollo para acelerar programación, generar código, revisar lógica y resolver problemas. Mantiene contexto profundo y es especialmente bueno con análisis y razonamiento complejo.",
        "hero.tools.docker": "Docker empaqueta aplicaciones en contenedores aislados. Garantiza que el código que funciona en mi máquina también funciona en producción. Esencial para entornos reproducibles, microservicios y deployes confiables.",
        "hero.tools.mongodb": "MongoDB es una base de datos NoSQL orientada a documentos. Almacena datos en JSON-like BSON, escalas horizontalmente y es flexible para esquemas cambiantes. Útil para prototipos rápidos y datos semiestructurados.",
        "hero.tools.flask": "Flask es un micro framework web para Python. Minimalista y flexible, permite construir APIs REST y aplicaciones web sin opiniones fuertes. Perfecto para servicios pequeños y cuando necesitas control total.",
        "hero.tools.supabase": "Supabase es una alternativa open source a Firebase. Ofrece PostgreSQL hosteado, autenticación, realtime, almacenamiento y APIs generadas automáticamente. Acelera el desarrollo del backend sin vendor lock-in.",
        "hero.tools.typescript": "TypeScript añade tipado estático a JavaScript. Detecta errores en tiempo de desarrollo, mejora la documentación del código y facilita refactorización segura. Uso en frontend y backend para code quality.",
        "hero.tools.resend": "Resend es una plataforma de email moderno para desarrolladores. Envía emails transaccionales con React Templates, webhooks y tracking. Reemplaza servicios complejos con una API simple y bien documentada.",

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
        // Toolkit descriptions
        "hero.tools.next.js": "Next.js is a React framework built by Vercel. It enables building optimized web apps with server-side rendering (SSR), static site generation (SSG), and automatic routing, drastically improving performance and SEO.",
        "hero.tools.astro": "Astro is a modern framework focused on performance. It ships static HTML by default, loads JavaScript only where needed, and lets you use components from any framework (React, Vue, Svelte). Ideal for fast, SEO-optimized sites.",
        "hero.tools.sanity": "Sanity is a headless CMS. It offers a flexible content editor, powerful GraphQL/REST APIs, and customizable schemas. Perfect for decoupling content from presentation and letting editors manage data without touching code.",
        "hero.tools.django": "Django is a full-stack web framework for Python. Includes ORM, admin panel, authentication, validation and everything needed for robust APIs and web apps. Its 'batteries included' philosophy makes it ideal for complex products with heavy business logic.",
        "hero.tools.postgresql": "PostgreSQL is an advanced, open-source relational database. Supports JSON, arrays, full-text search and powerful extensions. It's my default database for serious applications.",
        "hero.tools.claude": "Claude is an AI assistant by Anthropic. I use it in my dev workflow to speed up coding, generate code, review logic and solve problems. It maintains deep context and excels at complex analysis and reasoning.",
        "hero.tools.docker": "Docker packages applications in isolated containers. Ensures code that works on my machine also works in production. Essential for reproducible environments, microservices and reliable deploys.",
        "hero.tools.mongodb": "MongoDB is a NoSQL, document-oriented database. Stores data in JSON-like BSON, scales horizontally and is flexible with changing schemas. Useful for rapid prototyping and semi-structured data.",
        "hero.tools.flask": "Flask is a micro web framework for Python. Minimal and flexible, it lets you build REST APIs and web apps without strong opinions. Perfect for small services and when you need full control.",
        "hero.tools.supabase": "Supabase is an open-source Firebase alternative. Offers hosted PostgreSQL, authentication, realtime, storage and auto-generated APIs. Accelerates backend development without vendor lock-in.",
        "hero.tools.typescript": "TypeScript adds static typing to JavaScript. Catches errors at development time, improves code documentation and enables safe refactoring. I use it in frontend and backend for code quality.",
        "hero.tools.resend": "Resend is a modern email platform for developers. Send transactional emails with React Templates, webhooks and tracking. Replaces complex email services with a simple, well-documented API.",

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
