"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star, Zap, TrendingUp, Users } from "lucide-react";

export default function Home2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-300/10 rounded-full blur-2xl animate-pulse animation-delay-200"></div>
      </div>

      <nav className="relative z-10 container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Overview
        </Link>
      </nav>

      <section className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-8 animate-bounce-in border border-white/30">
            <Zap className="mr-2 h-5 w-5 text-yellow-300" />
            EXPLOSIVE GROWTH GUARANTEED
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-scale-in">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">TECHNVOITA</span>
            <br />
            <span className="text-white drop-shadow-lg">SOLUTION</span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-white/95 mb-4 animate-slide-in-up animation-delay-300">DOMINATE E-COMMERCE</p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-slide-in-up animation-delay-500">
            Skyrocket your sales on Amazon, Walmart, Myntra, Ajio, Flipkart with our proven growth strategies that deliver results in 30 days or less!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-in-up animation-delay-700">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group border-2 border-white/20">
              START DOMINATING NOW
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-6 text-xl font-bold rounded-full bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              GET FREE STRATEGY CALL
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-900">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-3"><Users className="h-8 w-8 text-yellow-300" /></div>
              <div className="text-3xl font-black text-white mb-1">1000+</div>
              <div className="text-sm font-semibold text-white/80">SELLERS BOOSTED</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-3"><TrendingUp className="h-8 w-8 text-green-300" /></div>
              <div className="text-3xl font-black text-white mb-1">300%</div>
              <div className="text-sm font-semibold text-white/80">AVG GROWTH</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-3"><Star className="h-8 w-8 text-yellow-300" /></div>
              <div className="text-3xl font-black text-white mb-1">5.0</div>
              <div className="text-sm font-semibold text-white/80">CLIENT RATING</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-3"><Zap className="h-8 w-8 text-orange-300" /></div>
              <div className="text-3xl font-black text-white mb-1">30</div>
              <div className="text-sm font-semibold text-white/80">DAYS TO RESULTS</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


