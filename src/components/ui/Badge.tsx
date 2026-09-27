import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "border border-indigo-200/70",
        "bg-indigo-50/80 px-3 py-1",
        "text-xs font-semibold text-indigo-700",
        "dark:border-indigo-400/20",
        "dark:bg-indigo-400/10 dark:text-indigo-300",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}