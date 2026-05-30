import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rothezee.github.io',
  base: '/bonus-playpark',
  vite: {
    plugins: [tailwindcss()],
  },
});
