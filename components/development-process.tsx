import type React from "react"

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Product goals and user needs",
    description: "We define the vision, audience, and core outcomes before writing code.",
    color: "#B29AD8",
  },
  {
    id: "02",
    title: "UX Planning",
    subtitle: "Flows, structure, and interaction",
    description: "Key screens and journeys are shaped to make the experience simple and intuitive.",
    color: "#9A7CC8",
  },
  {
    id: "03",
    title: "Architecture",
    subtitle: "Scalable technical foundation",
    description: "The app structure, data flow, and integrations are designed for long-term reliability.",
    color: "#7858A6",
  },
  {
    id: "04",
    title: "Development",
    subtitle: "Clean implementation and delivery",
    description: "Features are built in focused milestones with attention to quality and performance.",
    color: "#6A4D95",
  },
  {
    id: "05",
    title: "QA & Polish",
    subtitle: "Testing, refinement, and edge cases",
    description: "The product is validated across devices and refined until the experience feels solid.",
    color: "#5B4B8A",
  },
  {
    id: "06",
    title: "Launch & Iterate",
    subtitle: "Release, monitor, and improve",
    description: "After launch, feedback and insights drive the next round of meaningful updates.",
    color: "#4C3575",
  },
] as const

export default function DevelopmentProcess() {
  return (
    <section
      id="process"
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
          04 — Process
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
          Development Process
        </h2>

        <div
          style={{
            border: "1px solid rgba(146, 139, 156, 0.32)",
            borderRadius: "28px",
            padding: "48px 32px",
             background: "radial-gradient(circle at top, rgba(92, 131, 116, 0.25), transparent 35%), linear-gradient(180deg, #7DAA9B 0%, #5C8374 55%, #3F5F56 100%)",
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
                From idea to shipped product
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
              A modern mobile app workflow built around strategy, design clarity, clean execution, and measurable release quality.
            </p>
          </div>

          <div className="overview-grid">
            <div className="overview-column">
              {processSteps.filter((_, index) => index % 2 === 0).map((step) => (
                <ProcessStepCard key={step.id} step={step} align="left" />
              ))}
            </div>

            <div className="overview-stack-wrap">
              <div className="overview-stack">
                {processSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="overview-layer"
                    style={
                      {
                        "--layer-color": step.color,
                        "--layer-depth": `${index * 48}px`,
                        zIndex: processSteps.length - index,
                      } as React.CSSProperties
                    }
                  >
                    <div className="overview-layer-top" />
                    <div className="overview-layer-side" />
                  </div>
                ))}
              </div>
            </div>

            <div className="overview-column">
              {processSteps.filter((_, index) => index % 2 === 1).map((step) => (
                <ProcessStepCard key={step.id} step={step} align="right" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .overview-grid {
          display: grid;
          grid-template-columns: minmax(220px, 1fr) 360px minmax(220px, 1fr);
          gap: 28px;
          align-items: center;
        }

        .overview-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .overview-stack-wrap {
          display: flex;
          justify-content: center;
        }

        .overview-stack {
          position: relative;
          width: 300px;
          height: 360px;
          perspective: 1000px;
        }

        .overview-layer {
          position: absolute;
          left: 50%;
          top: var(--layer-depth);
          width: 220px;
          height: 38px;
          transform: translateX(-50%);
        }

        .overview-layer-top {
          width: 100%;
          height: 100%;
          background: 3px dotted rgba(255,255,255,0.4);
          clip-path: polygon(50% 0%, 100% 28%, 50% 56%, 0% 28%);
          box-shadow: 0 10px 18px rgba(0, 0, 0, 0.18);
        }

        .overview-layer-side {
          position: absolute;
          left: 50%;
          top: 20px;
          width: 220px;
          height: 14px;
          transform: translateX(-50%);
          clip-path: polygon(0% 0%, 50% 56%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
          background: color-mix(in srgb, var(--layer-color) 74%, black);
        }

        .overview-phase-card {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .overview-phase-card.right {
          flex-direction: row-reverse;
          text-align: left;
        }

        .overview-phase-card.left {
          text-align: right;
        }

        .overview-phase-line {
          flex: 1;
          min-width: 54px;
          height: 0;
          border-top: 3px dotted rgba(255,255,255,0.4);
          opacity: 0.9;
        }

        .overview-phase-body {
          width: 220px;
        }

        .overview-phase-title {
          margin: 0 0 8px 0;
          color: var(--phase-color);
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.03em;
          font-family: var(--font-syne, Syne, sans-serif);
        }

        .overview-phase-name {
          margin: 0 0 8px 0;
          color: var(--foreground);
          font-size: 18px;
          font-weight: 700;
          font-family: var(--font-syne, Syne, sans-serif);
        }

        .overview-phase-copy {
          margin: 0;
          color: var(--muted-light);
          font-size: 12px;
          line-height: 1.6;
          font-family: var(--font-inter, Inter, sans-serif);
        }

        @media (max-width: 980px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .overview-column {
            gap: 18px;
          }

          .overview-phase-card.left,
          .overview-phase-card.right {
            flex-direction: row;
            text-align: left;
          }

          .overview-phase-body {
            width: auto;
          }

          .overview-stack {
            width: 280px;
            height: 340px;
          }

          .overview-layer {
            width: 210px;
          }

          .overview-layer-side {
            width: 210px;
          }
        }

        @media (max-width: 640px) {
          .overview-stack {
            width: 240px;
            height: 300px;
          }

          .overview-layer {
            width: 182px;
            height: 32px;
          }

          .overview-layer-side {
            width: 182px;
            top: 17px;
            height: 12px;
          }

          .overview-phase-title {
            font-size: 20px;
          }

          .overview-phase-line {
            min-width: 38px;
          }
        }
      `}</style>
    </section>
  )
}

function ProcessStepCard({
  step,
  align,
}: {
  step: (typeof processSteps)[number]
  align: "left" | "right"
}) {
  return (
    <div
      className={`overview-phase-card ${align}`}
      style={
        {
          "--phase-color": step.color,
        } as React.CSSProperties
      }
    >
      <div className="overview-phase-body">
        <p className="overview-phase-title">{step.id}</p>
        <p className="overview-phase-name">{step.title}</p>
        <p className="overview-phase-copy">
          <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>{step.subtitle}. </strong>
          {step.description}
        </p>
      </div>
      <div className="overview-phase-line" aria-hidden />
    </div>
  )
}
