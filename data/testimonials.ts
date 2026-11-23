import type { Testimonial, TestimonialsContent } from "@/types";

// En la guía del profe esta sección se llama "Testimonios"; aquí se muestra como "Referencias"
export const testimonialsContent: TestimonialsContent = {
  title: "Referencias",
  lead: "Lo que dicen de mí compañeros con los que he trabajado.",
  exampleLabel: "Ejemplo",
};

/*
  Referencias de compañeros de la UCC (nombres dados por Johan el 22-nov-2026).
  Los textos son un BORRADOR escrito a pedido de Johan: cada persona debe leer el suyo
  y aprobarlo (o cambiarlo) antes de entregar. Si alguien no está de acuerdo, se quita.
*/
export const testimonials: Testimonial[] = [
  {
    id: "camilo-rosero",
    name: "Camilo Rosero",
    role: "Compañero de Ingeniería de Software, UCC",
    quote:
      "Trabajar con Johan es fácil: organiza bien su parte, la explica sin enredos y está pendiente de que todo el equipo entienda el código.",
    isExample: false,
  },
  {
    id: "santiago-ortega",
    name: "Santiago Ortega",
    role: "Compañero de Ingeniería de Software, UCC",
    quote:
      "Le pone mucho cuidado a cómo se ven las cosas. Sus pantallas se entienden rápido y funcionan bien en el celular y en el computador.",
    isExample: false,
  },
  {
    id: "samuel-moreno",
    name: "Samuel Moreno",
    role: "Compañero de Ingeniería de Software, UCC",
    quote:
      "Es constante. Cuando algo no le sale, investiga hasta que funciona, y no entrega un trabajo a medias.",
    isExample: false,
  },
];
