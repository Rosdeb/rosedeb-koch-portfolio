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
        backgroundColor: "#0a0a0a",
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
            "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.18,
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
                color: "#5B9BD5",
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
                color: "#f5f5f5",
                marginBottom: "32px",
                wordBreak: "break-word",
              }}
            >
              Rosdeb
              <br />
              Koch
            </h1>

            {/* Role line */}
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                fontWeight: 300,
                color: "#888888",
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
            <div
              style={{
                width: "260px",
                height: "320px",
                border: "1px solid #222222",
                overflow: "hidden",
                position: "relative",
                borderRadius: "4px",
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "#5B9BD5")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "#222222")
              }
            >
              <Image
                src="/rosdebkoch12.jpeg"
                alt="Rosdeb Koch — Mobile Developer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Small stat badge */}
            <div
              style={{
                marginTop: "16px",
                padding: "12px 16px",
                border: "1px solid #222222",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              {[
                { value: "5+", label: "Years" },
                { value: "20+", label: "Projects" },
                { value: "4", label: "Platforms" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-syne, Syne, sans-serif)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f5f5",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "11px", color: "#888888", marginTop: "2px" }}>
                    {s.label}
                  </div>
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
              color: "#555555",
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
              backgroundColor: "#333333",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 48px !important;
          }
          .hero-image-wrap {
            align-self: center;
          }
          .hero-image-wrap > div:first-child {
            width: 220px !important;
            height: 270px !important;
          }
        }
      `}</style>
    </section>
  )
}