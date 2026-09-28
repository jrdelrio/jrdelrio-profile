import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>("../assets/projects/*.webp", { eager: true });

export function projectImage(slug: string): ImageMetadata {
    const img = images[`../assets/projects/${slug}.webp`];
    if (!img) throw new Error(`Falta la captura src/assets/projects/${slug}.webp`);
    return img.default;
}
