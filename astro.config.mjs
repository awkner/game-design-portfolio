// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://awkner.github.io/game-design-portfolio/
// SITE_URL can override the default (e.g. for a custom domain or another host).
const site = process.env.SITE_URL || 'https://awkner.github.io';

if (site.includes('example.com')) {
  console.warn(
    '\n[portfolio] WARNING: `site` is still the example.com placeholder. Set SITE_URL or edit astro.config.mjs before deploying.\n',
  );
}

// https://astro.build/config
export default defineConfig({
  site,
  base: '/game-design-portfolio',
  output: 'static',
});
