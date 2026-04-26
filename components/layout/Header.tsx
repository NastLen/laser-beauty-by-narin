"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";
import { useLanguage, Language } from "@/app/context/LanguageContext";

const translations = {
  de: {
    nav: [
      { href: "/", label: "Hauptseite" },
      { href: "/about", label: "Über mich" },
      { href: "/pricing", label: "Preisliste" },
      { href: "/contact", label: "Kontakt" },
    ],
    cta: "Termin buchen",
  },
  en: {
    nav: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Me" },
      { href: "/pricing", label: "Price List" },
      { href: "/contact", label: "Contact" },
    ],
    cta: "Book Appointment",
  },
  ru: {
    nav: [
      { href: "/", label: "Главная" },
      { href: "/about", label: "Обо мне" },
      { href: "/pricing", label: "Прайс-лист" },
      { href: "/contact", label: "Контакты" },
    ],
    cta: "Записаться",
  },
};

const languageLabels: Record<Language, string> = {
  de: "🇩🇪 DE",
  en: "🇬🇧 EN",
  ru: "🇷🇺 RU",
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <>
      {/* Hamburger Icon always visible */}
      <button
        className="fixed top-6 left-6 z-[60] p-3 rounded-full bg-white/90 shadow-elegant border border-gold-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-7 h-7 text-gold-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <VscMenu className="w-7 h-7 text-gold-700" />
        )}
      </button>

      {/* Language Switcher — always visible, top-right */}
      <div className="fixed top-6 right-6 z-[60] flex gap-2">
        {(["de", "en", "ru"] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all ${
              language === lang
                ? "bg-white/90 text-gold-700 border-gold-300 shadow-elegant"
                : "bg-white/50 text-neutral-600 border-white/30 hover:bg-white/80"
            }`}
          >
            {languageLabels[lang]}
          </button>
        ))}
      </div>

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 z-50 bg-white/95 backdrop-blur-md shadow-elegant flex flex-col items-center pt-28 pb-10 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-72"}`}
      >
        {/* Vertical Navigation */}
        <nav className="flex flex-col gap-6 w-full flex-1">
          {t.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full text-lg font-medium px-6 py-2 rounded-xl transition-colors hover:bg-gradient-to-r hover:from-gold-100 hover:to-champagne-100 hover:text-gold-700 ${
                pathname === link.href
                  ? "bg-gradient-to-r from-gold-50 to-champagne-50 text-gold-700 shadow-elegant"
                  : "text-neutral-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-8 px-6">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-500 text-white text-lg font-semibold rounded-full hover:shadow-glow-gold transition-all duration-300 hover:scale-105">
              {t.cta}
            </button>
          </Link>
        </nav>

        {/* Language Switcher */}
        <div className="flex gap-2 mt-6 mb-4">
          {(["de", "en", "ru"] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                language === lang
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-soft"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {languageLabels[lang]}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 pb-10">
          <a
            href="#"
            className="p-3 rounded-full bg-gold-100 hover:bg-gold-200 transition-colors"
            aria-label="Instagram"
          >
            <PiInstagramLogoDuotone className="w-6 h-6 text-cream-500" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gold-100 hover:bg-gold-200 transition-colors"
            aria-label="Facebook"
          >
            <IoLogoFacebook className="w-6 h-6 text-cream-500" />
          </a>
        </div>
      </aside>
    </>
  );
}
