import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}