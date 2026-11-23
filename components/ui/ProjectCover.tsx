import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCoverProps {
  project: Project;
  size?: "sm" | "lg";
  className?: string;
}

/**
 * Portada de un proyecto sobre un panel azul de noche (con brillo y cuadrícula), según lo que tenga:
 * 1. captura → la muestra como pantalla de celular;
 * 2. solo logo → el logo en claro;
 * 3. nada → el nombre en grande con los íconos de su stack (decorativo).
 */
export function ProjectCover({ project, size = "sm", className }: ProjectCoverProps) {
  const height = size === "lg" ? "h-72 sm:h-96" : "h-52";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] bg-night-2",
        // cuadrícula muy tenue, como la del fondo de la página
        "bg-[linear-gradient(rgb(150_175_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(150_175_255/0.06)_1px,transparent_1px)] bg-size-[32px_32px]",
        height,
        className,
      )}
    >
      {/* brillo azul detrás del contenido */}
      <div aria-hidden="true" className="absolute -bottom-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-blue/40 blur-3xl" />

      {project.cover ? (
        // el celular sale desde arriba y se corta abajo: así siempre se ve el inicio de la pantalla
        <div className="relative flex h-full items-start justify-center pt-8">
          <div className="relative w-[46%] max-w-56 overflow-hidden rounded-t-[1.6rem] border border-b-0 border-line shadow-[0_0_60px_-10px_rgb(47_91_255/0.6)]">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 224px, 46vw"
              className="h-auto w-full"
            />
          </div>
          {project.logo && (
            <Image
              src={project.logo.src}
              alt=""
              sizes="56px"
              className="absolute top-5 left-5 size-14 rounded-2xl border border-line"
            />
          )}
        </div>
      ) : project.logo ? (
        <div className="relative grid h-full place-items-center p-8">
          {/* el logo es negro sobre blanco: se invierte y se mezcla para que quede claro sobre el panel */}
          <Image
            src={project.logo.src}
            alt={project.logo.alt}
            sizes="320px"
            className="h-auto w-56 [filter:invert(1)_hue-rotate(180deg)] mix-blend-screen sm:w-72"
          />
        </div>
      ) : (
        <div aria-hidden="true" className="relative flex h-full flex-col justify-between p-6 sm:p-8">
          <ul className="flex gap-2">
            {project.stack.slice(0, 4).map((item) =>
              item.icon ? (
                <li key={item.name} className="glass grid size-11 place-items-center rounded-xl">
                  <Image src={item.icon} alt="" width={22} height={22} unoptimized className="icon-light size-5.5" />
                </li>
              ) : null,
            )}
          </ul>
          <span className="text-4xl leading-none font-bold text-white [font-stretch:112%] sm:text-5xl">{project.name}</span>
        </div>
      )}
    </div>
  );
}
