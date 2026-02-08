import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import posts from "../data/posts";
import Tag from "../components/Tag";

export default function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="page-enter" style={{ textAlign: "center", padding: "80px 0" }}>
        <h2
          style={{
            fontFamily: "var(--sv-font-display)",
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Post Not Found
        </h2>
        <p style={{ color: "var(--sv-text-secondary)", marginBottom: "32px" }}>
          The post you're looking for doesn't exist or has been removed.
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

  // Find prev/next posts
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <div className="page-enter" style={{ maxWidth: "720px", margin: "0 auto" }}>
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        style={{
          background: "none",
          border: "1px solid var(--sv-text-dim)",
          color: "var(--sv-text-secondary)",
          padding: "8px 18px",
          cursor: "pointer",
          fontFamily: "var(--sv-font-mono)",
          fontSize: "13px",
          marginBottom: "32px",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = "var(--sv-accent)";
          e.target.style.color = "var(--sv-accent)";
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = "var(--sv-text-dim)";
          e.target.style.color = "var(--sv-text-secondary)";
        }}
      >
        ← BACK TO POSTS
      </button>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "18px",
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

      {/* Title */}
      <h1
        style={{
          fontSize: "36px",
          fontWeight: 800,
          color: "var(--sv-text-primary)",
          margin: "0 0 28px 0",
          fontFamily: "var(--sv-font-display)",
          lineHeight: 1.2,
          letterSpacing: "0.5px",
        }}
      >
        {post.title}
      </h1>

      {/* Image */}
      {post.image ? (
        <div
          style={{
            width: "100%",
            height: "360px",
            background: `url(${post.image}) center/cover no-repeat`,
            marginBottom: "32px",
            border: "1px solid var(--sv-border)",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "200px",
            background:
              "linear-gradient(135deg, var(--sv-bg-card-hover) 0%, var(--sv-bg-surface) 50%, var(--sv-bg-elevated) 100%)",
            marginBottom: "32px",
            border: "1px solid var(--sv-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--sv-text-dim)",
            fontFamily: "var(--sv-font-mono)",
            fontSize: "13px",
          }}
        >
          [ IMAGE PLACEHOLDER ]
        </div>
      )}

      {/* Body */}
      <div
        className="post-body"
        style={{
          color: "#ccc",
          fontSize: "16px",
          lineHeight: 1.85,
        }}
      >
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 style={{ fontFamily: "var(--sv-font-display)", fontSize: "30px", fontWeight: 700, color: "var(--sv-text-primary)", margin: "40px 0 16px" }}>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 style={{ fontFamily: "var(--sv-font-display)", fontSize: "24px", fontWeight: 600, color: "var(--sv-accent)", margin: "36px 0 12px" }}>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 style={{ fontFamily: "var(--sv-font-display)", fontSize: "20px", fontWeight: 600, color: "var(--sv-text-primary)", margin: "28px 0 10px" }}>{children}</h3>
            ),
            p: ({ children }) => (
              <p style={{ margin: "0 0 16px 0" }}>{children}</p>
            ),
            strong: ({ children }) => (
              <strong style={{ color: "var(--sv-text-primary)", fontWeight: 600 }}>{children}</strong>
            ),
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--sv-accent)", textDecoration: "underline" }}>{children}</a>
            ),
            ul: ({ children }) => (
              <ul style={{ paddingLeft: "24px", margin: "0 0 16px 0" }}>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol style={{ paddingLeft: "24px", margin: "0 0 16px 0" }}>{children}</ol>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: "6px" }}>{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote style={{ borderLeft: "3px solid var(--sv-accent)", paddingLeft: "16px", margin: "16px 0", color: "var(--sv-text-secondary)", fontStyle: "italic" }}>{children}</blockquote>
            ),
            code: ({ children }) => (
              <code style={{ background: "var(--sv-bg-card)", padding: "2px 6px", fontSize: "14px", fontFamily: "var(--sv-font-mono)", color: "var(--sv-accent)" }}>{children}</code>
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>
      </div>

      {/* Post navigation */}
      <div
        style={{
          marginTop: "56px",
          paddingTop: "24px",
          borderTop: "1px solid var(--sv-border)",
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {prevPost ? (
          <Link
            to={`/post/${prevPost.slug}`}
            style={{
              color: "var(--sv-text-secondary)",
              fontFamily: "var(--sv-font-mono)",
              fontSize: "13px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--sv-accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--sv-text-secondary)")}
          >
            ← {prevPost.title}
          </Link>
        ) : (
          <span />
        )}

        {nextPost ? (
          <Link
            to={`/post/${nextPost.slug}`}
            style={{
              color: "var(--sv-text-secondary)",
              fontFamily: "var(--sv-font-mono)",
              fontSize: "13px",
              textAlign: "right",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--sv-accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--sv-text-secondary)")}
          >
            {nextPost.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>

      {/* End marker */}
      <div
        style={{
          marginTop: "32px",
          paddingTop: "24px",
          borderTop: "1px solid var(--sv-border)",
          color: "var(--sv-text-dim)",
          fontSize: "13px",
          fontFamily: "var(--sv-font-mono)",
          textAlign: "center",
        }}
      >
        END OF POST — STRIKEVENT DEVBLOG
      </div>
    </div>
  );
}