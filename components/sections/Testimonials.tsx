import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { sectionPalettes } from "@/data/palettes";
import { testimonials, testimonialsContent as content } from "@/data/testimonials";
import { paletteZone } from "@/lib/palette";

/** Testimonios (fondo rojo y rosado): carrusel de tarjetas con flechas */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      {...paletteZone(sectionPalettes.testimonials)}
      className="overflow-hidden px-5 py-24 text-paper [--focus:var(--color-paper)] sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="testimonials-title">{content.title}</SectionHeading>
        <p className="mt-4 max-w-2xl text-lg">{content.lead}</p>
        <div className="mt-10">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
