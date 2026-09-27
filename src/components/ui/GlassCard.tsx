import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export function GlassCard({
  children,
  className,
  interactive = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border",
        "border-white/70 bg-white/55 backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
        "dark:border-white/10 dark:bg-slate-900/50",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}