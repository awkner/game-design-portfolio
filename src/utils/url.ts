// Prefixes internal paths with the configured `base` (needed for GitHub Pages project sites).
// Usage: url('/about') -> '/about' or '/repo-name/about'
export const url = (path: string): string => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
