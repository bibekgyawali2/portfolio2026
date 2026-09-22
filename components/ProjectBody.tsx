export function ProjectBody({
  sections,
}: {
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <div className="max-w-[38rem]">
      {sections.map((section) => (
        <section
          key={section.heading}
          className="mb-12 last:mb-0 print:break-inside-avoid"
        >
          <h2 className="m-0 mb-4 text-[1.0625rem] font-semibold tracking-[-0.018em] leading-[1.35]">
            {section.heading}
          </h2>
          {section.body.map((text, i) => (
            <p
              key={i}
              className="mb-4.5 last:mb-0 text-ink-soft text-[0.9375rem] leading-[1.65] tracking-[-0.008em]"
            >
              {text}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
