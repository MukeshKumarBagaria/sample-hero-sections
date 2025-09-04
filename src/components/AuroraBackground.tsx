"use client";

import * as React from "react";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className || ""}`} aria-hidden>
      <div className="absolute -top-56 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-50 aurora-a" />
      <div className="absolute -bottom-64 -right-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-50 aurora-b" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[100px] opacity-40 aurora-c" />
      <style>{`
        .aurora-a { background: radial-gradient(circle at 30% 30%, #60a5fa 0%, transparent 60%), radial-gradient(circle at 70% 70%, #a78bfa 0%, transparent 60%); animation: auroraShift 24s linear infinite alternate; }
        .aurora-b { background: radial-gradient(circle at 40% 60%, #fb7185 0%, transparent 60%), radial-gradient(circle at 80% 20%, #22d3ee 0%, transparent 60%); animation: auroraShift 28s linear infinite alternate-reverse; }
        .aurora-c { background: conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.08), rgba(255,255,255,0)); animation: pulseGlow 8s ease-in-out infinite; }
        @keyframes auroraShift { 0% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(20px,-30px,0) scale(1.1); } 100% { transform: translate3d(-30px,20px,0) scale(1); } }
        @keyframes pulseGlow { 0%,100% { opacity: .35; } 50% { opacity: .55; } }
      `}</style>
    </div>
  );
}

export default AuroraBackground;


