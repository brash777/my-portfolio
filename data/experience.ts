import { site } from "@/data/site";
import { tech } from "@/data/tech";
import type { ExperienceContent, ExperienceItem } from "@/types";

export const experienceContent: ExperienceContent = {
  title: "Experiencia",
  lead: "Lo que estudio y lo que trabajo, de lo más reciente a lo más antiguo.",
  areas: {
    academic: {
      title: "Experiencia académica",
      lead: "La universidad y los proyectos que hice en ella.",
    },
    work: {
      title: "Experiencia laboral",
      lead: "Las apps que construyo como freelance.",
    },
  },
  kindLabels: {
    education: "Formación",
    freelance: "Freelance",
    project: "Proyecto",
  },
  statusLabels: {
    current: "En curso",
    "in-progress": "En desarrollo",
    completed: "Terminado",
  },
};

/*
  Línea de tiempo, en dos partes (area): "academic" y "work", como pide la guía del profe.
  Dentro de cada parte va de lo más reciente a lo más antiguo. Regla de honestidad:
  - Fechas solo confirmadas: la carrera empezó en 2024 (dicho el 22-nov-2026); los proyectos
    tienen el año de data/projects.ts y los de clase van de 2024 a 2026 (fechas de los repos).
*/
export const experience: ExperienceItem[] = [
  {
    id: "universidad",
    area: "academic",
    kind: "education",
    title: site.career,
    place: site.university,
    description:
      "Estudio en Pasto. En la carrera aprendí Java, estructuras de datos y patrones de diseño, la base de lo que construyo.",
    status: "current",
    period: `${site.studyStart} – actualidad (${site.semester})`,
  },
  {
    id: "flux-ia",
    area: "work",
    kind: "freelance",
    title: "Flux IA",
    place: "Proyecto propio",
    description:
      "Diseño y programo una app de finanzas personales con asistente de IA: backend en Spring Boot, base de datos PostgreSQL y app instalable.",
    status: "in-progress",
    period: "2026 – actualidad",
    stack: [tech.java, tech.springBoot, tech.postgresql, tech.groq],
    link: { label: "Ver el proyecto", href: "/projects/flux-ia" },
  },
  {
    id: "flowstore",
    area: "academic",
    kind: "project",
    title: "FlowStore",
    place: "Proyecto universitario",
    description: "Tienda de ropa de escritorio con avatar 3D e IA estilista, hecha con Electron, React y Spring Boot.",
    status: "in-progress",
    period: "2026 – actualidad",
    stack: [tech.electron, tech.react, tech.springBoot],
    link: { label: "Ver el proyecto", href: "/projects/flowstore" },
  },
  {
    id: "proyectos-de-clase",
    area: "academic",
    kind: "project",
    title: "Proyectos de clase",
    place: site.university,
    description:
      "Backends en Java con patrones de diseño (Facade, Factory, Decorator), estructuras de datos en Python y TypeScript, e interfaces en React.",
    status: "completed",
    period: "2024 – 2026",
    stack: [tech.java, tech.python, tech.typescript, tech.react],
    link: { label: "Ver mis repositorios", href: site.githubUrl },
  },
];
