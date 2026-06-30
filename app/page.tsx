import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)", position: "relative" }}>
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Impact />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
