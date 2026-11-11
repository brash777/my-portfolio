import { site, ui } from "@/data/site";

/** Inicio (azul). Base vacía: el contenido llega en la Fase 2. */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="flex min-h-svh items-center bg-blue px-5 pt-32 pb-20 text-paper [--focus:var(--color-paper)] sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-lg font-semibold">{site.role}</p>
        <h1 id="hero-title" className="mt-3 text-display">
          {site.shortName}
        </h1>
        <p className="mt-6 text-lg">{ui.sectionPending}</p>
      </div>
    </section>
  );
}
