import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface StatusTagProps {
  label: string;
  icon?: IconName;
  /** "solid": fondo blanco; "outline": solo borde, toma el color del texto */
  variant?: "solid" | "outline";
  className?: string;
}

/** Etiqueta pequeña de estado o tipo. Siempre lleva texto (y a veces ícono), nunca solo color. */
export function StatusTag({ label, icon, variant = "solid", className }: StatusTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1 text-sm font-bold",
        variant === "solid" ? "border-ink bg-paper text-ink" : "border-current",
        className,
      )}
    >
      {icon && <Icon name={icon} className="size-4" />}
      {label}
    </span>
  );
}
