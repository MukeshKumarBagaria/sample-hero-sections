"use client";

import * as React from "react";

export function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void; }) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / 6;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / 6;
      setOffset({ x: dx, y: dy });
    };
    const reset = () => setOffset({ x: 0, y: 0 });
    window.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", reset as unknown as EventListener);
    };
  }, []);

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-sm transition-transform will-change-transform ${className || ""}`}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
      <span className="absolute inset-0 rounded-full bg-white/20 blur-md -z-10" aria-hidden />
    </button>
  );
}

export default MagneticButton;


