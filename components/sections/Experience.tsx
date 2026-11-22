import { ChameleonBackground } from "@/components/ui/ChameleonBackground";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { kindIcon, TimelineItem } from "@/components/ui/TimelineItem";
import { experience, experienceContent as content } from "@/data/experience";
import { sectionPalettes } from "@/data/palettes";
import type { ExperienceArea } from "@/types";

// las dos partes que pide la guía del profe, en este orden
const areas: { id: ExperienceArea; icon: IconName }[] = [
  { id: "academic", icon: "book" },
  { id: "work", icon: "briefcase" },
];

/** Una línea de tiempo vertical (de lo más reciente a lo más antiguo) */
function Timeline({ area }: { area: ExperienceArea }) {
  const items = experience.filter((item) => item.area === area);

  return (
    <div className="relative mt-10">
      {/* la línea: se "dibuja" con el scroll */}
      <div
        aria-hidden="true"
        className="timeline-line absolute top-2 bottom-2 left-5 w-2 -translate-x-1/2 rounded-full border-2 border-ink bg-yellow lg:left-1/2"
      />
      <ol className="relative space-y-12">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li key={item.id} className="relative pl-14 lg:grid lg:grid-cols-2 lg:gap-20 lg:pl-0">
              {/* nodo de la línea con el ícono del tipo */}
              <span
                aria-hidden="true"
                className="timeline-node absolute top-5 left-5 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full border-3 border-ink bg-paper text-ink lg:left-1/2"
              >
                <Icon name={kindIcon[item.kind]} />
              </span>
              <Reveal className={isLeft ? "lg:col-start-1" : "lg:col-start-2"}>
                <TimelineItem item={item} className={isLeft ? "lg:-rotate-1" : "lg:rotate-1"} />
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * Experiencia (fondo azul con brillo dorado), en dos partes: académica y laboral.
 * Cada parte es una línea de tiempo vertical.
 * Celular: una columna con la línea a la izquierda.
 * Computador: la línea va al centro y las tarjetas alternan de lado.
 */
export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative px-5 py-24 text-paper [--focus:var(--color-paper)] sm:px-8 lg:py-32"
    >
      <ChameleonBackground palette={sectionPalettes.experience} />
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="experience-title">{content.title}</SectionHeading>
        <p className="mt-4 max-w-2xl text-lg">{content.lead}</p>

        {areas.map((area) => (
          <div key={area.id} className="mt-20 first-of-type:mt-16">
            <h3 className="flex items-center gap-4 text-4xl sm:text-5xl">
              <span
                aria-hidden="true"
                className="sticker-sm grid size-12 shrink-0 place-items-center rounded-full bg-yellow text-ink"
              >
                <Icon name={area.icon} className="size-6" />
              </span>
              {content.areas[area.id].title}
            </h3>
            <p className="mt-3 text-lg">{content.areas[area.id].lead}</p>
            <Timeline area={area.id} />
          </div>
        ))}
      </div>
    </section>
  );
}
