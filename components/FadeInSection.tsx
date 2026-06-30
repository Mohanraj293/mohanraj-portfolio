"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number; // ms
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function FadeInSection({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getInitial = () => {
      switch (direction) {
        case "left": return "translateX(-40px)";
        case "right": return "translateX(40px)";
        case "none": return "translateY(0)";
        default: return "translateY(40px)";
      }
    };

    el.style.opacity = "0";
    el.style.transform = getInitial();
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return <div ref={ref} className={className}>{children}</div>;
}
