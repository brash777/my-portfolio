import type { CSSProperties } from "react";
import { accentPalettes } from "@/data/palettes";
import type { Palette, Project } from "@/types";

/** Las cuatro variables CSS de una paleta: base y tres brillos */
export const paletteKeys = ["base", "glow-1", "glow-2", "glow-3"] as const;

/** Variables CSS de una paleta con el prefijo dado: --palette-base, --palette-glow-1… */
export function paletteVars(palette: Palette, prefix: string): CSSProperties {
  const values = [palette.base, ...palette.glows];
  return Object.fromEntries(paletteKeys.map((key, index) => [`${prefix}-${key}`, values[index]]));
}

/**
 * Convierte un elemento en una "zona" del fondo camaleón: cuando llega al centro
 * de la pantalla, el fondo toma sus colores. Uso: <section {...paletteZone(paleta)}>
 */
export function paletteZone(palette: Palette, style?: CSSProperties) {
  return { "data-palette": "", style: { ...paletteVars(palette, "--palette"), ...style } };
}

/** La paleta de una app: la suya propia o, si no tiene, la de su color de acento */
export function projectPalette(project: Project): Palette {
  return project.palette ?? accentPalettes[project.accent];
}
