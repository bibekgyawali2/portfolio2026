"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

const STORAGE_KEY = "theme";

/**
 * Light is the default. The chosen theme is stored and re-applied by the
 * inline script in the layout, before first paint.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const rootTheme = document.documentElement.dataset.theme as
      | "light"
      | "dark"
      | undefined;
    if (rootTheme === "dark" || rootTheme === "light") {
      setTheme(rootTheme);
    } else {
      const stored = localStorage.getItem(STORAGE_KEY) as
        | "light"
        | "dark"
        | null;
      if (stored) {
        setTheme(stored);
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const defaultTheme = prefersDark ? "dark" : "light";
        setTheme(defaultTheme);
        document.documentElement.dataset.theme = defaultTheme;
      }
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const next = e.matches ? "dark" : "light";
        document.documentElement.dataset.theme = next;
        setTheme(next);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    setTheme(next);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing, blocked storage: the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex items-center p-0.5 rounded-full border border-rule/80 bg-accent-subtle/50 hover:border-accent/50 transition-all duration-140 cursor-pointer print:hidden shadow-2xs group"
    >
      <span
        className={`flex items-center justify-center w-5 h-5 rounded-full transition-all duration-140 ${
          mounted && theme === "light"
            ? "bg-white text-amber-500 shadow-2xs scale-100"
            : "text-ink-faint hover:text-ink opacity-60 hover:opacity-100 scale-90"
        }`}
      >
        <SunIcon className="w-3 h-3" />
      </span>
      <span
        className={`flex items-center justify-center w-5 h-5 rounded-full transition-all duration-140 ${
          mounted && theme === "dark"
            ? "bg-[#1e293b] text-sky-400 shadow-2xs scale-100"
            : "text-ink-faint hover:text-ink opacity-60 hover:opacity-100 scale-90"
        }`}
      >
        <MoonIcon className="w-3 h-3" />
      </span>
    </button>
  );
}
