export default function Experience() {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Mobile Developer",
      company: "TechCorp Solutions",
      description:
        "Leading mobile development initiatives, mentoring junior developers, and architecting scalable applications.",
    },
    {
      year: "2021 - 2023",
      title: "Mobile Developer",
      company: "StartupHub Inc",
      description:
        "Developed and deployed multiple cross-platform applications, focusing on user experience and performance.",
    },
    {
      year: "2020 - 2021",
      title: "Junior Android Developer",
      company: "Digital Innovations Ltd",
      description:
        "Built native Android applications, collaborated with UI/UX teams, and participated in agile development.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
        <div className="w-12 h-1 bg-primary mb-12" />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full" />
                {idx !== experiences.length - 1 && <div className="w-1 h-24 bg-border mt-4" />}
              </div>
              <div className="pb-8">
                <p className="text-sm text-primary font-semibold">{exp.year}</p>
                <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
