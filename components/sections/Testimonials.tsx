import { SectionHeading } from "@/components/ui/SectionHeading";
import { navLabel, ui } from "@/data/site";

/** Testimonios (rojo). Base vacía: el contenido llega en la Fase 2. */
export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="min-h-[80svh] bg-red text-paper [--focus:var(--color-paper)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="testimonials-title">{navLabel("testimonials")}</SectionHeading>
        <p className="mt-4 text-lg">{ui.sectionPending}</p>
      </div>
    </section>
  );
}
