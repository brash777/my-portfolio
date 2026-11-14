import type { Accent, Palette, SectionId } from "@/types";

/*
  Paletas del fondo camaleón: al bajar por la página, el fondo cambia poco a poco
  a la paleta de la sección (o de la app) que está en el centro de la pantalla.
  Cada una es una base oscura + tres brillos (colores con transparencia).
  El texto encima es blanco: todas dan 4.5:1 o más aun donde se juntan los brillos.
  Si cambias un color, revisa el contraste (por ejemplo en webaim.org/resources/contrastchecker).
*/
export const sectionPalettes: Record<SectionId, Palette> = {
  // Inicio: azul eléctrico con un toque violeta
  hero: {
    base: "#071552",
    glows: ["rgb(26 67 217 / 0.8)", "rgb(0 150 255 / 0.35)", "rgb(106 46 232 / 0.45)"],
  },
  // Acerca de mí: atardecer (rojo, naranja y amarillo)
  about: {
    base: "#2a0608",
    glows: ["rgb(215 38 30 / 0.6)", "rgb(255 140 0 / 0.3)", "rgb(255 209 0 / 0.18)"],
  },
  // Proyectos: noche azul y calmada, para que cada app resalte con su propio color
  projects: {
    base: "#0a0d2a",
    glows: ["rgb(26 67 217 / 0.5)", "rgb(106 46 232 / 0.35)", "rgb(215 38 30 / 0.2)"],
  },
  // Testimonios: rojo y rosado
  testimonials: {
    base: "#2b0410",
    glows: ["rgb(215 38 30 / 0.65)", "rgb(255 79 109 / 0.3)", "rgb(106 46 232 / 0.25)"],
  },
  // Experiencia: azul con un brillo dorado (como la línea de tiempo)
  experience: {
    base: "#061033",
    glows: ["rgb(26 67 217 / 0.6)", "rgb(255 209 0 / 0.14)", "rgb(0 150 255 / 0.25)"],
  },
  // Contacto: dorado y naranja
  contact: {
    base: "#241400",
    glows: ["rgb(255 176 32 / 0.35)", "rgb(215 38 30 / 0.35)", "rgb(255 209 0 / 0.2)"],
  },
  // Skills: turquesa y azul
  skills: {
    base: "#03191c",
    glows: ["rgb(0 170 170 / 0.35)", "rgb(26 67 217 / 0.4)", "rgb(94 234 212 / 0.15)"],
  },
};

/** Pie de página: casi negro, con brillos muy suaves de los colores del portafolio */
export const footerPalette: Palette = {
  base: "#050505",
  glows: ["rgb(26 67 217 / 0.25)", "rgb(215 38 30 / 0.18)", "rgb(255 209 0 / 0.08)"],
};

/** Paleta de respaldo para las apps que no tienen la suya: sale de su color de acento */
export const accentPalettes: Record<Accent, Palette> = {
  blue: sectionPalettes.hero,
  red: sectionPalettes.testimonials,
  yellow: sectionPalettes.contact,
  violet: {
    base: "#12062e",
    glows: ["rgb(106 46 232 / 0.6)", "rgb(26 67 217 / 0.3)", "rgb(255 79 109 / 0.15)"],
  },
};
