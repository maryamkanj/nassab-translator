"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black border-t-2 border-yellow-500 text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand & Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Nassab Translator
              </span>
              <span className="text-sm text-gray-400 font-light mt-1">
                {translations.footer?.tagline || "Professional Certified Translation Services"}
              </span>
            </div>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              {translations.footer?.description || "Professional translation services with precision, cultural accuracy, and timely delivery for all your language needs."}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              {translations.footer?.quickLinks || "Quick Links"}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                {translations.header.home}
              </Link>
              <Link href="/services" className="hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                {translations.header.services}
              </Link>
              <Link href="/about" className="hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                {translations.header.about}
              </Link>
              <Link href="/contact" className="hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                {translations.header.contact}
              </Link>
            </div>
          </nav>

          {/* Contact & Social */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              {translations.footer?.getInTouch || "Get In Touch"}
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <FaLocationDot className="text-yellow-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {translations.contact?.locationAddress || "Beirut, Lebanon"}
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <FaEnvelope className="text-yellow-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:nassab@example.com" className="text-gray-400 hover:text-yellow-400 transition-all duration-300">
                  {translations.contact?.emailAddressText || "nassab@example.com"}
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <FaPhone className="text-yellow-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+96112345678" className="text-gray-400 hover:text-yellow-400 transition-all duration-300">
                  {translations.contact?.phoneAddress || "+961 123 456 78"}
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FaInstagram className="text-xl" />
              </a>
              <a href="mailto:nassab@example.com" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-500 text-sm text-center lg:text-left">
              &copy; {new Date().getFullYear()} Nassab Translator. {translations.footer?.rights || "All rights reserved."}
            </div>
            <div className="text-gray-500 text-sm">
              {translations.footer?.tagline || "Professional Certified Translation Services"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}