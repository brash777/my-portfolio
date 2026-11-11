import type { Testimonial, TestimonialsContent } from "@/types";

export const testimonialsContent: TestimonialsContent = {
  title: "Testimonios",
  lead: "Lo que dicen quienes han trabajado conmigo. Por ahora son ejemplos: pronto pondré los de compañeros y profesores reales.",
  exampleLabel: "Ejemplo",
  previous: "Testimonio anterior",
  next: "Siguiente testimonio",
  slideLabel: "Testimonio {n} de {total}",
};

/*
  TODO antes de publicar: cambiar estos EJEMPLOS por testimonios reales de compañeros
  o profesores (con su permiso) y poner isExample: false.
  No llevan nombres de personas reales ni fotos inventadas.
*/
export const testimonials: Testimonial[] = [
  {
    id: "ejemplo-companero",
    name: "Compañero de proyecto",
    role: "Ingeniería de Software",
    quote: "Johan explica lo que hizo y por qué lo hizo así. Trabajar en equipo con él es fácil.",
    isExample: true,
  },
  {
    id: "ejemplo-docente",
    name: "Docente",
    role: "Universidad Cooperativa de Colombia",
    quote: "Entrega a tiempo y se nota que entiende el código que escribe, no solo que funcione.",
    isExample: true,
  },
  {
    id: "ejemplo-usuario-flux",
    name: "Persona que probó Flux IA",
    role: "Prueba de la app",
    quote: "El asistente me mostró en qué se me iba la plata cada semana. Ahora lo reviso antes de comprar.",
    isExample: true,
  },
  {
    id: "ejemplo-clase",
    name: "Compañera de clase",
    role: "Ingeniería de Software",
    quote: "Le pone cuidado al diseño: sus pantallas se ven bien en el celular y en el computador.",
    isExample: true,
  },
];
