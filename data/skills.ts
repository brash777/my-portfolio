import { tech } from "@/data/tech";
import type { SkillGroup, SkillsContent } from "@/types";

export const skillsContent: SkillsContent = {
  title: "Skills",
  lead: "Lo que puedo hacer y las tecnologías que uso de verdad en mis proyectos. Sin barras ni porcentajes: lo que cuenta es lo que construyo con ellas.",
  servicesTitle: "Qué puedo hacer",
  stackTitle: "Con qué lo hago",
};

/*
  Revisado contra los repos de GitHub (brash777):
  - React y Python sí aparecen en proyectos (FlowStore, Snapia; estructuras de datos).
  - Kotlin, Wear OS, Prisma, Docker y Vitest salen de Snapia (repo smart-watch, 2026).
  - Unity y C# NO van: en 7Days el juego lo programó Santiago Ortega; mi parte fue la documentación.
  - C++ y Figma no aparecen en ningún repo, así que no se incluyen.
*/
export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    description: "Servidores, APIs y bases de datos.",
    items: [tech.java, tech.springBoot, tech.postgresql, tech.supabase, tech.flyway, tech.jwt, tech.nodejs, tech.express, tech.prisma, tech.python],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Lo que se ve y se toca, en el navegador, el celular, el reloj y el escritorio.",
    items: [tech.html, tech.css, tech.javascript, tech.typescript, tech.react, tech.nextjs, tech.tailwind, tech.gsap, tech.pwa, tech.electron, tech.kotlin, tech.wearos],
  },
  {
    id: "tools",
    title: "Herramientas",
    description: "Con lo que trabajo todos los días.",
    items: [tech.git, tech.github, tech.vscode, tech.vite, tech.vercel, tech.docker, tech.vitest],
  },
  {
    id: "ai",
    title: "IA",
    description: "Asistentes de IA dentro de mis apps y como ayuda para programar.",
    items: [tech.groq, tech.anthropic, tech.claudeCode],
  },
];
