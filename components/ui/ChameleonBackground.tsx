"use client";

import { useEffect, useRef } from "react";
import { paletteKeys, paletteVars } from "@/lib/palette";
import type { Palette } from "@/types";

/**
 * Fondo camaleón: una capa fija detrás de toda la página (base oscura + tres brillos).
 * Cada zona marcada con paletteZone() (lib/palette.ts) trae sus colores. Un IntersectionObserver
 * avisa qué zona cruza la mitad de la pantalla y el fondo copia sus colores; el cambio suave
 * lo hace CSS (ver "Fondo camaleón" en app/globals.css).
 */
export function ChameleonBackground({ initial }: { initial: Palette }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = ref.current;
    const zones = Array.from(document.querySelectorAll<HTMLElement>("[data-palette]"));
    if (!background || zones.length === 0) return;

    const inBand = new Set<Element>();
    let active: HTMLElement | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target);
          else inBand.delete(entry.target);
        }
        // gana la última zona en el orden de la página: así una app destacada le gana
        // a la sección Proyectos que la contiene, y una tarjeta apilada a la de abajo
        const next = zones.findLast((zone) => inBand.has(zone));
        if (!next || next === active) return;
        active = next;
        for (const key of paletteKeys) {
          background.style.setProperty(`--bg-${key}`, next.style.getPropertyValue(`--palette-${key}`));
        }
        // la primera vez el color se pone de una (por si la página abre a mitad del scroll);
        // leer el estilo lo aplica ya, antes de activar la transición
        if (!background.hasAttribute("data-ready")) {
          getComputedStyle(background).getPropertyValue("--bg-base");
          background.setAttribute("data-ready", "");
        }
      },
      // franja entre el 45 % y el 50 % de la altura de la ventana (igual que el menú)
      { rootMargin: "-45% 0px -50% 0px" },
    );

    zones.forEach((zone) => observer.observe(zone));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="chameleon" style={paletteVars(initial, "--bg")}>
      <div className="chameleon-glow chameleon-glow-1" />
      <div className="chameleon-glow chameleon-glow-2" />
      <div className="chameleon-glow chameleon-glow-3" />
    </div>
  );
}
