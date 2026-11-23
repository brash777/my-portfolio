import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectLogoProps {
  project: Project;
  size?: "md" | "lg";
  className?: string;
}

/**
 * Cara de la tarjeta de un proyecto: el ícono de la app en grande, sobre un panel azul de noche
 * con un brillo detrás y la cuadrícula tenue de la página. El ícono es decorativo (el nombre va
 * escrito justo debajo), por eso alt="".
 */
export function ProjectLogo({ project, size = "md", className }: ProjectLogoProps) {
  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-[1.35rem] bg-night-2",
        "bg-[linear-gradient(rgb(150_175_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(150_175_255/0.06)_1px,transparent_1px)] bg-size-[32px_32px]",
        size === "lg" ? "h-64 sm:h-72" : "h-52",
        className,
      )}
    >
      <div aria-hidden="true" className="absolute size-64 rounded-full bg-blue/45 blur-3xl" />
      <Image
        src={project.icon}
        alt=""
        width={512}
        height={512}
        unoptimized={project.icon.endsWith(".svg")}
        sizes={size === "lg" ? "176px" : "128px"}
        className={cn(
          // [22%] redondea también los íconos que vienen cuadrados (OFFGRID)
          "relative rounded-[22%] shadow-[0_24px_60px_-16px_rgb(0_0_0/0.8)] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-3",
          size === "lg" ? "size-36 sm:size-44" : "size-28",
        )}
      />
    </div>
  );
}
