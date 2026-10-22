
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Compass,
  GraduationCap,
  Lightbulb,
  Wrench,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/features/about/components/AboutSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const engineeringPrinciples = [
  {
    icon: Lightbulb,
    title: "Start with the problem",
    description:
      "Understand the real engineering need before choosing a model, framework, or architecture. The goal is to build something useful, not just add AI.",
  },
  {
    icon: Wrench,
    title: "Build beyond the prototype",
    description:
      "Pay attention to validation, maintainability, and integration so AI capabilities can work within real software engineering workflows.",
  },
  {
    icon: Compass,
    title: "Learn by building",
    description:
      "Combine structured learning with hands-on experiments, personal projects, and continuous exploration of emerging AI techniques.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutSection />

      {/* My Journey into AI */}
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <PageContainer>
          <SectionHeading
            eyebrow="My Journey"
            title="From engineering foundations to intelligent systems."
            description="My path has evolved across engineering disciplines, software development, cloud technologies, and AI product engineering."
          />

          <GlassCard className="mt-10 p-6 sm:p-9 lg:mt-12">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-700 dark:text-violet-300">
                <BrainCircuit className="h-7 w-7" />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                    The Foundation
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                    Engineering and analytical thinking
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    My academic foundation in Mechanical Engineering helped
                    shape my approach to structured problem-solving and
                    understanding complex systems.
                  </p>
                </div>

                <div className="border-t border-slate-200/80 pt-6 dark:border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                    The Transition
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                    Software and cloud development
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Through my professional work, I developed experience in
                    enterprise software environments and cloud technologies,
                    building a foundation for broader product engineering.
                  </p>
                </div>

                <div className="border-t border-slate-200/80 pt-6 dark:border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                    The Current Focus
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                    Applied AI/ML product engineering
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Today, I focus on Agentic AI, Generative AI, multi-agent
                    workflows, knowledge graphs, and AI-assisted software
                    engineering, while continuing to deepen my AI and ML
                    foundations through postgraduate study and projects.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </PageContainer>
      </Section>

      {/* Education */}
      
      {/* Education Timeline */}
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Education"
            title="Learning, growing, and building."
            description="My academic journey combines an engineering foundation with advanced study in artificial intelligence and machine learning."
          />

          <div className="relative mt-12 ml-1 sm:ml-3">
            {/* Timeline connector */}
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-[21px] top-10 w-px bg-gradient-to-b from-violet-400 via-indigo-300 to-cyan-400 dark:from-violet-500 dark:via-indigo-400 dark:to-cyan-500"
            />

            <div className="space-y-12 sm:space-y-16">
              {/* M.Tech */}
              <article className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-7">
                {/* Timeline marker */}
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-700 shadow-sm dark:border-violet-400/30 dark:bg-slate-900 dark:text-violet-300 sm:h-12 sm:w-12">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <div className="min-w-0 pb-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                      Postgraduate
                    </p>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-violet-50/70 px-2.5 py-1 text-xs font-medium text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      In Progress
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                    M.Tech in Artificial Intelligence &amp; Machine Learning
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200 sm:text-base">
                    BITS Pilani
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Work Integrated Learning Programme (WILP)
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Pursuing advanced study in artificial intelligence and
                    machine learning, complementing practical engineering
                    experience with deeper technical foundations.
                  </p>

                  <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    Expected completion: October 2027
                  </p>
                </div>
              </article>

              {/* B.Tech */}
              <article className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-7">
                {/* Timeline marker */}
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 shadow-sm dark:border-cyan-400/30 dark:bg-slate-900 dark:text-cyan-300 sm:h-12 sm:w-12">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <div className="min-w-0 pb-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                      Undergraduate
                    </p>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      Completed
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                    B.Tech in Mechanical Engineering
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200 sm:text-base">
                    Jawaharlal Nehru Technological University Kakinada
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    JNTUK
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Built an engineering foundation in analytical thinking,
                    structured problem-solving, and understanding complex
                    systems.
                  </p>

                  <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    Graduated: 2023
                  </p>
                </div>
              </article>
            </div>
          </div>
        </PageContainer>
      </Section>


      {/* How I Approach Engineering */}
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <PageContainer>
          <SectionHeading
            eyebrow="Engineering Philosophy"
            title="How I approach engineering."
            description="The principles I aim to bring to the systems I design, the projects I build, and the problems I solve."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12">
            {engineeringPrinciples.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <GlassCard
                  key={principle.title}
                  className="flex h-full flex-col p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-sm font-medium tabular-nums text-slate-400 dark:text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-950 dark:text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {principle.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </PageContainer>
      </Section>

      {/* Closing CTA */}
      <Section className="pt-12 sm:pt-16 lg:pt-20">
        <PageContainer>
          <GlassCard className="p-7 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
                  Looking Ahead
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  Curious about what I&apos;m building?
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Explore my AI projects, learn more about my professional
                  experience, or get in touch to discuss an opportunity.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200"
                >
                  Explore projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
                >
                  Let&apos;s connect
                </Link>
              </div>
            </div>
          </GlassCard>
        </PageContainer>
      </Section>

      <div className="h-12 sm:h-16" />
    </main>
  );
}
