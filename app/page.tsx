"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";

type Language = "de" | "en" | "ru";

const translations: Record<
  Language,
  {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    cta: string;
  }
> = {
  de: {
    title: "Über mich",
    p1: "Ich bin Narine, Spezialistin für Laser-Haarentfernung. Ich arbeite mit der modernen DEKA Motus AX Technologie, um Behandlungen effektiv, sicher und so angenehm wie möglich zu gestalten.",
    p2: "Meine Ausbildung in Deutschland und erfolgreich bestandene Prüfungen ermöglichen es mir, auf höchstem professionellen Niveau zu arbeiten.",
    p3: "Mein Ziel ist es, Ihnen mehr Selbstbewusstsein, Komfort und das Gefühl glatter, schöner Haut zu schenken.",
    cta: "Sie können jederzeit einen Termin buchen.",
  },
  en: {
    title: "About Me",
    p1: "I’m Narine, a specialist in laser hair removal. I work with the advanced DEKA Motus AX technology to ensure treatments are effective, safe, and as comfortable as possible.",
    p2: "I received my professional training in Germany and successfully passed all required certifications, which allows me to provide services at the highest standards.",
    p3: "My goal is to help you feel confident, comfortable, and enjoy the feeling of smooth, beautiful skin.",
    cta: "You are always welcome to book your appointment anytime.",
  },
  ru: {
    title: "Обо мне",
    p1: "Я Нарине, специалист по лазерной эпиляции. Я работаю на современном оборудовании DEKA Motus AX, чтобы процедуры были эффективными, безопасными и максимально комфортными.",
    p2: "Обучение в Германии и успешно сданные экзамены позволяют мне работать профессионально и по самым высоким стандартам.",
    p3: "Моя цель — подарить вам уверенность в себе, комфорт и ощущение гладкой, красивой кожи.",
    cta: "Вы всегда можете записаться на процедуру в любое время.",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const t = translations[language];

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* About Me */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-center text-4xl md:text-5xl font-serif font-light mb-12 text-neutral-900 uppercase tracking-normal">
            {t.title}
          </h2>

          <div className="space-y-8">
            <p className="text-neutral-700 text-lg leading-relaxed font-light">
              {t.p1}
            </p>

            <p className="text-neutral-700 text-lg leading-relaxed font-light">
              {t.p2}
            </p>

            <p className="text-neutral-700 text-lg leading-relaxed font-light">
              {t.p3}
            </p>

            <p className="text-neutral-700 text-lg leading-relaxed font-light pt-4">
              {t.cta}
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-serif font-light mb-12 text-neutral-900">
            KONTAKT AUFNEHMEN
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mb-12 max-w-4xl mx-auto">
            {/* Opening Hours */}
            <div className="text-center space-y-4">
              <h3 className="text-lg md:text-xl font-serif font-light text-neutral-900">
                ÖFFNUNGSZEITEN
              </h3>
              <p className="text-neutral-700 text-lg leading-relaxed font-light">
                Di. bis Fr.: 09:30 - 20:00 Uhr
                <br />
                Sa.: 10:00 - 16:00 Uhr
                <br />
                So. bis Mo.: Geschlossen
              </p>
            </div>

            {/* Info */}
            <div className="text-center space-y-4">
              <h3 className="text-lg md:text-xl font-serif font-light text-neutral-900">
                INFO
              </h3>
              <p className="text-neutral-700 text-lg leading-relaxed font-light">
                Dotzheimer Straße 85
                <br />
                Wiesbaden
                <br />
                Tel.: +49 611 1234567
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <a
                  href="#"
                  target="_blank"
                  className="px-6 py-3 border border-neutral-400 rounded-full text-base font-medium hover:bg-neutral-100 transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="px-6 py-3 border border-neutral-400 rounded-full text-base font-medium hover:bg-neutral-100 transition"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl">
            <iframe
              src="https://maps.google.com/maps?q=Dotzheimer%20Stra%C3%9Fe%2085%20Wiesbaden&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
