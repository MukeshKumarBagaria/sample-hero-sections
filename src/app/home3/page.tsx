"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Sparkles, Zap, Target, Rocket, Star, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home3() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPlatform, setCurrentPlatform] = useState(0);

  const platforms = ["Amazon", "Flipkart", "Walmart", "Meesho", "Myntra", "Nykaa", "Ajio"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [platforms.length]);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Mouse Following Orb */}
        <div
          className="absolute w-6 h-6 bg-rose-400/60 rounded-full blur-sm pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        ></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </Link>
          <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/30 hover:bg-rose-500/30 transition-colors">
            <Sparkles className="mr-1 h-3 w-3" />
            Creative Design
          </Badge>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full border border-rose-500/30 backdrop-blur-sm animate-pulse">
            <Zap className="h-4 w-4 text-rose-400" />
            <span className="text-rose-300 font-semibold">E-COMMERCE GROWTH EXPERTS</span>
          </div>

          {/* Main Heading with Animation */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              <span className="block animate-fade-in-up">Dominate</span>
              <span className="block text-transparent bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 bg-clip-text animate-fade-in-up delay-200">
                {platforms[currentPlatform]}
              </span>
              <span className="block animate-fade-in-up delay-400">Today!</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-600">
              Transform your business with our proven strategies across all major e-commerce platforms. From setup to
              scaling, we make selling <span className="text-rose-400 font-semibold">simple, profitable, and hassle-free.</span>
            </p>
          </div>

          {/* Platform Icons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-800">
            {platforms.map((platform, index) => (
              <div
                key={platform}
                className={`px-4 py-2 rounded-full border transition-all duration-500 ${
                  index === currentPlatform
                    ? "bg-rose-500/20 border-rose-500/50 text-rose-300 scale-110"
                    : "bg-slate-800/50 border-slate-600/50 text-slate-400 hover:border-slate-500"
                }`}
              >
                <span className="text-sm font-medium">{platform}</span>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 animate-fade-in-up delay-1000">
            {[
              { icon: Target, value: "500+", label: "Sellers Launched" },
              { icon: Rocket, value: "300%", label: "Avg Growth" },
              { icon: Star, value: "4.9/5", label: "Client Rating" },
              { icon: ShoppingBag, value: "7", label: "Platforms" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-rose-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-1200">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-8 py-4 text-lg group shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all"
            >
              <span className="mr-2">💬</span>
              Chat With Growth Expert
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-slate-600 hover:bg-slate-800 bg-transparent text-white hover:border-rose-500/50 transition-all"
            >
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </div>
  );
}


