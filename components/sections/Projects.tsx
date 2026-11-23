import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusTag } from "@/components/ui/StatusTag";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects, projectsContent as content } from "@/data/projects";
import { ui } from "@/data/site";
import { statusIcon } from "@/lib/projects";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const MAX_BADGES = 6;
const MAX_HIGHLIGHTS = 3;

/** Una fila: la portada grande a un lado y la información al otro (se alternan) */
function ProjectRow({ project, reverse }: { project: Project; reverse: boolean }) {
  const hidden = project.stack.length - MAX_BADGES;
  const detailHref = `/projects/${project.slug}`;

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      {/* la portada repite el enlace del título: se oculta del teclado y del lector de pantalla */}
      <Link
        href={detailHref}
        tabIndex={-1}
        aria-hidden="true"
        className={cn(
          "glass block rounded-panel p-2 transition duration-300 hover:-translate-y-1 hover:border-blue-soft/40 lg:col-span-7",
          reverse && "lg:order-last",
        )}
      >
        <ProjectCover project={project} size="lg" />
      </Link>

      <div className="lg:col-span-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusTag label={content.categoryLabels[project.category]} />
          <StatusTag label={content.statusLabels[project.status]} icon={statusIcon[project.status]} />
          <span className="text-sm text-muted">{project.year}</span>
        </div>

        <h3 className="mt-4 text-3xl sm:text-4xl">
          <Link href={detailHref} className="group inline-flex items-center gap-2 hover:text-blue-soft">
            {project.name}
            <Icon name="arrowUpRight" className="size-6 text-blue-soft transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </h3>
        <p className="mt-4 text-lg text-muted">{project.tagline}</p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.slice(0, MAX_HIGHLIGHTS).map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm">
              <Icon name="check" className="mt-0.5 size-4 text-blue-soft" />
              {highlight}
            </li>
          ))}
        </ul>

        <ul aria-label={content.builtWith} className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, MAX_BADGES).map((item) => (
            <li key={item.name}>
              <TechBadge tech={item} size="sm" />
            </li>
          ))}
          {hidden > 0 && <li className="self-center text-xs font-semibold text-muted">+{hidden}</li>}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={detailHref} className={buttonPrimary}>
            {content.viewDetails}
            <span className="sr-only"> {project.name}</span>
          </Link>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              {content.repoButton}
              <span className="sr-only">
                {" "}
                de {project.name} {ui.opensNewTab}
              </span>
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              <Icon name="external" className="size-4" />
              {content.demoButton}
              <span className="sr-only">
                {" "}
                de {project.name} {ui.opensNewTab}
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Proyectos: todos en filas que se alternan, primero las apps más grandes */
export function Projects() {
  // primero los destacados; dentro de cada grupo se respeta el orden de data/projects.ts
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="projects" aria-labelledby="projects-title" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="projects-title" lead={content.lead}>
          {content.title}
        </SectionHeading>

        <ul className="mt-16 space-y-20 lg:space-y-28">
          {ordered.map((project, index) => (
            <li key={project.slug}>
              <ProjectRow project={project} reverse={index % 2 === 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
