import type { Accent } from "@/types";

/**
 * Fondo + color de texto + color del foco para cada color de acento.
 * Texto blanco sobre azul, rojo y violeta; negro sobre amarillo (todos ≥ 4.5:1).
 * Las clases van completas para que Tailwind las encuentre al compilar.
 */
export const accentSurface: Record<Accent, string> = {
  blue: "bg-blue text-paper [--focus:var(--color-paper)]",
  red: "bg-red text-paper [--focus:var(--color-paper)]",
  violet: "bg-violet text-paper [--focus:var(--color-paper)]",
  yellow: "bg-yellow text-ink [--focus:var(--color-ink)]",
};

/**
 * Solo fondo + texto, sin color de foco: para botones de color que van sobre el fondo oscuro.
 * Su anillo de foco se dibuja por fuera, así que debe ser blanco (el de la página), no negro.
 */
export const accentFill: Record<Accent, string> = {
  blue: "bg-blue text-paper",
  red: "bg-red text-paper",
  violet: "bg-violet text-paper",
  yellow: "bg-yellow text-ink",
};
