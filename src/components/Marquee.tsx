"use client";

import * as React from "react";

export function Marquee({
  items,
  className,
  speed = 40,
}: {
  items: React.ReactNode[];
  className?: string;
  speed?: number; // px/s
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.scrollWidth / 2);
  }, [items]);

  const duration = width > 0 ? width / speed : 20;

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <div
        ref={ref}
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((node, i) => (
          <div key={i} className="shrink-0">
            {node}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Marquee;


