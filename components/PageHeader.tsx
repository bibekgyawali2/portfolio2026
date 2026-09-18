import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

export function PageHeader({
  kicker,
  title,
  lede,
  meta,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  /** Contact details or similar, set beneath the title in mono. */
  meta?: ReactNode;
}) {
  return (
    <header className={styles.header}>
      {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
      <h1 className={styles.title}>{title}</h1>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
      {meta ? <div className={styles.meta}>{meta}</div> : null}
    </header>
  );
}
