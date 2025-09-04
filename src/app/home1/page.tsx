"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, MessageCircle, TrendingUp, Users, Award, ShoppingBag, Star, Zap } from "lucide-react";

export default function Home1() {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { number: "500+", label: "Sellers Onboarded", icon: Users },
    { number: "8+", label: "Platforms", icon: ShoppingBag },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support", icon: Star },
  ];
  const platforms = ["Amazon", "Flipkart", "Walmart", "Meesho", "Myntra", "Nykaa", "Ajio"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-100 rounded-full blur-xl animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-pink-100 rounded-full blur-xl animate-float delay-1000 opacity-60" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-100 rounded-full blur-xl animate-float delay-500 opacity-60" />

      <nav className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors animate-slide-in-left">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Overview
        </Link>
      </nav>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-rose-50 text-rose-700 border-rose-200 mb-8 animate-bounce-in px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            TRUSTED BY 500+ SELLERS
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance animate-slide-in-up text-gray-900">
            Sell Everywhere,
            <span className="block gradient-text bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Succeed Anywhere
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-pretty animate-slide-in-up delay-200">
            Launch your products on Amazon, Flipkart, Walmart, Meesho, and more. We handle everything from account setup
            to sales optimization, so you can focus on growing your business.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in-up delay-300">
            {platforms.map((platform, index) => (
              <Badge
                key={platform}
                variant="outline"
                className="px-4 py-2 text-sm border-gray-200 hover:border-rose-300 hover:bg-rose-50 transition-all duration-300 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` as string }}
              >
                {platform}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in-up delay-400">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg group shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Selling Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50 text-gray-700 bg-transparent">
              <TrendingUp className="mr-2 h-5 w-5" />
              View Success Stories
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl border transition-all duration-500 animate-fade-in-scale hover:shadow-lg ${
                    currentStat === index ? "bg-rose-50 border-rose-200 scale-105 shadow-md" : "bg-gray-50 border-gray-200"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` as string }}
                >
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${currentStat === index ? "text-rose-600" : "text-gray-600"}`} />
                  <div className="text-2xl font-bold text-gray-900 animate-counter-up">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}


