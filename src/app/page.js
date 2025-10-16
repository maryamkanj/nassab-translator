"use client";

import Header from "@/components/common/Header";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

export default function HomePage() {
  const { translations } = useLanguage();

  useEffect(() => {
    document.title = translations.pageTitles?.home || "Nassab Translator - Certified Public Translator";
  }, [translations]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-32 lg:pt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient">
              {translations.hero.welcome}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 lg:mb-12 leading-relaxed font-light">
            {translations.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            <a
              href="/services"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 lg:px-10 py-4 lg:py-5 rounded-xl font-semibold text-lg lg:text-xl hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 flex items-center space-x-2"
            >
              <span>{translations.hero.viewServices}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="group border-2 border-yellow-400 text-yellow-400 px-8 lg:px-10 py-4 lg:py-5 rounded-xl font-semibold text-lg lg:text-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/30 flex items-center space-x-2"
            >
              <span>{translations.hero.getQuote}</span>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-24 max-w-4xl mx-auto">
            {(translations.common?.stats || [
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support" },
              { number: "99%", label: "Accuracy" }
            ]).map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm lg:text-base font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}