"use client";

import { useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  de: { title: "Termin buchen", subtitle: "Wählen Sie Ihre gewünschte Behandlung und buchen Sie online" },
  en: { title: "Book Appointment", subtitle: "Choose your treatment and book online" },
  ru: { title: "Записаться", subtitle: "Выберите процедуру и запишитесь онлайн" },
};

declare global {
  interface Window {
    planity: object;
  }
}

export default function BookingPage() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const container = document.getElementById("planity-booking");

    window.planity = {
      key: "OazAlb9HlMA_D-_lEAW",
      primaryColor: "#C9A961",
      options: { countryCode: "DE" },
      container,
      accountContainer: container,
      appointmentContainer: container,
      giftVoucherContainer: container,
      onlineShopContainer: container,
    };

    const polyfill = document.createElement("script");
    polyfill.src = "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js";
    polyfill.async = true;
    document.body.appendChild(polyfill);

    const app = document.createElement("script");
    app.src = "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js";
    app.async = true;
    document.body.appendChild(app);

    return () => {
      if (document.body.contains(polyfill)) document.body.removeChild(polyfill);
      if (document.body.contains(app)) document.body.removeChild(app);
    };
  }, []);

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

        <div
          id="planity-booking"
          className="rounded-2xl overflow-hidden shadow-lg min-h-[600px]"
        />
      </div>
    </main>
  );
}
