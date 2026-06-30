"use client";
import FadeInSection from "./FadeInSection";

const skillGroups = [
  {
    category: "Architecture & Frameworks",
    icon: "⚙️",
    skills: ["Jetpack Compose", "Kotlin", "Coroutines", "Flow", "MVVM", "Clean Architecture", "Android SDK", "Material Design"],
  },
  {
    category: "Testing & Tools",
    icon: "🛠",
    skills: ["Unit Testing", "Hilt Dagger", "Retrofit", "Git", "CI/CD", "Realm", "Room"],
  },
  {
    category: "Backend & Web",
    icon: "🌐",
    skills: ["RESTful APIs", "Node.js", "MongoDB", "ReactJS", "JavaScript", "Java"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
            WHAT I WORK WITH
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
            Technical Skills
          </h2>
          <div style={{ width: "48px", height: "3px", background: "var(--accent)", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <FadeInSection key={group.category} delay={index * 150}>
              <div
                className="card-hover"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "2rem",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <div style={{ marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{group.icon}</span>
                  <span style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1rem" }}>{group.category}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tag-hover"
                      style={{
                        background: "var(--accent-subtle)",
                        color: "var(--accent-light)",
                        border: "1px solid var(--accent-border)",
                        borderRadius: "6px",
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
