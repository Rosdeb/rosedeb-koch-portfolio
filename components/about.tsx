export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="w-12 h-1 bg-primary mb-8" />
          <p className="text-muted-foreground mb-4 leading-relaxed">
            I'm a passionate mobile developer with a deep commitment to creating applications that are both beautiful
            and performant. With expertise across multiple platforms, I bring a holistic approach to mobile development.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            My journey in mobile development spans several years, during which I've worked on diverse projects ranging
            from startup MVPs to enterprise applications. I believe in writing clean, maintainable code and fostering
            collaborative team environments.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-primary hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              Twitter
            </a>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-6">Quick Facts</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Location</span>
              <span className="font-medium">Global</span>
            </li>
            <li className="flex justify-between border-t border-border pt-4">
              <span className="text-muted-foreground">Experience</span>
              <span className="font-medium">5+ Years</span>
            </li>
            <li className="flex justify-between border-t border-border pt-4">
              <span className="text-muted-foreground">Projects Completed</span>
              <span className="font-medium">20+</span>
            </li>
            <li className="flex justify-between border-t border-border pt-4">
              <span className="text-muted-foreground">Focus Areas</span>
              <span className="font-medium">Mobile Dev</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
