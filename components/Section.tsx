import type { ReactNode } from "react";
import styles from "./Section.module.css";

export function Section({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className={styles.section}>
        <h2 className={styles.heading}>{title}</h2>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
