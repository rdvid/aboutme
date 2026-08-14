import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://me.rdvid.online',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
