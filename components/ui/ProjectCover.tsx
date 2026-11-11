import Image from "next/image";
import { accentSurface } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCoverProps {
  project: Project;
  size?: "sm" | "lg";
  className?: string;
}

/**
 * Portada de un proyecto, según lo que tenga:
 * 1. captura → la muestra como pantalla de celular sobre su color;
 * 2. solo logo → el logo como sticker;
 * 3. nada → el nombre en grande con los íconos de su stack (decorativo).
 */
export function ProjectCover({ project, size = "sm", className }: ProjectCoverProps) {
  const height = size === "lg" ? "min-h-80 h-full" : "h-56";

  if (project.cover) {
    return (
      // el celular sale desde arriba y se corta abajo, así siempre se ve el inicio de la pantalla
      <div className={cn("relative flex items-start justify-center overflow-hidden pt-8", accentSurface[project.accent], height, className)}>
        <div className="relative w-[52%] max-w-60 rotate-3 overflow-hidden rounded-t-[1.75rem] border-4 border-b-0 border-ink shadow-hard">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 240px, 50vw"
            className="h-auto w-full"
          />
        </div>
        {project.logo && (
          <div className="sticker-sm absolute top-5 left-5 size-16 -rotate-6 overflow-hidden rounded-2xl">
            <Image src={project.logo.src} alt="" sizes="64px" className="size-full object-cover" />
          </div>
        )}
      </div>
    );
  }

  if (project.logo) {
    return (
      <div className={cn("grid place-items-center p-8", accentSurface[project.accent], height, className)}>
        <div className="sticker -rotate-3 rounded-2xl bg-paper px-6 py-5">
          <Image src={project.logo.src} alt={project.logo.alt} sizes="240px" className="h-auto w-44 sm:w-52" />
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={cn("relative flex flex-col justify-end overflow-hidden p-6", accentSurface[project.accent], height, className)}>
      {/* a la izquierda: a la derecha va el botón de GitHub de la tarjeta */}
      <ul className="absolute top-5 left-5 flex gap-2">
        {project.stack.slice(0, 3).map((item, index) =>
          item.icon ? (
            <li
              key={item.name}
              className={cn("sticker-sm grid size-12 place-items-center rounded-full bg-paper", index % 2 ? "rotate-6" : "-rotate-6")}
            >
              <Image src={item.icon} alt="" width={24} height={24} unoptimized className="size-6" />
            </li>
          ) : null,
        )}
      </ul>
      <span className="font-display text-5xl leading-[0.85] font-extrabold font-stretch-condensed sm:text-6xl">
        {project.name}
      </span>
    </div>
  );
}
