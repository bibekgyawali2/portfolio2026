import styles from "./Lede.module.css";

export function Lede({
  display,
  intro,
  now,
}: {
  display: string;
  intro: string[];
  now?: string;
}) {
  return (
    <div>
      <h1 className={styles.display}>{display}</h1>

      <div className={styles.intro}>
        {intro.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      {now ? (
        <div className={styles.now}>
          <span className={styles.nowLabel}>Now</span>
          <p className={styles.nowBody}>{now}</p>
        </div>
      ) : null}
    </div>
  );
}
