export default function ChangelogPage() {
  // Add your changelog entries here
  const entries = [
    //1.0.0
    {
      version: "1.0.0",
      date: "2026-02-19",
      changes: [
        "[Netcode] GGPO rollback netcode fully integrated via C++ GDExtension",
        "[Netcode] Loopback UDP bridge tunnelling GGPO packets through EOS P2P relay",
        "[Netcode] Input delay fallback mode when GGPO is unavailable",
        "[Netcode] Timesync handling (sleep frames_ahead * 16ms)",
        "[Netcode] Disconnect detection with 3000ms timeout",
        "[Netcode] Dynamic port assignment for same-machine testing (17777/17778 host, 17779/17780 joiner)",
        "[Online] Epic Online Services integration with anonymous device authentication",
        "[Online] EOSGMultiplayerPeer host/join connection flow via PUID",
        "[Online] NAT traversal and relay handled transparently by EOS",
        "[Online] Cross-network play tested and confirmed working",
        "[Game] Complete state serialisation for rollback (12 variables per fighter)",
        "[Game] Integer math for deterministic simulation (positions/velocities * 100)",
        "[Build] StrikeVentNet C++ GDExtension compiled with SCons + godot-cpp + GGPO.lib",
        "[Build] CMake policy fix for GGPO build on modern CMake (3.28+)",
        "[Build] GGPO.dll runtime dependency included in export",
        "[Docs] Technical manual written (8 sections, full API reference)",
        "[Docs] User manual written",
        "[Docs] System architecture diagram (UML-style)",
        "[Docs] Demo preparation document with presentation script",
        "[Docs] Video script for project demo recording",
        "[Site] Devlog #6 published",
      ],
    },
    //0.0.4
    {
      version: "v0.0.4",
      date: "2026-02-13",
      changes: [
        "[GAME] Test gameplay working: movement, jumping, attacks, knockback",
        "[GAME] Fighter FSM with 9 states (idle, run, jump, attack x3, defend, hurt, death)",
        "[GAME] HUD implemented: health bars, player names, round timer",
        "[GAME] Integer-based physics for deterministic simulation",
        "[GAME] Block mechanic reduces damage by 75%",
        "[GAME] P2P connection established via StrikeVentNet (input sync WIP)",
      ],
    },

    //0.0.3
    {
      version: "v0.0.3",
      date: "2026-01-25",
      changes: [
        "[GAME] StrikeVent NET Development Finished (Release Soon)",
      ],
    },
    
    //0.0.2
    {
      version: "v0.0.2",
      date: "2025-10-21",
      changes: [
        "[GAME] Project Approved by Supervisor",
        "[GAME] Purpouse shifted from \"Player Psychology\" to \"Improving Netcode\" ",
      ],
    },

    //0.0.1
    {
      version: "v0.0.1",
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
