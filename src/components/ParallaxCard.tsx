"use client";

import * as React from "react";

export function ParallaxCard({
  children,
  className,
  intensity = 10,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setRotation({ x: -py * intensity, y: px * intensity });
    };
    const reset = () => setRotation({ x: 0, y: 0 });
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", reset);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={`relative will-change-transform ${className || ""}`}
      style={{ transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
    >
      {children}
    </div>
  );
}

export default ParallaxCard;


