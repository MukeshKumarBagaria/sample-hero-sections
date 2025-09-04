"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Sparkles, Rocket, Target, Zap, Star, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home4() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: "10%",
            left: "10%",
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            top: "60%",
            right: "10%",
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            bottom: "20%",
            left: "30%",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Overview
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Floating badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full text-teal-300 font-semibold animate-glow">
              <Sparkles className="mr-2 h-5 w-5 animate-spin-slow" />
              Innovation Meets Results
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side - Main heading */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-black leading-none">
                  <span className="block text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text animate-gradient-x">
                    TECH
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text animate-gradient-x animation-delay-500">
                    NVOITA
                  </span>
                  <span className="block text-white font-light text-4xl md:text-5xl mt-2 animate-fade-in-up animation-delay-1000">
                    Solution
                  </span>
                </h1>
              </div>

              <div className="space-y-6 animate-slide-in-left animation-delay-1200">
                <p className="text-2xl md:text-3xl font-bold text-slate-200">
                  Where E-commerce Dreams
                  <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text"> Come Alive</span>
                </p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Transform your business with cutting-edge strategies across Amazon, Walmart, Myntra, Ajio, and
                  Flipkart. We don&apos;t just grow businesses—we revolutionize them.
                </p>
              </div>

              {/* Interactive CTA */}
              <div className="flex flex-col sm:flex-row gap-6 animate-slide-in-left animation-delay-1400">
                <Button
                  size="lg"
                  className="group relative bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10 flex items-center">
                    Launch Your Success
                    <Rocket className={`ml-3 h-6 w-6 transition-transform duration-300 ${isHovered ? "translate-x-2 rotate-12" : ""}`} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-6 text-xl font-bold rounded-2xl bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 text-slate-200 hover:bg-slate-700/50 hover:border-teal-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Magic
                </Button>
              </div>
            </div>

            {/* Right side - Interactive elements */}
            <div className="lg:col-span-5 space-y-6">
              {/* Floating stats cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, value: "1000+", label: "Success Stories", color: "from-teal-500 to-cyan-500" },
                  { icon: Zap, value: "500%", label: "Growth Rate", color: "from-orange-500 to-red-500" },
                  { icon: Star, value: "5.0", label: "Client Rating", color: "from-purple-500 to-pink-500" },
                  { icon: TrendingUp, value: "24/7", label: "Support", color: "from-green-500 to-emerald-500" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-teal-400/50 transition-all duration-500 transform hover:scale-110 hover:-rotate-2 animate-float-in animation-delay-${1600 + index * 200}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    <div className="relative z-10 text-center">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated platform badges */}
              <div className="flex flex-wrap gap-3 justify-center animate-fade-in animation-delay-2400">
                {["Amazon", "Walmart", "Myntra", "Ajio", "Flipkart"].map((platform, index) => (
                  <div
                    key={platform}
                    className={`px-4 py-2 bg-slate-800/60 backdrop-blur-sm border border-slate-600 rounded-full text-slate-300 text-sm font-semibold hover:border-teal-400 hover:text-teal-300 transition-all duration-300 transform hover:scale-110 animate-bounce-in animation-delay-${2600 + index * 100}`}
                  >
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


