import type { ReactNode } from "react";
import { identity } from "@/content/profile";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";
import styles from "./Page.module.css";

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <Nav name={identity.name} />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
