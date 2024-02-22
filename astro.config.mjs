import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { defaultLang } from './src/i18n/ui';
import icon from "astro-icon";

export default defineConfig({
  site: 'https://rdvid.tech',
  redirects:{
    '/': `/${defaultLang}`
  },
  integrations: [
    tailwind(), 
    icon({
      include: {
        fa: ["*"], 
        faBrands: ["*"] 
      },
    })
  ]
});