import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** id del título; la sección lo usa en aria-labelledby */
  id: string;
  children: ReactNode;
  /** frase corta que explica la sección en una línea */
  lead?: string;
  className?: string;
}

/** Título de sección (h2), una raya azul corta y una frase que la explica rápido */
export function SectionHeading({ id, children, lead, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 id={id} className="text-title">
        {children}
      </h2>
      <span aria-hidden="true" className="mt-5 block h-1 w-14 rounded-full bg-blue" />
      {lead && <p className="mt-5 text-lg text-muted">{lead}</p>}
    </div>
  );
}
