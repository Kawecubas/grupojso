"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Revelar({ children, retraso = 0, className = "" }: { children: ReactNode; retraso?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`revelar ${className}`} style={{ transitionDelay: `${retraso}ms` }}>
      {children}
    </div>
  );
}
