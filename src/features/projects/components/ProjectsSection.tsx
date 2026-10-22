
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectGrid from "./ProjectGrid";
import OngoingProjectsSection from "./OngoingProjectsSection";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pt-40">
        {/* Soft ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-32 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-[100px] dark:bg-sky-500/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-64 -z-10 h-96 w-96 rounded-full bg-violet-300/20 blur-[120px] dark:bg-violet-500/10"
        />

        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300 sm:text-sm">
              Featured Projects
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              From Ideas to{" "}
              <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Real-World Impact.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              A selection of projects exploring applied AI, intelligent agents,
              machine learning, and practical software engineering.
            </p>
          </header>

          <ProjectGrid projects={featuredProjects} />

          <div className="mt-12 flex justify-center sm:mt-14">
            <Link
              href="/projects/all"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-6 py-3 text-sm font-medium text-slate-800 shadow-sm backdrop-blur-md transition-all hover:border-violet-300 hover:text-violet-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-violet-400/40 dark:hover:text-violet-300"
            >
              View All Projects
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <OngoingProjectsSection />
    </>
  );
}
