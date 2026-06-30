"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";

const links = ["About", "Skills", "Experience", "Projects", "Impact", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg-primary) 95%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="#hero" style={{ color: "var(--accent)", fontWeight: 700, fontSize: "1.25rem", textDecoration: "none" }}>
        MR<span style={{ color: "var(--text-primary)" }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ gap: "2rem", alignItems: "center" }} className="hidden md:flex">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="nav-link"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            {l}
          </a>
        ))}
        <button
          onClick={toggle}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: "0.3rem 0.6rem",
            fontSize: "1rem",
            transition: "border-color 0.2s",
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Mobile controls */}
      <div style={{ gap: "0.75rem", alignItems: "center" }} className="flex md:hidden">
        <button
          onClick={toggle}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: "0.3rem 0.6rem",
            fontSize: "1rem",
            transition: "border-color 0.2s",
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", fontSize: "1.5rem" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-tertiary)",
            borderBottom: "1px solid var(--border)",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
