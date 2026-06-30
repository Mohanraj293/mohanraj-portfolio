"use client";
import FadeInSection from "./FadeInSection";
import CountUp from "./CountUp";

const stats = [
  { value: "5+", label: "Years Experience", end: 5, suffix: "+" },
  { value: "99%", label: "Crash-free Rate", end: 99, suffix: "%" },
  { value: "40%", label: "Boilerplate Reduced", end: 40, suffix: "%" },
  { value: "30%", label: "Faster Build Times", end: 30, suffix: "%" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-16 md:px-8 md:py-24"
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
          ABOUT ME
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
          Professional Summary
        </h2>
        <div style={{ width: "48px", height: "3px", background: "var(--accent)", margin: "1rem auto 0", borderRadius: "2px" }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <FadeInSection direction="left">
          <div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
              Versatile Android Developer with <span style={{ color: "var(--accent)", fontWeight: 600 }}>5+ years of expertise</span> in
              architecting scalable enterprise mobile applications using Kotlin, Jetpack Compose, and MVVM.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1.05rem" }}>
              Proven success in executing <span style={{ color: "var(--text-primary)" }}>Performance Optimization</span> strategies,
              migrating legacy codebases, and accelerating build pipelines. Committed to delivering
              high-impact, crash-free applications through <span style={{ color: "var(--text-primary)" }}>Clean Architecture</span>,
              Unit Testing, and user-centric design within Agile methodologies.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection direction="right">
          <div className="grid grid-cols-2 gap-4" style={{ alignItems: "stretch" }}>
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-hover"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
              >
                <div style={{ fontSize: "clamp(1.6rem, 5vw, 2rem)", fontWeight: 800, color: "var(--accent)", marginBottom: "0.4rem", lineHeight: 1 }}>
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
