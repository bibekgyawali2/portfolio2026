import styles from "./PageHeader.module.css";

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className={styles.header}>
      {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
      <h1 className={styles.title}>{title}</h1>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </header>
  );
}
