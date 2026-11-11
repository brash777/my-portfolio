"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  /** texto del botón cuando se ve el frente / el reverso (para lectores de pantalla) */
  toBackLabel: string;
  toFrontLabel: string;
  className?: string;
}

// cada cara es un sticker con la esquina doblada (utilidad dog-ear en globals.css);
// las dos caras ocupan la misma celda de la grilla, una encima de la otra
const FACE = "sticker dog-ear overflow-hidden rounded-sticker backface-hidden [grid-area:1/1]";

/**
 * Tarjeta-sticker que se voltea:
 * - mouse: al pasar por encima;
 * - toque y teclado: con el botón de la esquina doblada.
 * Mientras se ve el frente, el reverso queda "inert" (no se puede enfocar ni leer),
 * así el teclado nunca cae en algo que no se ve.
 */
export function FlipCard({ front, back, toBackLabel, toFrontLabel, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("relative perspective-[1400px]", className)}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsFlipped(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsFlipped(false);
      }}
    >
      <div
        className={cn(
          "grid transition-transform duration-700 ease-slap transform-3d",
          isFlipped && "rotate-y-180",
        )}
      >
        <div className={FACE} inert={isFlipped}>
          {front}
        </div>
        <div className={cn(FACE, "rotate-y-180")} inert={!isFlipped}>
          {back}
        </div>
      </div>

      {/* esquina doblada: muestra el color del otro lado de la tarjeta */}
      <button
        type="button"
        onClick={() => setIsFlipped((flipped) => !flipped)}
        className="group absolute right-0 bottom-0 size-14"
      >
        <span className="sr-only">{isFlipped ? toFrontLabel : toBackLabel}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 56 56"
          className="size-full origin-top-left drop-shadow-[3px_3px_0_var(--color-ink)] transition-transform duration-200 group-hover:scale-110"
        >
          <path
            d="M2 2 H54 L2 54 Z"
            strokeLinejoin="round"
            strokeWidth="3"
            className={cn("stroke-ink", isFlipped ? "fill-paper" : "fill-yellow")}
          />
        </svg>
      </button>
    </div>
  );
}
