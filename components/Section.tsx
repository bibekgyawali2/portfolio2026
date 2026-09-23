import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  title,
  icon,
  lede,
  more,
  className = "mt-8 sm:mt-10",
  children,
}: {
  title: string;
  icon?: ReactNode;
  lede?: string;
  more?: { href: string; label: string };
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`print:mt-7 print:break-inside-avoid ${className}`}>
      <div
        className={`flex items-center justify-between gap-6 border-t border-rule pt-5 sm:pt-6 ${
          lede ? "mb-3.5 sm:mb-4" : "mb-7 sm:mb-8"
        }`}
      >
        <div className="flex items-center gap-2.5">
          {icon ? (
            <span className="inline-flex items-center justify-center shrink-0">
              {icon}
            </span>
          ) : null}
          <h2 className="m-0 font-mono text-[0.8125rem] font-medium tracking-[0.07em] uppercase text-ink-faint">
            {title}
          </h2>
        </div>
        {more ? (
          <Link
            href={more.href}
            className="font-mono text-[0.8125rem] font-medium tracking-[0.02em] text-ink-faint no-underline whitespace-nowrap transition-colors duration-140 hover:text-accent group print:hidden inline-flex items-center gap-1.5"
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
        <p className="max-w-[40rem] mb-7 sm:mb-8 text-ink-soft text-[0.9375rem] leading-[1.6] tracking-[-0.008em]">
          {lede}
        </p>
      ) : null}
      <div className="text-ink-soft [&>*:last-child]:!mb-0">{children}</div>
    </section>
  );
}
