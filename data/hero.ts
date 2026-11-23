import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import type { HeroContent } from "@/types";

// cuántas tecnologías distintas hay en Skills (se cuenta sola si agregas una)
const techCount = new Set(skillGroups.flatMap((group) => group.items.map((item) => item.name))).size;

// Textos del Inicio (borrador: edítalos con tus palabras)
export const hero: HeroContent = {
  kicker: `Estudiante de ${site.career} en Pasto`,
  greeting: "Hola, soy",
  description:
    "Construyo aplicaciones completas, desde la base de datos hasta la pantalla. Mi proyecto más fuerte es Flux IA, una app de finanzas personales con asistente de IA.",
  projectsButton: "Ver mis proyectos",
  // datos reales: salen de data/projects.ts, data/skills.ts y data/site.ts
  stats: [
    { value: String(projects.length), label: "Proyectos" },
    { value: String(techCount), label: "Tecnologías" },
    { value: site.semester.replace(" semestre", ""), label: "Semestre" },
  ],
  featured: {
    label: "Mi proyecto más fuerte",
    slug: "flux-ia",
    linkLabel: "Ver Flux IA",
  },
};
