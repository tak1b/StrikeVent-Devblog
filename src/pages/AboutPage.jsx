import { SITE_CONFIG } from "../data/posts";

export default function AboutPage() {
  return (
    <div className="page-enter" style={{ maxWidth: "620px" }}>
      <h1
        style={{
          fontFamily: "var(--sv-font-display)",
          fontSize: "32px",
          fontWeight: 700,
          letterSpacing: "1px",
          marginBottom: "8px",
        }}
      >
        About StrikeVent
      </h1>
      <p
        style={{
          color: "var(--sv-text-muted)",
          fontSize: "14px",
          fontFamily: "var(--sv-font-mono)",
          marginBottom: "40px",
        }}
      >
        The story so far
      </p>

      {/* Replace this section with your own content */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontFamily: "var(--sv-font-display)",
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "12px",
            color: "var(--sv-accent)",
          }}
        >
          What is StrikeVent?
        </h2>
        <p
          style={{
            color: "var(--sv-text-secondary)",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          StrikeVent is a 2D fighting game completely developed in the game engine Godot. The main goal of StrikeVent (besides being a fun
          fighting game) is to be able to solve a long standing problem that Godot fighting game creators have, which is unreliable, unstable 
          online multiplayer. The goal of StrikeVent is to be able to create a module (StrikeVent NET) that can allow developers to be able to use
          GGPO (Good Game Peace Out) in their games, without having to worry about the technical details of implementing it. StrikeVent NET will be a standalone module that can be easily integrated into 
          any Godot game, and will provide a simple API for developers to use. StrikeVent will also be open source, so that anyone can contribute to its development and improvement.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontFamily: "var(--sv-font-display)",
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "12px",
            color: "var(--sv-accent)",
          }}
        >
          Who's Behind It?
        </h2>
        <p
          style={{
            color: "var(--sv-text-secondary)",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          StrikeVent is developed by a team of two college students who are  passionate about fighting games and game development. 
          We started this project as a way to learn more about game development and to create something that we would enjoy playing. 
          We are both students of computer science, and we have experience in game development, but this is our first time working on a project of this scale. 
          We are excited to see where this project takes us, and we hope that it can be a valuable resource for other game developers who are interested in implementing online multiplayer in their games.
        </p>
      </section>

{/*
      <section>
        <h2
          style={{
            fontFamily: "var(--sv-font-display)",
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "12px",
            color: "var(--sv-accent)",
          }}
        >
          Follow Along
        </h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {Object.entries(SITE_CONFIG.socials).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                border: "1px solid var(--sv-text-dim)",
                color: "var(--sv-text-secondary)",
                fontFamily: "var(--sv-font-mono)",
                fontSize: "13px",
                textTransform: "capitalize",
                letterSpacing: "1px",
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
              {name}
            </a>
          ))}
        </div>
      </section>
  */}
    </div>
  );
}
