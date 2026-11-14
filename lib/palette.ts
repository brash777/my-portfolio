import type { CSSProperties } from "react";
import { accentPalettes } from "@/data/palettes";
import type { Palette, Project } from "@/types";

/** Las cuatro variables CSS de una paleta: base y tres brillos */
const paletteKeys = ["base", "glow-1", "glow-2", "glow-3"] as const;

/** Variables CSS que lee el fondo camaleón: --bg-base, --bg-glow-1, --bg-glow-2 y --bg-glow-3 */
export function paletteVars(palette: Palette): CSSProperties {
  const values = [palette.base, ...palette.glows];
  return Object.fromEntries(paletteKeys.map((key, index) => [`--bg-${key}`, values[index]]));
}

/** La paleta de una app: la suya propia o, si no tiene, la de su color de acento */
export function projectPalette(project: Project): Palette {
  return project.palette ?? accentPalettes[project.accent];
}
