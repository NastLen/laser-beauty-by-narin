"use client";

import Link from "next/link";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { useLanguage } from "@/app/context/LanguageContext";
import { useConsent } from "@/app/context/ConsentContext";

const translations = {
  de: {
    desc: "Premium Laser-Haarentfernung in luxuriösem Ambiente. Erleben Sie den Unterschied durch persönliche Betreuung und moderne Technologie.",
    navHeading: "Navigation",
    links: { about: "Über mich", services: "Leistungen", pricing: "Preise", contact: "Kontakt" },
    contactHeading: "Kontakt",
    copyright: "Alle Rechte vorbehalten.",
    legal: { imprint: "Impressum", privacy: "Datenschutzerklärung", cookiePolicy: "Cookie-Richtlinie", cookieSettings: "Cookie-Einstellungen" },
  },
  en: {
    desc: "Premium laser hair removal in a luxury setting. Experience the difference of personalized care and modern technology.",
    navHeading: "Navigation",
    links: { about: "About Me", services: "Services", pricing: "Pricing", contact: "Contact" },
    contactHeading: "Contact",
    copyright: "All rights reserved.",
    legal: { imprint: "Legal Notice", privacy: "Privacy Policy", cookiePolicy: "Cookie Policy", cookieSettings: "Cookie Settings" },
  },
  ru: {
    desc: "Премиум лазерная эпиляция в роскошной обстановке. Почувствуйте разницу благодаря индивидуальному подходу и современным технологиям.",
    navHeading: "Навигация",
    links: { about: "Обо мне", services: "Услуги", pricing: "Цены", contact: "Контакты" },
    contactHeading: "Контакты",
    copyright: "Все права защищены.",
    legal: { imprint: "Выходные данные", privacy: "Политика конфиденциальности", cookiePolicy: "Политика cookie", cookieSettings: "Настройки cookie" },
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const { openSettings } = useConsent();
  const t = translations[language];

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif text-gold-400 mb-4">Laser Beauty by Narin</h3>
            <p className="text-sm leading-relaxed">{t.desc}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.navHeading}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">{t.links.about}</Link></li>
              <li><Link href="/pricing" className="hover:text-gold-400 transition-colors">{t.links.pricing}</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition-colors">{t.links.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.contactHeading}</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Dotzheimer Straße 85, 65197 Wiesbaden</li>
              <li>📞 +4916091369810</li>
              <li>✉️ narin861418@gmail.com</li>
              <li className="pt-4">
                <a
                  href="https://www.instagram.com/laser_beauty_by_narin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold-400 transition-colors"
                  aria-label="Instagram"
                >
                  <PiInstagramLogoDuotone className="w-5 h-5" />
                  @laser_beauty_by_narin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm space-y-4">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/impressum" className="hover:text-gold-400 transition-colors">{t.legal.imprint}</Link>
            <Link href="/datenschutz" className="hover:text-gold-400 transition-colors">{t.legal.privacy}</Link>
            <Link href="/cookie-richtlinie" className="hover:text-gold-400 transition-colors">{t.legal.cookiePolicy}</Link>
            <button type="button" onClick={openSettings} className="hover:text-gold-400 transition-colors">
              {t.legal.cookieSettings}
            </button>
          </nav>
          <p>&copy; {new Date().getFullYear()} Laser Beauty by Narin. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
