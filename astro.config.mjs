// @ts-nocheck
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: vercel({}),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});