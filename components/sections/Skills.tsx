import { SectionHeading } from "@/components/ui/SectionHeading";
import { navLabel, ui } from "@/data/site";

/** Habilidades (papel). Base vacía: el contenido llega en la Fase 2. */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="min-h-[80svh] bg-paper text-ink border-t-3 border-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-title">{navLabel("skills")}</SectionHeading>
        <p className="mt-4 text-lg">{ui.sectionPending}</p>
      </div>
    </section>
  );
}
