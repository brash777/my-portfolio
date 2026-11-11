"use client";

import { useEffect, useState } from "react";

/**
 * Devuelve el id de la sección que está en el centro de la pantalla.
 * Usa IntersectionObserver: el navegador avisa cuando una sección cruza
 * una franja delgada a la mitad de la ventana (no se escucha cada scroll).
 *
 * Importante: pasar `ids` como una constante fuera del componente
 * para que el efecto no se reinicie en cada render.
 */
export function useScrollSpy<T extends string>(ids: readonly T[]): T | null {
  const [activeId, setActiveId] = useState<T | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id as T);
          }
        }
      },
      // franja entre el 45 % y el 50 % de la altura de la ventana
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
