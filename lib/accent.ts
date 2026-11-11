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
