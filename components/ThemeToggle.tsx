"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SunIcon, MoonIcon } from "./Icons";

const STORAGE_KEY = "theme";

/**
 * Light is the default. The chosen theme is stored and re-applied by the
 * inline script in the layout, before first paint.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
      className="relative inline-flex items-center p-0.5 rounded-full border border-rule bg-accent-subtle/30 hover:border-ink/30 transition-colors duration-140 cursor-pointer print:hidden shadow-2xs focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 group"
    >
      <span className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full">
        {mounted && theme === "light" && !shouldReduceMotion ? (
          <motion.span
            layoutId="theme-pill"
            className="absolute inset-0 bg-paper rounded-full shadow-xs border border-rule/50"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        ) : null}
        <motion.span
          animate={{
            rotate: mounted && theme === "light" ? 0 : -30,
            scale: mounted && theme === "light" ? 1 : 0.85,
          }}
          transition={{ duration: 0.18 }}
          className={`relative z-10 flex items-center justify-center transition-colors duration-140 ${
            mounted && theme === "light"
              ? "text-ink"
              : "text-ink-faint opacity-50 hover:opacity-80"
          }`}
        >
          <SunIcon className="w-3 h-3" />
        </motion.span>
      </span>
      <span className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full">
        {mounted && theme === "dark" && !shouldReduceMotion ? (
          <motion.span
            layoutId="theme-pill"
            className="absolute inset-0 bg-rule rounded-full shadow-xs border border-rule/80"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
          />
        ) : null}
        <motion.span
          animate={{
            rotate: mounted && theme === "dark" ? 0 : 30,
            scale: mounted && theme === "dark" ? 1 : 0.85,
          }}
          transition={{ duration: 0.18 }}
          className={`relative z-10 flex items-center justify-center transition-colors duration-140 ${
            mounted && theme === "dark"
              ? "text-ink"
              : "text-ink-faint opacity-50 hover:opacity-80"
          }`}
        >
          <MoonIcon className="w-3 h-3" />
        </motion.span>
      </span>
    </button>
  );
}
