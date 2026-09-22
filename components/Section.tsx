import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Section.module.css";

export function Section({
  title,
  icon,
  lede,
  more,
  children,
}: {
  title: string;
  icon?: ReactNode;
  lede?: string;
  more?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.titleWrap}>
          {icon ? <span className={styles.iconWrap}>{icon}</span> : null}
          <h2 className={styles.heading}>{title}</h2>
        </div>
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
