import { SectionHeading } from "@/components/ui/SectionHeading";
import { navLabel, ui } from "@/data/site";

/** Contacto (amarillo). Base vacía: el contenido llega en la Fase 2. */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="min-h-[80svh] bg-yellow text-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="contact-title">{navLabel("contact")}</SectionHeading>
        <p className="mt-4 text-lg">{ui.sectionPending}</p>
      </div>
    </section>
  );
}
