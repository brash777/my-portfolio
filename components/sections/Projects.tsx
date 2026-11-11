import { SectionHeading } from "@/components/ui/SectionHeading";
import { navLabel, ui } from "@/data/site";

/** Proyectos (papel). Base vacía: el contenido llega en la Fase 2. */
export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="min-h-[80svh] bg-paper text-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="projects-title">{navLabel("projects")}</SectionHeading>
        <p className="mt-4 text-lg">{ui.sectionPending}</p>
      </div>
    </section>
  );
}
