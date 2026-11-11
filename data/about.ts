import { site } from "@/data/site";
import type { AboutContent, AboutFact } from "@/types";

const facts: AboutFact[] = [
  { label: "Ubicación", value: site.location, icon: "pin" },
  { label: "Estudio", value: `${site.career} en la ${site.university}`, icon: "book" },
];

// el estado de relación solo aparece cuando tenga un texto en data/site.ts
if (site.relationship) {
  facts.push({ label: "Relación", value: site.relationship, icon: "heart" });
}

// Textos de "Acerca de mí" (borrador: edítalos con tus palabras)
export const about: AboutContent = {
  title: "Acerca de mí",
  paragraphs: [
    `Soy ${site.name}, estudiante de ${site.career} en la ${site.university}, en Pasto. Me gusta el fútbol, dibujar, bailar y la música, y programo porque me gusta crear cosas que la gente pueda usar.`,
    "Ahora mismo estoy terminando Flux IA y aprendiendo a construir backends más ordenados con Java y Spring Boot. Cada proyecto me deja algo nuevo, y eso es lo que más me gusta de programar.",
  ],
  facts,
  linksTitle: "Mis enlaces",
  hobbiesTitle: "Algo más que developer",
  hobbiesLead: "Lo que me gusta hacer cuando no estoy programando.",
};
