"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import servicesBg from "@/app/images/services-bg.jpg";
import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "@/components/ui/AnimateIn";

const translations = {
  de: {
    title: "Preisliste",
    subtitle: "DEKA Motus AX",
    note: "Alle Preise pro Sitzung",
    packagesTitle: "Angebotspakete",
    beautyTitle: "Beauty",
    categories: [
      {
        name: "Gesicht",
        items: [
          { label: "Oberlippe", duration: "15 Min.", price: "40€" },
          { label: "Kinn", duration: "15 Min.", price: "40€" },
          { label: "Oberlippe & Kinn", duration: "25 Min.", price: "70€" },
          { label: "Koteletten", duration: "15 Min.", price: "40€" },
          { label: "Wangen", duration: "15 Min.", price: "40€" },
          { label: "Hals", duration: "20 Min.", price: "50€" },
        ],
      },
      {
        name: "Arme",
        items: [
          { label: "Unterarme", duration: "40 Min.", price: "80€" },
          { label: "Achseln", duration: "30 Min.", price: "70€" },
          { label: "Arme komplett", duration: "50 Min.", price: "140€" },
        ],
      },
      {
        name: "Körper",
        items: [
          { label: "Bauch (weiße Linie)", duration: "20 Min.", price: "40€" },
          { label: "Bauch komplett", duration: "40 Min.", price: "90€" },
          { label: "Gesäße", duration: "35 Min.", price: "90€" },
          { label: "Bikini klassische", duration: "30 Min.", price: "80€" },
          { label: "Bikini komplett", duration: "50 Min.", price: "150€" },
        ],
      },
      {
        name: "Beine",
        items: [
          { label: "Unterschenkel / Oberschenkel", duration: "1 Std.", price: "110€" },
          { label: "Rückseite der Oberschenkel", duration: "40 Min.", price: "80€" },
          { label: "Beine komplett", duration: "1 Std. 20 Min.", price: "190€" },
        ],
      },
    ],
    packages: [
      { label: "Gesicht komplett", duration: "40 Min.", oldPrice: "160€", price: "120€" },
      { label: "Bikini komplett + Achseln", duration: "1 Std.", oldPrice: "220€", price: "170€" },
      { label: "Bikini komplett + Achseln + Unterschenkel", duration: "1 Std. 30 Min.", oldPrice: "330€", price: "230€" },
      { label: "Bikini komplett + Achseln + Beine komplett", duration: "2 Std.", oldPrice: "390€", price: "300€" },
      { label: "Bikini komplett + Beine komplett", duration: "1 Std. 40 Min.", oldPrice: "340€", price: "240€" },
      { label: "Ganzer Körper", duration: "3 Std.", oldPrice: null, price: "550€", highlight: true },
    ],
    beauty: [
      { label: "Wimpernlifting (mit Färben)", price: "49€" },
      { label: "Browlifting (mit Färben)", price: "49€" },
      { label: "Wimpernlifting + Browlifting", price: "79€" },
    ],
  },
  en: {
    title: "Price List",
    subtitle: "DEKA Motus AX",
    note: "All prices per session",
    packagesTitle: "Package Deals",
    beautyTitle: "Beauty",
    categories: [
      {
        name: "Face",
        items: [
          { label: "Upper lip", duration: "15 min.", price: "40€" },
          { label: "Chin", duration: "15 min.", price: "40€" },
          { label: "Upper lip & Chin", duration: "25 min.", price: "70€" },
          { label: "Sideburns", duration: "15 min.", price: "40€" },
          { label: "Cheeks", duration: "15 min.", price: "40€" },
          { label: "Neck", duration: "20 min.", price: "50€" },
        ],
      },
      {
        name: "Arms",
        items: [
          { label: "Forearms", duration: "40 min.", price: "80€" },
          { label: "Underarms", duration: "30 min.", price: "70€" },
          { label: "Full arms", duration: "50 min.", price: "140€" },
        ],
      },
      {
        name: "Body",
        items: [
          { label: "Abdomen (white line)", duration: "20 min.", price: "40€" },
          { label: "Full abdomen", duration: "40 min.", price: "90€" },
          { label: "Buttocks", duration: "35 min.", price: "90€" },
          { label: "Bikini classic", duration: "30 min.", price: "80€" },
          { label: "Full bikini", duration: "50 min.", price: "150€" },
        ],
      },
      {
        name: "Legs",
        items: [
          { label: "Lower / Upper legs", duration: "1 hr.", price: "110€" },
          { label: "Back of thighs", duration: "40 min.", price: "80€" },
          { label: "Full legs", duration: "1 hr. 20 min.", price: "190€" },
        ],
      },
    ],
    packages: [
      { label: "Full face", duration: "40 min.", oldPrice: "160€", price: "120€" },
      { label: "Full bikini + Underarms", duration: "1 hr.", oldPrice: "220€", price: "170€" },
      { label: "Full bikini + Underarms + Lower legs", duration: "1 hr. 30 min.", oldPrice: "330€", price: "230€" },
      { label: "Full bikini + Underarms + Full legs", duration: "2 hr.", oldPrice: "390€", price: "300€" },
      { label: "Full bikini + Full legs", duration: "1 hr. 40 min.", oldPrice: "340€", price: "240€" },
      { label: "Full body", duration: "3 hr.", oldPrice: null, price: "550€", highlight: true },
    ],
    beauty: [
      { label: "Lash lift (with tint)", price: "49€" },
      { label: "Brow lift (with tint)", price: "49€" },
      { label: "Lash lift + Brow lift", price: "79€" },
    ],
  },
  ru: {
    title: "Прайс-лист",
    subtitle: "DEKA Motus AX",
    note: "Все цены за одну процедуру",
    packagesTitle: "Пакетные предложения",
    beautyTitle: "Бьюти",
    categories: [
      {
        name: "Лицо",
        items: [
          { label: "Верхняя губа", duration: "15 мин.", price: "40€" },
          { label: "Подбородок", duration: "15 мин.", price: "40€" },
          { label: "Верхняя губа и подбородок", duration: "25 мин.", price: "70€" },
          { label: "Бакенбарды", duration: "15 мин.", price: "40€" },
          { label: "Щёки", duration: "15 мин.", price: "40€" },
          { label: "Шея", duration: "20 мин.", price: "50€" },
        ],
      },
      {
        name: "Руки",
        items: [
          { label: "Предплечья", duration: "40 мин.", price: "80€" },
          { label: "Подмышки", duration: "30 мин.", price: "70€" },
          { label: "Руки полностью", duration: "50 мин.", price: "140€" },
        ],
      },
      {
        name: "Тело",
        items: [
          { label: "Живот (белая линия)", duration: "20 мин.", price: "40€" },
          { label: "Живот полностью", duration: "40 мин.", price: "90€" },
          { label: "Ягодицы", duration: "35 мин.", price: "90€" },
          { label: "Бикини классическое", duration: "30 мин.", price: "80€" },
          { label: "Бикини полностью", duration: "50 мин.", price: "150€" },
        ],
      },
      {
        name: "Ноги",
        items: [
          { label: "Голень / Бедро", duration: "1 ч.", price: "110€" },
          { label: "Задняя поверхность бёдер", duration: "40 мин.", price: "80€" },
          { label: "Ноги полностью", duration: "1 ч. 20 мин.", price: "190€" },
        ],
      },
    ],
    packages: [
      { label: "Лицо полностью", duration: "40 мин.", oldPrice: "160€", price: "120€" },
      { label: "Бикини полностью + Подмышки", duration: "1 ч.", oldPrice: "220€", price: "170€" },
      { label: "Бикини полностью + Подмышки + Голень", duration: "1 ч. 30 мин.", oldPrice: "330€", price: "230€" },
      { label: "Бикини полностью + Подмышки + Ноги полностью", duration: "2 ч.", oldPrice: "390€", price: "300€" },
      { label: "Бикини полностью + Ноги полностью", duration: "1 ч. 40 мин.", oldPrice: "340€", price: "240€" },
      { label: "Всё тело", duration: "3 ч.", oldPrice: null, price: "550€", highlight: true },
    ],
    beauty: [
      { label: "Ламинирование ресниц (с окрашиванием)", price: "49€" },
      { label: "Ламинирование бровей (с окрашиванием)", price: "49€" },
      { label: "Ламинирование ресниц + бровей", price: "79€" },
    ],
  },
};

const goldText = {
  background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const cardStyle = {
  backgroundColor: "rgba(10,10,10,0.45)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(201,169,97,0.3)",
};

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={servicesBg.src} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 container-custom max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <AnimateIn className="text-center mb-14 space-y-5">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <p className="text-white/70 uppercase tracking-[0.35em] text-xs font-medium">{t.note}</p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
          <div className="inline-block px-10 py-6 rounded-2xl" style={cardStyle}>
            <h2 className="text-5xl md:text-7xl font-serif font-light text-white tracking-wide">{t.title}</h2>
            <p
              className="text-2xl md:text-3xl font-serif font-semibold mt-2 tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A, #DAA520, #C9A961)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: "shimmer 3s ease-in-out infinite",
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
        </AnimateIn>

        {/* ── Laser price grid ── */}
        <AnimateStagger className="grid md:grid-cols-2 gap-6 mb-10">
          {t.categories.map((cat) => (
            <AnimateStaggerItem key={cat.name}>
              <div className="rounded-2xl p-8 hover:border-gold-400/60 transition-all duration-300 h-full" style={cardStyle}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[1px] bg-gradient-to-r from-gold-400 to-transparent" />
                  <h3 className="text-xl font-serif font-semibold uppercase tracking-widest" style={goldText}>{cat.name}</h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-400/40 to-transparent" />
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 py-1 border-b border-white/8 last:border-0">
                      <span className="text-white/90 text-base font-light flex-1">{item.label}</span>
                      <span className="text-white/40 text-sm shrink-0">{item.duration}</span>
                      <span className="text-base font-semibold shrink-0 min-w-[3rem] text-right" style={goldText}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

        {/* ── Angebotspakete ── */}
        <AnimateIn delay={0.1}>
          <div className="rounded-2xl p-8 md:p-10 mb-10" style={cardStyle}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[1px] bg-gradient-to-r from-gold-400 to-transparent" />
              <h3 className="text-2xl font-serif font-semibold uppercase tracking-widest" style={goldText}>{t.packagesTitle}</h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-400/40 to-transparent" />
            </div>
            <ul className="space-y-4">
              {t.packages.map((pkg, i) => (
                <li key={i} className={`flex items-center gap-3 py-2 border-b border-white/8 last:border-0 ${pkg.highlight ? "mt-4 pt-4 border-t border-gold-400/30" : ""}`}>
                  <span className={`flex-1 text-base font-light ${pkg.highlight ? "text-white font-semibold text-lg" : "text-white/90"}`}>
                    {pkg.label}
                  </span>
                  <span className="text-white/40 text-sm shrink-0">{pkg.duration}</span>
                  <div className="flex items-center gap-3 shrink-0">
                    {pkg.oldPrice && (
                      <span className="text-white/35 text-sm line-through">{pkg.oldPrice}</span>
                    )}
                    <span className={`font-semibold min-w-[3.5rem] text-right ${pkg.highlight ? "text-xl" : "text-base"}`} style={goldText}>
                      {pkg.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>

        {/* ── Beauty ── */}
        <AnimateIn delay={0.2}>
          <div className="rounded-2xl p-8 md:p-10" style={cardStyle}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-gradient-to-r from-gold-400 to-transparent" />
              <h3 className="text-2xl font-serif font-semibold uppercase tracking-widest" style={goldText}>{t.beautyTitle}</h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-400/40 to-transparent" />
            </div>
            <ul className="space-y-3">
              {t.beauty.map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-4 py-1 border-b border-white/8 last:border-0">
                  <span className="text-white/90 text-base font-light">{item.label}</span>
                  <span className="text-base font-semibold shrink-0" style={goldText}>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
