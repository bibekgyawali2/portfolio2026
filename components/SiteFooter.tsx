import { identity } from "@/content/profile";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p>{identity.location}</p>
      <ul className={styles.links}>
        <li>
          <a href={`mailto:${identity.email}`}>{identity.email}</a>
        </li>
        {identity.links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
