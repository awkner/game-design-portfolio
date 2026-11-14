// @ts-check
import { defineConfig } from 'astro/config';

// TODO: set your real URL, either here or via the SITE_URL environment variable
// (e.g. https://yourname.github.io or https://yourname.netlify.app).
const site = process.env.SITE_URL || 'https://example.com';

if (site.includes('example.com')) {
  console.warn(
    '\n[portfolio] WARNING: `site` is still the example.com placeholder. Set SITE_URL or edit astro.config.mjs before deploying.\n',
  );
}

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  // TODO: if deploying to a GitHub Pages project repo, also set base: '/repo-name'
});
