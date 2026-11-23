import type { CSSProperties } from "react";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { services } from "@/data/services";
import { skillGroups, skillsContent as content } from "@/data/skills";

/**
 * Skills, la sección adicional (va después de Contactos, como en la guía del profe):
 * primero los servicios ("Qué puedo hacer") y después las tecnologías por grupo. Sin barras ni porcentajes.
 */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal="up">
          <SectionHeading id="skills-title" lead={content.lead}>
            {content.title}
          </SectionHeading>
        </div>

        <h3 data-reveal="up" className="mt-14 text-2xl">
          {content.servicesTitle}
        </h3>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <li
              key={service.title}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              className="glass rounded-card p-6"
            >
              <span aria-hidden="true" className="grid size-11 place-items-center rounded-xl bg-blue/15 text-blue-soft">
                <Icon name={service.icon} />
              </span>
              <h4 className="mt-4 text-lg">{service.title}</h4>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </li>
          ))}
        </ul>

        <h3 data-reveal="up" className="mt-16 text-2xl">
          {content.stackTitle}
        </h3>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <li
              key={group.id}
              data-reveal="up"
              style={{ "--reveal-delay": `${(index % 2) * 100}ms` } as CSSProperties}
              className="glass rounded-card p-6"
            >
              <h4 className="text-lg">{group.title}</h4>
              <p className="mt-1 text-sm text-muted">{group.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <TechBadge tech={item} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
