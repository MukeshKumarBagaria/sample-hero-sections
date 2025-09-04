"use client";

import * as React from "react";

export function Spotlight({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div ref={ref} className={className}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(200px 200px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.15), transparent 60%)`,
        }}
      />
    </div>
  );
}

export default Spotlight;


