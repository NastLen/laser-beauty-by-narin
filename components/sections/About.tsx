"use client";

import Section from "@/components/ui/Section";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  de: {
    heading1: "Wo Komfort auf",
    heading2: "Exzellenz trifft",
    p1: "Bei Laser Beauty by Narin glauben wir, dass Schönheitsbehandlungen mehr als nur effektiv sein sollten – sie sollten ein Erlebnis sein. Unser Boutique-Studio verbindet modernste Lasertechnologie mit einer ruhigen, luxuriösen Atmosphäre, die dafür geschaffen wurde, dass Sie sich verwöhnt und wohl fühlen.",
    p2: "Gegründet auf den Grundsätzen Qualität, Sicherheit und individuelle Betreuung, sind wir bestrebt, Ihnen glatte, strahlende Haut mit Behandlungen zu ermöglichen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind.",
    card1Title: "Premium-Technologie",
    card1Desc: "Modernste Lasersysteme für sichere, effektive und nahezu schmerzfreie Behandlungen",
    card2Title: "Individuelle Betreuung",
    card2Desc: "Jede Behandlung wird auf Ihren Hauttyp, Ihre Haarfarbe und Ihr Komfortniveau abgestimmt",
    card3Title: "Sicherheit zuerst",
    card3Desc: "Zertifizierte Spezialisten und medizinische Geräte in einer hygienischen Umgebung",
  },
  en: {
    heading1: "Where Comfort Meets",
    heading2: "Excellence",
    p1: "At Laser Beauty by Narin, we believe that beauty treatments should be more than just effective—they should be an experience. Our boutique studio combines state-of-the-art laser technology with a serene, luxurious atmosphere designed to make you feel pampered and at ease.",
    p2: "Founded on the principles of quality, safety, and personalized care, we're dedicated to helping you achieve smooth, radiant skin with treatments tailored to your unique needs.",
    card1Title: "Premium Technology",
    card1Desc: "Advanced laser systems for safe, effective, and virtually painless treatments",
    card2Title: "Personalized Care",
    card2Desc: "Every treatment is customized to your skin type, hair color, and comfort level",
    card3Title: "Safety First",
    card3Desc: "Certified specialists and medical-grade equipment in a hygienic environment",
  },
  ru: {
    heading1: "Где комфорт",
    heading2: "встречает совершенство",
    p1: "В Laser Beauty by Narin мы верим, что процедуры красоты должны быть не просто эффективными – они должны быть настоящим удовольствием. Наш бутик-студия сочетает новейшие лазерные технологии с роскошной и спокойной атмосферой, созданной для того, чтобы вы чувствовали себя комфортно.",
    p2: "Основанные на принципах качества, безопасности и индивидуального подхода, мы помогаем вам достичь гладкой, сияющей кожи с помощью процедур, адаптированных к вашим уникальным потребностям.",
    card1Title: "Премиум-технологии",
    card1Desc: "Современные лазерные системы для безопасных, эффективных и практически безболезненных процедур",
    card2Title: "Индивидуальный подход",
    card2Desc: "Каждая процедура адаптирована к вашему типу кожи, цвету волос и уровню комфорта",
    card3Title: "Безопасность прежде всего",
    card3Desc: "Сертифицированные специалисты и оборудование медицинского класса в гигиеничной среде",
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-heading-2 font-serif font-light text-neutral-800">
          {t.heading1}
          <span className="block font-semibold text-gold-600">{t.heading2}</span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>

        <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          {t.p1}
        </p>

        <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          {t.p2}
        </p>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-800">{t.card1Title}</h3>
            <p className="text-neutral-600">{t.card1Desc}</p>
          </div>

          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-800">{t.card2Title}</h3>
            <p className="text-neutral-600">{t.card2Desc}</p>
          </div>

          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-800">{t.card3Title}</h3>
            <p className="text-neutral-600">{t.card3Desc}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
