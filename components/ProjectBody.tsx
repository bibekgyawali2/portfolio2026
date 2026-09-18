import styles from "./ProjectBody.module.css";

export function ProjectBody({
  sections,
}: {
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <div className={styles.body}>
      {sections.map((section) => (
        <section key={section.heading} className={styles.block}>
          <h2 className={styles.heading}>{section.heading}</h2>
          {section.body.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </section>
      ))}
    </div>
  );
}
