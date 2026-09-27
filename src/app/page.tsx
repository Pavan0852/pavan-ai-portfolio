import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";

import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden"
    >
      <Navbar />
      <Section className="pt-32 sm:pt-36 lg:pt-40">
        <PageContainer>
          <div className="relative">
            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative">
              <Badge>
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                Design System Preview
              </Badge>

              <div className="mt-6 max-w-4xl">
                <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
                  Building intelligent products with{" "}
                  <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    AI
                  </span>
                  .
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                  A visual test environment for the Pavan Kumar AI Engineer
                  portfolio design system.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button>
                  Primary Action
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Button variant="secondary">Secondary Action</Button>

                <Button variant="ghost">Ghost Action</Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </Section>

      <Section className="pt-0">
        <PageContainer>
          <SectionHeading
            eyebrow="Components"
            title="The visual language of the portfolio."
            description="These primitives will be reused throughout the homepage, project case studies, skills, experience, and contact sections."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <GlassCard className="p-7 sm:p-8">
              <Badge>Glass Card</Badge>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Intelligent systems. Thoughtful interfaces.
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Glass surfaces, subtle borders, soft shadows and generous
                spacing create the premium visual foundation we are targeting.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>LangChain</Tag>
                <Tag>LangGraph</Tag>
                <Tag>Python</Tag>
                <Tag>Neo4j</Tag>
                <Tag>Azure OpenAI</Tag>
              </div>
            </GlassCard>

            <GlassCard interactive className="p-7 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Interactive Card
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    Hover to interact
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                Interactive surfaces will later be used for project cards,
                statistics and other portfolio content.
              </p>
            </GlassCard>
          </div>
        </PageContainer>
      </Section>
    </main>
  );
}