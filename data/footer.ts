import { site } from "@/data/site";
import { tech } from "@/data/tech";
import type { FooterContent } from "@/types";

// Textos del pie de página (borrador)
export const footerContent: FooterContent = {
  phrase: "Hecho a mano en Pasto, sticker por sticker.",
  builtWithTitle: "Este portafolio está hecho con",
  builtWith: [tech.nextjs, tech.typescript, tech.tailwind, tech.vercel],
  navTitle: "Secciones",
  contactTitle: "Contacto",
  madeBy: site.fullName,
  backToTop: "Volver arriba",
};
