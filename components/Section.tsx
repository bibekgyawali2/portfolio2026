import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  title,
  icon,
  lede,
  more,
  children,
}: {
  title: string;
  icon?: ReactNode;
  lede?: string;
  more?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section className="mt-18 max-sm:mt-14 print:mt-7 print:break-inside-avoid">
      <div className="flex items-center justify-between gap-6 border-t border-rule pt-5 mb-8">
        <div className="flex items-center gap-2">
          {icon ? (
            <span className="inline-flex items-center justify-center text-accent opacity-90 shrink-0">
              {icon}
            </span>
          ) : null}
          <h2 className="m-0 font-mono text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-ink-faint">
            {title}
          </h2>
        </div>
        {more ? (
          <Link
            href={more.href}
            className="font-mono text-[0.75rem] font-medium tracking-[0.02em] text-ink-faint no-underline whitespace-nowrap transition-colors duration-140 hover:text-accent group print:hidden inline-flex items-center gap-1"
          >
            <span className="group-hover:underline group-hover:underline-offset-[0.2em]">
              {more.label}
            </span>
            <span
              className="transition-transform duration-140 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ) : null}
      </div>
      {lede ? (
        <p className="max-w-[38rem] -mt-2 mb-8 text-ink-soft text-[0.9375rem] leading-[1.55] tracking-[-0.008em]">
          {lede}
        </p>
      ) : null}
      <div className="text-ink-soft">{children}</div>
    </section>
  );
}
