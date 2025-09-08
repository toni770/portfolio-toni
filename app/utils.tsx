import { KeplerStd } from "./fonts";

// Returns an array of React elements with the text highlighted when *text*
export function highlightText(text: string) {
  const parts = text.split(/(\*.*?\*)/g);

  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <span key={i} className={`${KeplerStd.className}`}>
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );
}
