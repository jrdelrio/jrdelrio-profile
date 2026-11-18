import type { APIRoute } from "astro";
import { services } from "../data/services";
import { faqs } from "../data/faqs";
import { featuredProjects } from "../data/projects";

export const GET: APIRoute = ({ site, url }) => {
    const abs = (path: string) => new URL(path, site ?? url).href;

    const body = [
        "# José Raimundo del Río",
        "",
        "> Desarrollador web full-stack en Chile y fundador de Chilisites. Diseña y construye sitios y plataformas web a medida con Next.js, Astro y Sanity, y se encarga de dominio, correos y hosting.",
        "",
        "## Páginas",
        `- [Inicio](${abs("/")}): presentación, servicios, trabajos seleccionados y preguntas frecuentes.`,
        `- [Proyectos](${abs("/proyectos")}): sitios reales en producción y el stack de cada uno.`,
        `- [Servicios](${abs("/servicios")}): qué incluye cada servicio de desarrollo web.`,
        `- [Blog](${abs("/blog")}): artículos sobre desarrollo web, rendimiento y SEO técnico.`,
        "",
        "## Servicios",
        ...services.map((s) => `- [${s.title.es}](${abs(`/servicios#${s.key}`)}): ${s.desc.es}`),
        "",
        "## Proyectos destacados",
        ...featuredProjects.map((p) => `- [${p.name}](${p.url}): ${p.summary.es} Stack: ${p.stack.join(", ")}.`),
        "",
        "## Preguntas frecuentes",
        ...faqs.flatMap((f) => [`### ${f.q.es}`, f.a.es, ""]),
        "## Perfiles",
        "- [Chilisites](https://www.chilisites.com)",
        "- [LinkedIn](https://www.linkedin.com/in/jrdelriod/)",
        "- [GitHub](https://github.com/jrdelrio)",
        "- [Medium](https://medium.com/@jrdelriodom)",
        "",
    ].join("\n");

    return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
