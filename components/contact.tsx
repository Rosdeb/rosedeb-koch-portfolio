"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
      <div className="w-12 h-1 bg-primary mb-12" />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Whether it's a question
            or a collaboration proposal, feel free to reach out.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-primary mb-2">Email</h3>
              <a
                href="mailto:hello@rosdebkoch.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hello@rosdebkoch.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary mb-2">Social</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  GitHub
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors duration-300 font-medium"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
