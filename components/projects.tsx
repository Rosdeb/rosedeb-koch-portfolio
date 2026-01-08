"use client"

import { useState } from "react"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const projects = [
    {
      id: "1",
      title: "FinanceApp Pro",
      description: "A comprehensive personal finance management application with real-time tracking and analytics.",
      tech: ["Flutter", "Firebase", "Charts"],
      role: "Lead Developer",
      highlights: "Multi-platform deployment, 50K+ downloads",
    },
    {
      id: "2",
      title: "FitLife Tracker",
      description: "Health and fitness tracking application with AI-powered workout recommendations.",
      tech: ["Kotlin", "Jetpack Compose", "ML Kit"],
      role: "Senior Developer",
      highlights: "Wearable integration, Real-time sync",
    },
    {
      id: "3",
      title: "SocialConnect",
      description: "Cross-platform social networking app enabling real-time communication and content sharing.",
      tech: ["Flutter", "Node.js", "WebSocket"],
      role: "Full Stack Developer",
      highlights: "Live messaging, Image optimization",
    },
    {
      id: "4",
      title: "EduLearn Mobile",
      description: "Educational platform with interactive lessons, quizzes, and progress tracking.",
      tech: ["Swift", "iOS SDK", "CloudKit"],
      role: "iOS Developer",
      highlights: "Video streaming, Offline support",
    },
    {
      id: "5",
      title: "DeliveryHub",
      description: "Logistics and delivery management system with real-time tracking and optimization.",
      tech: ["Kotlin", "Maps SDK", "Django"],
      role: "Lead Developer",
      highlights: "Route optimization, Live tracking",
    },
    {
      id: "6",
      title: "TravelGuide AR",
      description: "Augmented reality travel companion app with interactive landmarks and local guides.",
      tech: ["Flutter", "AR Core", "Google Maps"],
      role: "Developer",
      highlights: "AR integration, Multi-language",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
      <div className="w-12 h-1 bg-primary mb-12" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="mb-4 h-32 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <div className="text-2xl font-bold text-primary/50 group-hover:text-primary/70 transition-colors">
                {project.title.slice(0, 2).toUpperCase()}
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {hoveredId === project.id && (
                <div className="animate-slide-up">
                  <p className="text-xs text-muted-foreground mb-2">Key Achievements</p>
                  <p className="text-sm text-foreground">{project.highlights}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
