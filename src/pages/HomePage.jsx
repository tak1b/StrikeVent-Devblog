import posts from "../data/posts";
import PostCard from "../components/PostCard";
import { SITE_CONFIG } from "../data/posts";

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ marginBottom: "56px" }}>
        <h2
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "var(--sv-accent)",
            fontFamily: "var(--sv-font-mono)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            margin: "0 0 16px 0",
          }}
        >
          Development Updates
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "var(--sv-text-muted)",
            margin: 0,
            maxWidth: "560px",
            lineHeight: 1.7,
          }}
        >
          {SITE_CONFIG.description}
        </p>
      </section>

      {/* Post list */}
      <div
        className="stagger-children"
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Empty state */}
      {posts.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "80px 0",
            color: "var(--sv-text-dim)",
            fontFamily: "var(--sv-font-mono)",
            fontSize: "14px",
          }}
        >
          No posts yet. Check back soon.
        </div>
      )}
    </div>
  );
}
