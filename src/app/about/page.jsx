"use client";

import Header from "@/components/common/Header";
import { useLanguage } from "@/context/LanguageContext";
import { FaAward, FaGraduationCap, FaGlobe, FaHandshake } from "react-icons/fa6";
import { useEffect } from "react";

export default function AboutPage() {
  const { translations } = useLanguage();

  // Update page title
  useEffect(() => {
    document.title = translations.pageTitles?.about || "About Me - Certified Public Translator";
  }, [translations]);

  const qualifications = [
    { icon: FaAward },
    { icon: FaGraduationCap },
    { icon: FaGlobe },
    { icon: FaHandshake }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />

      <section className="pt-32 lg:pt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                {translations.about.title}
              </span>
            </h1>
          </div>

          {/* Qualifications */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-yellow-500/20 text-center group hover:border-yellow-400 transition-all duration-300">
                <qual.icon className="text-3xl lg:text-4xl text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 font-medium text-sm lg:text-base">
                  {translations.about.qualifications?.[index]?.text || `Qualification ${index + 1}`}
                </p>
              </div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-6 lg:space-y-8">
            {translations.about.content.map((paragraph, idx) => (
              <div key={idx} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/10">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 p-3 rounded-2xl group-hover:bg-yellow-400 transition-all duration-300">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full group-hover:bg-white"></div>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed flex-1">
                    {paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-12 lg:mt-16 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-2xl p-8 lg:p-12 border border-yellow-500/30 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-6">{translations.about.mission}</h2>
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
              {translations.about.missionQuote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}