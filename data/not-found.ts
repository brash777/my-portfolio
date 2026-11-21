import { site } from "@/data/site";
import type { NotFoundContent } from "@/types";

// Textos de la página 404: se ve cuando alguien abre una dirección que no existe
export const notFoundContent: NotFoundContent = {
  tabTitle: `Página no encontrada | ${site.shortName}`,
  code: "404",
  title: "Esta página no existe",
  lead: "Revisa que la dirección esté bien escrita o vuelve al inicio para ver mis proyectos.",
  homeButton: "Volver al inicio",
  projectsButton: "Ver mis proyectos",
};
