import { XMLParser } from "fast-xml-parser";

export const MEDIUM_PROFILE = "https://medium.com/@jrdelriodom";
const FEED_URL = "https://medium.com/feed/@jrdelriodom";

export interface MediumPost {
    title: string;
    url: string;
    date: Date;
    tags: string[];
    excerpt: string;
    image: string | null;
    readMinutes: number;
}

const decode = (s: string) =>
    s
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&#x27;/g, "'");

const stripTags = (html: string) => decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

const asArray = <T,>(v: T | T[] | undefined): T[] => (v == null ? [] : Array.isArray(v) ? v : [v]);

function toPost(item: any): MediumPost | null {
    const html: string = String(item["content:encoded"] ?? "");
    const url = String(item.link ?? "").split("?")[0];
    if (!url) return null;

    // Medium trunca títulos largos con "…"; el <h3> inicial del contenido trae el completo.
    let title = decode(String(item.title ?? "")).trim();
    const h3 = html.match(/^<h3>(.*?)<\/h3>/);
    if (title.endsWith("…") && h3) title = stripTags(h3[1]);

    const img = html.match(/<img[^>]+src="([^"]+)"/);
    const image = img ? img[1].replace(/\/max\/\d+\//, "/max/800/") : null;

    const body = html.replace(/^<h3>.*?<\/h3>/, "");
    const firstP = body.match(/<p>(.*?)<\/p>/);
    const excerptRaw = firstP ? stripTags(firstP[1]) : stripTags(body);
    const excerpt = excerptRaw.length > 180 ? excerptRaw.slice(0, 177).replace(/\s+\S*$/, "") + "…" : excerptRaw;

    const words = stripTags(body).split(" ").length;

    return {
        title,
        url,
        date: new Date(item.pubDate),
        tags: asArray<string>(item.category).map(String).slice(0, 3),
        excerpt,
        image,
        readMinutes: Math.max(1, Math.round(words / 220)),
    };
}

export async function getMediumPosts(): Promise<MediumPost[]> {
    try {
        const res = await fetch(FEED_URL, {
            headers: { "User-Agent": "Mozilla/5.0 (portfolio feed reader)" },
            signal: AbortSignal.timeout(6000),
        });
        if (!res.ok) return [];
        const xml = await res.text();
        const data = new XMLParser({ ignoreAttributes: true, cdataPropName: false }).parse(xml);
        return asArray(data?.rss?.channel?.item)
            .map(toPost)
            .filter((p): p is MediumPost => p !== null);
    } catch {
        return [];
    }
}
