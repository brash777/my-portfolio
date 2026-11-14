import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ChameleonBackground } from "@/components/ui/ChameleonBackground";
import { Icon } from "@/components/ui/Icon";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { StatusTag } from "@/components/ui/StatusTag";
import { TechBadge } from "@/components/ui/TechBadge";
import { getProject, projects, projectsContent as content } from "@/data/projects";
import { site, ui } from "@/data/site";
import { accentFill } from "@/lib/accent";
import { projectPalette } from "@/lib/palette";
import { statusIcon } from "@/lib/projects";
import { cn } from "@/lib/utils";

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
        <article className="relative text-paper [--focus:var(--color-paper)]">
          {/* la página toma los colores de la app (Flux IA en violeta, FlowStore con los de OFFGRID…) */}
          <ChameleonBackground palette={projectPalette(project)} />
          <header className="px-5 pt-32 pb-16 sm:px-8 lg:pt-40">
            <div className="mx-auto max-w-6xl">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border-3 border-current px-4 py-2 font-bold transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Icon name="chevronLeft" />
                {detail.back}
              </Link>
              <div className="mt-10 flex flex-wrap gap-2">
                <StatusTag label={content.statusLabels[project.status]} icon={statusIcon[project.status]} />
                <StatusTag label={content.categoryLabels[project.category]} variant="outline" />
              </div>
              <h1 className="mt-5 text-display">{project.name}</h1>
              <p className="mt-5 max-w-2xl text-xl leading-relaxed">{project.tagline}</p>

              <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
                <div>
                  <dt className="text-sm font-semibold">{detail.roleLabel}</dt>
                  <dd className="text-lg font-bold">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold">{detail.yearLabel}</dt>
                  <dd className="text-lg font-bold">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold">{detail.categoryLabel}</dt>
                  <dd className="text-lg font-bold">{content.categoryLabels[project.category]}</dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sticker-sm inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <Image src="/images/icons/github.svg" alt="" width={20} height={20} unoptimized className="size-5" />
                    {content.repoButton}
                    <span className="sr-only"> {ui.opensNewTab}</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sticker-sm inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-2.5 font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <Icon name="external" />
                    {content.demoButton}
                    <span className="sr-only"> {ui.opensNewTab}</span>
                  </a>
                )}
              </div>
            </div>
          </header>

          <div className="px-5 py-20 sm:px-8">
            <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                {project.description.map((paragraph) => (
                  <p key={paragraph} className="mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <h2 className="mt-12 text-5xl">{detail.highlightsTitle}</h2>
                <ul className="mt-6 space-y-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-lg leading-snug">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-yellow text-ink">
                        <Icon name="check" className="size-4" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:col-span-5">
                <div className="sticker overflow-hidden rounded-sticker">
                  <ProjectCover project={project} size="lg" />
                </div>
                <h2 className="mt-12 text-4xl">{detail.stackTitle}</h2>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <li key={item.name}>
                      <TechBadge tech={item} />
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {project.gallery.length > 0 && (
              <section aria-labelledby="gallery-title" className="mx-auto mt-24 max-w-6xl">
                <h2 id="gallery-title" className="text-5xl">
                  {detail.galleryTitle}
                </h2>
                <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-10">
                  {project.gallery.map((image, index) => (
                    <li key={image.alt} className={index % 2 ? "rotate-2" : "-rotate-2"}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        placeholder="blur"
                        sizes="(min-width: 640px) 33vw, 50vw"
                        className="sticker h-auto w-full rounded-[1.5rem]"
                      />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <nav aria-labelledby="others-title" className="mx-auto mt-24 max-w-6xl">
              <h2 id="others-title" className="text-5xl">
                {detail.otherProjectsTitle}
              </h2>
              <ul className="mt-8 flex flex-wrap gap-4">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/projects/${item.slug}`}
                      className={cn(
                        "sticker-sm inline-flex rounded-full px-5 py-2.5 font-bold transition-transform duration-200 hover:-translate-y-0.5",
                        accentFill[item.accent],
                      )}
                    >
                      {item.name}
                    </Link>
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
