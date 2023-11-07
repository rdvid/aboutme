import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { defaultLang } from './src/i18n/ui';

// https://astro.build/config
export default defineConfig({
  redirects:{
    '/': `/${defaultLang}`
  },
  integrations: [tailwind()]
});