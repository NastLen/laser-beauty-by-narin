"use client";

import { PiInstagramLogoDuotone } from "react-icons/pi";
import Section from "@/components/ui/Section";
import WhatsAppCta from "@/components/ui/WhatsAppCta";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  de: {
    heading1: "Buchen Sie Ihre",
    heading2: "persönliche Beratung",
    subtitle: "Machen Sie den ersten Schritt zu müheloser Schönheit. Sie erhalten persönliche Antworten auf Ihre Fragen und einen individuellen Behandlungsplan.",
    whatsappHint: "Schreiben Sie Ihre Fragen einfach per WhatsApp – zum Beispiel zu Behandlungen, Preisen oder Terminen.",
    whatsappMessage: "Hallo, ich möchte gern eine persönliche Beratung vereinbaren.",
    visitHeading: "Unser Studio besuchen",
    addressLabel: "Adresse",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    hoursHeading: "Öffnungszeiten",
    hours: [
      { day: "Mo. – Fr.", time: "10:00 – 18:00 Uhr" },
      { day: "Sa.", time: "10:00 – 16:00 Uhr" },
      { day: "So.", time: "Geschlossen" },
      { day: "Termine nach Vereinbarung", time: "" },
    ],
    followHeading: "Folgen Sie uns auf Instagram",
  },
  en: {
    heading1: "Book Your",
    heading2: "Personal Consultation",
    subtitle: "Take the first step towards effortless beauty. You'll get personal answers to your questions and an individual treatment plan.",
    whatsappHint: "Simply send us your questions via WhatsApp – for example about treatments, prices or appointments.",
    whatsappMessage: "Hello, I would like to arrange a personal consultation.",
    visitHeading: "Visit Our Studio",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursHeading: "Opening Hours",
    hours: [
      { day: "Mon. – Fri.", time: "10:00 – 18:00" },
      { day: "Sat.", time: "10:00 – 16:00" },
      { day: "Sun.", time: "Closed" },
      { day: "Appointments by arrangement", time: "" },
    ],
    followHeading: "Follow us on Instagram",
  },
  ru: {
    heading1: "Запишитесь на",
    heading2: "персональную консультацию",
    subtitle: "Сделайте первый шаг к безупречной красоте. Вы получите ответы на свои вопросы и индивидуальный план процедур.",
    whatsappHint: "Просто напишите свои вопросы в WhatsApp — например, о процедурах, ценах или записи.",
    whatsappMessage: "Здравствуйте! Хочу записаться на консультацию.",
    visitHeading: "Посетите нашу студию",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    emailLabel: "E-mail",
    hoursHeading: "Часы работы",
    hours: [
      { day: "Пн. – Пт.", time: "10:00 – 18:00" },
      { day: "Сб.", time: "10:00 – 16:00" },
      { day: "Вс.", time: "Закрыто" },
      { day: "Запись по договорённости", time: "" },
    ],
    followHeading: "Мы в Instagram",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section background="white" className="scroll-mt-20" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-heading-2 font-serif font-light text-neutral-800">
            {t.heading1}
            <span className="block font-semibold text-gold-600">{t.heading2}</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* WhatsApp instead of a form: no form data is collected or stored on the website */}
          <WhatsAppCta hint={t.whatsappHint} message={t.whatsappMessage} showPhone={false} />

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-4">{t.visitHeading}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-neutral-800">{t.addressLabel}</p>
                    <p className="text-neutral-600">Dotzheimer Straße 85, 65197 Wiesbaden</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-neutral-800">{t.phoneLabel}</p>
                    <p className="text-neutral-600">+4916091369810 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-neutral-800">{t.emailLabel}</p>
                    <p className="text-neutral-600">narin861418@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-4">{t.hoursHeading}</h3>
              <div className="space-y-2 text-neutral-600">
                {t.hours.map((row) => (
                  <div key={row.day} className="flex justify-between">
                    <span>{row.day}</span>
                    <span className="font-medium">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-4">{t.followHeading}</h3>
              <a
                href="https://www.instagram.com/laser_beauty_by_narin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-auto px-4 py-3 bg-gold-100 hover:bg-gold-200 rounded-xl text-gold-700 font-medium transition-colors"
                aria-label="Instagram"
              >
                <PiInstagramLogoDuotone className="w-5 h-5" />
                @laser_beauty_by_narin
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
