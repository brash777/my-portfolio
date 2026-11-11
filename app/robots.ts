import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

// Permite que los buscadores lean todo el sitio y les dice dónde está el mapa
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
