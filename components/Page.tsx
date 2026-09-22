import type { ReactNode } from "react";
import { identity } from "@/content/profile";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col max-w-[48rem] mx-auto px-6 pb-24 max-sm:px-5 max-sm:pb-16 print:max-w-none print:p-0">
      <a
        href="#main-content"
        className="absolute -top-[999px] left-6 focus:top-4 bg-ink text-paper px-3.5 py-2 font-mono text-[0.8125rem] z-50 no-underline rounded-xs focus:outline-2 focus:outline-ink focus:outline-offset-2"
      >
        Skip to content
      </a>
      <Nav name={identity.name} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
