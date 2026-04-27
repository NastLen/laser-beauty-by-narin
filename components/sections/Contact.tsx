"use client";

import { useState } from "react";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  de: {
    heading1: "Buchen Sie Ihre",
    heading2: "kostenlose Beratung",
    subtitle: "Machen Sie den ersten Schritt zu müheloser Schönheit. Unsere Experten beantworten Ihre Fragen und erstellen einen individuellen Behandlungsplan.",
    labelName: "Vollständiger Name *",
    placeholderName: "Ihr Name",
    labelEmail: "E-Mail-Adresse *",
    placeholderEmail: "ihre.email@beispiel.de",
    labelPhone: "Telefonnummer",
    placeholderPhone: "+49 (611) 123-4567",
    labelService: "Gewünschte Behandlung",
    placeholderService: "Behandlung wählen",
    serviceOptions: ["Ganzkörper", "Gesicht", "Achseln", "Bikini & Brazilian", "Beine", "Arme", "Rücken & Brust", "Individuelle Bereiche"],
    labelMessage: "Nachricht",
    placeholderMessage: "Erzählen Sie uns von Ihren Wünschen oder stellen Sie Ihre Fragen...",
    submit: "Nachricht senden",
    alert: "Vielen Dank für Ihr Interesse! Wir werden uns in Kürze bei Ihnen melden.",
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
    heading2: "Free Consultation",
    subtitle: "Take the first step towards effortless beauty. Our experts are here to answer your questions and create a personalized treatment plan.",
    labelName: "Full Name *",
    placeholderName: "Your name",
    labelEmail: "Email Address *",
    placeholderEmail: "your.email@example.com",
    labelPhone: "Phone Number",
    placeholderPhone: "+1 (555) 123-4567",
    labelService: "Service Interested In",
    placeholderService: "Select a service",
    serviceOptions: ["Full Body", "Face", "Underarms", "Bikini & Brazilian", "Legs", "Arms", "Back & Chest", "Custom Areas"],
    labelMessage: "Message",
    placeholderMessage: "Tell us about your needs or ask any questions...",
    submit: "Send Message",
    alert: "Thank you for your interest! We will contact you shortly.",
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
    heading2: "бесплатную консультацию",
    subtitle: "Сделайте первый шаг к безупречной красоте. Наши специалисты ответят на ваши вопросы и составят индивидуальный план процедур.",
    labelName: "Полное имя *",
    placeholderName: "Ваше имя",
    labelEmail: "Электронная почта *",
    placeholderEmail: "ваш.email@example.com",
    labelPhone: "Номер телефона",
    placeholderPhone: "+7 (XXX) XXX-XX-XX",
    labelService: "Интересующая услуга",
    placeholderService: "Выберите услугу",
    serviceOptions: ["Всё тело", "Лицо", "Подмышки", "Бикини & Бразильское", "Ноги", "Руки", "Спина & Грудь", "Индивидуальные зоны"],
    labelMessage: "Сообщение",
    placeholderMessage: "Расскажите о своих пожеланиях или задайте вопросы...",
    submit: "Отправить",
    alert: "Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время.",
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

const serviceValues = ["full-body", "face", "underarms", "bikini", "legs", "arms", "back-chest", "custom"];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.alert);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          {/* Contact Form */}
          <div className="bg-cream-50 rounded-2xl p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">{t.labelName}</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 transition-shadow"
                  placeholder={t.placeholderName} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">{t.labelEmail}</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 transition-shadow"
                  placeholder={t.placeholderEmail} />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">{t.labelPhone}</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 transition-shadow"
                  placeholder={t.placeholderPhone} />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">{t.labelService}</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 transition-shadow">
                  <option value="">{t.placeholderService}</option>
                  {t.serviceOptions.map((label, i) => (
                    <option key={serviceValues[i]} value={serviceValues[i]}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">{t.labelMessage}</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 transition-shadow resize-none"
                  placeholder={t.placeholderMessage} />
              </div>

              <Button type="submit" className="w-full">{t.submit}</Button>
            </form>
          </div>

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
