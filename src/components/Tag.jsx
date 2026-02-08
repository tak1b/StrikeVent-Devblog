import { TAG_CONFIG } from "../data/posts";

export default function Tag({ label }) {
  const style = TAG_CONFIG[label] || { bg: "#555", text: "#fff" };

  return (
    <span
      style={{
        background: style.bg,
        color: style.text,
        padding: "2px 10px",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        fontFamily: "var(--sv-font-mono)",
        display: "inline-block",
      }}
    >
      {label.replace(/_/g, " ")}
    </span>
  );
}
