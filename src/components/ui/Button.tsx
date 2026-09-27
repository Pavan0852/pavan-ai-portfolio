import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary: [
      "bg-slate-950 text-white",
      "hover:bg-slate-800",
      "dark:bg-white dark:text-slate-950",
      "dark:hover:bg-slate-200",
    ].join(" "),

    secondary: [
      "border border-slate-200 bg-white/70 text-slate-900",
      "hover:bg-white",
      "dark:border-white/10 dark:bg-white/5 dark:text-white",
      "dark:hover:bg-white/10",
    ].join(" "),

    ghost: [
      "bg-transparent text-slate-700",
      "hover:bg-slate-100",
      "dark:text-slate-300 dark:hover:bg-white/5",
    ].join(" "),
  };

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-full px-5 py-3",
        "text-sm font-semibold",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}