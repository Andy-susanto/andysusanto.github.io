// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https:/andy-susanto.github.io',
  // Uncomment and set if deploying to a repo subdirectory (not username.github.io)
  // base: '/portofolio_project',
  vite: {
    plugins: [tailwindcss()]
  }
});