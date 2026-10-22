
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
} from "lucide-react";

export function HeroVisual() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showFocus, setShowFocus] = useState(false);

  return (
    <div
      className="
        relative mx-auto min-h-[42rem] w-full max-w-xl
        overflow-visible
        sm:aspect-[1.05/1] sm:min-h-0
      "
    >
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-[42%]
          h-[80%] w-[105%] -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle_at_32%_28%,rgba(129,140,248,0.62),transparent_34%),radial-gradient(circle_at_76%_30%,rgba(34,211,238,0.58),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(244,114,182,0.58),transparent_36%),radial-gradient(circle_at_30%_76%,rgba(139,92,246,0.48),transparent_42%)]
          blur-2xl dark:opacity-70
          sm:top-1/2 sm:h-[105%]
        "
      />

      {/* Large orbital ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-[42%]
          h-[76%] w-[94%] -translate-x-1/2 -translate-y-1/2
          rotate-[18deg] rounded-[48%] border border-cyan-300/45
          shadow-[0_0_45px_rgba(56,189,248,0.12)]
          dark:border-cyan-400/20
          sm:top-1/2 sm:h-[108%] sm:w-[108%]
        "
      />

      {/* Secondary orbital ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-[42%]
          h-[68%] w-[82%] -translate-x-1/2 -translate-y-1/2
          -rotate-[22deg] rounded-[45%] border border-violet-300/40
          dark:border-violet-400/20
          sm:top-1/2 sm:h-[94%] sm:w-[94%]
        "
      />

      {/* Floating gradient sphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-[1%] top-[8%]
          h-16 w-16 rounded-full
          bg-[radial-gradient(circle_at_32%_28%,rgba(125,211,252,0.95),rgba(99,102,241,0.85)_52%,rgba(124,58,237,0.9))]
          shadow-[0_15px_45px_rgba(79,70,229,0.25)] blur-[0.2px]
          sm:left-[-2%] sm:top-[12%] sm:h-[5.5rem] sm:w-[5.5rem]
        "
      />

      {/* Small atmospheric sphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-[8%] top-[53%]
          h-10 w-10 rounded-full bg-pink-300/40 blur-xl
          dark:bg-pink-400/20 sm:top-[62%]
        "
      />

      {/* Main glass card */}
      <div
        className="
          absolute left-[15%] top-[9%] z-10 w-[78%]
          overflow-visible rounded-[1.75rem] border border-white/75
          bg-white/45 p-5
          shadow-[0_30px_80px_-25px_rgba(79,70,229,0.28)]
          backdrop-blur-2xl transition duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-[0_35px_90px_-25px_rgba(79,70,229,0.35)]
          dark:border-white/10 dark:bg-white/[0.055]
          dark:shadow-[0_30px_80px_-25px_rgba(99,102,241,0.18)]
          sm:left-[25%] sm:top-[15%] sm:w-[67%] sm:rounded-[2rem] sm:p-6
        "
      >
        {/* Card atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 -z-0 overflow-hidden
            rounded-[1.75rem]
            bg-[radial-gradient(circle_at_78%_20%,rgba(125,211,252,0.28),transparent_42%),radial-gradient(circle_at_30%_72%,rgba(167,139,250,0.22),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(244,114,182,0.16),transparent_40%)]
            sm:rounded-[2rem]
          "
        />

        <div className="relative z-10">
          {/* Card header */}
          <div className="flex items-start justify-between">
            <div
              className="
                relative flex h-11 w-11 items-center justify-center
                rounded-2xl border border-white/70 bg-white/45
                shadow-[0_10px_25px_rgba(79,70,229,0.12)]
                backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]
                sm:h-12 sm:w-12
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute h-7 w-7 rotate-45 rounded-[7px] border
                  border-cyan-200/80
                  bg-gradient-to-br from-cyan-100/80 via-indigo-100/70 to-violet-200/70
                  shadow-inner dark:border-cyan-300/20
                  dark:from-cyan-400/20 dark:via-indigo-400/20 dark:to-violet-400/20
                "
              />

              <BrainCircuit className="relative z-10 h-5 w-5 text-slate-700 dark:text-slate-200" />
            </div>

            {/* Quick navigation */}
            <div className="relative">
              <button
                type="button"
                aria-label="Toggle quick navigation"
                aria-expanded={showNavigation}
                aria-controls="hero-quick-navigation"
                onClick={() => setShowNavigation((open) => !open)}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/70 bg-white/55
                  text-slate-500 shadow-sm backdrop-blur-xl
                  transition duration-200 hover:-translate-y-0.5
                  hover:bg-white/80 hover:text-violet-700
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-violet-500
                  dark:border-white/10 dark:bg-white/[0.06]
                  dark:text-slate-300 dark:hover:bg-white/10
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>

              {showNavigation && (
                <nav
                  id="hero-quick-navigation"
                  aria-label="Quick navigation"
                  className="
                    absolute right-0 top-12 z-30 w-48
                    rounded-2xl border border-white/70
                    bg-white/95 p-2 shadow-xl backdrop-blur-2xl
                    dark:border-white/10 dark:bg-slate-900/95
                  "
                >
                  {[
                    { label: "Explore Projects", href: "/projects" },
                    { label: "About Me", href: "/about" },
                    { label: "View Resume", href: "/resume" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setShowNavigation(false)}
                      className="
                        block rounded-xl px-3 py-2.5 text-sm font-medium
                        text-slate-700 transition-colors
                        hover:bg-violet-500/10 hover:text-violet-700
                        focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-violet-500
                        dark:text-slate-200 dark:hover:text-violet-300
                      "
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </div>

          {/* Main message */}
          <div className="mt-6 sm:mt-8">
            <h2
              className="
                max-w-[18rem] text-[1.8rem] font-semibold
                leading-[1.06] tracking-[-0.045em]
                text-slate-950 sm:text-[2.15rem] dark:text-white
              "
            >
              Ideas
              <br />
              to Intelligent
              <br />
              Products
            </h2>

            <p className="mt-3 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400 sm:mt-4">
              LLMs <span className="mx-1">·</span>
              Agents <span className="mx-1">·</span>
              RAG <span className="mx-1">·</span>
              Real Impact
            </p>
          </div>

          {/* Current-work status */}
          <button
            type="button"
            aria-expanded={showFocus}
            aria-controls="hero-current-focus"
            onClick={() => setShowFocus((open) => !open)}
            className="
              mt-6 flex w-full items-center gap-3 rounded-2xl
              border border-white/70 bg-white/45 px-3 py-3 text-left
              backdrop-blur-xl transition duration-200
              hover:border-violet-300/80 hover:bg-white/65
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-violet-500
              dark:border-white/10 dark:bg-white/[0.04]
              dark:hover:bg-white/[0.08]
              sm:mt-8
            "
          >
            <div
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-xl bg-white/65 shadow-sm dark:bg-white/[0.06]
              "
            >
              <span
                className="
                  h-2.5 w-2.5 rounded-full bg-emerald-400
                  shadow-[0_0_14px_rgba(52,211,153,0.9)]
                "
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-medium text-slate-400">
                Currently working on
              </p>
              <p className="mt-0.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                Agentic AI &amp; Generative AI
              </p>
            </div>

            <ChevronDown
              aria-hidden="true"
              className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                showFocus ? "rotate-180" : ""
              }`}
            />
          </button>

          {showFocus && (
            <div
              id="hero-current-focus"
              className="
                mt-3 rounded-2xl border border-violet-200/70
                bg-white/60 p-4 text-sm leading-6 text-slate-600
                backdrop-blur-xl dark:border-white/10
                dark:bg-slate-950/30 dark:text-slate-300
              "
            >
              Exploring multi-agent AI workflows, knowledge-grounded
              applications, and AI-powered software engineering tools.

              <Link
                href="/projects"
                aria-label="Explore projects"
                className="
                  mt-3 flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/70
                  bg-white/55 text-slate-500 shadow-sm
                  backdrop-blur-xl transition duration-200
                  hover:-translate-y-0.5 hover:bg-white/80
                  hover:text-violet-700
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-violet-500
                  dark:border-white/10 dark:bg-white/[0.06]
                  dark:text-slate-300 dark:hover:bg-white/10
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Lower glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute bottom-[2%] left-[35%]
          h-20 w-48 rounded-full bg-violet-400/20 blur-3xl
          dark:bg-violet-500/10
        "
      />
    </div>
  );
}
