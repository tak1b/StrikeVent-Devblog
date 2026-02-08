import { useState } from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function PostCard({ post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/post/${post.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "var(--sv-bg-card-hover)" : "var(--sv-bg-card)",
          border: `1px solid ${hovered ? "var(--sv-border-hover)" : "var(--sv-border)"}`,
          padding: "28px 32px",
          cursor: "pointer",
          transition: "all 0.25s ease",
          transform: hovered ? "translateY(-2px)" : "none",
          boxShadow: hovered ? "0 8px 32px var(--sv-accent-glow)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "14px",
          }}
        >
          <Tag label={post.tag} />
          <span
            style={{
              color: "var(--sv-text-muted)",
              fontSize: "13px",
              fontFamily: "var(--sv-font-mono)",
            }}
          >
            {post.date}
          </span>
        </div>

        <h2
          style={{
            margin: "0 0 10px 0",
            fontSize: "22px",
            fontWeight: 700,
            color: "var(--sv-text-primary)",
            fontFamily: "var(--sv-font-display)",
            letterSpacing: "0.5px",
          }}
        >
          {post.title}
        </h2>

        <p
          style={{
            margin: 0,
            color: "var(--sv-text-secondary)",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          {post.summary}
        </p>
      </article>
    </Link>
  );
}
