import type { Tech } from "@/types";

// Registro de tecnologías con su ícono (public/images/icons/).
// Íconos de Simple Icons (CC0) y Devicon (MIT): Java, LinkedIn y VS Code vienen de Devicon.
// Para agregar una: guarda su SVG en public/images/icons/ y agrégala aquí.
export const tech = {
  java: { name: "Java", icon: "/images/icons/java.svg" },
  springBoot: { name: "Spring Boot", icon: "/images/icons/springboot.svg" },
  postgresql: { name: "PostgreSQL", icon: "/images/icons/postgresql.svg" },
  supabase: { name: "Supabase", icon: "/images/icons/supabase.svg" },
  flyway: { name: "Flyway", icon: "/images/icons/flyway.svg" },
  jwt: { name: "JWT", icon: "/images/icons/jwt.svg" },
  python: { name: "Python", icon: "/images/icons/python.svg" },
  nodejs: { name: "Node.js", icon: "/images/icons/nodejs.svg" },
  express: { name: "Express", icon: "/images/icons/express.svg" },
  html: { name: "HTML", icon: "/images/icons/html.svg" },
  css: { name: "CSS", icon: "/images/icons/css.svg" },
  javascript: { name: "JavaScript", icon: "/images/icons/javascript.svg" },
  typescript: { name: "TypeScript", icon: "/images/icons/typescript.svg" },
  react: { name: "React", icon: "/images/icons/react.svg" },
  nextjs: { name: "Next.js", icon: "/images/icons/nextjs.svg" },
  tailwind: { name: "Tailwind CSS", icon: "/images/icons/tailwindcss.svg" },
  gsap: { name: "GSAP", icon: "/images/icons/gsap.svg" },
  pwa: { name: "PWA", icon: "/images/icons/pwa.svg" },
  electron: { name: "Electron", icon: "/images/icons/electron.svg" },
  vite: { name: "Vite", icon: "/images/icons/vite.svg" },
  git: { name: "Git", icon: "/images/icons/git.svg" },
  github: { name: "GitHub", icon: "/images/icons/github.svg" },
  vscode: { name: "VS Code", icon: "/images/icons/vscode.svg" },
  vercel: { name: "Vercel", icon: "/images/icons/vercel.svg" },
  groq: { name: "Groq (IA)" },
  anthropic: { name: "API de Anthropic", icon: "/images/icons/anthropic.svg" },
  claudeCode: { name: "Claude Code", icon: "/images/icons/claude.svg" },
} satisfies Record<string, Tech>;
