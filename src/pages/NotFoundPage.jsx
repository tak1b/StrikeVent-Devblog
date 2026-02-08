import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="page-enter"
      style={{
        textAlign: "center",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          fontFamily: "var(--sv-font-display)",
          fontSize: "80px",
          fontWeight: 800,
          background: "var(--sv-accent-gradient)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
          marginBottom: "16px",
        }}
      >
        404
      </div>
      <p
        style={{
          color: "var(--sv-text-secondary)",
          fontSize: "16px",
          marginBottom: "32px",
        }}
      >
        This page doesn't exist. Maybe it was deleted, or maybe you typed the
        URL wrong.
      </p>
      <Link
        to="/"
        style={{
          color: "var(--sv-accent)",
          fontFamily: "var(--sv-font-mono)",
          fontSize: "13px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderBottom: "1px solid var(--sv-accent)",
          paddingBottom: "2px",
        }}
      >
        ← Back to Blog
      </Link>
    </div>
  );
}
