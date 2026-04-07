"use client"

import { useState } from "react"

interface Project {
  id: string
  index: string
  name: string
  year: string
  tags: string[]
  description: string
  appLink?: string
  websiteLink?: string
}

const projects: Project[] = [
  {
    id: "1",
    index: "01",
    name: "Legier Media",
    year: "2024",
    tags: ["Flutter", "Firebase", "News API"],
    description: "Digital newspaper app with real-time news updates, tailored feeds, and offline reading.",
    appLink: "https://play.google.com/store/apps/details?id=com.pagedrop.lagier",
    websiteLink: "https://legiergroup.com/en/",
  },
  {
    id: "2",
    index: "02",
    name: "FinanceApp",
    year: "2023",
    tags: ["Flutter", "Firebase", "Charts"],
    description: "Personal finance tracking and analytics — budget management with visual breakdowns.",
    appLink: "#",
  },
  {
    id: "3",
    index: "03",
    name: "FitLife",
    year: "2023",
    tags: ["Kotlin", "ML Kit", "Jetpack Compose"],
    description: "AI-powered fitness companion with rep counting, workout planning, and progress insights.",
    appLink: "#",
  },
  {
    id: "4",
    index: "04",
    name: "SocialHub",
    year: "2022",
    tags: ["Flutter", "WebSocket", "Node.js"],
    description: "Real-time social networking platform with live feeds and instant messaging.",
    websiteLink: "#",
  },
  {
    id: "5",
    index: "05",
    name: "EduLearn",
    year: "2022",
    tags: ["Swift", "CloudKit", "iOS SDK"],
    description: "Interactive iOS learning platform with course management and progress tracking.",
    appLink: "#",
  },
  {
    id: "6",
    index: "06",
    name: "DeliveryHub",
    year: "2022",
    tags: ["Kotlin", "Maps SDK", "Django"],
    description: "Smart logistics and delivery tracking with real-time driver location sharing.",
    appLink: "#",
  },
  {
    id: "7",
    index: "07",
    name: "TravelAR",
    year: "2021",
    tags: ["Flutter", "ARCore", "Maps API"],
    description: "Augmented reality travel guide — point your camera to discover nearby places.",
    appLink: "#",
  },
  {
    id: "8",
    index: "08",
    name: "MusicStream",
    year: "2021",
    tags: ["React", "Web Audio API", "AWS"],
    description: "High-quality music streaming web app with custom audio visualizations.",
    websiteLink: "#",
  },
]

const overviewSteps = [
  {
    title: "Discovery & Planning",
    subtitle: "Goals, scope, and roadmap",
    description:
      "Define business objectives, audience needs, core features, and delivery milestones before development begins.",
    color: "#4DB6E5",
    gradient: "linear-gradient(90deg, rgba(77, 182, 229, 0.85) 0%, rgba(77, 182, 229, 0.12) 100%)",
    icon: "data",
  },
  {
    title: "UX & System Design",
    subtitle: "Flows, interface, and architecture",
    description:
      "Structure the user journey, design the visual experience, and establish a scalable technical foundation.",
    color: "#8A6BE0",
    gradient: "linear-gradient(90deg, rgba(138, 107, 224, 0.85) 0%, rgba(138, 107, 224, 0.12) 100%)",
    icon: "strategy",
  },
  {
    title: "Build & Integrate",
    subtitle: "Implementation with milestone delivery",
    description:
      "Develop the application, connect APIs and services, and refine each release with performance and maintainability in mind.",
    color: "#17C993",
    gradient: "linear-gradient(90deg, rgba(23, 201, 147, 0.85) 0%, rgba(23, 201, 147, 0.12) 100%)",
    icon: "target",
  },
  {
    title: "QA, Launch & Growth",
    subtitle: "Testing, release, and improvement",
    description:
      "Validate across devices, resolve edge cases, launch confidently, and continue improving through feedback and monitoring.",
    color: "#FF4D67",
    gradient: "linear-gradient(90deg, rgba(255, 77, 103, 0.85) 0%, rgba(255, 77, 103, 0.12) 100%)",
    icon: "check",
  },
] as const

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section
      id="projects"
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
            marginBottom: "24px",
            fontFamily: "var(--font-inter, Inter, sans-serif)",
          }}
        >
          04 — Work
        </p>

        <h2
          style={{
            fontFamily: "var(--font-syne, Syne, sans-serif)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--foreground)",
            marginBottom: "64px",
          }}
        >
          Selected Projects
        </h2>

        <ProjectOverview />

        {/* Project list */}
        <div style={{ marginTop: "88px" }}>
          {projects.map((project) => {
            const isActive = activeId === project.id
            return (
              <ProjectRow
                key={project.id}
                project={project}
                isActive={isActive}
                onClick={() =>
                  setActiveId(isActive ? null : project.id)
                }
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectOverview() {
  return (
    <div
      style={{
        border: "1px solid rgba(120, 88, 166, 0.32)",
        borderRadius: "28px",
        padding: "48px 32px",
        background:
          "radial-gradient(circle at top, rgba(178, 154, 216, 0.16), transparent 30%), linear-gradient(180deg, rgba(91, 75, 138, 0.32) 0%, rgba(76, 53, 117, 0.18) 100%)",
        boxShadow: "0 24px 80px rgba(14, 10, 24, 0.2)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          gap: "24px",
          marginBottom: "42px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: "clamp(26px, 4vw, 40px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--foreground)",
            }}
          >
            How the app development process works
          </h3>
        </div>

        <p
          style={{
            margin: 0,
            maxWidth: "420px",
            color: "var(--muted-light)",
            fontSize: "14px",
            lineHeight: 1.7,
            fontFamily: "var(--font-inter, Inter, sans-serif)",
          }}
        >
          A professional workflow from discovery to launch, built to keep app delivery clear, efficient, and user-focused.
        </p>
      </div>

      <div className="overview-layout">
        <div className="overview-stack-scene">
          <div className="overview-stack-column">
            {overviewSteps.map((step) => (
              <div
                key={step.title}
                className="overview-block"
                style={
                  {
                    "--block-color": step.color,
                  } as React.CSSProperties
                }
              >
                <div className="overview-block-top" />
                <div className="overview-block-side" />
              </div>
            ))}
          </div>
        </div>

        <div className="overview-steps">
          {overviewSteps.map((step) => (
            <OverviewPhaseCard
              key={step.title}
              title={step.title}
              subtitle={step.subtitle}
              description={step.description}
              color={step.color}
              gradient={step.gradient}
              icon={step.icon}
            />
          ))}
        </div>
      </div>

      <style>{`
        .overview-layout {
          display: grid;
          grid-template-columns: 320px minmax(0, 1fr);
          gap: 34px;
          align-items: center;
        }

        .overview-stack-scene {
          display: flex;
          justify-content: center;
        }

        .overview-stack-column {
          display: flex;
          flex-direction: column;
          width: 230px;
        }

        .overview-block {
          position: relative;
          width: 210px;
          height: 56px;
          margin-bottom: 18px;
        }

        .overview-block:nth-child(2),
        .overview-block:nth-child(4) {
          margin-left: 26px;
        }

        .overview-block-top {
          width: 100%;
          height: 46px;
          background: linear-gradient(135deg, color-mix(in srgb, var(--block-color) 90%, white) 0%, var(--block-color) 68%, color-mix(in srgb, var(--block-color) 70%, black) 100%);
          clip-path: polygon(42% 0%, 100% 0%, 76% 42%, 18% 42%, 0% 18%);
          box-shadow: 0 12px 22px rgba(0, 0, 0, 0.16);
        }

        .overview-block-side {
          position: absolute;
          left: 18px;
          top: 42px;
          width: 160px;
          height: 24px;
          background: color-mix(in srgb, var(--block-color) 72%, black);
          clip-path: polygon(0% 0%, 100% 0%, 84% 100%, 0% 100%);
        }

        .overview-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .overview-phase-row {
          display: grid;
          grid-template-columns: minmax(120px, 1fr) auto minmax(220px, 1.3fr);
          gap: 18px;
          align-items: center;
        }

        .overview-phase-bar {
          height: 34px;
          border-radius: 999px;
          background: var(--phase-gradient);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .overview-phase-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .overview-phase-icon {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
        }

        .overview-phase-content {
          max-width: 300px;
        }

        .overview-phase-name {
          margin: 0 0 8px 0;
          color: var(--phase-color);
          font-size: 22px;
          font-weight: 700;
          font-family: var(--font-syne, Syne, sans-serif);
          letter-spacing: -0.03em;
        }

        .overview-phase-copy {
          margin: 0;
          color: var(--muted-light);
          font-size: 13px;
          line-height: 1.6;
          font-family: var(--font-inter, Inter, sans-serif);
        }

        @media (max-width: 980px) {
          .overview-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .overview-phase-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .overview-phase-bar {
            height: 18px;
          }
        }

        @media (max-width: 640px) {
          .overview-stack-column {
            width: 200px;
          }

          .overview-block {
            width: 182px;
            height: 48px;
            margin-bottom: 14px;
          }

          .overview-block-side {
            width: 140px;
            height: 20px;
          }

          .overview-phase-name {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  )
}

function OverviewPhaseCard({
  title,
  subtitle,
  description,
  color,
  gradient,
  icon,
}: {
  title: string
  subtitle: string
  description: string
  color: string
  gradient: string
  icon: "data" | "strategy" | "target" | "check"
}) {
  return (
    <div
      className="overview-phase-row"
      style={
        {
          "--phase-color": color,
          "--phase-gradient": gradient,
        } as React.CSSProperties
      }
    >
      <div className="overview-phase-bar" aria-hidden />
      <div className="overview-phase-card">
        <div className="overview-phase-icon" style={{ backgroundColor: color }}>
          <OverviewPhaseIcon type={icon} />
        </div>
        <div className="overview-phase-content">
          <p className="overview-phase-name">{title}</p>
          <p className="overview-phase-copy">
            <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>{subtitle}. </strong>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function OverviewPhaseIcon({ type }: { type: "data" | "strategy" | "target" | "check" }) {
  if (type === "data") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18h6" />
        <path d="M4 12h10" />
        <path d="M4 6h8" />
        <path d="M16 6h4v4h-4z" />
        <path d="M14 14l2 2 4-5" />
      </svg>
    )
  }

  if (type === "strategy") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v4" />
        <path d="M12 17v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M3 12h4" />
        <path d="M17 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    )
  }

  if (type === "target") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5V2" />
        <path d="M19 12h3" />
        <path d="M12 19v3" />
      </svg>
    )
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 12l4 4 8-9" />
      <path d="M5 5h14v14H5z" opacity="0.45" />
    </svg>
  )
}

function ProjectRow({
  project,
  isActive,
  onClick,
}: {
  project: Project
  isActive: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick() }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid var(--border-muted)",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        backgroundColor: hovered || isActive ? "rgba(145, 196, 195, 0.12)" : "transparent",
      }}
    >
      {/* Main Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "56px 1fr auto",
          gap: "24px",
          alignItems: "center",
          padding: "24px 16px",
        }}
        className="project-row-inner"
      >
        {/* Index */}
        <span
          style={{
            fontFamily: "var(--font-syne, Syne, sans-serif)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: isActive ? "var(--accent)" : "var(--muted)",
            transition: "color 0.2s ease",
          }}
        >
          {project.index}
        </span>

        {/* Name + tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: hovered || isActive ? "var(--foreground)" : "var(--muted-light)",
              transition: "color 0.2s ease",
            }}
          >
            {project.name}
          </span>

          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "10px",
                  fontWeight: 400,
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "2px 8px",
                  backgroundColor: "rgba(36, 52, 61, 0.72)",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Year + expand indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "var(--muted)",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
            }}
          >
            {project.year}
          </span>
          <span
            style={{
              fontSize: "16px",
              transition: "transform 0.2s ease, color 0.2s ease",
              transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
              color: isActive ? "var(--accent)" : "var(--muted)",
              lineHeight: 1,
            }}
          >
            +
          </span>
        </div>
      </div>

      {/* Expanded description */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: isActive ? "200px" : "0",
          opacity: isActive ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.25s ease",
        }}
      >
        <div
          style={{
            padding: "0 16px 24px 80px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="project-expanded"
        >
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.65",
              color: "var(--muted-light)",
              maxWidth: "560px",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
            }}
          >
            {project.description}
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            {project.appLink && project.appLink !== "#" && (
              <a
                href={project.appLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                App Store ↗
              </a>
            )}
            {project.websiteLink && project.websiteLink !== "#" && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Website ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .project-row-inner {
            grid-template-columns: 40px 1fr !important;
          }
          .project-expanded {
            padding-left: 16px !important;
          }
        }
      `}</style>
    </div>
  )
}
