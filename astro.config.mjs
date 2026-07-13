import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rdvid.github.io',
  base: '/aboutme',
  integrations: [tailwind()],
});
