import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "border border-slate-200/80",
        "bg-white/60 px-3 py-1.5",
        "text-xs font-medium text-slate-600",
        "backdrop-blur-sm",
        "dark:border-white/10",
        "dark:bg-white/5 dark:text-slate-300",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}