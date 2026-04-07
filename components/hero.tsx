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
        paddingTop: "64px",
        position: "relative",
        overflow: "hidden",
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
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          width: "100%",
        }}
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
            {/* Eyebrow */}
            <p
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "24px",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              Mobile Developer
            </p>

            {/* Name */}
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

            {/* Role line */}
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

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#projects"
                className="btn-primary"
              >
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                Get in Touch
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
                <span>Kotlin</span>
                <span className="hero-chip-divider" />
                <span>Swift</span>
              </div>
            </div>

            <div className="hero-stats-panel">
              {[
                { value: "5+", label: "Years" },
                { value: "20+", label: "Projects" },
                { value: "4", label: "Platforms" },
              ].map((s) => (
                <div key={s.label} className="hero-stat-item">
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
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

        .hero-portrait-stage {
          position: relative;
          width: min(100%, 380px);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: heroFloat 7s ease-in-out infinite;
        }

        .hero-portrait-glow {
          position: absolute;
          top: 44px;
          width: 320px;
          height: 320px;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(128, 161, 186, 0.28) 0%, rgba(128, 161, 186, 0.08) 42%, rgba(128, 161, 186, 0) 72%),
            radial-gradient(circle at 70% 30%, rgba(180, 222, 189, 0.34), rgba(180, 222, 189, 0) 48%);
          filter: blur(12px);
          pointer-events: none;
          animation: heroGlowPulse 6s ease-in-out infinite;
        }

        .hero-status-pill {
          position: relative;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding: 10px 14px;
          border: 1px solid rgba(128, 161, 186, 0.32);
          border-radius: 999px;
          background: rgba(36, 52, 61, 0.88);
          backdrop-filter: blur(14px);
          color: var(--foreground);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.01em;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.28);
        }

        .hero-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--accent-dim);
          box-shadow: 0 0 0 6px rgba(145, 196, 195, 0.2);
          animation: heroPulse 2.2s ease-in-out infinite;
        }

        .hero-image-card {
          position: relative;
          z-index: 2;
        }

        .hero-image-ring {
          position: relative;
          width: 334px;
          height: 334px;
          padding: 10px;
          border-radius: 999px;
          background:
            linear-gradient(140deg, rgba(128, 161, 186, 0.95), rgba(145, 196, 195, 0.72), rgba(180, 222, 189, 0.78));
          box-shadow: 0 30px 80px rgba(128, 161, 186, 0.22);
        }

        .hero-image-panel {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 999px;
          border: 6px solid rgba(30, 42, 49, 0.92);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(128, 161, 186, 0.08) 100%),
            radial-gradient(circle at top, rgba(145, 196, 195, 0.2), transparent 48%);
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
          background:
            radial-gradient(circle at 50% 30%, rgba(10, 10, 10, 0) 22%, rgba(10, 10, 10, 0.12) 62%, rgba(10, 10, 10, 0.4) 100%);
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
        }

        @media (max-width: 520px) {
          .hero-portrait-stage {
            width: min(100%, 300px);
          }
          .hero-image-ring {
            width: 250px;
            height: 250px;
          }
          .hero-skill-chip {
            width: 100%;
          }
          .hero-status-pill {
            justify-content: center;
            width: 100%;
            font-size: 11px;
          }
          .hero-portrait-stage {
            animation-duration: 8s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-portrait-stage,
          .hero-portrait-glow,
          .hero-status-dot {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
