"use client";

import { useState } from "react";
import Link from "next/link";
import heroBg from "@/app/images/IMG_3644.jpg";

type Language = "de" | "en" | "ru";

const translations: Record<
  Language,
  {
    label: string;
    subtitle: string;
    cta: string;
    languageButton: string;
  }
> = {
  de: {
    label: "Deutsch",
    subtitle:
      "Erleben Sie modernste Lasertechnologie in einer luxuriösen, ruhigen Umgebung, die für Ihren Komfort geschaffen wurde.",
    cta: "Termin buchen",
    languageButton: "🇩🇪 DE",
  },
  en: {
    label: "English",
    subtitle:
      "Experience cutting-edge laser technology in a luxurious, serene environment designed for your comfort",
    cta: "Book Appointment",
    languageButton: "🇬🇧 EN",
  },
  ru: {
    label: "Русский",
    subtitle:
      "Оцените передовые лазерные технологии в роскошной и спокойной атмосфере, созданной для вашего комфорта.",
    cta: "Записаться",
    languageButton: "🇷🇺 RU",
  },
};

export default function Hero() {
  const [language, setLanguage] = useState<Language>("de");
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <div className="relative group">
          <button className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm border border-white/20 hover:bg-white/20 transition">
            {t.languageButton}
          </button>
          <div className="absolute right-0 top-full pt-2 w-40 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
            <div className="rounded-xl bg-black/80 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl">
              <ul className="text-sm text-white py-1">
                <li>
                  <button
                    type="button"
                    onClick={() => setLanguage("de")}
                    className={`w-full text-left px-4 py-2 hover:bg-white/10 transition ${
                      language === "de" ? "bg-white/10" : ""
                    }`}
                  >
                    🇩🇪 Deutsch
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`w-full text-left px-4 py-2 hover:bg-white/10 transition ${
                      language === "en" ? "bg-white/10" : ""
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLanguage("ru")}
                    className={`w-full text-left px-4 py-2 hover:bg-white/10 transition ${
                      language === "ru" ? "bg-white/10" : ""
                    }`}
                  >
                    🇷🇺 Русский
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg.src}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Main heading */}
          <div className="inline-block max-w-full px-4 sm:px-0">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight px-4 sm:px-8 md:px-12 py-6 sm:py-8 text-center max-w-full"
              style={{
                background: "#FFF8ED",
                border: "2px solid transparent",
                borderRadius: "24px",
                maxWidth: "100%",
                wordBreak: "break-word",
                backgroundClip: "padding-box",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  padding: "8px",
                  background:
                    "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A, #DAA520, #C9A961)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  backgroundSize: "200% 200%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              ></div>
              <span className="relative z-10">
                <span
                  className="font-brand text-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light break-words"
                  style={{ letterSpacing: "0.01em", overflowWrap: "anywhere" }}
                >
                  Laser<span style={{ margin: "0 -0.1em" }}>&</span>Beauty
                </span>
                <br />
                <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-3 sm:mt-2 flex-wrap">
                  <div
                    className="h-[2px] w-8 sm:w-12 md:w-24 shrink-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #C9A961, #D4AF37)",
                    }}
                  ></div>
                  <span
                    className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-normal py-1 sm:py-2 md:py-3 lg:py-4 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A, #DAA520)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  >
                    By Narin
                  </span>
                  <div
                    className="h-[2px] w-8 sm:w-12 md:w-24 shrink-0"
                    style={{
                      background:
                        "linear-gradient(90deg, #D4AF37, #C9A961, transparent)",
                    }}
                  ></div>
                </div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-3xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            {t.subtitle}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <Link href="/contact">
              <button
                className="px-7 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A)",
                  color: "#000",
                  boxShadow: "0 10px 25px rgba(201, 169, 97, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(201, 169, 97, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(201, 169, 97, 0.3)";
                }}
              >
                {t.cta}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </section>
  );
}
