import { site } from "@/data/site";
import type { AboutContent } from "@/types";

/*
  Textos de "Sobre mí" (borrador: edítalos con tus palabras).
  La guía del profe pide: presentación, foto, tecnologías y datos rápidos (ubicación, semestre, intereses).
  Datos confirmados el 22-nov-2026: 5.º semestre, desde 2024, español nativo e inglés básico (A2).
*/
export const about: AboutContent = {
  title: "Sobre mí",
  lead: "Quién soy, qué estudio y qué me gusta hacer.",
  paragraphs: [
    `Soy ${site.fullName}, estudiante de ${site.semester} de ${site.career} en la ${site.university}, en Pasto. Programo porque me gusta crear cosas que la gente pueda usar.`,
    "Ahora mismo estoy terminando Flux IA y aprendiendo a construir backends más ordenados con Java y Spring Boot. Cada proyecto me deja algo nuevo, y eso es lo que más me gusta de programar.",
  ],
  badge: { title: site.semester, text: `${site.career}, UCC Pasto` },
  facts: [
    { label: "Ubicación", value: site.location, icon: "pin" },
    { label: "Universidad", value: "Cooperativa de Colombia", icon: "book" },
    { label: "Estudio desde", value: site.studyStart, icon: "calendar" },
  ],
  outside: {
    title: "Fuera del código",
    text: "Juego fútbol, boxeo, voleibol y baloncesto. Me gusta la música, dibujar y bailar, y en mis ratos libres juego Fortnite, Call of Duty, Free Fire y GTA.",
  },
  languages: {
    title: "Idiomas",
    items: [
      { name: "Español", level: "Nativo." },
      { name: "Inglés", level: "Básico (A2): lo leo y entiendo lo básico." },
    ],
  },
  focusTitle: "Tecnologías que manejo",
  focus: [
    { title: "Backend", icon: "server", techs: "Java, Spring Boot, PostgreSQL, Node.js y Express" },
    { title: "Frontend", icon: "monitor", techs: "React, Next.js, TypeScript y Tailwind CSS" },
    { title: "Inteligencia artificial", icon: "sparkle", techs: "Groq y la API de Anthropic dentro de mis apps" },
  ],
  projectsButton: "Ver mis proyectos",
};
