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

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section
      id="projects"
      style={{
        padding: "120px 32px",
        borderTop: "1px solid #222222",
        backgroundColor: "#0a0a0a",
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
            color: "#555555",
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
            color: "#f5f5f5",
            marginBottom: "64px",
          }}
        >
          Selected Projects
        </h2>

        {/* Project list */}
        <div>
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
        borderTop: "1px solid #1a1a1a",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        backgroundColor: hovered || isActive ? "#0f0f0f" : "transparent",
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
            color: isActive ? "#5B9BD5" : "#333333",
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
              color: hovered || isActive ? "#f5f5f5" : "#cccccc",
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
                  color: "#555555",
                  border: "1px solid #1e1e1e",
                  borderRadius: "4px",
                  padding: "2px 8px",
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
              color: "#444444",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
            }}
          >
            {project.year}
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#444444",
              transition: "transform 0.2s ease, color 0.2s ease",
              transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
              color: isActive ? "#5B9BD5" : "#444444",
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
              color: "#888888",
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
                  color: "#5B9BD5",
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
                  color: "#5B9BD5",
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