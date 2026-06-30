// URL base del sitio para metadatos, robots y sitemap.
// Prioridad: variable propia → URL automática de Vercel → localhost en dev.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");
