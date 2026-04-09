"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--background)",
        display: "flex",
        alignItems: "center",
        // FIX 1: Increased paddingTop so content clears the navbar (was 64px).
        // Added paddingBottom so the terminal is never clipped at the bottom.
        paddingTop: "100px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(128, 161, 186, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(145, 196, 195, 0.16) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.55,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--container-width)",
          margin: "0 auto",
          padding: "0 32px",
          width: "100%",
          // FIX 2: Removed translateY(-44px) — this was the root cause of
          // content hiding behind the navbar and the terminal being cut off.
        }}
        className="hero-shell"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "64px",
          }}
          className="hero-flex"
        >
          {/* ── Left: Text ── */}
          <div
            style={{
              flex: 1,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.15cm",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "24px",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              Mobile Developer
            </p>

            <h1
              style={{
                fontFamily: "var(--font-syne, Syne, sans-serif)",
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: "0.95",
                color: "var(--foreground)",
                marginBottom: "32px",
                wordBreak: "break-word",
              }}
            >
              Rosdeb Koch
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                fontWeight: 300,
                color: "var(--muted)",
                maxWidth: "480px",
                lineHeight: "1.6",
                marginBottom: "48px",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              Crafting exceptional mobile experiences with Flutter, Kotlin, Java, and Swift — elegant, performant, and built to last.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary">
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
              <a
                href="/rosdeb-koch-cv.pdf"
                download="rosdeb-koch-cv.pdf"
                className="btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 1v9M4 7l3 3 3-3M2 12h10" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div
            style={{
              flexShrink: 0,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
            className="hero-image-wrap"
          >
            <div className="hero-portrait-stage">
              <div className="hero-portrait-glow" aria-hidden />

              <div className="hero-image-card">
                <div className="hero-image-ring">
                  <div className="hero-image-panel">
                    <Image
                      src="/rosdebkoch12.jpeg"
                      alt="Rosdeb Koch — Mobile Developer"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="hero-image-vignette" />
                  </div>
                </div>
              </div>

              <div className="hero-image-copy">
                <p className="hero-image-kicker">Rosdeb Koch</p>
                <p className="hero-image-role">Mobile developer focused on smooth UX, performance, and production-ready apps.</p>
              </div>

              <div className="hero-skill-chip">
                <span>Flutter</span>
                <span className="hero-chip-divider" />
                <span>Dart</span>
                <span className="hero-chip-divider" />
                <span>Java</span>
                <span className="hero-chip-divider" />
                <span>Kotlin</span>
                <span className="hero-chip-divider" />
                <span>Swift</span>
              </div>
            </div>

            <div className="hero-stats-panel">
              {[
                { value: "1.2+", label: "Years" },
                { value: "12+", label: "Projects" },
                { value: "5+", label: "Live Apps" },
              ].map((s) => (
                <div key={s.label} className="hero-stat-item">
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Terminal ── FIX 3: sits in normal document flow, not absolute */}
        <div
          className="hero-terminal"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
            maxWidth: "640px",
            // FIX 4: margin-top instead of relying on absolute positioning
            margin: "16px auto 0",
            borderRadius: "12px",
            border: "1px solid rgba(128, 161, 186, 0.2)",
            background: "rgba(20, 30, 36, 0.92)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 24px 64px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 16px",
              borderBottom: "1px solid rgba(128, 161, 186, 0.12)",
              background: "rgba(30, 42, 49, 0.6)",
            }}
          >
            <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#ff5f57" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#febc2e" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#28c840" }} />
            <span
              style={{
                marginLeft: "8px",
                fontSize: "11px",
                color: "var(--muted)",
                fontFamily: "var(--font-inter, Inter, monospace)",
                letterSpacing: "0.02em",
              }}
            >
              main.dart — lib/view/screens
            </span>
          </div>

          <div
            style={{
              padding: "20px",
              fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace",
              fontSize: "12px",
              lineHeight: "1.8",
              color: "#b8d4e3",
              overflowX: "auto",
            }}
          >
            <div>
              <span style={{ color: "#c792ea" }}>class</span>{" "}
              <span style={{ color: "#82aaff" }}>Portfolio</span> {"{"}
            </div>
            <div style={{ paddingLeft: "24px" }}>
              <span style={{ color: "#c792ea" }}>final</span>{" "}
              <span style={{ color: "#f07178" }}>name</span>{" "}
              <span style={{ color: "#89ddff" }}>=</span>{" "}
              <span style={{ color: "#c3e88d" }}>'Rosdeb Koch'</span>
              <span style={{ color: "#89ddff" }}>;</span>
            </div>
            <div style={{ paddingLeft: "24px" }}>
              <span style={{ color: "#c792ea" }}>final</span>{" "}
              <span style={{ color: "#f07178" }}>skills</span>{" "}
              <span style={{ color: "#89ddff" }}>=</span>{" "}
              <span style={{ color: "#89ddff" }}>['</span>
              <span style={{ color: "#c3e88d" }}>Flutter</span>
              <span style={{ color: "#89ddff" }}>', '</span>
              <span style={{ color: "#c3e88d" }}>Swift</span>
              <span style={{ color: "#89ddff" }}>', '</span>
              <span style={{ color: "#c3e88d" }}>Kotlin</span>
              <span style={{ color: "#89ddff" }}>'];</span>
            </div>
            <div style={{ paddingLeft: "24px", marginTop: "4px" }}>
              <span style={{ color: "#546e7a" }}>// Building beautiful mobile apps ✨</span>
            </div>
            <div style={{ paddingLeft: "24px" }}>
              <span style={{ color: "#c792ea" }}>String</span>{" "}
              <span style={{ color: "#82aaff" }}>build</span>() {"{"}
            </div>
            <div style={{ paddingLeft: "48px" }}>
              <span style={{ color: "#c792ea" }}>return</span>{" "}
              <span style={{ color: "#c3e88d" }}>'Amazing Apps'</span>
              <span style={{ color: "#89ddff" }}>;</span>
            </div>
            <div style={{ paddingLeft: "24px" }}>{"}"}</div>
            <div>{"}"}</div>

            <div style={{ marginTop: "8px", display: "inline-flex", alignItems: "center" }}>
              <span style={{ color: "#546e7a" }}>$ </span>
              <span
                className="terminal-cursor"
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "16px",
                  backgroundColor: "#82aaff",
                  marginLeft: "6px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator — also in normal flow now */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            marginTop: "48px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.8s",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
            }}
          >
            Scroll
          </span>
          <div
            className="animate-pulse-subtle"
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "var(--border)",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }

        @keyframes heroGlowPulse {
          0%, 100% { transform: scale(1); opacity: 0.48; }
          50% { transform: scale(1.06); opacity: 0.72; }
        }

        @keyframes heroPulse {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(1.18); opacity: 1; }
        }

        @keyframes terminalCursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .terminal-cursor {
          animation: terminalCursorBlink 1s step-end infinite;
        }

        .hero-portrait-stage {
          position: relative;
          width: min(100%, 440px);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: heroFloat 7s ease-in-out infinite;
        }

        .hero-portrait-glow {
          position: absolute;
          top: 44px;
          width: 400px;
          height: 400px;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(128, 161, 186, 0.28) 0%, rgba(128, 161, 186, 0.08) 42%, rgba(128, 161, 186, 0) 72%),
            radial-gradient(circle at 70% 30%, rgba(180, 222, 189, 0.34), rgba(180, 222, 189, 0) 48%);
          filter: blur(12px);
          pointer-events: none;
          animation: heroGlowPulse 6s ease-in-out infinite;
        }

        .hero-image-card {
          position: relative;
          z-index: 2;
        }

        .hero-image-ring {
          position: relative;
          width: 420px;
          height: 420px;
          padding: 10px;
          border-radius: 999px;
          background: linear-gradient(140deg, rgba(128, 161, 186, 0.95), rgba(145, 196, 195, 0.72), rgba(180, 222, 189, 0.78));
          box-shadow: 0 30px 80px rgba(128, 161, 186, 0.22);
        }

        .hero-image-panel {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 999px;
          border: 6px solid rgba(30, 42, 49, 0.92);
        }

        .hero-image-panel img {
          transform: scale(1.04);
          transition: transform 0.45s ease;
        }

        .hero-image-card:hover .hero-image-panel img {
          transform: scale(1.09);
        }

        .hero-image-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, rgba(10, 10, 10, 0) 22%, rgba(10, 10, 10, 0.12) 62%, rgba(10, 10, 10, 0.4) 100%);
        }

        .hero-image-copy {
          margin-top: 22px;
          text-align: center;
          max-width: 320px;
        }

        .hero-image-kicker {
          font-family: var(--font-syne, Syne, sans-serif);
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--foreground);
          margin: 0 0 6px 0;
        }

        .hero-image-role {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .hero-skill-chip {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
          padding: 12px 16px;
          border: 1px solid rgba(128, 161, 186, 0.24);
          border-radius: 999px;
          background: rgba(36, 52, 61, 0.88);
          backdrop-filter: blur(14px);
          color: var(--foreground);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.01em;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.24);
        }

        .hero-chip-divider {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: rgba(107, 135, 156, 0.45);
        }

        .hero-stats-panel {
          margin-top: 22px;
          padding: 18px 22px;
          border: 1px solid rgba(128, 161, 186, 0.22);
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(36, 52, 61, 0.96) 0%, rgba(30, 42, 49, 0.96) 100%);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);
        }

        .hero-stat-item {
          text-align: center;
          position: relative;
        }

        .hero-stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 6px;
          right: -8px;
          width: 1px;
          height: calc(100% - 12px);
          background: rgba(180, 222, 189, 0.8);
        }

        .hero-stat-value {
          font-family: var(--font-syne, Syne, sans-serif);
          font-size: 24px;
          font-weight: 700;
          color: var(--foreground);
          letter-spacing: -0.03em;
        }

        .hero-stat-label {
          margin-top: 4px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 768px) {
          .hero-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 48px !important;
          }
          .hero-image-wrap {
            align-self: center;
            width: 100%;
          }
          .hero-portrait-stage {
            width: min(100%, 320px);
            margin: 0 auto;
          }
          .hero-portrait-glow {
            top: 38px;
            width: 280px;
            height: 280px;
          }
          .hero-image-ring {
            width: 290px;
            height: 290px;
          }
          .hero-skill-chip {
            flex-wrap: wrap;
            justify-content: center;
          }
          .hero-stats-panel {
            padding: 16px;
            border-radius: 18px;
          }
          .hero-stat-value {
            font-size: 21px;
          }
          .hero-terminal {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .hero-terminal > div:last-child {
            font-size: 11px !important;
            padding: 16px !important;
          }
        }

        @media (max-width: 520px) {
          .hero-portrait-stage {
            width: min(100%, 300px);
            animation-duration: 8s;
          }
          .hero-image-ring {
            width: 250px;
            height: 250px;
          }
          .hero-skill-chip {
            width: 100%;
          }
          .hero-terminal {
            border-radius: 8px !important;
          }
          .hero-terminal > div:last-child {
            font-size: 10px !important;
            padding: 12px !important;
            line-height: 1.6 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-portrait-stage,
          .hero-portrait-glow,
          .terminal-cursor {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}