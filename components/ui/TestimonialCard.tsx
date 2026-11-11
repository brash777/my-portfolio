import { Icon } from "@/components/ui/Icon";
import { testimonialsContent as content } from "@/data/testimonials";
import type { Testimonial } from "@/types";

/** Tarjeta de testimonio. Si es un ejemplo, lo dice con una etiqueta visible. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="sticker relative flex h-full flex-col rounded-sticker bg-paper p-6 text-ink sm:p-7">
      {testimonial.isExample && (
        <span className="sticker-sm absolute -top-3 right-5 inline-flex rotate-3 items-center gap-1.5 rounded-full bg-yellow px-3 py-1 text-sm font-bold">
          <Icon name="flag" className="size-4" />
          {content.exampleLabel}
        </span>
      )}
      <Icon name="quote" className="size-10 text-red" />
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t-3 border-ink pt-5">
        {/* sin fotos inventadas: un ícono en lugar de la foto hasta tener testimonios reales */}
        <span className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-ink bg-yellow">
          <Icon name="person" className="size-6" />
        </span>
        <span>
          <span className="block font-bold">{testimonial.name}</span>
          <span className="block text-sm">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
