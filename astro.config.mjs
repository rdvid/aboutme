import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { defaultLang } from './src/i18n/ui';

// https://astro.build/config
export default defineConfig({
  site: 'https://rdvid.tech',
  redirects:{
    '/': `/${defaultLang}`
  },
  integrations: [tailwind()]
});