import { site } from "@/data/site";
import type { HeroContent } from "@/types";

// Textos del Hero y del CV resumido (borrador: edítalos con tus palabras)
export const hero: HeroContent = {
  kicker: `Estudiante de ${site.career} en Pasto`,
  greeting: "Hola, soy",
  description:
    "Construyo aplicaciones completas, desde la base de datos hasta la pantalla. Mi proyecto más fuerte es Flux IA, una app de finanzas personales con asistente de IA. Estoy aprendiendo todos los días y me gusta que lo que hago funcione y se vea bien.",
  githubButton: "Ver GitHub",
  stackLabel: "Tecnologías que uso",
  stack: ["Java", "Spring Boot", "PostgreSQL", "Supabase", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
  code: {
    fileName: "johan.ts",
    variable: "johan",
    fields: [
      { key: "rol", value: site.role },
      { key: "nivel", value: "junior" },
      { key: "estudia", value: site.career },
      { key: "stack", value: ["Java", "Spring Boot", "Next.js", "PostgreSQL"] },
      { key: "aprendiendo", value: true },
    ],
  },
  flip: {
    hint: "Pasa el mouse por la foto o toca la esquina doblada para ver mi CV en corto.",
    toBack: "Voltear la foto y ver mi CV en corto",
    toFront: "Volver a la foto",
  },
  cv: {
    title: "Mi CV en corto",
    whoTitle: "Quién soy",
    who: `${site.fullName}. Estudio ${site.career} en la ${site.university}, en Pasto.`,
    doTitle: "A qué me dedico",
    do: "Apps completas: frontend, backend y base de datos.",
    servicesTitle: "Servicios",
    experienceTitle: "Experiencia",
    experience: [
      `${site.career} en la ${site.university} (en curso)`,
      "Freelance: mis propias apps, Flux IA y FlowStore (en desarrollo)",
    ],
    moreButton: "Ver más en GitHub",
    cvLinkLabel: "Enlace del CV:",
  },
};
