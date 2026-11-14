import Image from "next/image";
import Link from "next/link";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { StatusTag } from "@/components/ui/StatusTag";
import { TechBadge } from "@/components/ui/TechBadge";
import { projectsContent as content } from "@/data/projects";
import { ui } from "@/data/site";
import { statusIcon } from "@/lib/projects";
import type { Project } from "@/types";

const MAX_BADGES = 4;

/** Tarjeta de la cuadrícula: portada, estado, nombre, frase, stack y enlaces */
export function ProjectCard({ project }: { project: Project }) {
  const hidden = project.stack.length - MAX_BADGES;

  return (
    <article className="sticker relative flex h-full flex-col overflow-hidden rounded-sticker bg-paper text-ink [--focus:var(--color-ink)]">
      <ProjectCover project={project} className="border-b-3 border-ink" />

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sticker-sm absolute top-3 right-3 grid size-12 place-items-center rounded-full bg-paper transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Image src="/images/icons/github.svg" alt="" width={24} height={24} unoptimized className="size-6" />
          <span className="sr-only">
            {content.repoLinkLabel.replace("{name}", project.name)} {ui.opensNewTab}
          </span>
        </a>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <StatusTag label={content.statusLabels[project.status]} icon={statusIcon[project.status]} />
          <StatusTag label={content.categoryLabels[project.category]} variant="outline" />
        </div>
        <h4 className="mt-4 text-3xl leading-none">{project.name}</h4>
        <p className="mt-2 text-sm leading-relaxed">{project.tagline}</p>

        <p className="mt-5 text-xs font-semibold">{content.builtWith}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.stack.slice(0, MAX_BADGES).map((item) => (
            <li key={item.name}>
              <TechBadge tech={item} size="sm" />
            </li>
          ))}
          {hidden > 0 && <li className="self-center text-xs font-bold">+{hidden}</li>}
        </ul>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-1 pt-6 font-bold underline decoration-3 underline-offset-4 hover:decoration-red"
        >
          {content.viewDetails}
          <span className="sr-only"> de {project.name}</span>
        </Link>
      </div>
    </article>
  );
}
