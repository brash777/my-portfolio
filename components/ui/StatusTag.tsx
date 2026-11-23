import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface StatusTagProps {
  label: string;
  icon?: IconName;
  className?: string;
}

/** Etiqueta pequeña de estado o tipo. Siempre lleva texto (y a veces ícono), nunca solo color. */
export function StatusTag({ label, icon, className }: StatusTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-blue-soft/30 bg-blue/10 px-3 py-1 text-sm font-medium text-blue-soft",
        className,
      )}
    >
      {icon && <Icon name={icon} className="size-4" />}
      {label}
    </span>
  );
}
