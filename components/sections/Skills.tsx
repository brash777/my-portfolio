import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { skillGroups, skillsContent as content } from "@/data/skills";
import { accentSurface } from "@/lib/accent";
import { cn } from "@/lib/utils";

const tilts = ["lg:-rotate-1", "lg:rotate-1", "lg:rotate-1", "lg:-rotate-1"];

/** Skills (papel): tecnologías por categoría, con ícono y nombre. Sin barras ni porcentajes. */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-paper px-5 py-24 text-ink sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-title">{content.title}</SectionHeading>
        <p className="mt-4 max-w-2xl text-lg">{content.lead}</p>

        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <li key={group.id}>
              <Reveal variant="slap" delay={index * 100} className="h-full">
                <article
                  className={cn("sticker h-full overflow-hidden rounded-sticker bg-paper", tilts[index % tilts.length])}
                >
                  <header className={cn("border-b-3 border-ink px-6 py-5", accentSurface[group.accent])}>
                    <h3 className="text-4xl leading-none">{group.title}</h3>
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
