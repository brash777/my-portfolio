import { site } from "@/data/site";
import { tech } from "@/data/tech";
import type { ExperienceContent, ExperienceItem } from "@/types";

export const experienceContent: ExperienceContent = {
  title: "Experiencia",
  lead: "Lo que estudio y lo que trabajo, de lo más reciente a lo más antiguo.",
  coursesTitle: "Cursos que voy a tomar",
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
  Línea de tiempo, en dos partes (area): "academic" y "work", como pide la guía del profe.
  Dentro de cada parte va de lo más reciente a lo más antiguo. Regla de honestidad:
  - Fechas solo confirmadas: la carrera empezó en 2024 (dicho el 22-nov-2026); los proyectos
    tienen el año de data/projects.ts y los de clase van de 2024 a 2026 (fechas de los repos).
  - Los cursos quedan como "planned" (sin fecha) hasta que tengas el certificado.
  TODO: elegir cuáles cursos se quedan. Verificados el 11-nov-2026: freeCodeCamp
  (certificaciones gratis) y CS50x (certificado gratis de CS50, versión 2026 hasta el 31-dic).
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
  {
    id: "fcc-bases-de-datos",
    area: "academic",
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
    area: "academic",
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
    area: "academic",
    kind: "course",
    title: "CS50x: introducción a la ciencia de la computación",
    place: "Harvard (edX)",
    description: "Curso gratuito con certificado de CS50. La versión 2026 se puede terminar hasta el 31 de diciembre.",
    status: "planned",
    link: { label: "Ver el curso", href: "https://cs50.harvard.edu/x/" },
  },
  {
    id: "nextjs-learn",
    area: "academic",
    kind: "course",
    title: "Next.js Learn",
    place: "Vercel",
    description: "El curso oficial de Next.js, donde se arma una app completa paso a paso.",
    status: "planned",
    stack: [tech.nextjs],
    link: { label: "Ver el curso", href: "https://nextjs.org/learn" },
  },
];
