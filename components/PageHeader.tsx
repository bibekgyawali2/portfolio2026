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
    <header className="mb-6 sm:mb-7 print:mb-6">
      <h1 className="m-0 max-w-[28ch] text-[clamp(1.875rem,1.45rem+1.9vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-ink text-balance">
        {title}
      </h1>
      {meta ? (
        <div className="mt-3.5 font-mono text-[0.8125rem] text-ink-faint [&>p]:m-0 tracking-[-0.005em]">
          {meta}
        </div>
      ) : null}
      {lede ? (
        <p className="max-w-[42rem] mt-4 text-ink-soft text-[1.0625rem] leading-[1.6] tracking-[-0.012em]">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
