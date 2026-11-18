// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Dominio público. SITE_URL permite sobreescribirlo (por ejemplo, para pruebas locales).
const site = process.env.SITE_URL ?? 'https://jrdelrio.dev';

// Un build de producción con URL local o de ejemplo publicaría canonical, sitemap y robots falsos.
if (process.env.VERCEL_ENV === 'production' && !site.startsWith('https://jrdelrio.dev')) {
  throw new Error(`SITE_URL inválido para producción: ${site}`);
}

export default defineConfig({
  site,
  trailingSlash: 'never',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap({ lastmod: new Date() })]
});