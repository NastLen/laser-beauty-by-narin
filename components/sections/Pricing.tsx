"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import servicesBg from "@/app/images/services-bg.jpg";

const translations = {
  de: {
    title: "Preisliste",
    subtitle: "DEKA Motus AX",
    note: "Alle Preise pro Sitzung",
    categories: [
      {
        name: "Gesicht",
        items: [
          { label: "Oberlippe", price: "€40" },
          { label: "Kinn", price: "€40" },
          { label: "Oberlippe & Kinn", price: "€70" },
          { label: "Koteletten", price: "€40" },
          { label: "Wangen", price: "€40" },
          { label: "Hals", price: "€50" },
        ],
      },
      {
        name: "Arme",
        items: [
          { label: "Unterarme", price: "€80" },
          { label: "Achseln", price: "€70" },
          { label: "Arme komplett", price: "€130" },
        ],
      },
      {
        name: "Körper",
        items: [
          { label: "Bauch (weiße Linie)", price: "€40" },
          { label: "Bauch komplett", price: "€90" },
          { label: "Gesäße", price: "€90" },
          { label: "Bikini klassisch", price: "€70" },
          { label: "Bikini komplett", price: "€140" },
        ],
      },
      {
        name: "Beine",
        items: [
          { label: "Unterschenkel / Oberschenkel", price: "€110" },
          { label: "Rückseite der Oberschenkel", price: "€80" },
          { label: "Beine komplett", price: "€180" },
        ],
      },
    ],
  },
  en: {
    title: "Price List",
    subtitle: "DEKA Motus AX",
    note: "All prices per session",
    categories: [
      {
        name: "Face",
        items: [
          { label: "Upper lip", price: "€40" },
          { label: "Chin", price: "€40" },
          { label: "Upper lip & Chin", price: "€70" },
          { label: "Sideburns", price: "€40" },
          { label: "Cheeks", price: "€40" },
          { label: "Neck", price: "€50" },
        ],
      },
      {
        name: "Arms",
        items: [
          { label: "Forearms", price: "€80" },
          { label: "Underarms", price: "€70" },
          { label: "Full arms", price: "€130" },
        ],
      },
      {
        name: "Body",
        items: [
          { label: "Abdomen (white line)", price: "€40" },
          { label: "Full abdomen", price: "€90" },
          { label: "Buttocks", price: "€90" },
          { label: "Bikini classic", price: "€70" },
          { label: "Full bikini", price: "€140" },
        ],
      },
      {
        name: "Legs",
        items: [
          { label: "Lower / Upper legs", price: "€110" },
          { label: "Back of thighs", price: "€80" },
          { label: "Full legs", price: "€180" },
        ],
      },
    ],
  },
  ru: {
    title: "Прайс-лист",
    subtitle: "DEKA Motus AX",
    note: "Все цены за одну процедуру",
    categories: [
      {
        name: "Лицо",
        items: [
          { label: "Верхняя губа", price: "€40" },
          { label: "Подбородок", price: "€40" },
          { label: "Верхняя губа и подбородок", price: "€70" },
          { label: "Бакенбарды", price: "€40" },
          { label: "Щёки", price: "€40" },
          { label: "Шея", price: "€50" },
        ],
      },
      {
        name: "Руки",
        items: [
          { label: "Предплечья", price: "€80" },
          { label: "Подмышки", price: "€70" },
          { label: "Руки полностью", price: "€130" },
        ],
      },
      {
        name: "Тело",
        items: [
          { label: "Живот (белая линия)", price: "€40" },
          { label: "Живот полностью", price: "€90" },
          { label: "Ягодицы", price: "€90" },
          { label: "Бикини классическое", price: "€70" },
          { label: "Бикини полностью", price: "€140" },
        ],
      },
      {
        name: "Ноги",
        items: [
          { label: "Голень / Бедро", price: "€110" },
          { label: "Задняя поверхность бёдер", price: "€80" },
          { label: "Ноги полностью", price: "€180" },
        ],
      },
    ],
  },
};

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={servicesBg.src} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 container-custom max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-5">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <p className="text-white/70 uppercase tracking-[0.35em] text-xs font-medium">{t.note}</p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <div
            className="inline-block px-10 py-6 rounded-2xl"
            style={{ backgroundColor: "rgba(10,10,10,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,169,97,0.3)" }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-light text-white tracking-wide">
              {t.title}
            </h2>
            <p
              className="text-2xl md:text-3xl font-serif font-semibold mt-2 tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A, #D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>

        {/* Price grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {t.categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-gold-400/30 backdrop-blur-md p-10 hover:border-gold-400/60 transition-all duration-300"
              style={{ backgroundColor: "rgba(10,10,10,0.72)" }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-gradient-to-r from-gold-400 to-transparent" />
                <h3
                  className="text-2xl font-serif font-semibold uppercase tracking-widest"
                  style={{
                    background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {cat.name}
                </h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-400/40 to-transparent" />
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between gap-4 group py-1 border-b border-white/8 last:border-0">
                    <span className="text-white/90 text-base font-light group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <span
                      className="text-base font-semibold shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #C9A961, #D4AF37)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
