"use client";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    name: "EAM360 Mobile App for Maximo",
    company: "Sedin Technologies",
    period: "2021 – Present",
    description:
      "Enterprise Asset Management mobile application used across manufacturing industries worldwide. Built on IBM Maximo, the app enables field technicians to manage assets, work orders, and inventory on the go.",
    role: "Lead Android Developer",
    highlights: [
      "Migrated entire legacy Java codebase to 100% Kotlin",
      "Implemented Bluetooth printing for field operations",
      "Built e-signature capture via RESTful APIs",
      "Architected Multi-Module structure for scalability",
      "Maintained 99% crash-free rate across all releases",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Flow", "Hilt", "Retrofit", "Room", "Clean Architecture", "CI/CD"],
    metrics: [
      { label: "Crash-free Rate", value: "99%" },
      { label: "Boilerplate Reduced", value: "40%" },
      { label: "Faster Builds", value: "30%" },
    ],
    type: "Enterprise",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-5 py-16 md:px-8 md:py-24"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
            WHAT I&apos;VE BUILT
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
            Featured Projects
          </h2>
          <div style={{ width: "48px", height: "3px", background: "var(--accent)", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        {projects.map((project) => (
          <FadeInSection key={project.name} direction="up">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "2rem",
              }}
            >
              {/* ── Header ── */}
              <div
                className="p-5 md:p-8"
                style={{
                  background: "linear-gradient(135deg, var(--accent-subtle) 0%, transparent 100%)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Type badge + period */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      background: "var(--accent-subtle)",
                      color: "var(--accent-light)",
                      border: "1px solid var(--accent-border)",
                      borderRadius: "6px",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {project.type}
                  </span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{project.period}</span>
                </div>

                {/* Title */}
                <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "clamp(1.1rem, 3vw, 1.5rem)", marginBottom: "0.25rem", lineHeight: 1.3 }}>
                  {project.name}
                </h3>
                <p style={{ color: "var(--accent)", fontWeight: 500, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                  {project.role} · {project.company}
                </p>

                {/* Metrics row — evenly spaced, wrap on very small */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.75rem",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1.25rem",
                    marginTop: "0.25rem",
                  }}
                >
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="card-hover"
                      style={{
                        textAlign: "center",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                        padding: "0.75rem 0.5rem",
                      }}
                    >
                      <div style={{ fontSize: "clamp(1.2rem, 4vw, 1.6rem)", fontWeight: 800, color: "var(--accent)" }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", fontWeight: 500, marginTop: "0.2rem" }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Body ── */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 md:p-8">

                {/* Description + Key Contributions */}
                <div>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.9rem" }}>
                    {project.description}
                  </p>
                  <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.875rem" }}>
                    Key Contributions
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {project.highlights.map((h) => (
                      <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                        <span style={{ color: "var(--accent)", marginTop: "3px", flexShrink: 0 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack + Focus Areas */}
                <div>
                  <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.875rem" }}>
                    Tech Stack
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="tag-hover"
                        style={{
                          background: "var(--accent-subtle)",
                          color: "var(--accent-light)",
                          border: "1px solid var(--accent-border)",
                          borderRadius: "6px",
                          padding: "0.25rem 0.7rem",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.875rem" }}>
                    Focus Areas
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {[
                      { area: "UI Development", detail: "Jetpack Compose + Material Design" },
                      { area: "State Management", detail: "ViewModel + StateFlow + Coroutines" },
                      { area: "Data Layer", detail: "Room + Realm + Retrofit + REST APIs" },
                      { area: "DI", detail: "Hilt Dagger for dependency injection" },
                    ].map((f) => (
                      <div
                        key={f.area}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          background: "var(--bg-tertiary)",
                          borderRadius: "8px",
                          padding: "0.5rem 0.75rem",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>{f.area}</span>
                        <span style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 500, textAlign: "right" }}>{f.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
