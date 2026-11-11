/**
 * URL pública del sitio. En Vercel se toma sola de la variable VERCEL_PROJECT_PRODUCTION_URL;
 * en el computador es localhost.
 */
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
