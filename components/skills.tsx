export default function Skills() {
  const skillCategories = [
    {
      category: "Cross-Platform",
      skills: ["Flutter", "Dart"],
    },
    {
      category: "Android",
      skills: ["Kotlin", "Java", "Android Studio", "XML"],
    },
    {
      category: "iOS",
      skills: ["Swift", "SwiftUI"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Agora", "Google Maps", "Socket.io", "IoT", "Firebase", "REST APIs", "CI/CD"],
    },
  ]

  return (
    <section
      id="skills"
      style={{
        padding: "120px 32px",
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--surface-elevated)",
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
          03 — Skills
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
          Technical Expertise
        </h2>

        {/* Definition list rows */}
        <div>
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "32px",
                alignItems: "start",
                padding: "28px 0",
                borderTop: "1px solid var(--border-muted)",
                borderBottom:
                  idx === skillCategories.length - 1
                    ? "1px solid var(--border-muted)"
                    : "none",
              }}
              className="skills-row"
            >
              {/* Category label */}
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  paddingTop: "4px",
                }}
              >
                {cat.category}
              </span>

              {/* Skill tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {cat.skills.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skills-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}

function SkillTag({ skill }: { skill: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 12px",
        fontSize: "12px",
        fontWeight: 400,
        color: "var(--muted-light)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        cursor: "default",
        transition: "border-color 0.2s ease, color 0.2s ease",
        backgroundColor: "rgba(36, 52, 61, 0.72)",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = "var(--accent)"
        el.style.color = "var(--accent)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = "var(--border)"
        el.style.color = "var(--muted-light)"
      }}
    >
      {skill}
    </span>
  )
}
