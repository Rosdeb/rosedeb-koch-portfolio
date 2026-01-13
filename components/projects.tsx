"use client"

import { useState } from "react"

export default function CircularPortfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const projects = [
    {
      id: "1",
      name: "LEGIER MEDIA",
      icon: "/photo_6217528970366880544_x.jpg",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/10 via-orange-500/10 to-rose-500/10",
      tech: ["Flutter", "Firebase", "News API"],
      description: "Digital newspaper with real-time updates",
      appLink: "https://play.google.com/store/apps/details?id=com.pagedrop.lagier",
      websiteLink: "https://legiergroup.com/en/",
    },
    {
      id: "2",
      name: "FinanceApp",
      icon: "💰",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-sky-500/10",
      tech: ["Flutter", "Firebase", "Charts"],
      description: "Personal finance tracking & analytics",
      appLink: "#",
    },
    {
      id: "3",
      name: "FitLife",
      icon: "💪",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 via-teal-500/10 to-green-500/10",
      tech: ["Kotlin", "ML Kit", "Compose"],
      description: "AI-powered fitness companion",
      appLink: "#",
    },
    {
      id: "4",
      name: "SocialHub",
      icon: "🌐",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 via-pink-500/10 to-fuchsia-500/10",
      tech: ["Flutter", "WebSocket", "Node.js"],
      description: "Real-time social networking",
      websiteLink: "#",
    },
    {
      id: "5",
      name: "EduLearn",
      icon: "📚",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 via-red-500/10 to-rose-500/10",
      tech: ["Swift", "CloudKit", "iOS SDK"],
      description: "Interactive learning platform",
      appLink: "#",
    },
    {
      id: "6",
      name: "DeliveryHub",
      icon: "🚀",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 via-blue-500/10 to-violet-500/10",
      tech: ["Kotlin", "Maps SDK", "Django"],
      description: "Smart logistics & tracking",
      appLink: "#",
    },
    {
      id: "7",
      name: "TravelAR",
      icon: "✈️",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
      tech: ["Flutter", "ARCore", "Maps API"],
      description: "Augmented reality travel guide",
      appLink: "#",
    },
    {
      id: "8",
      name: "MusicStream",
      icon: "🎵",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/10 via-purple-500/10 to-indigo-500/10",
      tech: ["React", "Audio API", "AWS"],
      description: "High-quality music streaming",
      websiteLink: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4">
            Project Showcase
          </h1>
          <p className="text-slate-400 text-lg">Explore my creative works</p>
        </div>

        {/* Circular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group"
              style={{
                animation: `fadeInScale 0.5s ease-out ${index * 0.08}s both`,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div className="relative flex flex-col items-center">
                {/* Outer Glow Ring */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-[32px] bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`}
                />

                {/* Circular Card */}
                <div
                  className="relative w-44 h-44 rounded-[32px] shadow-xl shadow-black/50 group-hover:shadow-2xl group-hover:shadow-black/70 transition-all duration-500 ease-out transform group-hover:scale-110 cursor-pointer overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-slate-600"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  {/* Inner Content Area */}
                  <div className="absolute inset-3 bg-slate1800/90 backdrop-blur-md rounded-[24px] border border-slate-700/30 flex items-center justify-center overflow-hidden">
                    {/* Icon/Thumbnail */}
                    <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {project.icon.startsWith('/') ? (
                        <img
                          src={project.icon}
                          alt={project.name}
                          className="w-16 h-16 object-cover rounded-full p-1"
                        />
                      ) : (
                        <span className="text-6xl">
                          {project.icon}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-shine" />

                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[32px]`} />
                </div>

                {/* Project Details - Below Card */}
                <div className="w-full mt-6 space-y-3">
                  {/* Project Name */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                      {project.name}
                    </h3>
                    <div className={`h-1 w-16 bg-gradient-to-r ${project.gradient} mx-auto rounded-full`} />
                  </div>

                  {/* Description - Always Visible */}
                  <p className="text-xs text-slate-400 text-center px-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack - Expands on Hover */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: hoveredId === project.id ? '200px' : '0px',
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  >
                    <div className="space-y-3 animate-slideDown">
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 justify-center px-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={tech}
                            className={`text-[10px] px-2.5 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-transform`}
                            style={{
                              animation: `slideIn 0.3s ease-out ${i * 0.1}s both`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 px-2">
                        {project.appLink && (
                          <a
                            href={project.appLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 text-center text-xs px-3 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            📱 View App
                          </a>
                        )}
                        {project.websiteLink && (
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center text-xs px-3 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg border border-slate-600"
                            onClick={(e) => e.stopPropagation()}
                          >
                            🌐 Website
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-2xl font-bold shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 transform hover:scale-105 overflow-hidden border border-slate-600">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }

        .animate-shine {
          animation: shine 1s ease-out;
        }
      `}</style>
    </div>
  )
}