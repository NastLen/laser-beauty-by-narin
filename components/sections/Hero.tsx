"use client";

import Link from "next/link";
import heroBg from "@/app/images/IMG_3644.jpg";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  de: {
    subtitle:
      "Dauerhaft glatte Haut: professionell, sanft und ganz persönlich.",
    cta: "Preisliste ansehen",
  },
  en: {
    subtitle: "Smooth, confident skin: treated with care, just for you.",
    cta: "View Price List",
  },
  ru: {
    subtitle:
      "Гладкая кожа навсегда: с заботой, профессионально и именно для вас.",
    cta: "Смотреть прайс-лист",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg.src}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15"></div>
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
          <div className="px-4 sm:px-0 flex justify-center">
            <div
              className="max-w-3xl px-8 py-4 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,248,237,0.55)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(201,169,97,0.3)",
              }}
            >
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-normal tracking-wide text-neutral-900 font-brand">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <Link href="/pricing">
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
