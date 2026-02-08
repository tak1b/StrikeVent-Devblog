import { SITE_CONFIG } from "../data/posts";

export default function Footer() {
  const socials = Object.entries(SITE_CONFIG.socials);

  return (
    <footer
      style={{
        marginTop: "64px",
        paddingTop: "24px",
        borderTop: "1px solid var(--sv-border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "40px",
      }}
    >
      <span
        style={{
          color: "var(--sv-text-dim)",
          fontSize: "12px",
          fontFamily: "var(--sv-font-mono)",
        }}
      >
        © {new Date().getFullYear()} STRIKEVENT
      </span>

      {/*
      <div style={{ display: "flex", gap: "20px" }}>
        {socials.map(([name, url]) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--sv-text-dim)",
              textDecoration: "none",
              fontSize: "12px",
              fontFamily: "var(--sv-font-mono)",
              textTransform: "capitalize",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--sv-accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--sv-text-dim)")}
          >
            {name}
          </a>
        ))}
      </div>
      */}
    </footer>
  );
}