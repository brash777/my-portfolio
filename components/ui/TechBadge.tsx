import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Tech } from "@/types";

interface TechBadgeProps {
  tech: Tech;
  size?: "sm" | "md";
  className?: string;
}

/** Sticker con el ícono y el nombre de una tecnología (sin niveles ni porcentajes) */
export function TechBadge({ tech, size = "md", className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "sticker-sm inline-flex items-center gap-1.5 rounded-full bg-paper font-bold text-ink",
        size === "md" ? "px-3 py-1 text-sm" : "px-2.5 py-0.5 text-xs",
        className,
      )}
    >
      {tech.icon && (
        // el nombre ya está escrito al lado, así que el ícono es decorativo (alt vacío)
        <Image
          src={tech.icon}
          alt=""
          width={16}
          height={16}
          unoptimized
          className={size === "md" ? "size-4" : "size-3.5"}
        />
      )}
      {tech.name}
    </span>
  );
}
