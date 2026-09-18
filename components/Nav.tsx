"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

export function Nav({ name }: { name: string }) {
  const pathname = usePathname();

  return (
    <nav className={styles.bar}>
      <Link href="/" className={styles.home}>
        {name}
      </Link>

      <ul className={styles.links}>
        {nav.map((item) => {
          const current = pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.link} ${current ? styles.current : ""}`}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
