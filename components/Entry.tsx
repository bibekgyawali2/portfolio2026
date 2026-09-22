import Link from "next/link";
import { emphasize } from "./emphasize";

export function Entry({
  when,
  title,
  href,
  where,
  body,
  note,
}: {
  when: string;
  title: string;
  href?: string;
  where?: string;
  body?: string[];
  note?: string;
}) {
  return (
    <article className="grid grid-cols-[10.5rem_1fr] gap-x-7 mb-10 last:mb-0 max-sm:grid-cols-1 max-sm:gap-x-0 print:break-inside-avoid">
      <p className="m-0 pt-1 max-sm:pt-0 max-sm:mb-1.5 font-mono text-[0.8125rem] font-medium text-ink-faint tabular-nums leading-[1.4] tracking-[-0.01em]">
        {when}
      </p>
      <div>
        <h3 className="m-0 text-[1rem] font-semibold tracking-[-0.018em] leading-[1.35]">
          {href ? (
            <Link
              href={href}
              className="text-inherit no-underline border-b border-accent-border transition-colors duration-140 hover:text-accent hover:border-accent"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        {where ? (
          <p className="mt-1 mb-0 text-ink-soft text-[0.9375rem] leading-[1.45] tracking-[-0.005em]">
            {where}
          </p>
        ) : null}
        {body?.length ? (
          <ul className="mt-2.5 mb-0 p-0 list-none text-ink-soft text-[0.9375rem] leading-[1.6] tracking-[-0.008em]">
            {body.map((line, i) => (
              <li
                key={i}
                className="relative pl-4.5 mb-2 last:mb-0 text-pretty before:content-[''] before:absolute before:left-0 before:top-[0.72em] before:w-1.5 before:h-[1.5px] before:rounded-[1px] before:bg-accent before:opacity-55"
              >
                {emphasize(line)}
              </li>
            ))}
          </ul>
        ) : null}
        {note ? (
          <p className="mt-3 mb-0 text-[0.875rem] leading-[1.5] text-ink-faint">
            {note}
          </p>
        ) : null}
      </div>
    </article>
  );
}
