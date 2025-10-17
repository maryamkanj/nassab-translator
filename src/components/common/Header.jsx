"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { language, changeLanguage, translations } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ar", label: "العربية" },
  ];

  const handleSelectLanguage = (code) => {
    changeLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg border-b-2 border-yellow-500 shadow-2xl shadow-yellow-500/20 z-50">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          <Link href="/" className="relative">
            <Image
              src="/logo.png"
              alt="Nassab Logo"
              width={70}
              height={70}
              className="rounded-full border-2 border-yellow-400 shadow-lg shadow-yellow-500/30 hover:scale-105 transition-transform duration-300 cursor-pointer"
              priority
            />
            <div className="absolute inset-0 rounded-full border border-yellow-300 animate-pulse"></div>
          </Link>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wide">
              Nassab Kassem Moussa
            </span>
            <span className="text-xs sm:text-sm text-gray-300 font-light">
              {language === "en" ? "Certified Public Translator" : 
               language === "fr" ? "Traducteur Public Certifié" : 
               "مترجم عام معتمد"}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 relative">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-yellow-400 text-lg font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            {translations.header.home}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/services" 
            className="text-gray-300 hover:text-yellow-400 text-lg font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            {translations.header.services}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/about" 
            className="text-gray-300 hover:text-yellow-400 text-lg font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            {translations.header.about}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-300 hover:text-yellow-400 text-lg font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            {translations.header.contact}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Language Selector */}
          <div className="relative ml-4">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 flex items-center space-x-2"
            >
              <span>{languages.find((l) => l.code === language)?.label}</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isLangOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-gray-900 border border-yellow-400 rounded-lg shadow-2xl shadow-yellow-500/20 z-50 overflow-hidden">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className="px-4 py-3 cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-200 border-b border-gray-700 last:border-b-0"
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-gray-900 to-black border-t border-yellow-500 px-6 py-6 flex flex-col space-y-4 animate-slideDown">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-yellow-400 text-lg font-medium py-3 transition-all duration-300 border-b border-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations.header.home}
          </Link>
          <Link 
            href="/services" 
            className="text-gray-300 hover:text-yellow-400 text-lg font-medium py-3 transition-all duration-300 border-b border-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations.header.services}
          </Link>
          <Link 
            href="/about" 
            className="text-gray-300 hover:text-yellow-400 text-lg font-medium py-3 transition-all duration-300 border-b border-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations.header.about}
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-300 hover:text-yellow-400 text-lg font-medium py-3 transition-all duration-300 border-b border-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations.header.contact}
          </Link>

          {/* Mobile Language Selector */}
          <div className="relative pt-4">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-4 py-3 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 w-full text-center shadow-lg"
            >
              {languages.find((l) => l.code === language)?.label}
            </button>
            {isLangOpen && (
              <ul className="mt-2 bg-gray-900 border border-yellow-400 rounded-lg shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className="px-4 py-3 cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-200 border-b border-gray-700 last:border-b-0 text-center"
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
}