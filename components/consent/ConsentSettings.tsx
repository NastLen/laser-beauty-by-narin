"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import {
  Consent,
  ConsentService,
  FULL_CONSENT,
  NO_CONSENT,
  useConsent,
} from "@/app/context/ConsentContext";

const translations = {
  de: {
    title: "Datenschutz-Einstellungen",
    text: "Wir verwenden nur technisch notwendige Speicherungen. Die Karte von Google Maps laden wir erst mit Ihrer Einwilligung. Dann werden Daten wie Ihre IP-Adresse an Google übermittelt – auch in die USA – und Cookies oder ähnliche Technologien eingesetzt. Hier können Sie Ihre Auswahl jederzeit ändern oder widerrufen.",
    acceptAll: "Alle akzeptieren",
    rejectAll: "Nur notwendige",
    save: "Auswahl speichern",
    close: "Schließen",
    alwaysOn: "Immer aktiv",
    necessary: {
      title: "Notwendig",
      desc: "Speichert Ihre Auswahl in diesem Fenster (12 Monate) und – falls Sie die Sprache wechseln – Ihre Spracheinstellung im lokalen Speicher Ihres Browsers.",
    },
    googleMaps: {
      title: "Google Maps",
      desc: "Interaktive Karte mit unserem Standort. Anbieter: Google Ireland Limited, Irland; Übermittlung an Google LLC in den USA möglich.",
    },
    privacy: "Datenschutzerklärung",
    cookiePolicy: "Cookie-Richtlinie",
    imprint: "Impressum",
  },
  en: {
    title: "Privacy Settings",
    text: "We only use technically necessary storage. The Google Maps map is loaded only with your consent. Once loaded, data such as your IP address is transmitted to Google – including in the USA – and cookies or similar technologies are used. You can change or withdraw your choice here at any time.",
    acceptAll: "Accept all",
    rejectAll: "Necessary only",
    save: "Save selection",
    close: "Close",
    alwaysOn: "Always active",
    necessary: {
      title: "Necessary",
      desc: "Stores your choice in this dialog (12 months) and – if you change it – your language setting in your browser's local storage.",
    },
    googleMaps: {
      title: "Google Maps",
      desc: "Interactive map showing our location. Provider: Google Ireland Limited, Ireland; transfer to Google LLC in the USA possible.",
    },
    privacy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    imprint: "Legal Notice",
  },
  ru: {
    title: "Настройки конфиденциальности",
    text: "Мы используем только технически необходимое хранение данных. Карта Google Maps загружается только с вашего согласия. После этого такие данные, как ваш IP-адрес, передаются Google, в том числе в США, и используются cookie или аналогичные технологии. Здесь можно в любое время изменить или отозвать свой выбор.",
    acceptAll: "Принять все",
    rejectAll: "Только необходимые",
    save: "Сохранить выбор",
    close: "Закрыть",
    alwaysOn: "Всегда активно",
    necessary: {
      title: "Необходимые",
      desc: "Сохраняет ваш выбор в этом окне (12 месяцев) и — если вы его меняете — выбранный язык в локальном хранилище браузера.",
    },
    googleMaps: {
      title: "Google Maps",
      desc: "Интерактивная карта с нашим адресом. Поставщик: Google Ireland Limited, Ирландия; возможна передача данных Google LLC в США.",
    },
    privacy: "Политика конфиденциальности",
    cookiePolicy: "Политика cookie",
    imprint: "Выходные данные",
  },
};

const services: ConsentService[] = ["googleMaps"];

// "Accept all" and "Necessary only" share one style: rejecting must be as easy as accepting.
const choiceButton =
  "w-full px-5 py-3 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#E6BE5A] shadow-elegant hover:shadow-elegant-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-700 focus-visible:ring-offset-2";
const secondaryButton =
  "w-full px-5 py-3 rounded-full text-sm font-semibold text-neutral-800 bg-white border border-gold-300 hover:bg-gold-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-700 focus-visible:ring-offset-2";

function Switch({
  checked,
  onChange,
  labelledBy,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelledBy: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      onClick={() => onChange(!checked)}
      className={`relative mt-0.5 inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-700 focus-visible:ring-offset-2 ${
        checked ? "bg-gold-600" : "bg-neutral-300"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

// No banner on page load: Google Maps asks for consent on the map itself.
// This dialog opens only from "Cookie-Einstellungen" so consent can be changed or withdrawn at any time.
export default function ConsentSettings() {
  const { consent, settingsOpen, save, closeSettings } = useConsent();
  const { language } = useLanguage();
  const t = translations[language];
  const [choice, setChoice] = useState<Consent>(consent);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!settingsOpen) return;
    setChoice(consent);
    dialogRef.current?.focus();
  }, [settingsOpen, consent]);

  if (!settingsOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-6 pointer-events-none">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby="consent-title"
        aria-describedby="consent-text"
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === "Escape") closeSettings();
        }}
        className="pointer-events-auto mx-auto max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-gold-200 bg-white/95 backdrop-blur-md shadow-elegant-lg p-5 sm:p-8 focus:outline-none"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="consent-title" className="text-xl sm:text-2xl font-serif text-neutral-900">
            {t.title}
          </h2>
          <button
            type="button"
            onClick={closeSettings}
            aria-label={t.close}
            className="-mr-2 -mt-1 p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p id="consent-text" className="mt-3 text-sm leading-relaxed text-neutral-600">
          {t.text}
        </p>

        <ul className="mt-5 space-y-3">
          <li className="flex items-start justify-between gap-4 rounded-xl bg-cream-100 p-4">
            <div>
              <p className="font-medium text-neutral-900">{t.necessary.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-600">{t.necessary.desc}</p>
            </div>
            <span className="mt-0.5 text-xs font-medium text-gold-700 whitespace-nowrap">{t.alwaysOn}</span>
          </li>
          {services.map((service) => (
            <li key={service} className="flex items-start justify-between gap-4 rounded-xl bg-cream-100 p-4">
              <div>
                <p id={`consent-${service}`} className="font-medium text-neutral-900">
                  {t[service].title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">{t[service].desc}</p>
              </div>
              <Switch
                checked={choice[service]}
                labelledBy={`consent-${service}`}
                onChange={(checked) => setChoice({ ...choice, [service]: checked })}
              />
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <button type="button" onClick={() => save(FULL_CONSENT)} className={choiceButton}>
            {t.acceptAll}
          </button>
          <button type="button" onClick={() => save(NO_CONSENT)} className={choiceButton}>
            {t.rejectAll}
          </button>
          <button type="button" onClick={() => save(choice)} className={secondaryButton}>
            {t.save}
          </button>
        </div>

        <nav className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-neutral-500">
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-gold-700">
            {t.privacy}
          </Link>
          <Link href="/cookie-richtlinie" className="underline underline-offset-2 hover:text-gold-700">
            {t.cookiePolicy}
          </Link>
          <Link href="/impressum" className="underline underline-offset-2 hover:text-gold-700">
            {t.imprint}
          </Link>
        </nav>
      </div>
    </div>
  );
}
