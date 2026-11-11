import { SectionHeading } from "@/components/ui/SectionHeading";
import { navLabel, ui } from "@/data/site";

/** Acerca de mí (amarillo). Base vacía: el contenido llega en la Fase 2. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="min-h-[80svh] bg-yellow text-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="about-title">{navLabel("about")}</SectionHeading>
        <p className="mt-4 text-lg">{ui.sectionPending}</p>
      </div>
    </section>
  );
}
