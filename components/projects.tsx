"use client"

import Image from "next/image"
import { useState } from "react"

interface Project {
  id: string
  index: string
  name: string
  year: string
  tags: string[]
  description: string
  websiteLink?: string
  playStoreLink?: string
  appStoreLink?: string
  screenshots?: Array<{
    src: string
    alt: string
  }>
}

const projects: Project[] = [
  {
    id: "1",
    index: "01",
    name: "LEG!ER GLOBAL NEWS",
    year: "2024",
    tags: ["Flutter", "Live News", "Multilingual"],
    description:
      "LEG!ER GLOBAL NEWS brings together 115 newspapers from around the world, including 72 live online publications, with breaking headlines, video reports, multilingual content, and article listening in one global news experience.",
    websiteLink: "https://legiergroup.com/en/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.pagedrop.lagier&hl=en",
    appStoreLink: "https://apps.apple.com/au/app/legier-global-news/id6756674261",
    screenshots: [
      {
        src: "/legier-home.webp",
        alt: "Legier home screen",
      },
      {
        src: "/legier-video.webp",
        alt: "Legier video and live news screen",
      },
      {
        src: "/legier-newspapers.png",
        alt: "Legier newspapers screen",
      },
      {
        src: "/legier-news-details.png",
        alt: "Legier news details screen",
      },
      {
        src: "/legier-more.png",
        alt: "Legier more news screen",
      },
    ],
  },
  {
    id: "2",
    index: "02",
    name: "Riptide Rentals",
    year: "2024",
    tags: ["SwiftUI", "iOS", "Apple Build"],
    description:
      "Completely free SwiftUI app for Riptide Jet Ski Rentals in southwest Florida, built to guide riders with easy navigation to popular spots, landmarks, wildlife areas, islands, and sandbars right from the water.",
    websiteLink: "https://www.riptiderentals.com/",
    appStoreLink: "https://apps.apple.com/au/app/riptide-rentals/id6757623532",
    screenshots: [
      {
        src: "/riptide-rentals-map.webp",
        alt: "Riptide Rentals navigation screen",
      },
      {
        src: "/riptide-rentals-points.webp",
        alt: "Riptide Rentals points of interest screen",
      },
      {
        src: "/0x0ss.png",
        alt: "Riptide Rentals additional app screen",
      },
    ],
  },
  {
    id: "3",
    index: "03",
    name: "SafeRadar",
    year: "2025",
    tags: ["iOS", "Real-time", "Safety"],
    description:
      "Saferadar is a real-time safety assistance app that connects people who need help with compassionate volunteers ready to provide support, putting an immediate safety network at users' fingertips.",
    websiteLink: "https://www.saferadar.net/",
    appStoreLink: "https://apps.apple.com/us/app/saferadar/id6758638644",
    screenshots: [
      {
        src: "/saferadar-splash.png",
        alt: "SafeRadar splash screen",
      },
      {
        src: "/saferadar-welcome.png",
        alt: "SafeRadar welcome screen",
      },
      {
        src: "/saferadar-signin.png",
        alt: "SafeRadar sign in screen",
      },
      {
        src: "/saferadar-home.png",
        alt: "SafeRadar home emergency screen",
      },
      {
        src: "/saferadar-location.png",
        alt: "SafeRadar location sharing screen",
      },
      {
        src: "/saferadar-map.png",
        alt: "SafeRadar live tracking map screen",
      },
    ],
  },
  {
    id: "4",
    index: "04",
    name: "FinanceApp",
    year: "2023",
    tags: ["Flutter", "Firebase", "Charts"],
    description: "Personal finance tracking and analytics with clean budgeting tools and visual breakdowns.",
    playStoreLink: "#",
  },
  {
    id: "5",
    index: "05",
    name: "FitLife",
    year: "2023",
    tags: ["Kotlin", "ML Kit", "Jetpack Compose"],
    description: "AI-powered fitness companion with rep counting, workout planning, and progress insights.",
    playStoreLink: "#",
  },
  {
    id: "6",
    index: "06",
    name: "SocialHub",
    year: "2022",
    tags: ["Flutter", "WebSocket", "Node.js"],
    description: "Real-time social networking platform with live feeds, instant messaging, and social discovery.",
    websiteLink: "#",
  },
  {
    id: "7",
    index: "07",
    name: "EduLearn",
    year: "2022",
    tags: ["Swift", "CloudKit", "iOS SDK"],
    description: "Interactive iOS learning platform with course management, guided lessons, and progress tracking.",
    appStoreLink: "#",
  },
  {
    id: "8",
    index: "08",
    name: "DeliveryHub",
    year: "2022",
    tags: ["Kotlin", "Maps SDK", "Django"],
    description: "Smart logistics and delivery tracking with real-time driver location sharing and dispatch visibility.",
    playStoreLink: "#",
  },
  {
    id: "9",
    index: "09",
    name: "TravelAR",
    year: "2021",
    tags: ["Flutter", "ARCore", "Maps API"],
    description: "Augmented reality travel guide that lets users point the camera and discover nearby places instantly.",
    playStoreLink: "#",
  },
  {
    id: "10",
    index: "10",
    name: "MusicStream",
    year: "2021",
    tags: ["React", "Web Audio API", "AWS"],
    description: "High-quality music streaming web experience with custom audio visualizations and curated discovery.",
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
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--background)",
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
          05 — Work
        </p>

        <h2
          style={{
            fontFamily: "var(--font-syne, Syne, sans-serif)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--foreground)",
            marginBottom: "18px",
          }}
        >
          Selected Projects
        </h2>

        <p
          style={{
            maxWidth: "720px",
            fontSize: "15px",
            lineHeight: "1.8",
            color: "var(--muted-light)",
            marginBottom: "40px",
            fontFamily: "var(--font-inter, Inter, sans-serif)",
          }}
        >
          A closer look at one of the products I shipped recently, followed by a selection of other mobile and web builds.
        </p>

        <div>
          {projects.map((project) => {
            const isActive = activeId === project.id
            return (
              <ProjectRow
                key={project.id}
                project={project}
                isActive={isActive}
                onClick={() => setActiveId(isActive ? null : project.id)}
              />
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .project-row-inner {
            grid-template-columns: 40px 1fr !important;
          }

          .project-row-meta {
            display: none !important;
          }

          .project-expanded {
            padding-left: 16px !important;
          }

          .project-links {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }

          .project-shot-grid {
            gap: 12px !important;
          }
        }
      `}</style>
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
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick()
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid var(--border-muted)",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        backgroundColor: hovered || isActive ? "rgba(100, 112, 192, 0.12)" : "transparent",
      }}
    >
      <div
        className="project-row-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "56px 1fr auto",
          gap: "24px",
          alignItems: "center",
          padding: "24px 16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-syne, Syne, sans-serif)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: isActive ? "var(--accent-warm)" : "var(--muted)",
            transition: "color 0.2s ease",
          }}
        >
          {project.index}
        </span>

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
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  fontWeight: 400,
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  padding: "4px 10px",
                  backgroundColor: "rgba(36, 52, 61, 0.5)",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="project-row-meta"
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
              color: isActive ? "var(--accent-warm)" : "var(--muted)",
              lineHeight: 1,
            }}
          >
            +
          </span>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          maxHeight: isActive ? "720px" : "0",
          opacity: isActive ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.25s ease",
        }}
      >
        <div
          className="project-expanded"
          style={{
            padding: "0 16px 24px 80px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.7",
              color: "var(--muted-light)",
              maxWidth: "640px",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
            }}
          >
            {project.description}
          </p>

          {project.screenshots && project.screenshots.length > 0 && (
            <div
              className="project-shot-grid"
              style={{
                display: "flex",
                flexWrap: "nowrap",
                gap: "14px",
                alignItems: "stretch",
                overflowX: "auto",
                paddingBottom: "6px",
              }}
            >
              {project.screenshots.map((shot) => (
                <div
                  key={shot.src}
                  style={{
                    flex: "0 0 180px",
                    borderRadius: "18px",
                    padding: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={230}
                    height={498}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      borderRadius: "12px",
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="project-links" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {project.playStoreLink && project.playStoreLink !== "#" && (
              <ProjectLink href={project.playStoreLink} label="Play Store" />
            )}
            {project.appStoreLink && project.appStoreLink !== "#" && (
              <ProjectLink href={project.appStoreLink} label="App Store" />
            )}
            {project.websiteLink && project.websiteLink !== "#" && (
              <ProjectLink href={project.websiteLink} label="Website" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      style={{
        fontSize: "12px",
        fontWeight: 600,
        color: "var(--accent-warm)",
        textDecoration: "none",
        letterSpacing: "0.01em",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
      }}
    >
      {label} ↗
    </a>
  )
}
