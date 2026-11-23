import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials, testimonialsContent as content } from "@/data/testimonials";

/** Referencias (en la guía del profe: Testimonios): mínimo 3 tarjetas, con nombre, cargo, avatar y texto */
export function Testimonials() {
  return (
    <section id="references" aria-labelledby="references-title" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="references-title" lead={content.lead}>
          {content.title}
        </SectionHeading>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
