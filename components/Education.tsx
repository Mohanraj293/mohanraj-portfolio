"use client";
import FadeInSection from "./FadeInSection";

export default function Education() {
  return (
    <section
      id="education"
      className="px-5 py-16 md:px-8 md:py-24"
      style={{
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
            ACADEMIC BACKGROUND
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
            Education
          </h2>
          <div style={{ width: "48px", height: "3px", background: "var(--accent)", margin: "1rem auto 0", borderRadius: "2px" }} />
        </div>

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <FadeInSection direction="up">
            <div
              className="card-hover"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "2.5rem",
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  background: "var(--accent-subtle)",
                  border: "1px solid var(--accent-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                🎓
              </div>
              <div>
                <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.25rem" }}>
                  Anand Institute of Higher Technology
                </h3>
                <p style={{ color: "var(--accent)", fontWeight: 500, marginBottom: "0.5rem" }}>
                  Bachelor of Information Technology
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Chennai &bull; 2016 – 2020</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
