import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

export function PageHeader({
  title,
  lede,
  meta,
}: {
  title: string;
  lede?: string;
  /** Subtitle, metadata, or contact details set beneath the title in mono. */
  meta?: ReactNode;
}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {meta ? <div className={styles.meta}>{meta}</div> : null}
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </header>
  );
}
