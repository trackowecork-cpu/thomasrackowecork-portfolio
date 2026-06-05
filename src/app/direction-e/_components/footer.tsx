import { C, M, S, BD, IN2, MUT, FNT } from "../_tokens";

export function DirectionEFooter() {
  return (
    <>
      <style>{`
        .df {
          border-top: 1px solid ${BD};
          padding: clamp(4rem, 8vw, 6.5rem) clamp(1.25rem, 5vw, 5rem) clamp(2.5rem, 5vw, 4rem);
        }
        .df-statement {
          font-family: ${C};
          font-weight: 300;
          font-style: italic;
          font-size: clamp(1.25rem, 2.25vw, 1.75rem);
          color: ${MUT};
          line-height: 1.4;
          margin: 0 0 clamp(2rem, 4vw, 3rem);
        }
        .df-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        a.df-email {
          color: ${MUT};
          text-decoration: none;
          font-family: ${S};
          font-size: 14px;
          transition: color 180ms ease;
        }
        a.df-email:hover { color: ${IN2}; }
        a.df-ext {
          color: ${FNT};
          text-decoration: none;
          font-family: ${S};
          font-size: 14px;
          transition: color 180ms ease;
        }
        a.df-ext:hover { color: ${MUT}; }
      `}</style>
      <footer className="df">
        <p className="df-statement">Always interested in problems worth solving.</p>
        <div className="df-meta">
          <a href="mailto:hello@thomasrackowecork.com" className="df-email">
            hello@thomasrackowecork.com
          </a>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="https://linkedin.com/in/thomasrackowecork" className="df-ext">
              LinkedIn ↗
            </a>
            <span style={{ fontFamily: S, fontSize: 13, color: FNT }}>
              © 2026 Thomas Rackowe Cork
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
