import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
    "../assets/projects-logos/*.{svg,png,webp}",
    { eager: true },
);

// Indexa por nombre sin guiones, así "chris-madrid.png" calza con el slug "chrismadrid".
const normalize = (s: string) => s.toLowerCase().replace(/-/g, "");
const logos = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
    const name = path.split("/").pop()!.replace(/\.(svg|png|webp)$/, "");
    logos.set(normalize(name), mod.default);
}

// Slugs cuyo archivo de logo tiene otro nombre.
const aliases: Record<string, string> = {
    fotografia: "rrc-photography",
    lipangue: "parque-lipangue",
};

export function projectLogo(slug: string): ImageMetadata | null {
    return logos.get(normalize(aliases[slug] ?? slug)) ?? null;
}
