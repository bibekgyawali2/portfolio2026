import type { ReactNode } from "react";
import styles from "./Page.module.css";

export function Page({ children }: { children: ReactNode }) {
  return <main className={styles.page}>{children}</main>;
}

export function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className={styles.footer}>
      <p>{children}</p>
    </footer>
  );
}
