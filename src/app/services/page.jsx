"use client";

import Header from "@/components/common/Header";
import { useLanguage } from "@/context/LanguageContext";
import { FaCheck, FaClock, FaGlobe, FaFile } from "react-icons/fa6";
import { useEffect } from "react";

export default function ServicesPage() {
  const { translations } = useLanguage();

  // Update page title
  useEffect(() => {
    document.title = translations.pageTitles?.services || "Our Services - Professional Translation Services";
  }, [translations]);

  const serviceFeatures = [
    { icon: FaCheck },
    { icon: FaClock },
    { icon: FaGlobe },
    { icon: FaFile }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />

      <section className="pt-32 lg:pt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                {translations.services.title}
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {translations.services.subtitle}
            </p>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-yellow-500/20 text-center group hover:border-yellow-400 transition-all duration-300">
                <feature.icon className="text-3xl lg:text-4xl text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 font-medium text-sm lg:text-base">
                  {translations.services.features?.[index]?.text || `Feature ${index + 1}`}
                </p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {translations.services.list.map((service, idx) => (
              <div key={idx} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl shadow-yellow-500/10">
                <div className="flex flex-col h-full">
                  <h2 className="text-xl lg:text-2xl font-semibold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 text-base lg:text-lg mb-6 flex-grow leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 flex items-center space-x-2"
                    >
                      <span>{translations.services.getQuote}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-2xl p-8 lg:p-12 border border-yellow-500/30">
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">{translations.services.customServices}</h2>
            <p className="text-gray-300 text-lg lg:text-xl mb-6 max-w-2xl mx-auto">
              {translations.services.customDescription}
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/25"
            >
              {translations.services.contactToday}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}