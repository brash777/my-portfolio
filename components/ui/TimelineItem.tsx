import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { StatusTag } from "@/components/ui/StatusTag";
import { TechBadge } from "@/components/ui/TechBadge";
import { experienceContent as content } from "@/data/experience";
import { ui } from "@/data/site";
import { cn } from "@/lib/utils";
import type { ExperienceItem, ExperienceKind, ExperienceStatus } from "@/types";

export const kindIcon: Record<ExperienceKind, IconName> = {
  education: "book",
  freelance: "sparkle",
  project: "code",
  course: "flag",
};

const statusIcon: Record<ExperienceStatus, IconName> = {
  current: "clock",
  "in-progress": "clock",
  planned: "flag",
  completed: "check",
};

/** Tarjeta de un punto de la línea de tiempo */
export function TimelineItem({ item, className }: { item: ExperienceItem; className?: string }) {
  const isExternal = item.link?.href.startsWith("http");

  return (
    <article
      className={cn(
        "sticker rounded-sticker bg-paper p-6 text-ink [--focus:var(--color-ink)]",
        // los cursos planeados van con fondo amarillo para distinguirlos (además de su etiqueta)
        item.status === "planned" && "bg-yellow",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <StatusTag label={content.kindLabels[item.kind]} icon={kindIcon[item.kind]} variant="outline" />
        <StatusTag label={content.statusLabels[item.status]} icon={statusIcon[item.status]} />
        {item.period && <span className="text-sm font-semibold">{item.period}</span>}
      </div>
      <h3 className="mt-4 text-3xl leading-none">{item.title}</h3>
      <p className="mt-1 font-semibold">{item.place}</p>
      <p className="mt-3 leading-relaxed">{item.description}</p>

      {item.stack && (
        <ul className="mt-4 flex flex-wrap gap-2">
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
            className="mt-5 inline-flex items-center gap-1.5 font-bold underline decoration-3 underline-offset-4"
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
            className="mt-5 inline-flex font-bold underline decoration-3 underline-offset-4"
          >
            {item.link.label}
            <span className="sr-only">: {item.title}</span>
          </Link>
        ))}
    </article>
  );
}
