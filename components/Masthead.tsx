import styles from "./Masthead.module.css";
import { ThemeToggle } from "./ThemeToggle";

type Link = { label: string; href: string };

export function Masthead({
  name,
  summary,
  location,
  email,
  links,
}: {
  name: string;
  summary: string;
  location: string;
  email: string;
  links: Link[];
}) {
  return (
    <header className={styles.masthead}>
      <div className={styles.top}>
        <h1 className={styles.name}>{name}</h1>
        <ThemeToggle />
      </div>
      <p className={styles.summary}>{summary}</p>
      <ul className={styles.meta}>
        <li>{location}</li>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
