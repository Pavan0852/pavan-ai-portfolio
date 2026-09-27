import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}