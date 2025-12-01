// @ts-check
import { defineConfig } from 'astro/config';

import vercel from "@astro/vercel/server";
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()]
});