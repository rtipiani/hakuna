import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://www.angelaventurachanchamayo.com',
  output: 'server',
  adapter: vercel(),

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});