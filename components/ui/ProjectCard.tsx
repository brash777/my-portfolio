import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { StatusTag } from "@/components/ui/StatusTag";
import { projectsContent as content } from "@/data/projects";
import { statusIcon } from "@/lib/projects";
import type { Project } from "@/types";

/** Tarjeta pequeña de vidrio (en "Otros proyectos" de cada página de detalle) */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group relative flex h-full flex-col rounded-panel p-2 transition duration-200 hover:-translate-y-1 hover:border-blue-soft/40">
      <ProjectCover project={project} />
      <div className="flex flex-1 flex-col p-4">
        <StatusTag label={content.statusLabels[project.status]} icon={statusIcon[project.status]} className="w-fit" />
        <h3 className="mt-3 text-xl">
          {/* el enlace cubre toda la tarjeta (after:absolute) */}
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:rounded-panel">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <span aria-hidden="true" className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-blue-soft">
          {content.viewDetails}
          <Icon name="arrowUpRight" className="size-4" />
        </span>
      </div>
    </article>
  );
}
