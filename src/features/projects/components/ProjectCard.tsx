
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const lifecycle = project.lifecycle;
  const status = lifecycle?.status;

  const statusConfig = {
    online: {
      label: "Online",
      badge:
        "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300",
      dot: "bg-emerald-500",
    },
    ongoing: {
      label: "Ongoing",
      badge:
        "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300",
      dot: "bg-orange-500",
    },
    planned: {
      label: "Planned",
      badge:
        "border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
      dot: "bg-slate-400",
    },
  } as const;

  const statusInfo = status ? statusConfig[status] : null;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/65 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-violet-400/30">
        {/* Project cover */}
        <div className="relative aspect-[16/9] shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
          {!imageFailed ? (
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-100 via-violet-100 to-pink-100 dark:from-slate-800 dark:via-violet-950 dark:to-slate-900">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/60 bg-white/60 text-violet-700 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-violet-200">
                <Layers3 size={30} strokeWidth={1.5} />
              </div>
            </div>
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"
          />

          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/75 text-slate-900 shadow-sm backdrop-blur-md transition-all duration-200 group-hover:bg-slate-900 group-hover:text-white dark:border-white/20 dark:bg-slate-900/70 dark:text-white">
            <ArrowUpRight size={19} />
          </div>
        </div>

        {/* Project information */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Title and status */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="min-w-0 flex-1 text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300 sm:text-xl">
              {project.title}
            </h3>

            {statusInfo && (
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-semibold ${statusInfo.badge}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${statusInfo.dot}`}
                />
                {statusInfo.label}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          {/* Release and development versions */}
          {(lifecycle?.currentVersion ||
            lifecycle?.developmentVersion) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {lifecycle.currentVersion && (
                <span className="inline-flex items-center rounded-lg border border-green-200/80 bg-green-50/80 px-2.5 py-1.5 text-xs font-medium text-green-700 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300">
                  Latest: v{lifecycle.currentVersion}
                </span>
              )}

              {lifecycle.developmentVersion && (
                <span className="inline-flex items-center rounded-lg border border-orange-200/80 bg-orange-50/80 px-2.5 py-1.5 text-xs font-medium text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300">
                  Developing: v{lifecycle.developmentVersion}
                </span>
              )}
            </div>
          )}

          {/* Technology tags — preserved */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
