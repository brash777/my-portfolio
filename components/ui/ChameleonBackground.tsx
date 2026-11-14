import { paletteVars } from "@/lib/palette";
import type { Palette } from "@/types";

/**
 * Fondo camaleón de una zona (una sección, una app destacada o el footer): base oscura
 * y tres brillos, como el fondo "aurora" de Flux IA. Va como primer hijo de un elemento
 * con `relative` (no sticky ni fixed). El fondo empieza un poco más arriba que su zona y aparece
 * de a poco encima de la anterior: así, en la división, un color se convierte en el otro
 * (ver "Fondo camaleón" en app/globals.css).
 */
export function ChameleonBackground({ palette }: { palette: Palette }) {
  return (
    <div aria-hidden="true" className="chameleon" style={paletteVars(palette)}>
      <div className="chameleon-glow chameleon-glow-1" />
      <div className="chameleon-glow chameleon-glow-2" />
      <div className="chameleon-glow chameleon-glow-3" />
    </div>
  );
}
