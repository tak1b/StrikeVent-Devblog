export default function ChangelogPage() {
  // Add your changelog entries here
  const entries = [

    //0.0.3

    //0.0.2
    {
      version: "0.0.2",
      date: "2025-10-21",
      changes: [
        "[GAME] Project Approvedn by Supervisor",
        "[GAME] Purpouse shifted from \"Player Psychology\" to \"Improving Netcode\" ",
      ],
    },

    //0.0.1
    {
      version: "0.0.1",
      date: "2025-10-15",
      changes: [
        "[GAME] Initial project setup",
        "[SITE] Devblog launched",
        "[SITE] First post published",
      ],
    },
  ];

  return (
    <div className="page-enter">
      <h1
        style={{
          fontFamily: "var(--sv-font-display)",
          fontSize: "32px",
          fontWeight: 700,
          letterSpacing: "1px",
          marginBottom: "8px",
        }}
      >
        Changelog
      </h1>
      <p
        style={{
          color: "var(--sv-text-muted)",
          fontSize: "15px",
          marginBottom: "48px",
          maxWidth: "480px",
        }}
      >
        Version history and patch notes for StrikeVent.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {entries.map((entry) => (
          <div
            key={entry.version}
            style={{
              borderLeft: "2px solid var(--sv-accent)",
              paddingLeft: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "16px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--sv-font-mono)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--sv-accent)",
                }}
              >
                v{entry.version}
              </span>
              <span
                style={{
                  fontFamily: "var(--sv-font-mono)",
                  fontSize: "13px",
                  color: "var(--sv-text-muted)",
                }}
              >
                {entry.date}
              </span>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              {entry.changes.map((change, i) => (
                <li
                  key={i}
                  style={{
                    color: "var(--sv-text-secondary)",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "var(--sv-text-dim)", marginRight: "8px" }}>
                    —
                  </span>
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
