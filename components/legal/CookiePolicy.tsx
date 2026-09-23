"use client";

import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { ConsentService, useConsent } from "@/app/context/ConsentContext";
import LegalPage from "@/components/legal/LegalPage";
import { BUSINESS } from "@/components/legal/businessInfo";

type Entry = {
  name: string;
  category: string;
  // null = technically necessary, always active
  service: ConsentService | null;
  provider: string;
  purpose: string;
  technology: string;
  duration: string;
  transfer?: string;
  legalBasis: string;
  links: string[];
};

const googleLinks = ["https://policies.google.com/privacy", "https://policies.google.com/technologies/cookies"];

const translations = {
  de: {
    title: "Cookie-Richtlinie",
    intro: (
      <>
        Diese Cookie-Richtlinie erklärt, welche Cookies und ähnlichen Technologien auf dieser Website eingesetzt
        werden und wie Sie Ihre Einwilligung verwalten können. Weitere Informationen zur Datenverarbeitung finden
        Sie in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </>
    ),
    whatHeading: "Was sind Cookies?",
    what: "Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Ähnlich funktionieren der lokale Speicher des Browsers (localStorage, sessionStorage) und IndexedDB. Für all diese Technologien verwenden wir hier vereinfacht den Begriff „Cookies“.",
    principleHeading: "Unser Grundsatz",
    principle: "Wir selbst setzen keine Cookies zu Analyse- oder Werbezwecken ein. Ohne Ihre Einwilligung speichern wir nur, was technisch notwendig ist: Ihre Einwilligungsauswahl und – falls Sie die Sprache wechseln – Ihre Spracheinstellung. Google Maps wird erst geladen, nachdem Sie eingewilligt haben.",
    overviewHeading: "Eingesetzte Cookies und Dienste",
    changeButton: "Cookie-Einstellungen ändern",
    status: { always: "Immer aktiv", allowed: "Erlaubt", denied: "Nicht erlaubt" },
    labels: {
      provider: "Anbieter",
      purpose: "Zweck",
      technology: "Technologie",
      duration: "Speicherdauer",
      transfer: "Drittlandübermittlung",
      legalBasis: "Rechtsgrundlage",
      links: "Datenschutz",
    },
    entries: [
      {
        name: "Einwilligungsspeicher",
        category: "Notwendig",
        service: null,
        provider: `Diese Website (${BUSINESS.brand})`,
        purpose: "Speichert, ob Sie dem Laden von Google Maps zugestimmt haben, damit wir Sie nicht bei jedem Seitenaufruf erneut fragen.",
        technology: "Lokaler Speicher (localStorage) des Browsers, Name „lbn-consent“",
        duration: "12 Monate, danach erneute Abfrage (oder bis Sie die Websitedaten im Browser löschen)",
        legalBasis: "§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. c DSGVO",
        links: [],
      },
      {
        name: "Spracheinstellung",
        category: "Notwendig",
        service: null,
        provider: `Diese Website (${BUSINESS.brand})`,
        purpose: "Speichert die von Ihnen gewählte Sprache, damit die Website beim nächsten Aufruf in dieser Sprache erscheint. Wird nur gesetzt, wenn Sie die Sprache aktiv wechseln.",
        technology: "Lokaler Speicher (localStorage) des Browsers, Name „lbn-language“",
        duration: "Bis Sie die Websitedaten im Browser löschen",
        legalBasis: "§ 25 Abs. 2 Nr. 2 TDDDG",
        links: [],
      },
      {
        name: "Google Maps",
        category: "Externe Medien – nur mit Einwilligung",
        service: "googleMaps",
        provider: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland",
        purpose: "Anzeige einer interaktiven Karte mit unserem Standort auf der Startseite",
        technology: "Cookies und ähnliche Technologien, die Google auf eigenen Domains setzt (Drittanbieter-Cookies)",
        duration: "Legt Google fest – siehe Cookie-Übersicht von Google",
        transfer: "USA (Google LLC, zertifiziert nach dem EU-US Data Privacy Framework)",
        legalBasis: "Einwilligung – § 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO",
        links: googleLinks,
      },
    ] as Entry[],
    changeHeading: "Einwilligung ändern oder widerrufen",
    change: "Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen – über „Cookie-Einstellungen“ am Ende jeder Seite oder über die Schaltfläche oben. Beim Widerruf wird die Seite neu geladen, damit bereits geladene Dienste beendet werden. Cookies, die Drittanbieter auf ihren eigenen Domains gesetzt haben, können Sie in den Einstellungen Ihres Browsers löschen.",
  },
  en: {
    title: "Cookie Policy",
    intro: (
      <>
        This cookie policy explains which cookies and similar technologies are used on this website and how you
        can manage your consent. For further information on data processing, please see our{" "}
        <Link href="/datenschutz">Privacy Policy</Link>.
      </>
    ),
    whatHeading: "What Are Cookies?",
    what: "Cookies are small text files that are stored on your device when you visit a website. Your browser's local storage (localStorage, sessionStorage) and IndexedDB work in a similar way. For simplicity, we refer to all of these technologies as “cookies” here.",
    principleHeading: "Our Approach",
    principle: "We do not use cookies for analytics or advertising purposes ourselves. Without your consent, we only store what is technically necessary: your consent choice and – if you change it – your language setting. Google Maps is only loaded after you have given your consent.",
    overviewHeading: "Cookies and Services Used",
    changeButton: "Change cookie settings",
    status: { always: "Always active", allowed: "Allowed", denied: "Not allowed" },
    labels: {
      provider: "Provider",
      purpose: "Purpose",
      technology: "Technology",
      duration: "Storage period",
      transfer: "Third-country transfer",
      legalBasis: "Legal basis",
      links: "Privacy",
    },
    entries: [
      {
        name: "Consent storage",
        category: "Necessary",
        service: null,
        provider: `This website (${BUSINESS.brand})`,
        purpose: "Stores whether you have agreed to load Google Maps so that we don't have to ask you again on every page view.",
        technology: "Browser local storage (localStorage), name “lbn-consent”",
        duration: "12 months, after which we ask again (or until you delete the website data in your browser)",
        legalBasis: "§ 25(2) no. 2 TDDDG, Art. 6(1)(c) GDPR",
        links: [],
      },
      {
        name: "Language setting",
        category: "Necessary",
        service: null,
        provider: `This website (${BUSINESS.brand})`,
        purpose: "Stores the language you have chosen so that the website appears in that language on your next visit. Only set if you actively change the language.",
        technology: "Browser local storage (localStorage), name “lbn-language”",
        duration: "Until you delete the website data in your browser",
        legalBasis: "§ 25(2) no. 2 TDDDG",
        links: [],
      },
      {
        name: "Google Maps",
        category: "External media – only with your consent",
        service: "googleMaps",
        provider: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland",
        purpose: "Display of an interactive map showing our location on the home page",
        technology: "Cookies and similar technologies that Google sets on its own domains (third-party cookies)",
        duration: "Determined by Google – see Google's cookie overview",
        transfer: "USA (Google LLC, certified under the EU-U.S. Data Privacy Framework)",
        legalBasis: "Consent – § 25(1) TDDDG, Art. 6(1)(a) GDPR",
        links: googleLinks,
      },
    ] as Entry[],
    changeHeading: "Changing or Withdrawing Your Consent",
    change: "You can change or withdraw your consent at any time with effect for the future – via “Cookie Settings” at the bottom of every page or via the button above. When you withdraw consent, the page is reloaded so that services already loaded are stopped. You can delete cookies that third-party providers have set on their own domains in your browser settings.",
  },
  ru: {
    title: "Политика cookie",
    intro: (
      <>
        В этой политике описано, какие cookie и аналогичные технологии используются на этом сайте и как вы
        можете управлять своим согласием. Подробнее об обработке данных — в нашей{" "}
        <Link href="/datenschutz">Политике конфиденциальности</Link>.
      </>
    ),
    whatHeading: "Что такое cookie?",
    what: "Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта. Аналогично работают локальное хранилище браузера (localStorage, sessionStorage) и IndexedDB. Для простоты здесь мы называем все эти технологии «cookie».",
    principleHeading: "Наш принцип",
    principle: "Сами мы не используем cookie для аналитики или рекламы. Без вашего согласия сохраняется только технически необходимое: ваше решение о согласии и — если вы его меняете — выбранный язык. Google Maps загружается только после вашего согласия.",
    overviewHeading: "Используемые cookie и сервисы",
    changeButton: "Изменить настройки cookie",
    status: { always: "Всегда активно", allowed: "Разрешено", denied: "Не разрешено" },
    labels: {
      provider: "Поставщик",
      purpose: "Цель",
      technology: "Технология",
      duration: "Срок хранения",
      transfer: "Передача в третьи страны",
      legalBasis: "Правовое основание",
      links: "Конфиденциальность",
    },
    entries: [
      {
        name: "Хранение согласия",
        category: "Необходимые",
        service: null,
        provider: `Этот сайт (${BUSINESS.brand})`,
        purpose: "Сохраняет, разрешили ли вы загрузку Google Maps, чтобы не спрашивать вас при каждом открытии страницы.",
        technology: "Локальное хранилище браузера (localStorage), имя «lbn-consent»",
        duration: "12 месяцев, после чего мы спросим снова (или до удаления данных сайта в браузере)",
        legalBasis: "§ 25(2) № 2 TDDDG, ст. 6(1)(c) GDPR",
        links: [],
      },
      {
        name: "Выбор языка",
        category: "Необходимые",
        service: null,
        provider: `Этот сайт (${BUSINESS.brand})`,
        purpose: "Сохраняет выбранный вами язык, чтобы при следующем посещении сайт открылся на нём. Устанавливается, только если вы сами меняете язык.",
        technology: "Локальное хранилище браузера (localStorage), имя «lbn-language»",
        duration: "Пока вы не удалите данные сайта в браузере",
        legalBasis: "§ 25(2) № 2 TDDDG",
        links: [],
      },
      {
        name: "Google Maps",
        category: "Внешние медиа — только с вашего согласия",
        service: "googleMaps",
        provider: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ирландия",
        purpose: "Отображение интерактивной карты с нашим адресом на главной странице",
        technology: "Cookie и аналогичные технологии, которые Google устанавливает на своих доменах (сторонние cookie)",
        duration: "Определяет Google — см. обзор cookie Google",
        transfer: "США (Google LLC, сертифицирована по EU-U.S. Data Privacy Framework)",
        legalBasis: "Согласие — § 25(1) TDDDG, ст. 6(1)(a) GDPR",
        links: googleLinks,
      },
    ] as Entry[],
    changeHeading: "Изменение или отзыв согласия",
    change: "Вы можете в любое время изменить или отозвать своё согласие на будущее — через «Настройки cookie» внизу каждой страницы или кнопкой выше. При отзыве согласия страница перезагружается, чтобы уже загруженные сервисы прекратили работу. Cookie, которые сторонние поставщики установили на своих доменах, можно удалить в настройках браузера.",
  },
};

export default function CookiePolicy() {
  const { language } = useLanguage();
  const { consent, ready, openSettings } = useConsent();
  const t = translations[language];

  const statusChip = (service: ConsentService | null) => {
    if (service === null) return { label: t.status.always, className: "bg-gold-100 text-gold-800" };
    return consent[service]
      ? { label: t.status.allowed, className: "bg-gold-100 text-gold-800" }
      : { label: t.status.denied, className: "bg-neutral-100 text-neutral-600" };
  };

  return (
    <LegalPage title={t.title}>
      <p>{t.intro}</p>

      <h2>{t.whatHeading}</h2>
      <p>{t.what}</p>

      <h2>{t.principleHeading}</h2>
      <p>{t.principle}</p>

      <h2>{t.overviewHeading}</h2>
      <button
        type="button"
        onClick={openSettings}
        className="mb-2 px-6 py-3 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#E6BE5A] shadow-elegant hover:shadow-elegant-lg transition-shadow"
      >
        {t.changeButton}
      </button>

      {t.entries.map((entry) => {
        const chip = statusChip(entry.service);
        const rows: [string, ReactNode][] = [
          [t.labels.provider, entry.provider],
          [t.labels.purpose, entry.purpose],
          [t.labels.technology, entry.technology],
          [t.labels.duration, entry.duration],
          ...(entry.transfer ? [[t.labels.transfer, entry.transfer] as [string, ReactNode]] : []),
          [t.labels.legalBasis, entry.legalBasis],
          ...(entry.links.length
            ? [
                [
                  t.labels.links,
                  entry.links.map((href) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="block">
                      {href.replace(/^https:\/\//, "")}
                    </a>
                  )),
                ] as [string, ReactNode],
              ]
            : []),
        ];

        return (
          <section key={entry.name} className="mt-6 rounded-2xl border border-gold-200 bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="!my-0">{entry.name}</h3>
              {ready && (
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${chip.className}`}>{chip.label}</span>
              )}
            </div>
            <p className="!mb-0 text-sm text-neutral-500">{entry.category}</p>
            <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[11rem_1fr]">
              {rows.map(([label, value]) => (
                <Fragment key={label}>
                  <dt className="font-medium text-neutral-900 pt-2 sm:pt-0">{label}</dt>
                  <dd className="text-neutral-700 break-words">{value}</dd>
                </Fragment>
              ))}
            </dl>
          </section>
        );
      })}

      <h2>{t.changeHeading}</h2>
      <p>{t.change}</p>
    </LegalPage>
  );
}
