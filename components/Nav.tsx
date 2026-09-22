"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Nav({ name }: { name: string }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between gap-6 pt-9 mb-16 max-sm:pt-6 max-sm:mb-11 print:hidden">
      <Link
        href="/"
        className="text-[0.9375rem] font-semibold tracking-[-0.02em] no-underline transition-colors duration-140 hover:text-accent"
      >
        {name}
      </Link>

      <ul className="flex items-center gap-6 max-sm:gap-3.5 m-0 p-0 list-none font-mono text-[0.8125rem]">
        {nav.map((item) => {
          const current =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className={`no-underline py-1 px-0.5 border-b-[1.5px] transition-colors duration-140 tracking-[-0.01em] ${
                  current
                    ? "text-accent border-accent font-semibold"
                    : "text-ink-faint border-transparent hover:text-accent"
                }`}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li className="flex items-center">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
