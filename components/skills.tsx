export default function Skills() {
  const skillCategories = [
    {
      category: "Cross-Platform",
      skills: ["Flutter", "React Native"],
    },
    {
      category: "Android",
      skills: ["Kotlin", "Java", "Android Studio"],
    },
    {
      category: "iOS",
      skills: ["Swift", "SwiftUI"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Firebase", "REST APIs", "CI/CD"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
        <div className="w-12 h-1 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
