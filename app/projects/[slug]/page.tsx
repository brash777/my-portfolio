import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Icon } from "@/components/ui/Icon";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { StatusTag } from "@/components/ui/StatusTag";
import { TechBadge } from "@/components/ui/TechBadge";
import { getProject, projects, projectsContent as content } from "@/data/projects";
import { site, ui } from "@/data/site";
import { statusIcon } from "@/lib/projects";
import { buttonPrimary, buttonSecondary } from "@/lib/styles";

// crea una página estática por cada proyecto de data/projects.ts al hacer el build
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: content.detail.notFoundTitle };
  return {
    title: `${project.name} | ${site.shortName}`,
    description: project.tagline,
  };
}

/** Página de detalle de un proyecto: /projects/<slug> */
export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((item) => item.slug !== project.slug);
  const { detail } = content;

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <article className="px-5 pt-32 pb-24 sm:px-8 lg:pt-40">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-soft hover:text-white"
            >
              <Icon name="chevronLeft" className="size-4" />
              {detail.back}
            </Link>

            <header className="mt-8 animate-rise-in">
              <div className="flex flex-wrap items-center gap-2">
                <StatusTag label={content.categoryLabels[project.category]} />
                <StatusTag label={content.statusLabels[project.status]} icon={statusIcon[project.status]} />
              </div>
              <h1 className="mt-5 text-hero">{project.name}</h1>
              <p className="mt-5 max-w-2xl text-xl text-muted">{project.tagline}</p>

              <dl className="mt-10 grid max-w-2xl gap-6 border-t border-line pt-8 sm:grid-cols-3">
                <div>
                  <dt className="text-sm text-muted">{detail.roleLabel}</dt>
                  <dd className="mt-1 font-semibold text-white">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">{detail.yearLabel}</dt>
                  <dd className="mt-1 font-semibold text-white">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">{detail.categoryLabel}</dt>
                  <dd className="mt-1 font-semibold text-white">{content.categoryLabels[project.category]}</dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
                    <Icon name="external" className="size-4" />
                    {content.demoButton}
                    <span className="sr-only"> {ui.opensNewTab}</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
                    <Image src="/images/icons/github.svg" alt="" width={18} height={18} unoptimized className="icon-light size-4.5" />
                    {content.repoButton}
                    <span className="sr-only"> {ui.opensNewTab}</span>
                  </a>
                )}
              </div>
            </header>

            <div className="mt-20 grid gap-14 lg:grid-cols-12">
              <div data-reveal="up" className="lg:col-span-7">
                {project.description.map((paragraph) => (
                  <p key={paragraph} className="mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
                <h2 className="mt-12 text-3xl">{detail.highlightsTitle}</h2>
                <ul className="mt-6 space-y-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-lg">
                      <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-blue/20 text-blue-soft">
                        <Icon name="check" className="size-3.5" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <aside data-reveal="right" className="lg:col-span-5">
                <div className="glass rounded-panel p-2">
                  <ProjectCover project={project} size="lg" />
                </div>
                <h2 className="mt-12 text-2xl">{detail.stackTitle}</h2>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {project.stack.map((item) => (
                    <li key={item.name}>
                      <TechBadge tech={item} />
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {project.gallery.length > 0 && (
              <section aria-labelledby="gallery-title" className="mt-24">
                <h2 id="gallery-title" className="text-3xl">
                  {detail.galleryTitle}
                </h2>
                <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:gap-8">
                  {project.gallery.map((image, index) => (
                    <li
                      key={image.alt}
                      data-reveal="up"
                      style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
                      className="glass rounded-panel p-2"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        placeholder="blur"
                        sizes="(min-width: 640px) 33vw, 50vw"
                        className="h-auto w-full rounded-[1.35rem]"
                      />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <nav aria-labelledby="others-title" className="mt-24">
              <h2 id="others-title" className="text-3xl">
                {detail.otherProjectsTitle}
              </h2>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {others.map((item, index) => (
                  <li key={item.slug} data-reveal="up" style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}>
                    <ProjectCard project={item} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </article>
      </main>
      <Footer linkPrefix="/" />
    </>
  );
}
