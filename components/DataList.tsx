export type Item = { term: string; description: string };

export function DataList({ items }: { items: Item[] }) {
  return (
    <dl className="m-0 space-y-1.5">
      {items.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-[12rem_1fr] gap-x-7 items-baseline py-1 px-2.5 -mx-2.5 rounded transition-colors duration-120 hover:bg-accent-subtle/40 group max-sm:grid-cols-1 max-sm:gap-y-0.5 max-sm:py-1.5"
        >
          <dt className="font-mono text-[0.8125rem] font-medium tracking-[-0.01em] text-ink-faint tabular-nums transition-colors duration-120 group-hover:text-ink">
            {item.term}
          </dt>
          <dd className="m-0 text-ink-soft text-[0.9375rem] leading-[1.6] tracking-[-0.008em] text-pretty transition-colors duration-120 group-hover:text-ink">
            {item.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
