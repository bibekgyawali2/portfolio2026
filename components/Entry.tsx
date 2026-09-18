import styles from "./Entry.module.css";
import { emphasize } from "./emphasize";

export function Entry({
  when,
  title,
  href,
  where,
  body,
  note,
}: {
  when: string;
  title: string;
  href?: string;
  where?: string;
  body?: string[];
  note?: string;
}) {
  return (
    <article className={styles.entry}>
      <p className={styles.when}>{when}</p>
      <div>
        <h3 className={styles.title}>
          {href ? <a href={href}>{title}</a> : title}
        </h3>
        {where ? <p className={styles.where}>{where}</p> : null}
        {body?.length ? (
          <ul className={styles.body}>
            {body.map((line, i) => (
              <li key={i} className={styles.line}>
                {emphasize(line)}
              </li>
            ))}
          </ul>
        ) : null}
        {note ? <p className={styles.note}>{note}</p> : null}
      </div>
    </article>
  );
}
