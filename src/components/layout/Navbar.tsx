"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigationItems } from "@/config/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  /*
   * Determines which navigation item represents
   * the currently opened page.
   *
   * Examples:
   * "/"                    -> Home
   * "/about"               -> About
   * "/projects"            -> Projects
   * "/projects/scoutmind"  -> Projects
   */
  const isItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  /*
   * Close the mobile menu when the viewport
   * changes to desktop.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

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

  /*
   * Escape closes the mobile menu.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  /*
   * Prevent the page behind the mobile menu
   * from scrolling.
   */
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className="
        pointer-events-none
        fixed
        inset-x-0
        top-0
        z-50
        px-4
        pt-4
        sm:px-6
        lg:px-8
      "
    >
      <nav
        aria-label="Primary navigation"
        className={cn(
          "pointer-events-auto relative mx-auto w-full max-w-7xl px-2 py-2 sm:px-3",
          "rounded-2xl transition-all duration-300 ease-out",
          isScrolled
            ? [
                "border border-white/60",
                "bg-white/65 backdrop-blur-xl",
                "shadow-[0_12px_40px_rgba(15,23,42,0.07)]",
                "dark:border-white/10",
                "dark:bg-slate-950/55",
                "dark:shadow-[0_12px_40px_rgba(0,0,0,0.22)]",
              ]
            : "border border-transparent bg-transparent shadow-none",
        )}
      >
        {/* Navbar */}
        <div className="relative flex h-12 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Pavan Kumar - Home"
            className="
              group
              relative
              z-20
              flex
              shrink-0
              items-center
              rounded-full
              px-2
              py-1
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-indigo-500
            "
          >
            <span
              className="
                text-xl
                font-bold
                tracking-[-0.04em]
                text-slate-950
                transition-opacity
                duration-200
                group-hover:opacity-75
                dark:text-white
              "
            >
              PG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              hidden
              -translate-x-1/2
              -translate-y-1/2
              items-center
              gap-10
              lg:flex
            "
          >
            {navigationItems.map((item) => {
              const isActive = isItemActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    /*
                     * Base
                     */
                    "whitespace-nowrap",
                    "text-[13px] font-medium",
                    "text-slate-500 dark:text-slate-400",

                    /*
                     * Smooth transition
                     */
                    "transition-[color,text-shadow] duration-200 ease-out",

                    /*
                     * Hover
                     */
                    "hover:text-slate-950",
                    "hover:[text-shadow:0_0_16px_rgba(99,102,241,0.45)]",

                    /*
                     * Dark-mode hover
                     */
                    "dark:hover:text-white",
                    "dark:hover:[text-shadow:0_0_18px_rgba(129,140,248,0.65)]",

                    /*
                     * Keyboard focus
                     */
                    "focus-visible:outline-none",
                    "focus-visible:text-slate-950",
                    "focus-visible:[text-shadow:0_0_16px_rgba(99,102,241,0.45)]",
                    "dark:focus-visible:text-white",
                    "dark:focus-visible:[text-shadow:0_0_18px_rgba(129,140,248,0.65)]",

                    /*
                     * Active page
                     *
                     * No capsule.
                     * No background.
                     * No underline.
                     *
                     * The current page simply remains glowing.
                     */
                    isActive &&
                      "text-slate-950 [text-shadow:0_0_16px_rgba(99,102,241,0.45)] dark:text-white dark:[text-shadow:0_0_18px_rgba(129,140,248,0.65)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right-side Actions */}
          <div className="relative z-20 ml-auto flex items-center gap-2">
            {/* Theme */}
            <ThemeToggle />

            {/* Desktop CTA */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                hidden
                items-center
                gap-1.5
                rounded-full
                bg-slate-950
                px-4
                py-2.5
                text-xs
                font-semibold
                text-white
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-slate-800
                hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-indigo-500
                dark:bg-white
                dark:text-slate-950
                dark:hover:bg-slate-200
                sm:inline-flex
              "
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              className="
                inline-flex
                h-10
                w-10
                touch-manipulation
                items-center
                justify-center
                rounded-full
                border
                border-slate-200/80
                bg-white/70
                text-slate-700
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-white
                hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-indigo-500
                dark:border-white/10
                dark:bg-white/[0.05]
                dark:text-slate-200
                dark:hover:bg-white/[0.10]
                dark:hover:shadow-none
                lg:hidden
              "
            >
              {isOpen ? (
                <X
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              ) : (
                <Menu
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation */}
        <div
          id="mobile-navigation"
          className={cn(
            "lg:hidden",
            isOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
            className={cn(
              "fixed inset-0 -z-10",
              "bg-white/10 backdrop-blur-md",
              "dark:bg-slate-950/20",
              "transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0",
            )}
          />

          {/* Glass Menu */}
          <div
            className={cn(
              "relative z-10 grid",
              "transition-[grid-template-rows,opacity,transform]",
              "duration-300 ease-out",
              isOpen
                ? "grid-rows-[1fr] translate-y-0 opacity-100"
                : "grid-rows-[0fr] -translate-y-2 opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div
                className="
                  mt-3
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/45
                  p-2
                  shadow-xl
                  shadow-slate-950/5
                  backdrop-blur-2xl
                  dark:border-white/10
                  dark:bg-slate-900/45
                  dark:shadow-black/20
                "
              >
                <div className="flex flex-col gap-1">
                  {navigationItems.map((item) => {
                    const isActive = isItemActive(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          /*
                           * Base
                           */
                          "rounded-xl px-4 py-3",
                          "text-sm font-medium",
                          "text-slate-600 dark:text-slate-300",

                          /*
                           * Smooth transition
                           */
                          "transition-[color,text-shadow] duration-200 ease-out",

                          /*
                           * Hover
                           */
                          "hover:text-slate-950",
                          "hover:[text-shadow:0_0_16px_rgba(99,102,241,0.4)]",

                          /*
                           * Dark-mode hover
                           */
                          "dark:hover:text-white",
                          "dark:hover:[text-shadow:0_0_18px_rgba(129,140,248,0.6)]",

                          /*
                           * Focus
                           */
                          "focus-visible:outline-none",
                          "focus-visible:ring-2",
                          "focus-visible:ring-indigo-500",

                          /*
                           * Active page
                           */
                          isActive &&
                            "text-slate-950 [text-shadow:0_0_16px_rgba(99,102,241,0.4)] dark:text-white dark:[text-shadow:0_0_18px_rgba(129,140,248,0.6)]",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  {/* Mobile CTA */}
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="
                      mt-2
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-slate-950/95
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-sm
                      backdrop-blur-md
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-slate-800
                      hover:shadow-md
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-indigo-500
                      dark:bg-white/95
                      dark:text-slate-950
                      dark:hover:bg-slate-200
                    "
                  >
                    Let&apos;s Talk
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}