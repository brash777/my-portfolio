import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/siteUrl";

// Mapa del sitio para buscadores: la página principal y cada proyecto
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, priority: 0.7 })),
  ];
}
