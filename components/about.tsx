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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              5+
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
              Years building mobile
              <br />
              products people rely on
            </div>

            <div
              style={{
                display: "flex",
                gap: "40px",
              }}
            >
              {[
                { value: "20+", label: "Projects" },
                { value: "4", label: "Platforms" },
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
          </div>

          {/* ── Right: Bio + links ── */}
          <div>
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
              I'm a passionate mobile developer with a deep commitment to creating
              applications that are both beautiful and performant. With expertise
              across multiple platforms, I bring a holistic approach to mobile
              development.
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
              My journey spans several years, across startup MVPs to enterprise
              applications. I believe in clean, maintainable code and
              collaborative team environments.
            </p>

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
                { label: "Twitter", href: "#" },
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
        }
      `}</style>
    </section>
  )
}
