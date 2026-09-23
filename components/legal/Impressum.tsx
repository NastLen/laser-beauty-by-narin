"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import LegalPage from "@/components/legal/LegalPage";
import { BUSINESS } from "@/components/legal/businessInfo";

const translations = {
  de: {
    title: "Impressum",
    infoHeading: "Angaben gemäß § 5 DDG",
    country: "Deutschland",
    contactHeading: "Kontakt",
    phone: "Telefon",
    email: "E-Mail",
    vatHeading: "Umsatzsteuer-ID",
    vatText: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:",
    disputeHeading: "Verbraucherstreitbeilegung",
    disputeText:
      "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
  },
  en: {
    title: "Legal Notice",
    infoHeading: "Information pursuant to § 5 of the German Digital Services Act (DDG)",
    country: "Germany",
    contactHeading: "Contact",
    phone: "Phone",
    email: "Email",
    vatHeading: "VAT ID",
    vatText: "VAT identification number pursuant to § 27a of the German VAT Act (UStG):",
    disputeHeading: "Consumer Dispute Resolution",
    disputeText:
      "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
  },
  ru: {
    title: "Выходные данные",
    infoHeading: "Сведения согласно § 5 Закона Германии о цифровых услугах (DDG)",
    country: "Германия",
    contactHeading: "Контакты",
    phone: "Телефон",
    email: "E-mail",
    vatHeading: "Номер плательщика НДС",
    vatText: "Идентификационный номер плательщика НДС согласно § 27a Закона Германии об НДС (UStG):",
    disputeHeading: "Урегулирование споров с потребителями",
    disputeText:
      "Мы не готовы и не обязаны участвовать в процедурах урегулирования споров в арбитражной комиссии по защите прав потребителей.",
  },
};

export default function Impressum() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <LegalPage title={t.title}>
      <h2>{t.infoHeading}</h2>
      <p>
        {BUSINESS.owner}
        <br />
        {BUSINESS.brand}
        <br />
        {BUSINESS.street}
        <br />
        {BUSINESS.city}
        <br />
        {t.country}
      </p>

      <h2>{t.contactHeading}</h2>
      <p>
        {t.phone}: <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
        <br />
        {t.email}: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
      </p>

      {BUSINESS.vatId && (
        <>
          <h2>{t.vatHeading}</h2>
          <p>
            {t.vatText}
            <br />
            {BUSINESS.vatId}
          </p>
        </>
      )}

      <h2>{t.disputeHeading}</h2>
      <p>{t.disputeText}</p>
    </LegalPage>
  );
}
