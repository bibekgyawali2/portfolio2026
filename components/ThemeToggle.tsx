"use client";

import { SunIcon, MoonIcon } from "./Icons";

const STORAGE_KEY = "theme";

/**
 * Light is the default. The chosen theme is stored and re-applied by the
 * inline script in the layout, before first paint.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = next;

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing, blocked storage: the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      className="inline-flex items-center appearance-none bg-transparent border-0 border-b border-rule py-1.5 px-0.5 m-0 font-mono text-[0.8125rem] text-ink-faint cursor-pointer transition-all duration-140 hover:text-accent hover:border-accent active:scale-95 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-3 group print:hidden"
      onClick={toggle}
      title="Toggle theme"
    >
      <span className="sr-only">Switch to </span>
      <span className="inline-flex items-center gap-1.5 dark:hidden">
        <MoonIcon className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:rotate-15" />
        <span>dark</span>
      </span>
      <span className="hidden items-center gap-1.5 dark:inline-flex">
        <SunIcon className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:rotate-15" />
        <span>light</span>
      </span>
      <span className="sr-only"> theme</span>
    </button>
  );
}
