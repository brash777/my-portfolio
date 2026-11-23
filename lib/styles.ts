/*
  Estilos de botones que se repiten en varias secciones (clases completas de Tailwind,
  para que las encuentre al compilar). Todos miden 44 px de alto o más (fácil de tocar).
*/

/** botón principal: azul eléctrico con texto blanco (5.2:1) y un brillo azul */
export const buttonPrimary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue px-6 py-2.5 font-semibold text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:brightness-110";

/** botón secundario: de vidrio, con borde fino */
export const buttonSecondary =
  "glass inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 font-semibold text-text transition duration-200 hover:-translate-y-0.5 hover:border-blue-soft/50";
