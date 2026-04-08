"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import DevelopmentProcess from "@/components/development-process"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 50)
      setScrollingUp(currentScrollY <= lastScrollY || currentScrollY < 16)
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navigation scrolled={scrolled} scrollingUp={scrollingUp} />
      <Hero />
      <About />
      <Skills />
      <DevelopmentProcess />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
