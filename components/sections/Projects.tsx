import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/ui/Icon";
import { ProjectLogo } from "@/components/ui/ProjectLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusTag } from "@/components/ui/StatusTag";
import { projects, projectsContent as content } from "@/data/projects";
import { ui } from "@/data/site";
import { statusIcon } from "@/lib/projects";
import { buttonPrimary } from "@/lib/styles";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const MAX_TECH = 6;

/** Tarjeta de un proyecto: el logo en la cara, el título, la frase, sus tecnologías y los enlaces */
function ProjectCardLarge({ project }: { project: Project }) {
  const hidden = project.stack.length - MAX_TECH;
  const detailHref = `/projects/${project.slug}`;

  return (
    <article className="glass group rounded-panel p-2 transition duration-300 hover:-translate-y-1 hover:border-blue-soft/40">
      <ProjectLogo project={project} size={project.featured ? "lg" : "md"} />

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <StatusTag label={content.categoryLabels[project.category]} />
          <StatusTag label={content.statusLabels[project.status]} icon={statusIcon[project.status]} />
          <span className="text-sm text-muted">{project.year}</span>
        </div>

        <h3 className={cn("mt-4", project.featured ? "text-3xl" : "text-2xl")}>
          <Link href={detailHref} className="hover:text-blue-soft">
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 text-muted">{project.tagline}</p>

        {/* tecnologías como íconos (como en la referencia); el nombre va en el texto alternativo */}
        <ul aria-label={content.builtWith} className="mt-5 flex flex-wrap items-center gap-2">
          {project.stack.slice(0, MAX_TECH).map((item) => (
            <li key={item.name} title={item.name} className="glass grid size-9 place-items-center rounded-xl">
              {item.icon ? (
                <Image src={item.icon} alt={item.name} width={18} height={18} unoptimized className="icon-light size-4.5" />
              ) : (
                <span className="text-[0.6rem] leading-none font-semibold">{item.name.slice(0, 4)}</span>
              )}
            </li>
          ))}
          {hidden > 0 && <li className="px-1 text-xs font-semibold text-muted">+{hidden}</li>}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href={detailHref} className={cn(buttonPrimary, "min-h-11 px-5 py-2 text-sm")}>
            {content.viewDetails}
            <span className="sr-only"> {project.name}</span>
          </Link>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass grid size-11 place-items-center rounded-full transition duration-200 hover:-translate-y-0.5 hover:border-blue-soft/40"
            >
              <Image src="/images/icons/github.svg" alt="" width={20} height={20} unoptimized className="icon-light size-5" />
              <span className="sr-only">
                {content.repoButton} de {project.name} {ui.opensNewTab}
              </span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue-soft hover:text-white"
            >
              <Icon name="external" className="size-4" />
              {project.demoLabel ?? content.demoButton}
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

/**
 * Una columna de tarjetas; cada una entra desde abajo al aparecer en pantalla.
 * En celular la columna no existe como caja (display: contents) y las tarjetas de las dos columnas
 * se ordenan con "order" según su lugar en la lista; en computador cada columna es su propia pila.
 */
function Column({ items, ordered, className }: { items: Project[]; ordered: Project[]; className?: string }) {
  return (
    <ul className={cn("contents lg:flex lg:flex-col lg:gap-8", className)}>
      {items.map((project, index) => (
        <li
          key={project.slug}
          data-reveal="up"
          style={{ order: ordered.indexOf(project), "--reveal-delay": `${index * 80}ms` } as CSSProperties}
        >
          <ProjectCardLarge project={project} />
        </li>
      ))}
    </ul>
  );
}

/**
 * Proyectos: tarjetas con el logo de cada app, en dos columnas desfasadas (la de la derecha
 * empieza más abajo). Primero van las apps grandes. En celular es una sola columna en orden.
 */
export function Projects() {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  const left = ordered.filter((_, index) => index % 2 === 0);
  const right = ordered.filter((_, index) => index % 2 === 1);

  return (
    <section id="projects" aria-labelledby="projects-title" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal="up">
          <SectionHeading id="projects-title" lead={content.lead}>
            {content.title}
          </SectionHeading>
        </div>

        <div className="mt-14 flex flex-col gap-8 lg:mt-16 lg:grid lg:grid-cols-2 lg:items-start">
          <Column items={left} ordered={ordered} />
          <Column items={right} ordered={ordered} className="lg:pt-24" />
        </div>
      </div>
    </section>
  );
}
