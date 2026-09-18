import type { ReactNode } from "react";
import { identity } from "@/content/profile";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";
import styles from "./Page.module.css";

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <Nav name={identity.name} />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}
