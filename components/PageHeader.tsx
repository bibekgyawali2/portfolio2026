import type { ReactNode } from "react";

export function PageHeader({
  title,
  lede,
  meta,
}: {
  title: string;
  lede?: string;
  /** Subtitle, metadata, or contact details set beneath the title in mono. */
  meta?: ReactNode;
}) {
  return (
    <header className="mb-14 max-sm:mb-10 print:mb-8">
      <h1 className="m-0 max-w-[30ch] text-[clamp(1.75rem,1.35rem+1.8vw,2.375rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-balance">
        {title}
      </h1>
      {meta ? (
        <div className="mt-4 font-mono text-[0.8125rem] text-ink-faint [&>p]:m-0">
          {meta}
        </div>
      ) : null}
      {lede ? (
        <p className="max-w-[38rem] mt-5 text-ink-soft text-[1.0625rem] leading-[1.58] tracking-[-0.012em]">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
