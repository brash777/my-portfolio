import { site, ui } from "@/data/site";
import { cn } from "@/lib/utils";

interface CvButtonProps {
  className?: string;
}

/**
 * Botón "Ver CV": abre el CV de Google Drive en otra pestaña.
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
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "sticker-sm inline-flex min-h-11 items-center rounded-full bg-yellow px-5 py-2 font-bold whitespace-nowrap text-ink transition-transform duration-200 hover:-translate-y-0.5",
        className,
      )}
    >
      {ui.cvButton}
      <span className="sr-only"> {ui.opensNewTab}</span>
    </a>
  );
}
