
"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { navigationItems } from "@/config/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const isItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Track scroll position for the navbar's glass appearance.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the menu when moving to the desktop layout.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [closeMenu]);

  // Support Escape and lock background scrolling while the menu is open.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  // Close the menu after navigating to a different route.
  // useEffect(() => {
  //   setIsOpen(false);
  // }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] px-4 pt-4 sm:px-6 lg:px-8">
      {/* Full-screen mobile backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
          className="pointer-events-auto fixed inset-0 z-0 h-dvh w-full touch-manipulation bg-white/35 backdrop-blur-xl transition-opacity duration-300 dark:bg-slate-950/65"
        />
      )}

      {/* Navbar surface */}
      <nav
        aria-label="Primary navigation"
        className={cn(
          "pointer-events-auto relative z-10 mx-auto w-full max-w-7xl rounded-2xl px-2 py-2 sm:px-3",
          "transition-[background-color,border-color,box-shadow] duration-300 ease-out",
          isScrolled
            ? [
                "border border-white/60 bg-white/70 backdrop-blur-xl",
                "shadow-[0_12px_40px_rgba(15,23,42,0.07)]",
                "dark:border-white/10 dark:bg-slate-950/70",
                "dark:shadow-[0_12px_40px_rgba(0,0,0,0.22)]",
              ]
            : "border border-transparent bg-transparent shadow-none",
        )}
      >
        <div className="relative flex h-12 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Pavan Kumar - Home"
            className="group relative z-20 flex shrink-0 items-center rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span className="text-xl font-bold tracking-[-0.04em] text-slate-950 transition-opacity duration-200 group-hover:opacity-75 dark:text-white">
              PG
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:flex">
            {navigationItems.map((item) => {
              const isActive = isItemActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "whitespace-nowrap text-[13px] font-medium text-slate-500 dark:text-slate-400",
                    "transition-[color,text-shadow] duration-200 ease-out",
                    "hover:text-slate-950 hover:[text-shadow:0_0_16px_rgba(99,102,241,0.45)]",
                    "dark:hover:text-white dark:hover:[text-shadow:0_0_18px_rgba(129,140,248,0.65)]",
                    "focus-visible:outline-none focus-visible:text-slate-950 dark:focus-visible:text-white",
                    isActive &&
                      "text-slate-950 [text-shadow:0_0_16px_rgba(99,102,241,0.45)] dark:text-white dark:[text-shadow:0_0_18px_rgba(129,140,248,0.65)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Theme and action buttons */}
          <div className="relative z-20 ml-auto flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/contact"
              onClick={closeMenu}
              className="hidden items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 sm:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              className="inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200 dark:hover:bg-white/[0.10] lg:hidden"
            >
              {isOpen ? (
                <X aria-hidden="true" className="h-4 w-4" />
              ) : (
                <Menu aria-hidden="true" className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Separate fixed mobile menu */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={cn(
          "pointer-events-none fixed inset-x-4 top-[5.25rem] z-20 mx-auto max-w-7xl lg:hidden",
          "transition-[opacity,transform] duration-300 ease-out",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0",
        )}
      >
        <div
          className="rounded-2xl border border-white/70 bg-white/90 p-2 shadow-[0_25px_80px_rgba(15,23,42,0.2)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95 dark:shadow-black/40"
          inert={!isOpen}
        >
          <div className="flex max-h-[calc(100dvh-7rem)] flex-col gap-1 overflow-y-auto overscroll-contain">
            {navigationItems.map((item) => {
              const isActive = isItemActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={isOpen ? 0 : -1}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium",
                    "text-slate-600 transition-[color,text-shadow] duration-200 dark:text-slate-300",
                    "hover:text-slate-950 hover:[text-shadow:0_0_16px_rgba(99,102,241,0.4)]",
                    "dark:hover:text-white dark:hover:[text-shadow:0_0_18px_rgba(129,140,248,0.6)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                    isActive &&
                      "text-slate-950 [text-shadow:0_0_16px_rgba(99,102,241,0.4)] dark:text-white dark:[text-shadow:0_0_18px_rgba(129,140,248,0.6)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
