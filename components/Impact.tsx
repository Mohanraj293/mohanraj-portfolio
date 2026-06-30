"use client";
import FadeInSection from "./FadeInSection";
import CountUp from "./CountUp";

const timeline = [
  {
    year: "2021",
    title: "Joined Sedin Technologies",
    description: "Onboarded as Android Developer on the EAM360 project, an enterprise asset management system for manufacturing industries.",
    icon: "🚀",
  },
  {
    year: "2022",
    title: "Full Kotlin Migration",
    description: "Led the migration of the entire legacy Java codebase to 100% Kotlin using Coroutines and Flow — reducing boilerplate by 40%.",
    icon: "⚡",
  },
  {
    year: "2023",
    title: "Multi-Module Architecture",
    description: "Architected a scalable Multi-Module structure that cut Gradle build times by 30% and significantly improved team velocity.",
    icon: "🏗️",
  },
  {
    year: "2024",
    title: "Enterprise Features Shipped",
    description: "Delivered Bluetooth printing and e-signature capture features, directly expanding the app's enterprise utility on the field.",
    icon: "📱",
  },
  {
    year: "2025",
    title: "99% Crash-free Production",
    description: "Sustained a 99% crash-free session rate across all production releases through rigorous Unit Testing and Clean Architecture practices.",
    icon: "🏆",
  },
];

const impactMetrics = [
  { label: "Boilerplate code eliminated", icon: "✂️", end: 40, suffix: "%" },
  { label: "Gradle build time reduction", icon: "⚡", end: 30, suffix: "%" },
  { label: "Crash-free session rate",     icon: "🛡️", end: 99, suffix: "%" },
  { label: "Years of Android expertise",  icon: "📅", end: 5,  suffix: "+" },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="px-5 py-16 md:px-8 md:py-24"
      style={{ maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
          CAREER MILESTONES
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
          Achievements &amp; Impact
        </h2>
        <div style={{ width: "48px", height: "3px", background: "var(--accent)", margin: "1rem auto 0", borderRadius: "2px" }} />
      </div>

      {/* ── Metric cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {impactMetrics.map((m, i) => (
          <FadeInSection key={m.label} delay={i * 100} className="h-full">
            <div
              className="card-hover h-full"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.5rem 1rem",
                textAlign: "center",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{m.icon}</div>
              <div style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>
                <CountUp end={m.end} suffix={m.suffix} />
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.78rem", marginTop: "0.4rem", lineHeight: 1.4 }}>
                {m.label}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {/* ── Timeline ── */}
      <div style={{ position: "relative" }}>
        {/* Vertical centre line — desktop only */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, var(--accent), var(--accent-subtle))",
            transform: "translateX(-50%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {timeline.map((item, i) => (
            <div key={item.year} className="timeline-row" style={{ position: "relative" }}>

              {/* Centre dot — desktop only */}
              <div
                className="hidden md:block"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  border: "3px solid var(--bg-primary)",
                  zIndex: 1,
                }}
              />

              {/* Card — FadeInSection carries the width class so flex layout works */}
              <FadeInSection
                direction={i % 2 === 0 ? "left" : "right"}
                delay={100}
                className="w-full md:w-[45%]"
              >
                <div
                  className="card-hover"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    padding: "1.25rem 1.5rem",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                    <span
                      style={{
                        background: "var(--accent-subtle)",
                        color: "var(--accent-light)",
                        border: "1px solid var(--accent-border)",
                        borderRadius: "6px",
                        padding: "0.15rem 0.6rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.4rem" }}>{item.title}</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </FadeInSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
