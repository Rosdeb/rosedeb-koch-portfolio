export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 32px",
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "64px",
            fontFamily: "var(--font-inter, Inter, sans-serif)",
          }}
        >
          01 — About
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* ── Left: Oversized pull stat ── */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-warm)",
                marginBottom: "20px",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              Mobile Engineer
            </p>

            <div
              style={{
                fontFamily: "var(--font-syne, Syne, sans-serif)",
                fontSize: "clamp(64px, 10vw, 120px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: "1",
                color: "var(--foreground)",
                marginBottom: "8px",
              }}
            >
              1.2+
            </div>
            <div
              style={{
                fontFamily: "var(--font-syne, Syne, sans-serif)",
                fontSize: "clamp(14px, 2vw, 18px)",
                fontWeight: 400,
                color: "var(--muted)",
                letterSpacing: "-0.01em",
                marginBottom: "40px",
              }}
            >
              Years delivering
              <br />
              production-ready mobile apps
            </div>

            <div
              style={{
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}
            >
              {[
                { value: "12+", label: "Projects" },
                { value: "5+", label: "Live Apps" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-syne, Syne, sans-serif)",
                      fontSize: "32px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--foreground)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              {[
                "Cross-platform delivery with Flutter and Dart",
                "Native implementation across Kotlin, Java, and Swift",
                "Product-focused execution from UI to release support",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    color: "var(--muted-light)",
                    fontSize: "13px",
                    lineHeight: "1.6",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Bio + links ── */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "16px",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              Professional Profile
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "var(--muted-light)",
                marginBottom: "20px",
                fontWeight: 300,
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              I am a mobile application developer focused on building reliable,
              user-centered products with Flutter, Kotlin, Java, and Swift. My
              work covers the full delivery cycle, from translating product
              requirements into scalable architecture to shipping polished
              experiences for production.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "var(--muted-light)",
                marginBottom: "40px",
                fontWeight: 300,
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              I work best in environments where speed matters but quality still
              has to hold up in real use. I care about maintainable code,
              thoughtful UI implementation, API integration, performance, and
              collaboration with designers, QA, and stakeholders throughout the
              release process.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "12px",
                marginBottom: "40px",
              }}
              className="about-focus-grid"
            >
              {[
                "App architecture",
                "API integration",
                "Clean UI implementation",
                "Store-ready delivery",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    fontSize: "13px",
                    color: "var(--foreground)",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "var(--border)",
                marginBottom: "32px",
              }}
            />

            {/* Links */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { label: "GitHub", href: "https://github.com/Rosdeb" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/rosdev-koch-260005324/",
                },
                { label: "Email", href: "mailto:rosdebkoch@gmail.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    letterSpacing: "0.01em",
                    position: "relative",
                    paddingBottom: "2px",
                  }}
                  className="hover-underline"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .about-focus-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
