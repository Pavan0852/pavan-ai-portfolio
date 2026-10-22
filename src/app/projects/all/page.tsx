
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import ProjectGrid from "@/features/projects/components/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "All Projects | Pavan Kumar",
  description:
    "Explore Pavan Kumar's projects in Agentic AI, Generative AI, machine learning, research, and software engineering.",
};

export default function AllProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pt-40">
        {/* Ambient background */}
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
              Project Collection
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Explore My{" "}
              <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Projects.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Explore my work across intelligent agents, applied AI, machine
              learning, research, and software development.
            </p>
          </header>

          <ProjectGrid projects={projects} />
        </div>
      </main>
    </>
  );
}
