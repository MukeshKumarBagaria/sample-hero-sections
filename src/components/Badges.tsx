"use client";

import * as React from "react";

const platforms = [
  { name: "Amazon", color: "bg-amber-500" },
  { name: "Flipkart", color: "bg-blue-500" },
  { name: "Myntra", color: "bg-pink-500" },
  { name: "Nykaa", color: "bg-rose-500" },
  { name: "Walmart", color: "bg-indigo-600" },
  { name: "Ajio", color: "bg-sky-600" },
  { name: "Meesho", color: "bg-fuchsia-500" },
];

export function PlatformBadges({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className || ""}`}>
      {platforms.map((p) => (
        <span
          key={p.name}
          className={`inline-flex items-center rounded-full ${p.color} text-white/95 px-3 py-1 text-xs font-semibold shadow-sm shadow-black/10`}
        >
          {p.name}
        </span>
      ))}
    </div>
  );
}

export default PlatformBadges;


