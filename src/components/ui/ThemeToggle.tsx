"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex h-10 w-10 touch-manipulation items-center justify-center",
        "rounded-full border",
        "border-slate-200/80 bg-white/70",
        "text-slate-700 backdrop-blur-md",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:bg-white",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-indigo-500",
        "dark:border-white/10",
        "dark:bg-white/5 dark:text-slate-200",
        "dark:hover:bg-white/10",
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}