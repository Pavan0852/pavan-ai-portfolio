import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export function Section({
  children,
  className,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-20 sm:py-24 lg:py-32",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}