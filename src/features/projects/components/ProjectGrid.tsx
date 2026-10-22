
"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import type { Project, ProjectCategory } from "@/types/project";

type ProjectFilter = "All" | ProjectCategory;

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <div>
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {filteredProjects.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-7 rounded-3xl border border-dashed border-slate-300/80 px-6 py-16 text-center dark:border-white/15">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            No projects found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
