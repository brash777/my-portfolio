import { site } from "@/data/site";
import type { FooterContent } from "@/types";

// Textos del pie de página (borrador)
export const footerContent: FooterContent = {
  bio: `Estudiante de ${site.career} en Pasto. Construyo aplicaciones completas, desde la base de datos hasta la pantalla.`,
  navTitle: "Enlaces",
  specialtiesTitle: "Especialidades",
  contactTitle: "Contacto",
  madeBy: site.fullName,
  credits: "Hecho con Next.js, TypeScript y Tailwind CSS.",
  backToTop: "Volver arriba",
};
