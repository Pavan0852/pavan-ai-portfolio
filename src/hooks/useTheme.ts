"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "pavan-portfolio-theme";
const THEME_CHANGE_EVENT = "pavan-theme-change";

function getThemeFromDOM(): Theme {
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function subscribe(callback: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}


export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeFromDOM,
    getServerTheme,
  );

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark",
    );

    window.localStorage.setItem(STORAGE_KEY, nextTheme);

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return {
    theme,
    toggleTheme,
  };
}