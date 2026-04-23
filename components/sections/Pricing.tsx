"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  de: {
    heading1: "Behandlungs-",
    heading2: "pakete",
    desc: "Flexible Optionen, die auf Ihre Ziele und Ihr Budget zugeschnitten sind",
    footer1: "Preise variieren je nach Behandlungsbereich und individuellen Bedürfnissen",
    footer2: "für ein individuelles Angebot und eine kostenlose Beratung",
    contactUs: "Kontaktieren Sie uns",
    packages: [
      {
        name: "Einzelsitzung",
        description: "Perfekt, um unsere Leistungen auszuprobieren oder einen kleinen Bereich zu behandeln",
        features: ["Eine Behandlungssitzung", "Individuelle Beratung", "Nachsorge-Anleitung"],
        popular: false,
        note: "Ab",
        cta: "Jetzt buchen",
      },
      {
        name: "Paketangebot",
        description: "Bestes Preis-Leistungs-Verhältnis für optimale, langanhaltende Ergebnisse",
        features: ["6–8 Behandlungssitzungen", "Umfassende Beratung", "Vorrangige Terminvergabe", "Nachsorgeprodukte inklusive"],
        popular: true,
        note: "Beliebteste Wahl",
        cta: "Jetzt starten",
      },
      {
        name: "Ganzkörperprogramm",
        description: "Ultimatives Luxuserlebnis für vollständige Haarentfernung",
        features: ["Unbegrenzte Bereiche inklusive", "8–10 Sitzungen", "VIP-Terminvergabe", "Premium Nachsorge-Set", "Kostenlose Nachbehandlungen"],
        popular: false,
        note: "Premium",
        cta: "Mehr erfahren",
      },
    ],
  },
  en: {
    heading1: "Treatment",
    heading2: "Packages",
    desc: "Flexible options designed to fit your goals and budget",
    footer1: "Pricing varies by treatment area and individual needs",
    footer2: "for a personalized quote and free consultation",
    contactUs: "Contact us",
    packages: [
      {
        name: "Single Session",
        description: "Perfect for trying out our services or targeting a small area",
        features: ["One treatment session", "Personalized consultation", "Aftercare guidance"],
        popular: false,
        note: "Starting from",
        cta: "Book Now",
      },
      {
        name: "Package Deal",
        description: "Best value for achieving optimal, long-lasting results",
        features: ["6-8 treatment sessions", "Comprehensive consultation", "Priority scheduling", "Aftercare products included"],
        popular: true,
        note: "Most Popular",
        cta: "Get Started",
      },
      {
        name: "Full Body Program",
        description: "Ultimate luxury experience for complete hair removal",
        features: ["Unlimited areas included", "8-10 sessions", "VIP scheduling", "Premium aftercare kit", "Complimentary touch-ups"],
        popular: false,
        note: "Premium",
        cta: "Learn More",
      },
    ],
  },
  ru: {
    heading1: "Пакеты",
    heading2: "процедур",
    desc: "Гибкие варианты, разработанные с учётом ваших целей и бюджета",
    footer1: "Стоимость зависит от зоны обработки и индивидуальных потребностей",
    footer2: "для индивидуального предложения и бесплатной консультации",
    contactUs: "Свяжитесь с нами",
    packages: [
      {
        name: "Единственная сессия",
        description: "Идеально, чтобы попробовать наши услуги или обработать небольшую зону",
        features: ["Одна процедура", "Персональная консультация", "Рекомендации по уходу"],
        popular: false,
        note: "Начиная от",
        cta: "Записаться",
      },
      {
        name: "Пакетное предложение",
        description: "Лучшая цена для достижения оптимальных долговременных результатов",
        features: ["6–8 сеансов", "Комплексная консультация", "Приоритетная запись", "Продукты по уходу включены"],
        popular: true,
        note: "Самое популярное",
        cta: "Начать",
      },
      {
        name: "Программа для всего тела",
        description: "Максимальный роскошный опыт для полного удаления волос",
        features: ["Все зоны включены", "8–10 сеансов", "VIP-запись", "Премиальный набор по уходу", "Бесплатные поддерживающие процедуры"],
        popular: false,
        note: "Премиум",
        cta: "Узнать больше",
      },
    ],
  },
};

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section background="cream">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-heading-2 font-serif font-light text-neutral-800">
          {t.heading1}
          <span className="block font-semibold text-gold-600">{t.heading2}</span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>

        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{t.desc}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {t.packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`relative flex flex-col ${pkg.popular ? "ring-2 ring-gold-400 shadow-glow" : ""}`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-medium px-6 py-2 rounded-full shadow-soft">
                {pkg.note}
              </div>
            )}

            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-semibold text-neutral-800">{pkg.name}</h3>
                <p className="text-neutral-600 text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-neutral-700">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200">
              <Button variant={pkg.popular ? "primary" : "secondary"} className="w-full">
                {pkg.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center space-y-2">
        <p className="text-neutral-600">{t.footer1}</p>
        <p className="text-neutral-800 font-medium">
          <a href="#contact" className="text-gold-600 hover:text-gold-700 underline underline-offset-4">
            {t.contactUs}
          </a>{" "}
          {t.footer2}
        </p>
      </div>
    </Section>
  );
}
