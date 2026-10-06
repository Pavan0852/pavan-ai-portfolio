import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

function SkillGlyph({ icon, name }: { icon: string; name: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
        "bg-slate-50/80 ring-1 ring-slate-200/70",
        "dark:bg-white/[0.06] dark:ring-white/10",
      )}
    >
      <Image
        src={icon}
        alt={`${name} logo`}
        width={24}
        height={24}
        className="h-6 w-6 object-contain"
      />
    </div>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const CategoryIcon = category.icon;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[24px] border p-6",
        "border-white/80 bg-white/75 shadow-[0_18px_55px_rgba(15,23,42,0.07)]",
        "backdrop-blur-xl transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.11)]",
        "dark:border-white/10 dark:bg-white/[0.045]",
        "dark:shadow-[0_18px_55px_rgba(0,0,0,0.22)]",
        "dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]",
      )}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-[-0.02em] text-slate-950 dark:text-white">
          {category.title}
        </h2>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-300">
          <CategoryIcon className="h-4 w-4" strokeWidth={1.8} />
        </div>
      </div>

      <div className="relative mt-6 grid grid-cols-3 gap-x-3 gap-y-5">
        {category.skills.map((skill) => (
          <div key={`${category.title}-${skill.name}`} className="min-w-0 text-center">
            <div className="flex justify-center">
              <SkillGlyph icon={skill.icon} name={skill.name} />
            </div>
            <p className="mt-2 truncate text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:text-xs">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function SkillsSection() {
  return (
    <Section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] overflow-hidden">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-[12%] top-24 h-80 w-80 rounded-full bg-violet-300/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-300/8 blur-3xl" />
      </div>

      <PageContainer>
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
            Technical Skills
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[1.02] dark:text-white">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
              Work With.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg dark:text-slate-400">
            A combination of AI/ML, full-stack development and cloud technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

      </PageContainer>
    </Section>
  );
}
