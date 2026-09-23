import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col max-w-[48rem] mx-auto px-6 pb-24 max-sm:px-5 max-sm:pb-16 print:max-w-none print:p-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:font-mono focus:text-[0.8125rem] focus:rounded focus:outline-2 focus:outline-accent focus:outline-offset-2 focus:shadow-md no-underline"
      >
        Skip to content
      </a>
      <Nav name="HOME" />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
