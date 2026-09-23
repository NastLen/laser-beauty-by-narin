"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { ConsentService, useConsent } from "@/app/context/ConsentContext";

const translations = {
  de: {
    googleMaps: {
      title: "Karte von Google Maps",
      text: "Zum Schutz Ihrer Daten laden wir die Karte erst nach Ihrer Einwilligung. Dabei werden Daten wie Ihre IP-Adresse an Google übermittelt – auch in die USA – und Cookies eingesetzt.",
      button: "Karte laden",
    },
    note: "Mit dem Klick willigen Sie ein. Widerruf jederzeit unter „Cookie-Einstellungen“ am Seitenende.",
    privacy: "Datenschutzerklärung",
  },
  en: {
    googleMaps: {
      title: "Google Maps",
      text: "To protect your data, the map is only loaded with your consent. Data such as your IP address is then transmitted to Google – including in the USA – and cookies are used.",
      button: "Load map",
    },
    note: "By clicking, you give your consent. You can withdraw it at any time via “Cookie Settings” at the bottom of the page.",
    privacy: "Privacy Policy",
  },
  ru: {
    googleMaps: {
      title: "Карта Google Maps",
      text: "Чтобы защитить ваши данные, карта загружается только с вашего согласия. При этом такие данные, как ваш IP-адрес, передаются Google, в том числе в США, и используются cookie.",
      button: "Загрузить карту",
    },
    note: "Нажимая кнопку, вы даёте согласие. Отозвать его можно в любое время через «Настройки cookie» внизу страницы.",
    privacy: "Политика конфиденциальности",
  },
};

const icons: Record<ConsentService, ReactNode> = {
  googleMaps: (
    <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

type ConsentGateProps = {
  service: ConsentService;
  // Rendered only after the visitor has consented to `service`.
  children: ReactNode;
  // Sizing of the placeholder, so the layout doesn't jump.
  className?: string;
  // Alternative for visitors who don't consent, e.g. a plain link to the provider.
  fallback?: ReactNode;
};

export default function ConsentGate({ service, children, className = "", fallback }: ConsentGateProps) {
  const { consent, ready, grant } = useConsent();
  const { language } = useLanguage();
  const t = translations[language];

  // Keep the space empty until the stored choice is known, so returning visitors don't see the placeholder flash.
  if (!ready) return <div className={className} />;
  if (consent[service]) return <>{children}</>;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-2xl border border-gold-200 bg-cream-100 px-6 py-10 text-center ${className}`}
    >
      {icons[service]}
      <h3 className="text-xl md:text-2xl font-serif font-light text-neutral-900">{t[service].title}</h3>
      <p className="max-w-lg text-sm leading-relaxed text-neutral-600">
        {t[service].text}{" "}
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-gold-700">
          {t.privacy}
        </Link>
      </p>
      <button
        type="button"
        onClick={() => grant(service)}
        className="px-8 py-3 rounded-full text-base font-medium text-black bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#E6BE5A] shadow-elegant hover:shadow-elegant-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-700 focus-visible:ring-offset-2"
      >
        {t[service].button}
      </button>
      <p className="max-w-lg text-xs text-neutral-500">{t.note}</p>
      {fallback && <div className="max-w-lg text-sm text-neutral-700">{fallback}</div>}
    </div>
  );
}
