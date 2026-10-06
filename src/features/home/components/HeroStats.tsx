import {
    Award,
  BrainCircuit,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "5+",
    label: "Projects",
    icon: BrainCircuit,
    iconClass:
      "border-indigo-100/70 bg-indigo-50/70 text-indigo-600 dark:border-indigo-400/10 dark:bg-indigo-400/10 dark:text-indigo-300",
  },
  {
    value: "10+",
    label: "Technologies",
    icon: Code2,
    iconClass:
      "border-sky-100/70 bg-sky-50/70 text-sky-600 dark:border-sky-400/10 dark:bg-sky-400/10 dark:text-sky-300",
  },
  {
    value: "2+",
    label: "Years Experience",
    icon: Sparkles,
    iconClass:
      "border-violet-100/70 bg-violet-50/70 text-violet-600 dark:border-violet-400/10 dark:bg-violet-400/10 dark:text-violet-300",
  },
  {
    value: "5+",
    label: "Certifications",
    icon: Award,
    iconClass:
      "border-amber-100/70 bg-amber-50/70 text-amber-500 dark:border-amber-400/10 dark:bg-amber-400/10 dark:text-amber-300",
  },
  {
    value: "∞",
    label: "Learning",
    icon: GraduationCap,
    iconClass:
      "border-orange-100/70 bg-orange-50/70 text-orange-500 dark:border-orange-400/10 dark:bg-orange-400/10 dark:text-orange-300",
  },
];

export function HeroStats() {
  return (
    <div className="relative mt-10 w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/50 p-2 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.05] dark:shadow-none">
      {/* Soft ambient gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-indigo-200/20
          via-violet-200/10
          to-cyan-200/20
          dark:from-indigo-500/10
          dark:via-violet-500/5
          dark:to-cyan-500/10
        "
      />

      <div className="relative grid grid-cols-2 sm:grid-cols-5">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={[
                "flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-5",
                index > 0
                    ? "border-l border-slate-200/70 dark:border-white/10"
                    : "",
                index >= 2
                    ? "border-t border-slate-200/70 dark:border-white/10 sm:border-t-0"
                    : "",
              ].join(" ")}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${stat.iconClass}`}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                  {stat.value}
                </p>

                <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}