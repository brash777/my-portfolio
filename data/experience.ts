import { site } from "@/data/site";
import { tech } from "@/data/tech";
import type { ExperienceContent, ExperienceItem } from "@/types";

export const experienceContent: ExperienceContent = {
  title: "Experiencia",
  lead: "Mi camino hasta ahora: la universidad, las apps que construyo por mi cuenta, los proyectos de clase y los cursos que voy a tomar.",
  kindLabels: {
    education: "Formación",
    freelance: "Freelance",
    project: "Proyecto",
    course: "Curso",
  },
  statusLabels: {
    current: "En curso",
    "in-progress": "En desarrollo",
    planned: "Planeado",
    completed: "Terminado",
  },
};

/*
  Línea de tiempo (borrador). Regla de honestidad:
  - Sin fechas hasta que las confirmes (campo "period").
  - Los cursos quedan como "planned" hasta que tengas el certificado.
  TODO: elegir cuáles cursos se quedan. Verificados el 11-nov-2026: freeCodeCamp
  (certificaciones gratis) y CS50x (certificado gratis de CS50, versión 2026 hasta el 31-dic).
*/
export const experience: ExperienceItem[] = [
  {
    id: "universidad",
    kind: "education",
    title: site.career,
    place: site.university,
    description:
      "Estudio en Pasto. En la carrera aprendí Java, estructuras de datos y patrones de diseño, la base de lo que construyo.",
    status: "current",
  },
  {
    id: "flux-ia",
    kind: "freelance",
    title: "Flux IA",
    place: "Proyecto propio",
    description:
      "Diseño y programo una app de finanzas personales con asistente de IA: backend en Spring Boot, base de datos PostgreSQL y app instalable.",
    status: "in-progress",
    stack: [tech.java, tech.springBoot, tech.postgresql, tech.groq],
    link: { label: "Ver el proyecto", href: "/projects/flux-ia" },
  },
  {
    id: "flowstore",
    kind: "project",
    title: "FlowStore",
    place: "Proyecto universitario",
    description: "Tienda de ropa de escritorio con avatar 3D e IA estilista, hecha con Electron, React y Spring Boot.",
    status: "in-progress",
    stack: [tech.electron, tech.react, tech.springBoot],
    link: { label: "Ver el proyecto", href: "/projects/flowstore" },
  },
  {
    id: "proyectos-de-clase",
    kind: "project",
    title: "Proyectos de clase",
    place: site.university,
    description:
      "Backends en Java con patrones de diseño (Facade, Factory, Decorator), estructuras de datos en Python y TypeScript, e interfaces en React.",
    status: "completed",
    stack: [tech.java, tech.python, tech.typescript, tech.react],
    link: { label: "Ver mis repositorios", href: site.githubUrl },
  },
  {
    id: "fcc-bases-de-datos",
    kind: "course",
    title: "Bases de datos relacionales",
    place: "freeCodeCamp",
    description: "SQL y PostgreSQL con proyectos prácticos. Es gratis y da certificado.",
    status: "planned",
    stack: [tech.postgresql],
    link: { label: "Ver el curso", href: "https://www.freecodecamp.org/learn" },
  },
  {
    id: "fcc-javascript",
    kind: "course",
    title: "JavaScript",
    place: "freeCodeCamp",
    description: "Certificación gratuita para reforzar la base de TypeScript, React y Next.js.",
    status: "planned",
    stack: [tech.javascript],
    link: { label: "Ver el curso", href: "https://www.freecodecamp.org/learn" },
  },
  {
    id: "cs50x",
    kind: "course",
    title: "CS50x: introducción a la ciencia de la computación",
    place: "Harvard (edX)",
    description: "Curso gratuito con certificado de CS50. La versión 2026 se puede terminar hasta el 31 de diciembre.",
    status: "planned",
    link: { label: "Ver el curso", href: "https://cs50.harvard.edu/x/" },
  },
  {
    id: "nextjs-learn",
    kind: "course",
    title: "Next.js Learn",
    place: "Vercel",
    description: "El curso oficial de Next.js, donde se arma una app completa paso a paso.",
    status: "planned",
    stack: [tech.nextjs],
    link: { label: "Ver el curso", href: "https://nextjs.org/learn" },
  },
];
