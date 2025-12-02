import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/server';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: vercel(),

  integrations: [react()],

  experimental: {
    actions: true,
  },
  
  vite: {
    plugins: [tailwindcss()],
  },
});