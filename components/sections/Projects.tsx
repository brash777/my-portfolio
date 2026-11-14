import Link from "next/link";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { ProjectsGrid } from "@/components/ui/ProjectsGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusTag } from "@/components/ui/StatusTag";
import { TechBadge } from "@/components/ui/TechBadge";
import { sectionPalettes } from "@/data/palettes";
import { projects, projectsContent as content } from "@/data/projects";
import { ui } from "@/data/site";
import { paletteZone } from "@/lib/palette";
import { statusIcon } from "@/lib/projects";
import type { Project } from "@/types";

/** Tarjeta grande de una app destacada */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="sticker grid overflow-hidden rounded-sticker bg-paper text-ink [--focus:var(--color-ink)] lg:grid-cols-2">
      <div className="order-2 flex flex-col p-6 sm:p-10 lg:order-1">
        <div className="flex flex-wrap gap-2">
          <StatusTag label={content.statusLabels[project.status]} icon={statusIcon[project.status]} />
          <StatusTag label={content.categoryLabels[project.category]} variant="outline" />
        </div>
        <h4 className="mt-5 text-5xl leading-none sm:text-6xl">{project.name}</h4>
        <p className="mt-4 text-lg leading-relaxed">{project.tagline}</p>

        <p className="mt-6 text-sm font-semibold">{content.builtWith}</p>
        <ul className="mt-2 flex flex-wrap gap-2.5">
          {project.stack.map((item) => (
            <li key={item.name}>
              <TechBadge tech={item} size="sm" />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3 pt-2 lg:mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="sticker-sm inline-flex items-center rounded-full bg-ink px-5 py-2.5 font-bold text-paper transition-transform duration-200 hover:-translate-y-0.5"
          >
            {content.viewDetails}
            <span className="sr-only"> de {project.name}</span>
          </Link>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border-3 border-ink px-5 py-2 font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              {content.repoButton}
              <span className="sr-only"> de {project.name} {ui.opensNewTab}</span>
            </a>
          )}
        </div>
      </div>
      <ProjectCover project={project} size="lg" className="order-1 border-b-3 border-ink lg:order-2 lg:border-b-0 lg:border-l-3" />
    </article>
  );
}

/** Proyectos (fondo noche): apps destacadas que se apilan al hacer scroll + cuadrícula con filtro */
export function Projects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      {...paletteZone(sectionPalettes.projects)}
      className="px-5 py-24 text-paper [--focus:var(--color-paper)] sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="projects-title">{content.title}</SectionHeading>
        <p className="mt-4 max-w-2xl text-lg">{content.lead}</p>

        <h3 className="mt-16 text-4xl sm:text-5xl">{content.featuredTitle}</h3>
        {/* en computador cada tarjeta se queda pegada arriba y la siguiente se le apila encima */}
        <ul className="mt-8 space-y-12">
          {featured.map((project, index) => (
            <li key={project.slug} className="lg:sticky" style={{ top: `${7 + index * 1.5}rem` }}>
              <Reveal>
                <FeaturedProject project={project} />
              </Reveal>
            </li>
          ))}
        </ul>

        <h3 className="mt-28 text-4xl sm:text-5xl">{content.moreTitle}</h3>
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
