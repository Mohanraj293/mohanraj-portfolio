"use client";
import FadeInSection from "./FadeInSection";

const contactItems = [
  {
    icon: "📍",
    label: "Location",
    value: "Chennai, India",
    href: null,
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9751246887",
    href: "tel:+919751246887",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "mohanrajrengaraj@gmail.com",
    href: "mailto:mohanrajrengaraj@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/mohan-raj293",
    href: "https://linkedin.com/in/mohan-raj293",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Mohanraj293",
    href: "https://github.com/Mohanraj293",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "0.5rem" }}>
          LET&apos;S CONNECT
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--text-primary)" }}>
          Get In Touch
        </h2>
        <div style={{ width: "48px", height: "3px", background: "var(--accent)", margin: "1rem auto 0", borderRadius: "2px" }} />
        <p style={{ color: "var(--text-secondary)", marginTop: "1.5rem", maxWidth: "500px", margin: "1.5rem auto 0", lineHeight: 1.8 }}>
          Open to new opportunities, collaborations, or just a friendly chat about Android development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {contactItems.map((item, index) => {
          const inner = (
            <>
              <span style={{ fontSize: "1.5rem", marginBottom: "0.75rem", display: "block" }}>{item.icon}</span>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "0.25rem" }}>{item.label}</p>
              <p style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</p>
            </>
          );

          const cardStyle: React.CSSProperties = {
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "1.75rem",
            textAlign: "center",
            transition: "border-color 0.2s, transform 0.2s",
            textDecoration: "none",
            display: "block",
            cursor: item.href ? "pointer" : "default",
          };

          return (
            <FadeInSection key={item.label} delay={index * 80}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-hover"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  {inner}
                </a>
              ) : (
                <div
                  className="card-hover"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  {inner}
                </div>
              )}
            </FadeInSection>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} Mohanraj R. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
