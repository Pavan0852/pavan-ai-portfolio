
import type { Metadata } from "next";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Network,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Experience | Pavan Kumar Gudla",
  description:
    "Explore Pavan Kumar Gudla's professional experience in AI product engineering, Agentic AI, Generative AI, and software development.",
};

const contributions = [
  {
    icon: Workflow,
    title: "Agentic AI Workflows",
    description:
      "Designing multi-agent workflows for UI and server-side code generation, coordinating AI-driven steps within enterprise application modernization.",
    tags: ["Agent Orchestration", "LangChain", "Python"],
  },
  {
    icon: Network,
    title: "Graph-Based RAG",
    description:
      "Working with knowledge graph structures and graph-based retrieval approaches using Neo4j to organize contextual information for AI workflows.",
    tags: ["Neo4j", "Graph RAG", "Knowledge Graphs"],
  },
  {
    icon: BrainCircuit,
    title: "Generative AI Integration",
    description:
      "Integrating Azure OpenAI and GPT models into AI workflows, with attention to prompt design, contextual grounding, and output quality.",
    tags: ["Azure OpenAI", "LLMs", "Prompt Engineering"],
  },
  {
    icon: Code2,
    title: "AI-Assisted Code Generation",
    description:
      "Developing workflows that transform application specifications and contextual metadata into structured UI definitions and generated code.",
    tags: ["Code Generation", "JSON", "Application Modernization"],
  },
];

const technologies = [
  "Python",
  "LangChain",
  "Azure OpenAI",
  "GPT Models",
  "Neo4j",
  "Graph RAG",
  "Agentic AI",
  "Generative AI",
  "Git",
  "Azure",
  "TypeScript",
  "Next.js",
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#080b14] dark:text-white">
        {/* Background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-violet-300/25 blur-[110px] dark:bg-violet-500/10" />
          <div className="absolute right-[-8%] top-[28rem] h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px] dark:bg-cyan-500/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-12">
          {/* Hero */}
          <section className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-700 dark:text-violet-300 sm:text-sm">
              Professional Journey
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Experience
              <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text pb-2 text-transparent dark:from-violet-300 dark:via-blue-300 dark:to-cyan-300">
                Building intelligent systems.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              My professional journey spans software development, cloud
              technologies, and AI product engineering. Today, I focus on
              applying Agentic AI and Generative AI to enterprise software
              engineering challenges.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-violet-200/80 bg-white/70 px-4 py-2 text-sm text-slate-700 backdrop-blur-xl dark:border-violet-400/20 dark:bg-white/[0.04] dark:text-slate-200">
                AI Product Engineering
              </span>
              <span className="rounded-full border border-blue-200/80 bg-white/70 px-4 py-2 text-sm text-slate-700 backdrop-blur-xl dark:border-blue-400/20 dark:bg-white/[0.04] dark:text-slate-200">
                Agentic AI
              </span>
              <span className="rounded-full border border-cyan-200/80 bg-white/70 px-4 py-2 text-sm text-slate-700 backdrop-blur-xl dark:border-cyan-400/20 dark:bg-white/[0.04] dark:text-slate-200">
                Generative AI
              </span>
            </div>
          </section>

          {/* Professional timeline */}
          <section className="mt-20 sm:mt-28">
            <div className="mb-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-300">
                Career Timeline
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Where I&apos;ve been building
              </h2>
            </div>

            <div className="relative ml-2 border-l border-violet-300/70 pl-7 dark:border-violet-400/25 sm:ml-4 sm:pl-10">
              <article className="relative rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-9">
                <span className="absolute -left-[34px] top-8 h-3 w-3 rounded-full border-2 border-violet-600 bg-white ring-4 ring-violet-100 dark:border-violet-300 dark:bg-[#080b14] dark:ring-violet-400/10 sm:-left-[47px]" />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-blue-100 text-violet-700 dark:from-violet-400/15 dark:to-blue-400/10 dark:text-violet-300">
                      <BriefcaseBusiness size={23} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        Tata Consultancy Services
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        Software Engineering · AI Product Engineering
                      </p>
                    </div>
                  </div>

                  <span className="w-fit shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300">
                    Mar 2024 — Present
                  </span>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.025]">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      Earlier Role
                    </p>
                    <h4 className="mt-3 text-lg font-semibold">
                      Analyst — Software &amp; Cloud Development
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Built professional experience in software and cloud
                      technologies within an enterprise IT environment,
                      developing a foundation for broader engineering work.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-violet-200/70 bg-gradient-to-br from-violet-50/80 to-blue-50/60 p-5 dark:border-violet-400/20 dark:from-violet-400/[0.07] dark:to-blue-400/[0.04]">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
                      Current Role
                    </p>
                    <h4 className="mt-3 text-lg font-semibold">
                      Applied AI/ML Product Engineer
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Working on AI capabilities for enterprise application
                      modernization, with a focus on multi-agent orchestration,
                      knowledge graphs, and AI-assisted code generation.
                    </p>
                  </div>
                </div>

                <div className="mt-7 border-t border-slate-200/80 pt-6 dark:border-white/10">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Current technical focus
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Agentic AI",
                      "Generative AI",
                      "Enterprise Modernization",
                      "Multi-Agent Systems",
                      "Graph-Based RAG",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Contributions */}
          <section className="mt-20 sm:mt-28">
            <div className="mb-9 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-300">
                What I Work On
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Engineering with AI
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                My work brings together language models, structured context,
                and software engineering workflows to support intelligent
                application development.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {contributions.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-xl transition-colors hover:border-violet-300/80 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-violet-400/30 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-blue-100 text-violet-700 dark:from-violet-400/15 dark:to-blue-400/10 dark:text-violet-300">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Technologies */}
          <section className="mt-20 sm:mt-28">
            <div className="rounded-3xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <Cloud size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    Technologies I work with
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Tools and technologies across my engineering work
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Next step */}
          <section className="mt-16">
            <div className="flex flex-col gap-5 rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-100/70 via-blue-50/70 to-cyan-50/70 p-7 dark:border-violet-400/15 dark:from-violet-400/[0.08] dark:via-blue-400/[0.04] dark:to-cyan-400/[0.06] sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                  Let&apos;s Connect
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  Interested in working together?
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                  I&apos;m interested in opportunities involving AI engineering,
                  intelligent products, and applied research.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200"
              >
                Get in touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
