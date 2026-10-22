
import { ArrowRight, Code2, GitBranch } from "lucide-react";
import Link from "next/link";

import { projects } from "@/data/projects";
import { ongoingProjectSlugs } from "@/data/ongoing-projects";
import ProjectCard from "./ProjectCard";

export default function OngoingProjectsSection() {
  const ongoingProjects = ongoingProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(
      (project): project is NonNullable<typeof project> =>
        project?.lifecycle?.status === "ongoing",
    );

  return (
    <section className="relative px-5 pb-24 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300 sm:text-sm">
              Currently Building
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Ongoing Projects
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
              A look at the products I&apos;m building, the versions in
              development, and the milestones ahead.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-orange-200/80 bg-orange-50/70 px-3 py-2 text-xs font-medium text-orange-800 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200 sm:self-auto">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            In development
          </div>
        </div>

        {ongoingProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingProjects.map((project) => {
              const nextMilestone = project.lifecycle?.roadmap?.find(
                (item) =>
                  item.status === "in-progress" || item.status === "planned",
              );

              return (
                <div key={project.slug} className="flex h-full flex-col">
                  <div className="flex-1">
                    <ProjectCard project={project} />
                  </div>

                  {nextMilestone && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-3 flex items-start gap-3 rounded-2xl border border-orange-200/60 bg-orange-50/50 p-4 transition-colors hover:border-orange-300 hover:bg-orange-50 dark:border-orange-400/15 dark:bg-orange-400/[0.04] dark:hover:bg-orange-400/[0.08]"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300">
                        <GitBranch size={16} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-700 dark:text-orange-300">
                          Next milestone
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                          {nextMilestone.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                          {nextMilestone.description}
                        </p>
                      </div>

                      <ArrowRight
                        size={16}
                        className="mt-1 shrink-0 text-orange-700 dark:text-orange-300"
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200/70 bg-white/50 p-8 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <p className="font-medium text-slate-900 dark:text-white">
              No active projects configured yet
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Add projects with an ongoing lifecycle status to display them
              here.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/50 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
              <Code2 size={20} />
            </div>

            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">
                More projects in progress
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                New products and experiments will appear here as they take
                shape.
              </p>
            </div>
          </div>

          <Link
            href="/projects/all"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-violet-700 transition-colors hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200"
          >
            Explore all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
