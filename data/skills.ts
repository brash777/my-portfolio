import { tech } from "@/data/tech";
import type { SectionIntro, SkillGroup } from "@/types";

export const skillsContent: SectionIntro = {
  title: "Skills",
  lead: "Las tecnologías que uso de verdad en mis proyectos. Sin barras ni porcentajes: lo que cuenta es lo que construyo con ellas.",
};

/*
  Revisado contra los repos de GitHub (brash777):
  - React y Python sí aparecen en proyectos (choose-seats, music-player, FlowStore; estructuras de datos).
  - C++ y Figma no aparecen en ningún repo, así que no se incluyen.
*/
export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    description: "Servidores, APIs y bases de datos.",
    accent: "blue",
    items: [tech.java, tech.springBoot, tech.postgresql, tech.supabase, tech.flyway, tech.jwt, tech.nodejs, tech.express, tech.python],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Lo que se ve y se toca, en el navegador, el celular y el escritorio.",
    accent: "red",
    items: [tech.html, tech.css, tech.javascript, tech.typescript, tech.react, tech.nextjs, tech.tailwind, tech.gsap, tech.pwa, tech.electron],
  },
  {
    id: "tools",
    title: "Herramientas",
    description: "Con lo que trabajo todos los días.",
    accent: "yellow",
    items: [tech.git, tech.github, tech.vscode, tech.vite, tech.vercel],
  },
  {
    id: "ai",
    title: "IA",
    description: "Asistentes de IA dentro de mis apps y como ayuda para programar.",
    accent: "violet",
    items: [tech.groq, tech.anthropic, tech.claudeCode],
  },
];
