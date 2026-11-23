import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { kindIcon, TimelineItem } from "@/components/ui/TimelineItem";
import { experience, experienceContent as content } from "@/data/experience";

/**
 * Experiencia en las dos partes que pide la guía del profe, de lo más reciente a lo más antiguo:
 * - académica: línea de tiempo vertical (universidad y proyectos de clase);
 * - laboral: tarjeta de vidrio (freelance).
 */
export function Experience() {
  const academic = experience.filter((item) => item.area === "academic");
  const work = experience.filter((item) => item.area === "work");

  return (
    <section id="experience" aria-labelledby="experience-title" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal="up">
          <SectionHeading id="experience-title" lead={content.lead}>
            {content.title}
          </SectionHeading>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div data-reveal="left">
              <h3 className="flex items-center gap-3 text-2xl">
                <Icon name="book" className="size-6 text-blue-soft" />
                {content.areas.academic.title}
              </h3>
              <p className="mt-2 text-muted">{content.areas.academic.lead}</p>
            </div>

            {/* línea de tiempo: la raya es el borde izquierdo de la lista y cada punto lleva su ícono */}
            <ol className="mt-8 space-y-10 border-l border-line pl-8">
              {academic.map((item) => (
                <li key={item.id} data-reveal="left" className="relative">
                  <span
                    aria-hidden="true"
                    className="glass absolute top-0 -left-[3.2rem] grid size-10 place-items-center rounded-full bg-night text-blue-soft"
                  >
                    <Icon name={kindIcon[item.kind]} className="size-4.5" />
                  </span>
                  <TimelineItem item={item} />
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div data-reveal="right" className="glass rounded-panel p-7">
              <h3 className="flex items-center gap-3 text-2xl">
                <Icon name="briefcase" className="size-6 text-blue-soft" />
                {content.areas.work.title}
              </h3>
              <p className="mt-2 text-muted">{content.areas.work.lead}</p>
              <ul className="mt-6 space-y-8 border-t border-line pt-6">
                {work.map((item) => (
                  <li key={item.id}>
                    <TimelineItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
