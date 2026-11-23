import { site, ui } from "@/data/site";
import { cvIsFile, cvLinkProps } from "@/lib/cv";
import { buttonPrimary } from "@/lib/styles";
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
          "inline-flex min-h-11 items-center rounded-full border border-dashed border-line px-5 py-2 text-sm font-semibold whitespace-nowrap text-muted",
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
      className={cn(buttonPrimary, "whitespace-nowrap", className)}
    >
      {ui.cvButton}
      {!cvIsFile && <span className="sr-only"> {ui.opensNewTab}</span>}
    </a>
  );
}
