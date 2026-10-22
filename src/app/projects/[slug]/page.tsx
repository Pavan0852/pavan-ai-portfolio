
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Circle,
  Clock3,
  GitBranch,
  Rocket,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { projects } from "@/data/projects";
import type { ProjectStatus, RoadmapStatus } from "@/types/project";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

const statusLabels: Record<ProjectStatus, string> = {
  online: "Online",
  ongoing: "Ongoing",
  planned: "Planned",
};

const roadmapStatusLabels: Record<RoadmapStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};

const roadmapStatusClasses: Record<RoadmapStatus, string> = {
  completed:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300",
  "in-progress":
    "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300",
  planned:
    "border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
};

const roadmapIcons: Record<RoadmapStatus, typeof CheckCircle2> = {
  completed: CheckCircle2,
  "in-progress": Clock3,
  planned: Circle,
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Pavan Kumar" };
  }

  return {
    title: `${project.title} | Pavan Kumar`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const lifecycle = project.lifecycle;

  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-32 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-[100px] dark:bg-sky-500/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-96 -z-10 h-96 w-96 rounded-full bg-violet-300/15 blur-[120px] dark:bg-violet-500/10"
        />

        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects/all"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-violet-700 dark:text-slate-300 dark:hover:text-violet-300"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>

          {/* Project heading */}
          <header className="mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300">
                Project Case Study
              </p>

              {lifecycle && (
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    lifecycle.status === "online"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
                      : lifecycle.status === "ongoing"
                        ? "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300"
                        : "border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      lifecycle.status === "online"
                        ? "bg-emerald-500"
                        : lifecycle.status === "ongoing"
                          ? "bg-orange-500"
                          : "bg-slate-400"
                    }`}
                  />
                  {statusLabels[lifecycle.status]}
                </span>
              )}
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-violet-200/80 bg-violet-50/70 px-3 py-1.5 text-xs font-medium text-violet-800 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-200"
                >
                  {category}
                </span>
              ))}
            </div>
          </header>

          {/* Project cover */}
          <section className="mt-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
            <div className="relative aspect-[16/9] bg-slate-100 dark:bg-slate-900">
              <Image
                src={project.image}
                alt={`${project.title} project cover`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain object-center"
              />
            </div>
          </section>

          {/* Release overview */}
          {lifecycle &&
            (lifecycle.currentVersion ||
              lifecycle.developmentVersion) && (
              <section className="mt-8 grid gap-4 sm:grid-cols-2">
                {lifecycle.currentVersion && (
                  <div className="rounded-2xl border border-emerald-200/70 bg-white/70 p-5 backdrop-blur-xl dark:border-emerald-400/15 dark:bg-white/[0.04]">
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                      <Rocket size={17} />
                      Latest release
                    </div>
                    <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                      v{lifecycle.currentVersion}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {lifecycle.status === "online"
                        ? "Current release"
                        : "Most recently recorded release"}
                    </p>
                  </div>
                )}

                {lifecycle.developmentVersion && (
                  <div className="rounded-2xl border border-orange-200/70 bg-white/70 p-5 backdrop-blur-xl dark:border-orange-400/15 dark:bg-white/[0.04]">
                    <div className="flex items-center gap-2 text-sm font-medium text-orange-700 dark:text-orange-300">
                      <GitBranch size={17} />
                      Under development
                    </div>
                    <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                      v{lifecycle.developmentVersion}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Planned next version
                    </p>
                  </div>
                )}
              </section>
            )}

          {/* Overview and technologies */}
          <section className="mt-8 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Overview
            </h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-950 dark:text-white">
              Technologies
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            {(project.links.github || project.links.live) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    View Source
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            )}
          </section>

          {/* Latest release notes */}
          {lifecycle?.latestReleaseNotes &&
            lifecycle.latestReleaseNotes.length > 0 && (
              <section className="mt-8 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                  Latest Release Notes
                </h2>

                <ul className="mt-5 space-y-3">
                  {lifecycle.latestReleaseNotes.map((note, index) => (
                    <li
                      key={`${index}-${note}`}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                      {note}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          {/* Release history */}
          {lifecycle?.releases && lifecycle.releases.length > 0 && (
            <section className="mt-8 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                Release History
              </h2>

              <div className="mt-6">
                {lifecycle.releases.map((release, index) => (
                  <div
                    key={`${release.version}-${release.date ?? "undated"}`}
                    className="relative flex gap-4 pb-7 last:pb-0"
                  >
                    {/* Continuous timeline */}
                    <div className="relative flex w-3 shrink-0 justify-center">
                      {index !== (lifecycle.releases?.length ?? 0) - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 top-2 w-px bg-violet-300 dark:bg-violet-400/40"
                        />
                      )}

                      {/* Release dot */}
                      <span className="relative z-10 mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-violet-500 bg-white ring-4 ring-violet-100 dark:border-violet-300 dark:bg-slate-900 dark:ring-violet-400/10" />
                    </div>

                    {/* Release details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-950 dark:text-white">
                          v{release.version}
                        </h3>

                        {release.notes[0] &&
                          ["major", "minor", "patch"].includes(
                            release.notes[0].toLowerCase(),
                          ) && (
                            <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium lowercase tracking-wide text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                              {release.notes[0].toLowerCase()}
                            </span>
                          )}

                        {release.date && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {release.date}
                          </span>
                        )}
                      </div>

                      <ul className="mt-2 space-y-1">
                        {release.notes
                          .filter(
                            (note, noteIndex) =>
                              !(
                                noteIndex === 0 &&
                                ["major", "minor", "patch"].includes(
                                  note.toLowerCase(),
                                )
                              ),
                          )
                          .map((note, noteIndex) => (
                            <li
                              key={`${release.version}-${noteIndex}`}
                              className="text-sm leading-6 text-slate-600 dark:text-slate-300"
                            >
                              {note}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}



          {/* Development roadmap */}
          {lifecycle?.roadmap && lifecycle.roadmap.length > 0 && (
            <section className="mt-8 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <div className="flex items-center gap-3">
                <GitBranch
                  size={21}
                  className="text-violet-700 dark:text-violet-300"
                />
                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                  Development Roadmap
                </h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Explore completed work, current development, and planned
                improvements for this project.
              </p>

              <div className="mt-6 space-y-4">
                {lifecycle.roadmap.map((item, index) => {
                  const StatusIcon = roadmapIcons[item.status];

                  return (
                    <article
                      key={`${item.title}-${index}`}
                      className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 dark:border-white/10 dark:bg-white/[0.025] sm:p-5"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-3">
                          <StatusIcon
                            size={19}
                            className={`mt-0.5 shrink-0 ${
                              item.status === "completed"
                                ? "text-emerald-600 dark:text-emerald-400"
                                : item.status === "in-progress"
                                  ? "text-orange-600 dark:text-orange-400"
                                  : "text-slate-400"
                            }`}
                          />

                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`inline-flex w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${roadmapStatusClasses[item.status]}`}
                        >
                          {roadmapStatusLabels[item.status]}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          <div className="mt-10">
            <Link
              href="/projects/all"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 transition-colors hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200"
            >
              <ArrowLeft size={16} />
              Explore more projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
