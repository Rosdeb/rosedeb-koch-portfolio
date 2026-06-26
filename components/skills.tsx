const skillCategories = [
  {
    category: "Cross-Platform",
    skills: ["Flutter", "Dart"],
    className: "cube-card cube-card-cross",
  },
  {
    category: "Android",
    skills: ["Kotlin", "Java", "Android Studio", "XML"],
    className: "cube-card cube-card-android",
  },
  {
    category: "iOS",
    skills: ["Swift", "SwiftUI"],
    className: "cube-card cube-card-ios",
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Agora", "Google Maps", "Socket.io", "IoT", "Firebase", "REST APIs", "CI/CD"],
    className: "cube-card cube-card-tools",
  },
]

export default function Skills() {
  const totalSkills = skillCategories.reduce((count, category) => count + category.skills.length, 0)

  return (
    <section
      id="skills"
      style={{
        padding: "120px 32px",
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--background)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "var(--container-width)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "24px",
            fontFamily: "var(--font-inter, Inter, sans-serif)",
          }}
        >
          03 — Skills
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
            gap: "42px",
            alignItems: "center",
          }}
          className="skills-layout"
        >
          <div style={{ maxWidth: "520px" }}>
            <h2
              style={{
                fontFamily: "var(--font-syne, Syne, sans-serif)",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "var(--foreground)",
                marginBottom: "20px",
              }}
            >
              Technical Expertise
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "var(--muted-light)",
                marginBottom: "28px",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              A rounded, product-focused skill set built around cross-platform delivery, native mobile engineering, and the tools needed to ship reliable apps.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "28px",
              }}
            >
              <InfoPill label={`${skillCategories.length} capability zones`} />
              <InfoPill label={`${totalSkills} core tools`} />
              <InfoPill label="Cupertino-inspired workflow" />
            </div>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              {[
                "Cross-platform apps with Flutter and Dart",
                "Native Android delivery with Kotlin, Java, Android Studio, and XML",
                "Modern iOS implementation with Swift and SwiftUI",
                "Production tooling across Firebase, APIs, maps, real-time communication, and CI/CD",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "15px 18px",
                    borderRadius: "22px",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    backdropFilter: "blur(18px)",
                    color: "var(--muted-light)",
                    fontSize: "14px",
                    lineHeight: "1.65",
                    boxShadow: "0 16px 38px rgba(15, 23, 42, 0.08)",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-stage">
            <div className="cube-floor" aria-hidden />
            {skillCategories.map((category) => (
              <article key={category.category} className={category.className}>
                <div className="cube-top" aria-hidden />
                <div className="cube-side" aria-hidden />
                <div className="cube-front">
                  <p className="skills-card-title">{category.category}</p>
                  <div className="skills-chip-wrap">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </div>

      <style>{`
        @keyframes skillFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }

        @keyframes skillPulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }

        .skills-layout {
          position: relative;
        }

        .skills-stage {
          position: relative;
          min-height: 700px;
          border-radius: 42px;
          background: linear-gradient(180deg, #ffffff 0%, var(--surface) 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 30px 90px rgba(15, 23, 42, 0.08);
          overflow: hidden;
          perspective: 1400px;
        }

        .cube-floor {
          position: absolute;
          inset: auto 7% 38px;
          height: 120px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.12), rgba(37, 99, 235, 0.02) 70%, transparent 100%);
          filter: blur(18px);
          pointer-events: none;
        }

        .cube-card {
          position: absolute;
          transform-style: preserve-3d;
          animation: skillFloat 7s ease-in-out infinite;
        }

        .cube-front,
        .cube-top,
        .cube-side {
          position: absolute;
          border-radius: 16px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.96) 100%);
          border: 1px solid var(--border);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            0 16px 30px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }

        .cube-front {
          inset: 0;
          padding: 20px 18px 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cube-top {
          left: 12px;
          right: 12px;
          top: -18px;
          height: 34px;
          transform: rotateX(70deg);
          transform-origin: bottom center;
          opacity: 0.82;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 245, 249, 0.98) 100%);
        }

        .cube-side {
          top: 8px;
          bottom: 10px;
          right: -18px;
          width: 34px;
          transform: rotateY(-68deg);
          transform-origin: left center;
          opacity: 0.72;
          background: linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(226, 232, 240, 0.98) 100%);
        }

        .cube-card-cross {
          top: 74px;
          left: 28px;
          width: 220px;
          height: 158px;
          animation-delay: 0.2s;
        }

        .cube-card-android {
          top: 20px;
          right: 34px;
          width: 296px;
          height: 184px;
          animation-delay: 0.9s;
        }

        .cube-card-ios {
          left: 52px;
          bottom: 56px;
          width: 210px;
          height: 160px;
          animation-delay: 1.4s;
        }

        .cube-card-tools {
          right: 16px;
          bottom: 22px;
          width: 382px;
          height: 220px;
          animation-delay: 0.5s;
        }

        .skills-card-title {
          margin: 0;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--foreground);
          font-family: var(--font-inter, Inter, sans-serif);
        }

        .skills-chip-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          position: relative;
          z-index: 3;
        }

        @media (max-width: 1180px) {
          .skills-layout {
            grid-template-columns: 1fr !important;
          }

          .skills-stage {
            min-height: auto !important;
            padding: 26px !important;
            display: grid !important;
            gap: 18px !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .cube-card {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            bottom: auto !important;
            left: auto !important;
            width: 100% !important;
            height: auto !important;
            transform: none !important;
          }

          .cube-top,
          .cube-side {
            display: none !important;
          }

        }

        @media (max-width: 700px) {
          .skills-stage {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function InfoPill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: "40px",
        padding: "0 14px",
        borderRadius: "999px",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        color: "var(--foreground)",
        fontSize: "12px",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
      }}
    >
      {label}
    </span>
  )
}

function SkillTag({ skill }: { skill: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "38px",
        padding: "0 14px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 500,
        color: "var(--foreground)",
        border: "1px solid var(--border)",
        background: "var(--surface-elevated)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
      }}
    >
      {skill}
    </span>
  )
}
