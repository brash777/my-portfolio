import { site } from "@/data/site";

/** true si el CV es un archivo del propio sitio (public/cv.pdf) y no un enlace a otra página */
export const cvIsFile = site.cvUrl?.startsWith("/") ?? false;

/** atributos del enlace al CV: si es archivo se descarga; si es externo abre otra pestaña */
export function cvLinkProps(): { download?: string; target?: string; rel?: string } {
  return cvIsFile ? { download: site.cvFileName } : { target: "_blank", rel: "noopener noreferrer" };
}
