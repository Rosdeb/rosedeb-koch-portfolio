"use client"

import { useState } from "react"

const skillCategories = [
  {
    category: "Cross-Platform",
    skills: ["Flutter", "Dart", "GetX", "Riverpod", "Stripe", "RevenueCat", "In-App Purchases"],
  },
  {
    category: "Android & iOS (Native)",
    skills: ["Kotlin", "Java", "Swift", "SwiftUI", "Android Studio", "XML", "Mapkit"],
  },
  {
    category: "Backend & Cloud Integration",
    skills: ["Firebase", "REST APIs", "JWT", "Socket.io", "WebRTC", "Mapbox", "Google Maps"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git/GitHub", "CI/CD", "Agora", "IoT", "App Store Connect", "Google Play Console"],
  }
]

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
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
                marginBottom: "32px",
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
                { title: "Cross-platform apps with Flutter and Dart", category: "Cross-Platform" },
                { title: "Native Android delivery with Kotlin, Java, Android Studio, and XML", category: "Android" },
                { title: "Modern iOS implementation with Swift and SwiftUI", category: "iOS" },
                { title: "Production tooling across Firebase, APIs, maps, real-time communication, and CI/CD", category: "Tools & Platforms" },
              ].map((item) => (
                <div
                  key={item.category}
                  onMouseEnter={() => setHoveredCategory(item.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{
                    padding: "15px 18px",
                    borderRadius: "22px",
                    border: hoveredCategory === item.category ? "1px solid var(--foreground)" : "1px solid var(--border)",
                    background: hoveredCategory === item.category ? "var(--surface-elevated)" : "var(--surface)",
                    backdropFilter: "blur(18px)",
                    color: hoveredCategory === item.category ? "var(--foreground)" : "var(--muted-light)",
                    fontSize: "14px",
                    lineHeight: "1.65",
                    boxShadow: hoveredCategory === item.category ? "0 16px 38px rgba(15, 23, 42, 0.12)" : "0 16px 38px rgba(15, 23, 42, 0.04)",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    transform: hoveredCategory === item.category ? "translateX(6px)" : "translateX(0)",
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-stage">
            {skillCategories.map((category, index) => {
              const isHovered = hoveredCategory === category.category;
              const isDimmed = hoveredCategory !== null && !isHovered;

              return (
                <article 
                  key={category.category} 
                  className={`cube-card ${isHovered ? 'cube-hovered' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.4}s`,
                    opacity: isDimmed ? 0.4 : 1,
                    transition: 'opacity 0.4s ease',
                    zIndex: isHovered ? 10 : 1,
                  }}
                  onMouseEnter={() => setHoveredCategory(category.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div className="cube-top" aria-hidden />
                  <div className="cube-side" aria-hidden />
                  <div className="cube-front">
                    <p className="skills-card-title">{category.category}</p>
                    <div className="skills-chip-wrap">
                      {category.skills.map((skill) => (
                        <SkillTag key={skill} skill={skill} isHovered={isHovered} />
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skillFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }

        .skills-layout {
          position: relative;
        }

        .skills-stage {
          position: relative;
          min-height: 520px;
          border-radius: 42px;
          background: linear-gradient(180deg, #ffffff 0%, var(--surface) 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);
          perspective: 1400px;
          
          /* Updated Layout to 2x2 Grid */
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px 32px;
          padding: 50px 40px;
          align-content: center;
        }

        .cube-card {
          position: relative;
          transform-style: preserve-3d;
          animation: skillFloat 7s ease-in-out infinite;
          display: flex;
          flex-direction: column;
          cursor: pointer;
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
          transition: all 0.3s ease;
        }

        .cube-front {
          position: relative;
          flex: 1;
          z-index: 2;
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
          z-index: 1;
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
          z-index: 1;
          background: linear-gradient(180deg, rgba(248, 250, 252, 0.98) 0%, rgba(226, 232, 240, 0.98) 100%);
        }

        /* Hover states for cubes */
        .cube-card.cube-hovered .cube-front,
        .cube-card.cube-hovered .cube-top,
        .cube-card.cube-hovered .cube-side {
          border-color: var(--foreground);
          background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 1) 100%);
        }
        
        .cube-card.cube-hovered .cube-front {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.4),
            0 24px 48px rgba(15, 23, 42, 0.12);
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
            gap: 24px 18px !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
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
        padding: "6px 0",
        color: "var(--muted)",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
      }}
    >
      <span style={{ marginRight: '8px', color: 'var(--foreground)' }}>•</span>
      {label}
    </span>
  )
}

function SkillTag({ skill, isHovered }: { skill: string, isHovered?: boolean }) {
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
        border: isHovered ? "1px solid var(--foreground)" : "1px solid var(--border)",
        background: isHovered ? "var(--surface-elevated)" : "var(--surface-elevated)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
        transition: "all 0.3s ease",
      }}
    >
      {skill}
    </span>
  )
}
