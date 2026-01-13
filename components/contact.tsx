"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        const errorData = await res.json();
        console.error("Form submission error:", errorData);
        alert(`Error: ${errorData.error || "Failed to send message"}`);
      }
    } catch (err) {
      console.error("Network error:", err)
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
      <div className="w-12 h-1 bg-primary mb-12" />

      {/* Progress Bar */}
      {loading && (
        <div className="w-full h-1 bg-muted mb-6 overflow-hidden rounded">
          <div className="h-full bg-primary animate-pulse w-full" />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-primary mb-2">Email</h3>
              <a
                href="mailto:rosdebkoch@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                rosdebkoch@gmail.com
              </a>
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
            className="w-full px-4 py-3 bg-card border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border rounded-lg resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
          >
            {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}
