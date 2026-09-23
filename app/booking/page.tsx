"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import WhatsAppCta from "@/components/ui/WhatsAppCta";

const translations = {
  de: {
    title: "Termin buchen",
    subtitle: "Vereinbaren Sie Ihren Termin bequem per WhatsApp oder telefonisch.",
    hint: "Schreiben Sie kurz, welche Behandlung Sie wünschen und wann es Ihnen passt – Sie erhalten eine Antwort mit einem Terminvorschlag.",
    message: "Hallo, ich möchte gern einen Termin vereinbaren.",
  },
  en: {
    title: "Book Appointment",
    subtitle: "Book your appointment conveniently via WhatsApp or by phone.",
    hint: "Just tell us which treatment you would like and when suits you – you will receive a reply with a suggested appointment.",
    message: "Hello, I would like to book an appointment.",
  },
  ru: {
    title: "Записаться",
    subtitle: "Запишитесь на процедуру через WhatsApp или по телефону.",
    hint: "Напишите, какая процедура вас интересует и когда вам удобно, — вам ответят и предложат время.",
    message: "Здравствуйте! Хочу записаться на процедуру.",
  },
};

export default function BookingPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-cream-50 pt-28 pb-20">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 mb-4">
            {t.title}
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="text-neutral-600 text-lg">{t.subtitle}</p>
        </div>

        <WhatsAppCta hint={t.hint} message={t.message} />
      </div>
    </main>
  );
}
