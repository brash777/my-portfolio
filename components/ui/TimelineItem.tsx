import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { TechBadge } from "@/components/ui/TechBadge";
import { experienceContent as content } from "@/data/experience";
import { ui } from "@/data/site";
import type { ExperienceItem, ExperienceKind } from "@/types";

export const kindIcon: Record<ExperienceKind, IconName> = {
  education: "book",
  freelance: "briefcase",
  project: "code",
};

/** Contenido de un punto de la experiencia: fechas, título, lugar, descripción, tecnologías y enlace */
export function TimelineItem({ item }: { item: ExperienceItem }) {
  const isExternal = item.link?.href.startsWith("http");

  return (
    <>
      <p className="text-sm font-medium text-blue-soft">
        {item.period}
        <span className="text-muted"> · {content.kindLabels[item.kind]}</span>
      </p>
      <h4 className="mt-1.5 text-xl">{item.title}</h4>
      <p className="text-sm text-muted">{item.place}</p>
      <p className="mt-3 text-text/90">{item.description}</p>

      {item.stack && (
        <ul aria-label="Tecnologías" className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((entry) => (
            <li key={entry.name}>
              <TechBadge tech={entry} size="sm" />
            </li>
          ))}
        </ul>
      )}

      {item.link &&
        (isExternal ? (
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue-soft hover:text-white"
          >
            {item.link.label}
            <Icon name="external" className="size-4" />
            <span className="sr-only">
              : {item.title} {ui.opensNewTab}
            </span>
          </a>
        ) : (
          <Link
            href={item.link.href}
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue-soft hover:text-white"
          >
            {item.link.label}
            <Icon name="arrowUpRight" className="size-4" />
            <span className="sr-only">: {item.title}</span>
          </Link>
        ))}
    </>
  );
}
