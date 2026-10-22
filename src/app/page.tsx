
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  FlaskConical,
  GraduationCap,
  Workflow,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/features/home/components/Hero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";

const capabilities = [
  {
    icon: Workflow,
    title: "Agentic AI",
    description:
      "Multi-agent orchestration and intelligent workflows for complex tasks.",
    tags: ["LangGraph", "Agent Orchestration"],
  },
  {
    icon: BrainCircuit,
    title: "LLMs & RAG",
    description:
      "Context-aware AI applications grounded in structured knowledge and retrieval.",
    tags: ["LLMs", "Graph RAG"],
  },
  {
    icon: Code2,
    title: "AI Developer Tools",
    description:
      "AI-assisted code generation, developer workflows, and software engineering tools.",
    tags: ["Code Generation", "MCP"],
  },
  {
    icon: FlaskConical,
    title: "ML & Applied Research",
    description:
      "Machine learning experiments and research-oriented AI projects.",
    tags: ["Machine Learning", "Deep Learning"],
  },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />

      {/* What I Build */}
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Areas of Focus"
            title="What I Build"
            description="I work at the intersection of AI research and software engineering, building intelligent systems and practical AI-powered applications."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard
                  key={item.title}
                  className="flex h-full flex-col p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200/80 bg-white/60 px-2.5 py-1.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </PageContainer>
      </Section>

      {/* Professional Snapshot */}
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <PageContainer>
          <SectionHeading
            eyebrow="A Little About Me"
            title="Professional Snapshot"
            description="My experience combines enterprise software engineering with a growing focus on AI product development and applied machine learning."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-700 dark:text-violet-300">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                    Professional Experience
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                    Applied AI/ML Engineer at TCS
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Working on Agentic AI, Generative AI, multi-agent
                    workflows, and AI-assisted enterprise application
                    modernization.
                  </p>

                  <Link
                    href="/experience"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet-700 transition-colors hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200"
                  >
                    Explore my experience
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                    Education
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                    M.Tech in AI &amp; Machine Learning
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Pursuing postgraduate studies through BITS Pilani&apos;s
                    Work Integrated Learning Programme, complementing
                    practical engineering with deeper AI and ML foundations.
                  </p>

                  <Link
                    href="/about"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-700 transition-colors hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200"
                  >
                    More about me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
        </PageContainer>
      </Section>

      {/* Closing CTA */}
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <PageContainer>
          <GlassCard className="p-7 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
                  Let&apos;s Connect
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  Let&apos;s build something meaningful.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Interested in AI engineering, intelligent products, or
                  research-driven projects? I&apos;d be happy to connect.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </GlassCard>
        </PageContainer>
      </Section>

      <div className="h-12 sm:h-16" />
    </main>
  );
}
