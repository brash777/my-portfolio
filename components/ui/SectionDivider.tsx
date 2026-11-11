import type { CSSProperties } from "react";

type Surface = "blue" | "red" | "yellow" | "violet" | "paper" | "ink";

interface SectionDividerProps {
  /** color de la sección de arriba (los dientes) */
  from: Surface;
  /** color de la sección de abajo (el fondo) */
  to: Surface;
}

/** Borde "troquelado" en zigzag entre dos secciones, como el corte de una hoja de stickers */
export function SectionDivider({ from, to }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className="zigzag"
      style={{ "--zz-from": `var(--color-${from})`, "--zz-to": `var(--color-${to})` } as CSSProperties}
    />
  );
}
