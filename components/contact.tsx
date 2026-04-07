"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
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
        const err = await res.json()
        alert(`Error: ${err.error || "Failed to send message"}`)
      }
    } catch (err) {
      alert("Network error. Please try again later.")
    } finally {
      setLoading(false)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "transparent",
    border: "1px solid #222222",
    borderRadius: "4px",
    color: "#f5f5f5",
    fontSize: "14px",
    fontFamily: "var(--font-inter, Inter, sans-serif)",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s ease",
  }

  return (
    <section
      id="contact"
      style={{
        padding: "120px 32px",
        borderTop: "1px solid #222222",
        backgroundColor: "#0a0a0a",
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
            color: "#555555",
            marginBottom: "24px",
            fontFamily: "var(--font-inter, Inter, sans-serif)",
          }}
        >
          06 — Contact
        </p>

        <h2
          style={{
            fontFamily: "var(--font-syne, Syne, sans-serif)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "#f5f5f5",
            marginBottom: "64px",
          }}
        >
          Let's Work Together
        </h2>

        {/* Large email */}
        <div style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#555555",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "12px",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
            }}
          >
            Reach out directly
          </p>
          <a
            href="mailto:rosdebkoch@gmail.com"
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: "clamp(22px, 4vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#f5f5f5",
              textDecoration: "none",
              transition: "color 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#5B9BD5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f5f5")}
          >
            rosdebkoch@gmail.com
          </a>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "GitHub", href: "https://github.com/Rosdeb" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/rosdev-koch-260005324/",
              },
              { label: "Twitter", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  fontSize: "13px",
                  color: "#555555",
                  textDecoration: "none",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5B9BD5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#1a1a1a", marginBottom: "64px" }} />

        {/* Contact form */}
        <div style={{ maxWidth: "560px" }}>
          <p
            style={{
              fontSize: "13px",
              color: "#555555",
              marginBottom: "32px",
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              lineHeight: "1.6",
            }}
          >
            Or use the form below — I usually respond within 48 hours.
          </p>

          {submitted ? (
            <div
              style={{
                padding: "20px 24px",
                border: "1px solid #5B9BD5",
                borderRadius: "4px",
                animation: "fadeIn 0.3s ease",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#5B9BD5",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                Message sent. I'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#5B9BD5")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#222222")}
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#5B9BD5")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#222222")}
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#5B9BD5")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#222222")}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ alignSelf: "flex-start", opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
