import { Icon } from "@/components/ui/Icon";
import { testimonialsContent as content } from "@/data/testimonials";
import type { Testimonial } from "@/types";

/** iniciales para el avatar: "Camilo Rosero" → "CR" (sin fotos inventadas) */
function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/** Tarjeta de vidrio de una referencia. Si fuera un ejemplo, lo dice con una etiqueta visible. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="glass relative flex h-full flex-col rounded-panel p-7">
      {testimonial.isExample && (
        <span className="absolute top-5 right-5 rounded-full border border-line px-3 py-0.5 text-xs font-semibold text-muted">
          {content.exampleLabel}
        </span>
      )}
      <Icon name="quote" className="size-8 text-blue-soft" />
      <blockquote className="mt-5 flex-1 text-lg text-text">
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-6">
        <span
          aria-hidden="true"
          className="grid size-12 shrink-0 place-items-center rounded-full bg-linear-to-br from-blue to-[#1a2f99] font-semibold text-white"
        >
          {initials(testimonial.name)}
        </span>
        <span>
          <span className="block font-semibold text-white">{testimonial.name}</span>
          <span className="block text-sm text-muted">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
