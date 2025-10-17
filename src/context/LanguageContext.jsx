"use client";

import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
  }, []);

  const changeLanguage = (code) => {
    setLanguage(code);
    localStorage.setItem("language", code);
  };

  const translations = {
    en: {
      // Page titles
      pageTitles: {
        home: "Nassab - Certified Public Translator",
        services: "Services - Professional Translation Services",
        about: "About - Certified Public Translator",
        contact: "Contact - Get a Quote"
      },
      header: { home: "Home", services: "Services", about: "About", contact: "Contact" },
      hero: {
        welcome: "Welcome",
        subtitle: "Certified Public Translator — delivering excellence, precision, and trust in every translation.",
        viewServices: "View Services",
        getQuote: "Get a Quote",
      },
      services: {
        title: "Our Services",
        subtitle: "Professional translation services tailored to meet your specific needs with accuracy and cultural sensitivity.",
        list: [
          { title: "Document Translation", desc: "Accurate translation for legal, medical, and technical documents." },
          { title: "Proofreading & Editing", desc: "Ensure your content is flawless and professional." },
          { title: "Subtitling & Transcription", desc: "Subtitle videos and transcribe audio accurately." },
          { title: "Website & App Localization", desc: "Adapt content for global audiences with cultural accuracy." },
        ],
        features: [
          { text: "Certified & Notarized" },
          { text: "Fast Turnaround" },
          { text: "Multiple Languages" },
          { text: "Format Preservation" }
        ],
        customServices: "Need Custom Translation Services?",
        customDescription: "We handle projects of all sizes and complexities. Contact us to discuss your specific requirements.",
        contactToday: "Contact Us Today",
        getQuote: "Get Quote"
      },
      about: {
        title: "About Me",
        qualifications: [
          { text: "Certified Public Translator" },
          { text: "Master's in Translation" },
          { text: "5+ Languages" },
          { text: "10+ Years Experience" }
        ],
        content: [
          "I am a certified public translator specializing in multiple languages, delivering precise and reliable translations across legal, medical, technical, and general content.",
          "With a strong commitment to accuracy and cultural nuances, I provide professional services that help individuals and businesses communicate effectively across borders.",
        ],
        mission: "My Mission",
        missionQuote: "To bridge cultural and linguistic gaps through precise, reliable translations that maintain the original message's integrity while respecting cultural nuances and context."
      },
      contact: {
        title: "Contact Me",
        subtitle: "Get in touch with us for professional translation services. We're here to help you communicate across languages with precision and cultural accuracy.",
        officeLocation: "Office Location",
        locationAddress: "Beirut Central District, Lebanon",
        locationDescription: "Visit our office for professional consultation",
        phoneNumber: "Phone Number",
        phoneAddress: "+961 123 456 78",
        phoneDescription: "Available during business hours",
        emailAddress: "Email Address",
        emailAddressText: "nassab@example.com",
        emailDescription: "We respond within 24 hours",
        workingHours: "Working Hours",
        hoursSchedule: "Mon - Fri: 9:00 AM - 6:00 PM",
        hoursDescription: "Saturday: 10:00 AM - 2:00 PM",
        connectTitle: "Connect With Us",
        connectDescription: "Follow us on social media for updates, language tips, and industry insights.",
        socialLinkedIn: "LinkedIn",
        socialInstagram: "Instagram",
        socialEmail: "Email",
        responseTitle: "Our Response Time",
        responseTime24: "24 Hours",
        responseDescription24: "Average response time for emails",
        responseTime1: "1 Hour",
        responseDescription1: "Average response time during business hours",
        responseQuote: "We pride ourselves on quick, professional responses to all inquiries.",
        ctaTitle: "Ready to Get Started?",
        ctaDescription: "Contact us today for a free consultation and quote on your translation project.",
        sendEmail: "Send us an Email",
        callNow: "Call Us Now",
        form: { name: "Your Name", email: "Your Email", message: "Your Message", submit: "Send Message" },
      },
      footer: {
        quickLinks: "Quick Links",
        getInTouch: "Get In Touch",
        description: "Professional translation services with precision, cultural accuracy, and timely delivery for all your language needs.",
        rights: "All rights reserved.",
        tagline: "Professional Certified Translation Services"
      },
      common: {
        stats: [
          { number: "500+", label: "Projects Completed" },
          { number: "50+", label: "Happy Clients" },
          { number: "24/7", label: "Support" },
          { number: "99%", label: "Accuracy" }
        ]
      }
    },
    fr: {
      // Page titles
      pageTitles: {
        home: "Nassab - Traducteur Public Certifié",
        services: "Services - Services de Traduction Professionnels",
        about: "À Propos - Traducteur Public Certifié",
        contact: "Contact - Obtenir un Devis"
      },
      header: { home: "Accueil", services: "Services", about: "À propos", contact: "Contact" },
      hero: {
        welcome: "Bienvenue",
        subtitle: "Traducteur public certifié — offrant excellence, précision et fiabilité dans chaque traduction.",
        viewServices: "Voir les Services",
        getQuote: "Obtenir un devis",
      },
      services: {
        title: "Nos Services",
        subtitle: "Services de traduction professionnels adaptés à vos besoins spécifiques avec précision et sensibilité culturelle.",
        list: [
          { title: "Traduction de documents", desc: "Traduction précise de documents juridiques, médicaux et techniques." },
          { title: "Relecture et correction", desc: "Assurez-vous que votre contenu est parfait et professionnel." },
          { title: "Sous-titrage et transcription", desc: "Sous-titrez les vidéos et transcrivez l'audio avec précision." },
          { title: "Localisation de sites Web et d'applications", desc: "Adaptez le contenu pour des audiences mondiales avec précision culturelle." },
        ],
        features: [
          { text: "Certifié et Notarisé" },
          { text: "Délais Rapides" },
          { text: "Multiples Langues" },
          { text: "Préservation du Format" }
        ],
        customServices: "Besoin de Services de Traduction Personnalisés?",
        customDescription: "Nous traitons des projets de toutes tailles et complexités. Contactez-nous pour discuter de vos besoins spécifiques.",
        contactToday: "Contactez-nous Aujourd'hui",
        getQuote: "Obtenir un Devis"
      },
      about: {
        title: "À propos de moi",
        qualifications: [
          { text: "Traducteur Public Certifié" },
          { text: "Master en Traduction" },
          { text: "5+ Langues" },
          { text: "10+ Ans d'Expérience" }
        ],
        content: [
          "Je suis un traducteur public certifié spécialisé dans plusieurs langues, offrant des traductions précises et fiables pour les documents juridiques, médicaux, techniques et généraux.",
          "Avec un engagement fort pour la précision et les nuances culturelles, je fournis des services professionnels qui aident les individus et les entreprises à communiquer efficacement à l'international.",
        ],
        mission: "Ma Mission",
        missionQuote: "Combler les écarts culturels et linguistiques grâce à des traductions précises et fiables qui maintiennent l'intégrité du message original tout en respectant les nuances et le contexte culturels."
      },
      contact: {
        title: "Contactez-moi",
        subtitle: "Contactez-nous pour des services de traduction professionnels. Nous sommes là pour vous aider à communiquer à travers les langues avec précision et sensibilité culturelle.",
        officeLocation: "Localisation du Bureau",
        locationAddress: "Centre-ville de Beyrouth, Liban",
        locationDescription: "Visitez notre bureau pour une consultation professionnelle",
        phoneNumber: "Numéro de Téléphone",
        phoneAddress: "+961 123 456 78",
        phoneDescription: "Disponible pendant les heures de bureau",
        emailAddress: "Adresse Email",
        emailAddressText: "nassab@example.com",
        emailDescription: "Nous répondons dans les 24 heures",
        workingHours: "Heures de Travail",
        hoursSchedule: "Lun - Ven: 9:00 - 18:00",
        hoursDescription: "Samedi: 10:00 - 14:00",
        connectTitle: "Connectez-vous avec Nous",
        connectDescription: "Suivez-nous sur les réseaux sociaux pour des mises à jour, des conseils linguistiques et des informations sur l'industrie.",
        socialLinkedIn: "LinkedIn",
        socialInstagram: "Instagram",
        socialEmail: "Email",
        responseTitle: "Notre Temps de Réponse",
        responseTime24: "24 Heures",
        responseDescription24: "Temps de réponse moyen pour les emails",
        responseTime1: "1 Heure",
        responseDescription1: "Temps de réponse moyen pendant les heures de bureau",
        responseQuote: "Nous sommes fiers de nos réponses rapides et professionnelles à toutes les demandes.",
        ctaTitle: "Prêt à Commencer?",
        ctaDescription: "Contactez-nous aujourd'hui pour une consultation gratuite et un devis pour votre projet de traduction.",
        sendEmail: "Envoyez-nous un Email",
        callNow: "Appelez-nous Maintenant",
        form: { name: "Votre Nom", email: "Votre Email", message: "Votre Message", submit: "Envoyer le message" },
      },
      footer: {
        quickLinks: "Liens Rapides",
        getInTouch: "Restez en Contact",
        description: "Services de traduction professionnels avec précision, exactitude culturelle et livraison ponctuelle pour tous vos besoins linguistiques.",
        rights: "Tous droits réservés.",
        tagline: "Services de Traduction Certifiés Professionnels"
      },
      common: {
        stats: [
          { number: "500+", label: "Projets Terminés" },
          { number: "50+", label: "Clients Satisfaits" },
          { number: "24/7", label: "Support" },
          { number: "99%", label: "Précision" }
        ]
      }
    },
    ar: {
      // Page titles
      pageTitles: {
        home: "نسب - مترجم عام معتمد",
        services: "الخدمات - خدمات الترجمة الاحترافية",
        about: "حول - مترجم عام معتمد",
        contact: " اتصل - احصل على عرض سعر"
      },
      header: { home: "الرئيسية", services: "الخدمات", about: "حول", contact: "اتصل" },
      hero: {
        welcome: "أهلاً وسهلاً",
        subtitle: "مترجم عام معتمد — تقديم الدقة والثقة في كل ترجمة.",
        viewServices: "عرض الخدمات",
        getQuote: "احصل على عرض سعر",
      },
      services: {
        title: "خدماتنا",
        subtitle: "خدمات الترجمة الاحترافية المصممة خصيصًا لتلبية احتياجاتك المحددة بدقة وحساسية ثقافية.",
        list: [
          { title: "ترجمة الوثائق", desc: "ترجمة دقيقة للوثائق القانونية والطبية والتقنية." },
          { title: "التدقيق اللغوي والتحرير", desc: "ضمان أن يكون محتواك خالياً من الأخطاء واحترافياً." },
          { title: "الترجمة الفرعية والتفريغ", desc: "ترجمة الفيديوهات وتفريغ الصوت بدقة." },
          { title: "توطين المواقع والتطبيقات", desc: "تكييف المحتوى للجمهور العالمي بدقة ثقافية." },
        ],
        features: [
          { text: "معتمد وموثق" },
          { text: "تسليم سريع" },
          { text: "لغات متعددة" },
          { text: "الحفاظ على التنسيق" }
        ],
        customServices: "هل تحتاج إلى خدمات ترجمة مخصصة؟",
        customDescription: "نحن نتعامل مع المشاريع بجميع أحجامها وتعقيداتها. اتصل بنا لمناقشة متطلباتك المحددة.",
        contactToday: "اتصل بنا اليوم",
        getQuote: "احصل على عرض"
      },
      about: {
        title: "معلومات عني",
        qualifications: [
          { text: "مترجم عام معتمد" },
          { text: "ماجستير في الترجمة" },
          { text: "5+ لغات" },
          { text: "10+ سنوات خبرة" }
        ],
        content: [
          "أنا مترجم عام معتمد متخصص في عدة لغات، أقدم ترجمات دقيقة وموثوقة للوثائق القانونية والطبية والتقنية والعامة.",
          "مع الالتزام الشديد بالدقة والفروق الثقافية، أقدم خدمات احترافية تساعد الأفراد والشركات على التواصل بفعالية عبر الحدود.",
        ],
        mission: "مهمتي",
        missionQuote: "سد الفجوات الثقافية واللغوية من خلال الترجمات الدقيقة والموثوقة التي تحافظ على سلامة الرسالة الأصلية مع احترام الفروق الدقيقة والسياق الثقافي."
      },
      contact: {
        title: "تواصل معي",
        subtitle: "تواصل معنا للحصول على خدمات الترجمة الاحترافية. نحن هنا لمساعدتك في التواصل عبر اللغات بدقة وحساسية ثقافية.",
        officeLocation: "موقع المكتب",
        locationAddress: "وسط بيروت، لبنان",
        locationDescription: "قم بزيارة مكتبنا للحصول على استشارة مهنية",
        phoneNumber: "رقم الهاتف",
        phoneAddress: "+961 123 456 78",
        phoneDescription: "متاح خلال ساعات العمل",
        emailAddress: "البريد الإلكتروني",
        emailAddressText: "nassab@example.com",
        emailDescription: "نرد خلال 24 ساعة",
        workingHours: "ساعات العمل",
        hoursSchedule: "الإثنين - الجمعة: 9:00 ص - 6:00 م",
        hoursDescription: "السبت: 10:00 ص - 2:00 م",
        connectTitle: "تواصل معنا",
        connectDescription: "تابعنا على وسائل التواصل الاجتماعي للحصول على التحديثات ونصائح اللغة ورؤى الصناعة.",
        socialLinkedIn: "لينكدإن",
        socialInstagram: "إنستغرام",
        socialEmail: "البريد الإلكتروني",
        responseTitle: "وقت استجابتنا",
        responseTime24: "24 ساعة",
        responseDescription24: "متوسط وقت الاستجابة للرسائل الإلكترونية",
        responseTime1: "1 ساعة",
        responseDescription1: "متوسط وقت الاستجابة خلال ساعات العمل",
        responseQuote: "نحن نفتخر باستجاباتنا السريعة والمهنية لجميع الاستفسارات.",
        ctaTitle: "مستعد للبدء؟",
        ctaDescription: "اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر لمشروع الترجمة الخاص بك.",
        sendEmail: "أرسل لنا بريدًا إلكترونيًا",
        callNow: "اتصل بنا الآن",
        form: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك", submit: "إرسال الرسالة" },
      },
      footer: {
        quickLinks: "روابط سريعة",
        getInTouch: "ابق على اتصال",
        description: "خدمات الترجمة الاحترافية مع الدقة والدقة الثقافية والتسليم في الوقت المناسب لجميع احتياجاتك اللغوية.",
        rights: "جميع الحقوق محفوظة.",
        tagline: "خدمات الترجمة المعتمدة المهنية"
      },
      common: {
        stats: [
          { number: "500+", label: "المشاريع المكتملة" },
          { number: "50+", label: "عملاء سعداء" },
          { number: "24/7", label: "الدعم" },
          { number: "99%", label: "الدقة" }
        ]
      }
    },
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language], allTranslations: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);