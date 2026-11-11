"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  /** "rise": sube y aparece. "slap": se "pega" como un sticker (escala + giro con rebote) */
  variant?: "rise" | "slap";
  /** retraso en milisegundos, para que varios elementos entren uno tras otro */
  delay?: number;
  className?: string;
}

/**
 * Anima la entrada de su contenido cuando aparece en pantalla.
 * Los estilos están en globals.css ([data-reveal]); con "reducir movimiento" se muestra sin animar.
 */
export function Reveal({ children, variant = "rise", delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-visible={inView || undefined}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
