import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
    const sitemap = site ? new URL("/sitemap-index.xml", site).href : "/sitemap-index.xml";
    const aiBots = [
        "GPTBot",
        "ChatGPT-User",
        "OAI-SearchBot",
        "ClaudeBot",
        "Claude-User",
        "PerplexityBot",
        "Google-Extended",
    ];

    const body = [
        "User-agent: *",
        "Allow: /",
        "Disallow: /api/",
        "",
        ...aiBots.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", "Disallow: /api/", ""]),
        `Sitemap: ${sitemap}`,
        "",
    ].join("\n");

    return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
