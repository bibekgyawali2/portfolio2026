import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Section.module.css";

export function Section({
  title,
  lede,
  more,
  children,
}: {
  title: string;
  lede?: string;
  more?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.heading}>{title}</h2>
        {more ? (
          <Link href={more.href} className={styles.more}>
            {more.label} →
          </Link>
        ) : null}
      </div>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
      <div className={styles.body}>{children}</div>
    </section>
  );
}
