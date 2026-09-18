import styles from "./Prose.module.css";

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className={styles.prose}>
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}
