import { SectionHeading } from "@/components/ui/SectionHeading";
import { navLabel, ui } from "@/data/site";

/** Experiencia (azul). Base vacía: el contenido llega en la Fase 2. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="min-h-[80svh] bg-blue text-paper [--focus:var(--color-paper)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="experience-title">{navLabel("experience")}</SectionHeading>
        <p className="mt-4 text-lg">{ui.sectionPending}</p>
      </div>
    </section>
  );
}
