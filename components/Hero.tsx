"use client";
export default function Hero() {
  return (
    <>
    <style>{`
      @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      .cursor { animation: blink 1s step-end infinite; }
      @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      .fade-up { opacity:0; animation: fadeUp 0.6s ease forwards; }
    `}</style>
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.25rem 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", maxWidth: "800px", position: "relative" }}>
        <p
          className="fade-up"
          style={{
            color: "var(--accent)",
            fontSize: "1rem",
            fontWeight: 500,
            marginBottom: "1rem",
            letterSpacing: "0.1em",
            animationDelay: "0s",
          }}
        >
          HELLO, I&apos;M
        </p>
        <h1
          className="fade-up"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animationDelay: "0.1s",
          }}
        >
          Mohanraj R
        </h1>
        <h2
          className="fade-up"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            color: "var(--text-secondary)",
            fontWeight: 400,
            marginBottom: "1.5rem",
            animationDelay: "0.2s",
          }}
        >
          Senior Android Developer<span className="cursor">|</span>
        </h2>
        <p
          className="fade-up"
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
            animationDelay: "0.3s",
          }}
        >
          5+ years crafting scalable enterprise mobile apps with Kotlin, Jetpack Compose &amp; Clean Architecture.
        </p>
        <div className="fade-up" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="btn-pulse"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "0.75rem 2rem",
              borderRadius: "2rem",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              padding: "0.75rem 2rem",
              borderRadius: "2rem",
              textDecoration: "none",
              fontWeight: 600,
              transition: "border-color 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Work
          </a>
        </div>

        {/* Social links */}
        <div className="fade-up" style={{ marginTop: "3rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", animationDelay: "0.5s" }}>
          <a
            href="https://linkedin.com/in/mohan-raj293"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            LinkedIn
          </a>
          <span style={{ color: "var(--border)" }}>|</span>
          <a
            href="https://github.com/Mohanraj293"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            GitHub
          </a>
          <span style={{ color: "var(--border)" }}>|</span>
          <a
            href="mailto:mohanrajrengaraj@gmail.com"
            style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            Email
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
