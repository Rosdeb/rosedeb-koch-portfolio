"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import RKLogo from "@/components/rk-logo"

interface NavigationProps {
  scrolled: boolean
  scrollingUp: boolean
}

export default function Navigation({ scrolled, scrollingUp }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  // Close on outside click
  useEffect(() => {
    const close = () => setMobileMenuOpen(false)
    if (mobileMenuOpen) document.addEventListener("click", close)
    return () => document.removeEventListener("click", close)
  }, [mobileMenuOpen])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        backgroundColor: scrolled && !scrollingUp ? "rgba(30, 42, 49, 0.9)" : "transparent",
        borderBottom: scrolled && !scrollingUp ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled && !scrollingUp ? "blur(14px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="#"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <RKLogo />
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={(e) => {
            e.stopPropagation()
            setMobileMenuOpen((o) => !o)
          }}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--foreground)",
          }}
          className="show-mobile"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileMenuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            animation: "fadeIn 0.2s ease",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 32px",
                fontSize: "13px",
                color: "var(--muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-muted)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
