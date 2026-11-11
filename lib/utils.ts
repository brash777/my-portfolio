/** Une clases de Tailwind e ignora las vacías: cn("a", activo && "b") */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** URL legible para mostrar como texto: sin "https://", sin "www." y sin "/" final */
export function displayUrl(href: string): string {
  return href.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}
