import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

/** Sticker pequeño con el nombre de una tecnología (sin niveles ni porcentajes) */
export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "sticker-sm inline-flex items-center rounded-full bg-paper px-3 py-1 text-sm font-bold text-ink",
        className,
      )}
    >
      {name}
    </span>
  );
}
