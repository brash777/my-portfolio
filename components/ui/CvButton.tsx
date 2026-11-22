import { site, ui } from "@/data/site";
import { cvIsFile, cvLinkProps } from "@/lib/cv";
import { cn } from "@/lib/utils";

interface CvButtonProps {
  className?: string;
}

/**
 * Botón "Descargar CV": descarga public/cv.pdf (o abre el enlace externo en otra pestaña).
 * Mientras no haya URL (cvUrl = null) muestra una etiqueta punteada, sin enlace.
 */
export function CvButton({ className }: CvButtonProps) {
  if (!site.cvUrl) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border-2 border-dashed border-current px-4 py-2 text-sm font-semibold whitespace-nowrap",
          className,
        )}
      >
        {ui.cvPending}
      </span>
    );
  }

  return (
    <a
      href={site.cvUrl}
      {...cvLinkProps()}
      className={cn(
        "sticker-sm inline-flex min-h-11 items-center rounded-full bg-yellow px-5 py-2 font-bold whitespace-nowrap text-ink transition-transform duration-200 hover:-translate-y-0.5",
        className,
      )}
    >
      {ui.cvButton}
      {!cvIsFile && <span className="sr-only"> {ui.opensNewTab}</span>}
    </a>
  );
}
