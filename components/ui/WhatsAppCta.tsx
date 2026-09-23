"use client";

import Link from "next/link";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { useLanguage } from "@/app/context/LanguageContext";
import { BUSINESS } from "@/components/legal/businessInfo";

const translations = {
  de: {
    button: "Per WhatsApp schreiben",
    call: "Oder rufen Sie an:",
    privacyBefore: "Der Button öffnet WhatsApp (WhatsApp Ireland Limited). Mehr dazu in der ",
    privacyLink: "Datenschutzerklärung",
  },
  en: {
    button: "Message on WhatsApp",
    call: "Or call:",
    privacyBefore: "The button opens WhatsApp (WhatsApp Ireland Limited). More in our ",
    privacyLink: "Privacy Policy",
  },
  ru: {
    button: "Написать в WhatsApp",
    call: "Или позвоните:",
    privacyBefore: "Кнопка открывает WhatsApp (WhatsApp Ireland Limited). Подробнее — в ",
    privacyLink: "политике конфиденциальности",
  },
};

type WhatsAppCtaProps = {
  hint: string;
  // Pre-filled chat message
  message: string;
  showPhone?: boolean;
};

// A plain link to WhatsApp: nothing is sent until the visitor clicks it, so no consent is needed.
export default function WhatsAppCta({ hint, message, showPhone = true }: WhatsAppCtaProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const href = `${BUSINESS.whatsappHref}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-gold-200 bg-cream-100 px-6 py-12 text-center">
      <PiWhatsappLogoDuotone className="w-14 h-14 text-gold-600" aria-hidden="true" />
      <p className="max-w-lg text-neutral-700 leading-relaxed">{hint}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-medium text-black bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#E6BE5A] shadow-elegant hover:shadow-elegant-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-700 focus-visible:ring-offset-2"
      >
        <PiWhatsappLogoDuotone className="w-6 h-6" aria-hidden="true" />
        {t.button}
      </a>
      {showPhone && (
        <p className="text-neutral-700">
          {t.call}{" "}
          <a href={BUSINESS.phoneHref} className="font-medium underline underline-offset-2 hover:text-gold-700 whitespace-nowrap">
            {BUSINESS.phone}
          </a>
        </p>
      )}
      <p className="max-w-lg text-xs text-neutral-500">
        {t.privacyBefore}
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-gold-700">
          {t.privacyLink}
        </Link>
        .
      </p>
    </div>
  );
}
