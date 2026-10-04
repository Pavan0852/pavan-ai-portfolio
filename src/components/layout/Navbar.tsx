"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { navigationItems } from "@/config/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "relative mx-auto w-full max-w-7xl pointer-events-auto",
          "px-4 py-2",
        )}
      >
        <div className="flex h-12 items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
            aria-label="Pavan Kumar - Home"
          >
            <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
              PG
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden translate-x-16 items-center gap-1 lg:flex">
            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2",
                  "text-[12px] font-medium",
                  "text-slate-600 transition-colors duration-200",
                  "hover:text-slate-950",
                  "dark:text-slate-400 dark:hover:text-white",
                  index === 0 &&
                    "bg-white/55 text-slate-950 shadow-sm dark:bg-white/10 dark:text-white dark:shadow-none",
                  index > 0 && "ml-5",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="relative z-10 flex items-center gap-2 pointer-events-auto">
            <ThemeToggle />

            <a
              href="#contact"
              className={cn(
                "hidden items-center gap-1.5 rounded-full",
                "bg-slate-950 px-4 py-2.5",
                "text-xs font-semibold text-white",
                "transition-all duration-200",
                "hover:-translate-y-0.5 hover:bg-slate-800",
                "dark:bg-white dark:text-slate-950",
                "dark:hover:bg-slate-200",
                "sm:inline-flex",
              )}
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              className={cn(
                "inline-flex h-10 w-10 touch-manipulation items-center justify-center",
                "rounded-full border",
                "border-slate-200/80 bg-white/70",
                "text-slate-700",
                "transition-all duration-200",
                "hover:bg-white",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-indigo-500",
                "dark:border-white/10 dark:bg-white/5",
                "dark:text-slate-200 dark:hover:bg-white/10",
                "lg:hidden",
              )}
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={cn(
            "lg:hidden",
            isOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          {/* Background blur */}
          <button
            type="button"
            aria-label="Close navigation"
            onClick={closeMenu}
            className={cn(
              "fixed inset-0 z-0",
              "bg-white/10 backdrop-blur-md",
              "dark:bg-slate-950/15",
              "transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0",
            )}
          />

          {/* Glass navigation panel */}
          <div
            className={cn(
              "relative z-10 grid transition-[grid-template-rows,opacity] duration-300",
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div
                className={cn(
                  "mt-3 rounded-2xl border p-2",
                  "border-white/70 bg-white/45",
                  "shadow-xl shadow-slate-950/5",
                  "backdrop-blur-2xl",
                  "dark:border-white/10 dark:bg-slate-900/45",
                  "dark:shadow-black/20",
                )}
              >
                <div className="flex flex-col gap-1">
                  {navigationItems.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "rounded-xl px-4 py-3",
                        "text-sm font-medium",
                        "text-slate-600",
                        "transition-colors",
                        "hover:bg-white/40 hover:text-slate-950",
                        "dark:text-slate-300",
                        "dark:hover:bg-white/10 dark:hover:text-white",
                        index === 0 &&
                          "bg-white/45 text-slate-950 dark:bg-white/10 dark:text-white",
                      )}
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className={cn(
                      "mt-2 inline-flex items-center justify-center gap-2",
                      "rounded-full bg-slate-950/95 px-4 py-3",
                      "text-sm font-semibold text-white",
                      "backdrop-blur-md",
                      "dark:bg-white/95 dark:text-slate-950",
                    )}
                  >
                    Let&apos;s Talk
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}