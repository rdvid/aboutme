import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/**
 * Project Pages URL: https://rdvid.github.io/aboutme/
 * English has no /en prefix. Legacy /en/* is handled by src/pages/en/*.
 * Host-root URLs (rdvid.github.io/, /en/) need root-redirects/ as a user site.
 */
export default defineConfig({
  site: 'https://rdvid.github.io',
  base: '/aboutme',
  integrations: [tailwind()],
});
