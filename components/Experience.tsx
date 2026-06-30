"use client";
import FadeInSection from "./FadeInSection";

const achievements = [
  {
    title: "Codebase Modernization",
    description:
      "Engineered the migration of a legacy Java project to 100% Kotlin using Coroutines and Flow, reducing boilerplate code by 40% and improving asynchronous data handling efficiency.",
    highlight: "40% less boilerplate",
  },
  {
    title: "Architecture & Performance Optimization",
    description:
      "Architected a highly scalable Multi-Module architecture, decreasing Gradle build times by 30% and significantly accelerating development velocity within Agile methodologies.",
    highlight: "30% faster builds",
  },
  {
    title: "Feature Development",
    description:
      "Developed mission-critical features, including Bluetooth printing and e-signature capture via RESTful APIs, enhancing enterprise utility and user engagement.",
    highlight: "Enterprise-grade features",
  },
  {
    title: "Clean Architecture & Best Practices",
    description:
      "Enforced Clean Architecture principles by utilizing MVVM design patterns (ViewModel) and specific UseCases to ensure a modular, testable, and maintainable codebase.",
    highlight: "MVVM + Clean Arch",
  },
  {
    title: "Quality Assurance & Unit Testing",
    description:
      "Resolved complex technical debt and implemented comprehensive Unit Testing suites, maintaining a 99% crash-free session rate across all production releases.",
    highlight: "99% crash-free rate",
  },
  {
    title: "Recognition",
    description:
      "Recognized for consistently delivering high-quality work, improving app performance, and meeting agile sprint deliverables.",
    highlight: "Award recipient",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-5 py-16 md:px-8 md:py-24"
      style={{ maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
          WHERE I&apos;VE WORKED
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
          Professional Experience
        </h2>
        <div style={{ width: "48px", height: "3px", background: "var(--accent)", margin: "1rem auto 0", borderRadius: "2px" }} />
      </div>

      {/* Company card */}
      <FadeInSection direction="up">
        <div
          className="p-5 md:p-10"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            marginBottom: "2rem",
          }}
        >
          {/* Header row — company + date badge */}
          <div className="flex flex-wrap gap-3 justify-between items-start mb-2">
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)" }}>Sedin Technologies</h3>
              <p style={{ color: "var(--accent)", fontWeight: 500, marginTop: "0.25rem" }}>Android Developer</p>
            </div>
            <span
              style={{
                background: "var(--accent-subtle)",
                color: "var(--accent-light)",
                border: "1px solid var(--accent-border)",
                borderRadius: "20px",
                padding: "0.3rem 1rem",
                fontSize: "0.85rem",
                fontWeight: 500,
                whiteSpace: "nowrap",
                alignSelf: "flex-start",
              }}
            >
              2021 – Present
            </span>
          </div>

          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontStyle: "italic", marginBottom: "1.75rem", lineHeight: 1.7 }}>
            Spearheaded Android development for the EAM360 Mobile App for Maximo, an Enterprise Asset Management system utilized across manufacturing industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, index) => (
              <FadeInSection key={item.title} delay={index * 80}>
                <div
                  className="card-hover"
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "1.1rem",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                >
                  {/* Title + badge — stack on mobile, row on sm+ */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h4 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.92rem" }}>
                      {item.title}
                    </h4>
                    <span
                      style={{
                        background: "var(--accent-subtle)",
                        color: "var(--accent-light)",
                        fontSize: "0.72rem",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                        alignSelf: "flex-start",
                      }}
                    >
                      {item.highlight}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
