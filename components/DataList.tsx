import styles from "./DataList.module.css";

export type Item = { term: string; description: string };

export function DataList({ items }: { items: Item[] }) {
  return (
    <dl className={styles.list}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "contents" }}>
          <dt className={styles.term}>{item.term}</dt>
          <dd className={styles.description}>{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
