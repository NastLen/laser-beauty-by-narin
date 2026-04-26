"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import servicesBg from "@/app/images/services-bg.jpg";

const translations = {
  de: {
    heading1: "Unsere",
    heading2: "Leistungen",
    desc: "Professionelle Laser-Haarentfernung für jeden Bereich, individuell auf Ihre Bedürfnisse abgestimmt",
    popular: "Beliebt",
    footer: "Nicht sicher, welche Behandlung die richtige für Sie ist?",
    footerLink: "Kostenlose Beratung buchen",
    services: [
      { name: "Ganzkörper", description: "Vollständige Haarentfernung für seidig glatte Haut von Kopf bis Fuß", popular: true },
      { name: "Gesicht", description: "Sanfte Behandlung für Oberlippe, Kinn, Wangen und das gesamte Gesicht", popular: false },
      { name: "Achseln", description: "Schnelle und effektive Lösung für glatte, selbstbewusste Achseln", popular: true },
      { name: "Bikini & Brazilian", description: "Diskrete, komfortable Behandlung in einem privaten Rahmen", popular: true },
      { name: "Beine", description: "Ober- oder Unterschenkelbehandlung für langanhaltende Glätte", popular: false },
      { name: "Arme", description: "Haarentfernung an Oberarmen, Unterarmen oder am ganzen Arm", popular: false },
      { name: "Rücken & Brust", description: "Umfassende Behandlung für größere Körperbereiche", popular: false },
      { name: "Individuelle Bereiche", description: "Maßgeschneiderte Behandlungen für bestimmte Problembereiche", popular: false },
    ],
  },
  en: {
    heading1: "Our",
    heading2: "Services",
    desc: "Professional laser hair removal treatments for every area, customized to your needs",
    popular: "Popular",
    footer: "Not sure which treatment is right for you?",
    footerLink: "Book a free consultation",
    services: [
      { name: "Full Body", description: "Complete hair removal for silky smooth skin from head to toe", popular: true },
      { name: "Face", description: "Gentle treatment for upper lip, chin, cheeks, and full face", popular: false },
      { name: "Underarms", description: "Quick and effective solution for smooth, confident underarms", popular: true },
      { name: "Bikini & Brazilian", description: "Discreet, comfortable treatment in a private setting", popular: true },
      { name: "Legs", description: "Full or half leg treatments for long-lasting smoothness", popular: false },
      { name: "Arms", description: "Upper arms, lower arms, or full arm hair removal", popular: false },
      { name: "Back & Chest", description: "Comprehensive treatment for larger body areas", popular: false },
      { name: "Custom Areas", description: "Tailored treatments for any specific area of concern", popular: false },
    ],
  },
  ru: {
    heading1: "Наши",
    heading2: "Услуги",
    desc: "Профессиональная лазерная эпиляция для любой зоны, адаптированная под ваши потребности",
    popular: "Популярно",
    footer: "Не знаете, какая процедура вам подходит?",
    footerLink: "Запишитесь на бесплатную консультацию",
    services: [
      { name: "Всё тело", description: "Полное удаление волос для шелковисто гладкой кожи с головы до ног", popular: true },
      { name: "Лицо", description: "Деликатная обработка верхней губы, подбородка, щёк и всего лица", popular: false },
      { name: "Подмышки", description: "Быстрое и эффективное решение для гладких и уверенных подмышек", popular: true },
      { name: "Бикини & Бразильское", description: "Дискретная, комфортная процедура в приватной обстановке", popular: true },
      { name: "Ноги", description: "Полная или частичная обработка ног для длительной гладкости", popular: false },
      { name: "Руки", description: "Эпиляция плеч, предплечий или всей руки", popular: false },
      { name: "Спина & Грудь", description: "Комплексная обработка крупных зон тела", popular: false },
      { name: "Индивидуальные зоны", description: "Индивидуальные процедуры для любых конкретных зон", popular: false },
    ],
  },
};

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={servicesBg.src}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-heading-2 font-serif font-light text-white">
            {t.heading1}
            <span className="block font-semibold" style={{
              background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>{t.heading2}</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full" />

          <p className="text-lg text-white/70 max-w-2xl mx-auto">{t.desc}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.map((service) => (
            <div
              key={service.name}
              className="relative p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm hover:bg-white/15 hover:border-gold-400/50 transition-all duration-300"
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-soft">
                  {t.popular}
                </div>
              )}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-semibold text-white">{service.name}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70">
            {t.footer}{" "}
            <a href="#contact" className="text-gold-400 font-medium hover:text-gold-300 underline underline-offset-4">
              {t.footerLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
