import { site } from "@/data/site";
import { siteUrl } from "@/lib/siteUrl";

/** true si el CV es un archivo del propio sitio (public/cv.pdf) y no un enlace a otra página */
export const cvIsFile = site.cvUrl?.startsWith("/") ?? false;

/** dirección completa del CV para mostrarla como texto (por ejemplo, mi-sitio.vercel.app/cv.pdf) */
export const cvFullUrl = site.cvUrl ? new URL(site.cvUrl, siteUrl).toString() : null;

/** atributos del enlace al CV: si es archivo se descarga; si es externo abre otra pestaña */
export function cvLinkProps(): { download?: string; target?: string; rel?: string } {
  return cvIsFile ? { download: site.cvFileName } : { target: "_blank", rel: "noopener noreferrer" };
}
