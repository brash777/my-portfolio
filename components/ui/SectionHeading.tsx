import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** id del título; la sección lo usa en aria-labelledby */
  id: string;
  children: ReactNode;
  className?: string;
}

/** Título de sección (h2) con la escala "title" de los tokens */
export function SectionHeading({ id, children, className }: SectionHeadingProps) {
  return (
    <h2 id={id} className={cn("text-title", className)}>
      {children}
    </h2>
  );
}
