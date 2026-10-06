import { ArrowDownToLine, ArrowRight } from "lucide-react";

import { HeroBackground } from "./HeroBackground";
import { HeroStats } from "./HeroStats";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        pt-24
        sm:pt-28
        lg:pt-28
      "
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center px-6 py-8 sm:px-8 lg:px-10 lg:py-6">
        <div className="w-full">
          {/* Main Hero */}
          <div className="grid w-full items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-10">
            {/* Left content */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <p
                className="
                  mb-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-slate-500
                  dark:text-slate-400
                "
              >
                AI Engineer
              </p>

              {/* Heading */}
              <h1
                className="
                  max-w-2xl
                  text-5xl
                  font-bold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-slate-950
                  sm:text-6xl
                  lg:text-[4rem]
                  xl:text-[4.25rem]
                  dark:text-white
                "
              >
                Building{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                  Intelligent
                </span>{" "}
                Products.
              </h1>

              {/* Capabilities */}
              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-x-2
                  gap-y-1
                  text-sm
                  font-medium
                  text-slate-600
                  dark:text-slate-400
                "
              >
                <span>Agentic AI</span>
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
                <span>Generative AI</span>
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
                <span>Full Stack</span>
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
                <span>Cloud</span>
              </div>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-6
                  text-slate-600
                  sm:text-base
                  sm:leading-7
                  dark:text-slate-400
                "
              >
                I design and build AI-powered products that solve real
                problems, from LLM agents to scalable cloud applications.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-slate-950
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-slate-950/10
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-slate-800
                    dark:bg-white
                    dark:text-slate-950
                    dark:shadow-none
                    dark:hover:bg-slate-200
                  "
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/resume/Pavan-Kumar-Resume.pdf"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-slate-200
                    bg-white/55
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-slate-700
                    backdrop-blur-xl
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-white
                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:text-slate-200
                    dark:hover:bg-white/[0.08]
                  "
                >
                  Download Resume
                  <ArrowDownToLine className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="lg:pl-0 xl:pl-2">
              <HeroVisual />
            </div>
          </div>

          {/* Full-width statistics */}
          <HeroStats />
        </div>
      </div>
    </section>
  );
}