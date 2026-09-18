import { Fragment, type ReactNode } from "react";

/** Renders *asterisk emphasis* in content strings as <em>. */
export function emphasize(text: string): ReactNode {
  return text.split(/\*([^*]+)\*/g).map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>,
  );
}
