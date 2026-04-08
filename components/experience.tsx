export default function Experience() {
  const experiences = [
    {
      year: "2023 — Present",
      title: "Senior Mobile Developer",
      company: "TechCorp Solutions",
      description:
        "Leading mobile development initiatives, mentoring junior developers, and architecting scalable applications.",
    },
    {
      year: "2021 — 2023",
      title: "Mobile Developer",
      company: "StartupHub Inc",
      description:
        "Developed and deployed multiple cross-platform applications, focusing on user experience and performance.",
    },
    {
      year: "2020 — 2021",
      title: "Junior Android Developer",
      company: "Digital Innovations Ltd",
      description:
        "Built native Android applications, collaborated with UI/UX teams, and participated in agile development.",
    },
  ]

  return (
    <section
      id="experience"
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
            marginBottom: "24px",
            fontFamily: "var(--font-inter, Inter, sans-serif)",
          }}
        >
          06 — Experience
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
          Work History
        </h2>

        <div style={{ position: "relative" }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "40px",
                paddingBottom: idx < experiences.length - 1 ? "56px" : "0",
                position: "relative",
              }}
              className="exp-row"
            >
              {/* Left: Year */}
              <div>
                <span
                  style={{
                    fontSize: "12px",
                    color: idx === 0 ? "var(--accent-warm)" : "var(--muted)",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    letterSpacing: "0.02em",
                    fontWeight: idx === 0 ? 600 : 400,
                  }}
                >
                  {exp.year}
                </span>
              </div>

              {/* Right: Content with left-border accent */}
              <div
                style={{
                  paddingLeft: "24px",
                  borderLeft: `1px solid ${idx === 0 ? "var(--accent-soft)" : "var(--border-muted)"}`,
                  transition: "border-color 0.2s ease",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-syne, Syne, sans-serif)",
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--foreground)",
                    marginBottom: "4px",
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--muted)",
                    marginBottom: "12px",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                  }}
                >
                  {exp.company}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.65",
                    color: "var(--muted-light)",
                    maxWidth: "560px",
                    fontWeight: 300,
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .exp-row > div:last-child {
            padding-left: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
