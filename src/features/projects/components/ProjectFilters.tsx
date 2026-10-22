
"use client";

import type { ProjectCategory } from "@/types/project";

type ProjectFilter = "All" | ProjectCategory;

interface ProjectFiltersProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

const filters: ProjectFilter[] = [
  "All",
  "LLM / Agents",
  "Web Apps",
  "ML / DL",
  "Cloud",
  "Research",
];

export default function ProjectFilters({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-3"
      aria-label="Filter projects by category"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                : "border-slate-200/80 bg-white/60 text-slate-600 hover:border-slate-400 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/30 dark:hover:text-white"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
