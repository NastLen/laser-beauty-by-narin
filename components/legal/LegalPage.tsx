"use client";

import { ReactNode } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { LEGAL_LAST_UPDATED } from "@/components/legal/businessInfo";

const translations = {
  de: { updated: "Stand", translationNotice: "" },
  en: {
    updated: "Last updated",
    translationNotice: "This is a courtesy translation. Only the German version is legally binding.",
  },
  ru: {
    updated: "Редакция от",
    translationNotice: "Это перевод для удобства. Юридическую силу имеет только немецкая версия.",
  },
};

// Content is plain h2/h3/p/ul/a markup; this wrapper styles it.
export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-cream-50 pt-28 pb-20">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 mb-4 break-words">{title}</h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        {t.translationNotice && (
          <p className="mb-8 rounded-xl border border-gold-200 bg-white px-4 py-3 text-sm text-neutral-600">
            {t.translationNotice}
          </p>
        )}

        <div className="text-neutral-700 leading-relaxed [&>*:first-child]:mt-0 [&_a]:text-gold-700 [&_a]:underline [&_a]:underline-offset-2 [&_a]:break-words [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-serif [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:mb-1 [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>

        <p className="mt-12 text-sm text-neutral-500">
          {t.updated}: {LEGAL_LAST_UPDATED[language]}
        </p>
      </div>
    </main>
  );
}
