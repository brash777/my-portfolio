"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { projectsContent as content } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

type Filter = ProjectCategory | "all";

/** Cuadrícula de proyectos con filtro por tipo (solo aparecen los tipos que tienen proyectos) */
export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const categories = [...new Set(projects.map((project) => project.category))];
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: content.allFilter, count: projects.length },
    ...categories.map((category) => ({
      id: category,
      label: content.categoryLabels[category],
      count: projects.filter((project) => project.category === category).length,
    })),
  ];

  return (
    <div>
      <div role="group" aria-label={content.filterLabel} className="mt-8 flex flex-wrap gap-3">
        {filters.map((item) => {
          const isActive = item.id === filter;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(item.id)}
              className={cn(
                "rounded-full border-3 border-ink px-4 py-2 font-bold transition-transform duration-200 hover:-translate-y-0.5",
                isActive ? "bg-ink text-paper" : "bg-paper text-ink",
              )}
            >
              {item.label} <span className="font-semibold">({item.count})</span>
            </button>
          );
        })}
      </div>

      {/* aviso para lectores de pantalla cuando cambia el filtro */}
      <p aria-live="polite" className="sr-only">
        {content.resultsLabel.replace("{n}", String(visible.length))}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-lg">{content.emptyFilter}</p>
      ) : (
        <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={(index % 3) * 100} className="h-full">
                <TiltCard max={5} className="h-full">
                  <ProjectCard project={project} />
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
