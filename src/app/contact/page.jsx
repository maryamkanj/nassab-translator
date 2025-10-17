"use client";

import Header from "@/components/common/Header";
import { useLanguage } from "@/context/LanguageContext";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaClock, FaLocationDot } from "react-icons/fa6";
import { useEffect } from "react";

export default function ContactPage() {
  const { translations } = useLanguage();

  // Update page title
  useEffect(() => {
    document.title = translations.pageTitles?.contact || "Contact Me - Get a Quote";
  }, [translations]);

  const contactInfo = [
    {
      icon: FaLocationDot,
      title: translations.contact.officeLocation,
      content: translations.contact.locationAddress,
      description: translations.contact.locationDescription
    },
    {
      icon: FaPhone,
      title: translations.contact.phoneNumber,
      content: translations.contact.phoneAddress,
      description: translations.contact.phoneDescription
    },
    {
      icon: FaEnvelope,
      title: translations.contact.emailAddress,
      content: translations.contact.emailAddressText,
      description: translations.contact.emailDescription
    },
    {
      icon: FaClock,
      title: translations.contact.workingHours,
      content: translations.contact.hoursSchedule,
      description: translations.contact.hoursDescription
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com",
      name: translations.contact.socialLinkedIn,
      color: "hover:bg-blue-600"
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com",
      name: translations.contact.socialInstagram,
      color: "hover:bg-pink-600"
    },
    {
      icon: FaEnvelope,
      url: "mailto:nassab@example.com",
      name: translations.contact.socialEmail,
      color: "hover:bg-red-600"
    }
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
                {translations.contact.title}
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {translations.contact.subtitle}
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {contactInfo.map((item, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl shadow-yellow-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-500/20 p-4 rounded-2xl mb-4 group-hover:bg-yellow-400 transition-all duration-300">
                    <item.icon className="text-3xl text-yellow-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
                  <p className="text-white font-medium text-base lg:text-lg mb-2">{item.content}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media & Response Time */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Social Media */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-6 text-center">{translations.contact.connectTitle}</h2>
              <p className="text-gray-300 text-center mb-8">
                {translations.contact.connectDescription}
              </p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-700 p-4 rounded-2xl text-white transition-all duration-300 transform hover:scale-110 ${social.color} shadow-lg flex flex-col items-center space-y-2`}
                  >
                    <social.icon className="text-2xl" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Information */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-6 text-center">{translations.contact.responseTitle}</h2>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">{translations.contact.responseTime24}</div>
                  <p className="text-gray-300 text-lg">{translations.contact.responseDescription24}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">{translations.contact.responseTime1}</div>
                  <p className="text-gray-300 text-lg">{translations.contact.responseDescription1}</p>
                </div>
                <div className="text-center pt-4">
                  <p className="text-gray-400 italic">
                    {translations.contact.responseQuote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 lg:mt-16 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-2xl p-8 lg:p-12 border border-yellow-500/30">
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">{translations.contact.ctaTitle}</h2>
            <p className="text-gray-300 text-lg lg:text-xl mb-6 max-w-2xl mx-auto">
              {translations.contact.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:nassab@example.com"
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/25 flex items-center space-x-2"
              >
                <FaEnvelope className="text-xl" />
                <span>{translations.contact.sendEmail}</span>
              </a>
              <a
                href="tel:+96112345678"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <FaPhone className="text-xl" />
                <span>{translations.contact.callNow}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}