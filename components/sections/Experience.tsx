import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { kindIcon, TimelineItem } from "@/components/ui/TimelineItem";
import { experience, experienceContent as content } from "@/data/experience";
import { cn } from "@/lib/utils";

/**
 * Experiencia (azul): línea de tiempo vertical.
 * Celular: una columna con la línea a la izquierda.
 * Computador: la línea va al centro y las tarjetas alternan de lado.
 */
export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-blue px-5 py-24 text-paper [--focus:var(--color-paper)] sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="experience-title">{content.title}</SectionHeading>
        <p className="mt-4 max-w-2xl text-lg">{content.lead}</p>

        <div className="relative mt-16">
          {/* la línea: en la fase de movimiento se "dibuja" con el scroll */}
          <div
            aria-hidden="true"
            className="timeline-line absolute top-2 bottom-2 left-5 w-2 -translate-x-1/2 rounded-full border-2 border-ink bg-yellow lg:left-1/2"
          />
          <ol className="relative space-y-12">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li key={item.id} className="relative pl-14 lg:grid lg:grid-cols-2 lg:gap-20 lg:pl-0">
                  {/* nodo de la línea con el ícono del tipo */}
                  <span
                    aria-hidden="true"
                    className="absolute top-5 left-5 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full border-3 border-ink bg-paper text-ink lg:left-1/2"
                  >
                    <Icon name={kindIcon[item.kind]} />
                  </span>
                  <TimelineItem
                    item={item}
                    className={cn(isLeft ? "lg:col-start-1 lg:-rotate-1" : "lg:col-start-2 lg:rotate-1")}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
