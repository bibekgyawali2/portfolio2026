"use client";

import styles from "./ThemeToggle.module.css";

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
    <button type="button" className={styles.toggle} onClick={toggle}>
      <span className={styles.hidden}>Switch to </span>
      <span className={styles.whenLight}>dark</span>
      <span className={styles.whenDark}>light</span>
      <span className={styles.hidden}> theme</span>
    </button>
  );
}
