"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
  Margen del "área visible": un bloque cuenta como visible cuando entra al 88 % del centro
  de la pantalla. Así, al acercarse al borde de arriba o de abajo, alcanza a verse cómo sale.
*/
const VISIBLE_AREA = "-6% 0px -6% 0px";

/**
 * Animaciones al hacer scroll (sin librerías). Busca los elementos con data-reveal y, con un solo
 * IntersectionObserver, les pone data-state="in" cuando entran a la pantalla y "out" cuando salen.
 * El movimiento lo hace CSS (ver "Animaciones al hacer scroll" en app/globals.css).
 * Se vuelve a ejecutar al cambiar de página, para encontrar los bloques nuevos.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    // con "reducir movimiento" no se anima nada: todo queda visible de una
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => (element.dataset.state = "in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) element.dataset.state = "in";
          // solo sale si ya había entrado (así no se anima la salida de algo que nunca se vio)
          else if (element.dataset.state === "in") element.dataset.state = "out";
        }
      },
      { rootMargin: VISIBLE_AREA },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
