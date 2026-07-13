import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { defaultLang } from './src/i18n/ui';

export default defineConfig({
  site: 'https://rdvid.github.io',
  base: '/aboutme',
  integrations: [tailwind()],
  redirects: {
    '/': `/${defaultLang}`,
  },
});
