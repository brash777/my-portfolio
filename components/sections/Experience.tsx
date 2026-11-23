import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { kindIcon, TimelineItem } from "@/components/ui/TimelineItem";
import { experience, experienceContent as content } from "@/data/experience";
import { ui } from "@/data/site";

/**
 * Experiencia en las dos partes que pide la guía del profe, de lo más reciente a lo más antiguo:
 * - académica: línea de tiempo vertical (universidad y proyectos de clase);
 * - laboral: tarjeta de vidrio (freelance).
 * Los cursos planeados van aparte, en una lista corta.
 */
export function Experience() {
  const academic = experience.filter((item) => item.area === "academic" && item.kind !== "course");
  const work = experience.filter((item) => item.area === "work");
  const courses = experience.filter((item) => item.kind === "course");

  return (
    <section id="experience" aria-labelledby="experience-title" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="experience-title" lead={content.lead}>
          {content.title}
        </SectionHeading>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h3 className="flex items-center gap-3 text-2xl">
              <Icon name="book" className="size-6 text-blue-soft" />
              {content.areas.academic.title}
            </h3>
            <p className="mt-2 text-muted">{content.areas.academic.lead}</p>

            {/* línea de tiempo: la raya es el borde izquierdo de la lista y cada punto lleva su ícono */}
            <ol className="mt-8 space-y-10 border-l border-line pl-8">
              {academic.map((item) => (
                <li key={item.id} className="relative">
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
            <div className="glass rounded-panel p-7">
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

            {courses.length > 0 && (
              <div className="glass rounded-panel p-7">
                <h3 className="flex items-center gap-3 text-xl">
                  <Icon name="flag" className="size-5 text-blue-soft" />
                  {content.coursesTitle}
                </h3>
                <ul className="mt-5 divide-y divide-line">
                  {courses.map((course) => (
                    <li key={course.id} className="py-3 first:pt-0 last:pb-0">
                      {course.link ? (
                        <a
                          href={course.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex min-h-11 items-center justify-between gap-4"
                        >
                          <span>
                            <span className="block font-semibold text-white group-hover:text-blue-soft">{course.title}</span>
                            <span className="block text-sm text-muted">{course.place}</span>
                          </span>
                          <Icon name="external" className="size-4 shrink-0 text-blue-soft" />
                          <span className="sr-only">{ui.opensNewTab}</span>
                        </a>
                      ) : (
                        <>
                          <span className="block font-semibold text-white">{course.title}</span>
                          <span className="block text-sm text-muted">{course.place}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
