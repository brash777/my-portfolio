import { ChameleonBackground } from "@/components/ui/ChameleonBackground";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { sectionPalettes } from "@/data/palettes";
import { services } from "@/data/services";
import { skillGroups, skillsContent as content } from "@/data/skills";
import { accentSurface } from "@/lib/accent";
import { cn } from "@/lib/utils";

const tilts = ["lg:-rotate-1", "lg:rotate-1", "lg:rotate-1", "lg:-rotate-1"];

/**
 * Skills (fondo turquesa), la sección adicional: primero los servicios ("Qué puedo hacer"),
 * después las tecnologías por categoría, con ícono y nombre. Sin barras ni porcentajes.
 */
export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative px-5 py-24 text-paper [--focus:var(--color-paper)] sm:px-8 lg:py-32"
    >
      <ChameleonBackground palette={sectionPalettes.skills} />
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-title">{content.title}</SectionHeading>
        <p className="mt-4 max-w-2xl text-lg">{content.lead}</p>

        <h3 className="mt-14 text-4xl sm:text-5xl">{content.servicesTitle}</h3>
        <ul className="mt-8 grid gap-x-12 gap-y-7 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-yellow text-ink"
              >
                <Icon name="check" className="size-5" />
              </span>
              <div>
                <h4 className="text-2xl leading-tight">{service.title}</h4>
                <p className="mt-1 text-lg leading-snug">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-20 text-4xl sm:text-5xl">{content.stackTitle}</h3>
        <ul className="mt-10 grid gap-10 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <li key={group.id}>
              <Reveal variant="slap" delay={index * 100} className="h-full">
                <article
                  className={cn(
                    "sticker h-full overflow-hidden rounded-sticker bg-paper text-ink",
                    tilts[index % tilts.length],
                  )}
                >
                  <header className={cn("border-b-3 border-ink px-6 py-5", accentSurface[group.accent])}>
                    <h4 className="text-4xl leading-none">{group.title}</h4>
                    <p className="mt-1">{group.description}</p>
                  </header>
                  <ul className="flex flex-wrap gap-3 p-6">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <TechBadge tech={item} />
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
