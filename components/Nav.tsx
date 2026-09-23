"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { nav } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Nav({ name = "HOME" }: { name?: string }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between gap-6 pt-9 pb-4 mb-12 -mx-6 px-6 bg-paper/90 backdrop-blur-md max-sm:pt-6 max-sm:pb-3 max-sm:mb-8 max-sm:-mx-5 max-sm:px-5 print:hidden">
      <Link
        href="/"
        className="text-[0.9375rem] font-bold tracking-[-0.03em] no-underline transition-colors duration-140 hover:text-accent select-none"
        aria-label="Home"
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
            <li key={item.href} className="relative flex items-center">
              <Link
                href={item.href}
                className={`relative no-underline py-1 px-0.5 transition-colors duration-140 tracking-[-0.01em] ${
                  current
                    ? "text-accent font-semibold"
                    : "text-ink-faint hover:text-accent"
                }`}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
                {current ? (
                  shouldReduceMotion ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
                  ) : (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )
                ) : null}
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
