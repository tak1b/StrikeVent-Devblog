import { Link, useLocation } from "react-router-dom";
import { SITE_CONFIG } from "../data/posts";

export default function Header() {
  const location = useLocation();

  return (
    <header
      style={{
        borderBottom: "1px solid var(--sv-border)",
        padding: "20px 0",
        position: "sticky",
        top: 0,
        background: "var(--sv-bg-deep)",
        zIndex: 100,
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="sv-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: 800,
              fontFamily: "var(--sv-font-display)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              background: "var(--sv-accent-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {SITE_CONFIG.title}
          </h1>
          <span
            style={{
              color: "var(--sv-text-dim)",
              fontSize: "13px",
              fontFamily: "var(--sv-font-mono)",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {SITE_CONFIG.subtitle}
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "24px" }}>
          {SITE_CONFIG.navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  color: isActive ? "var(--sv-accent)" : "var(--sv-text-muted)",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontFamily: "var(--sv-font-mono)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  borderBottom: isActive ? "1px solid var(--sv-accent)" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = "var(--sv-accent)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = "var(--sv-text-muted)";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
