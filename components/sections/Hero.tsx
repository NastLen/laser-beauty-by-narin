"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import heroBg from "@/app/images/IMG_3644.jpg";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  de: {
    subtitle: "Dauerhaft glatte Haut: professionell, sanft und ganz persönlich.",
    cta: "Preisliste ansehen",
    booking: "Termin buchen",
  },
  en: {
    subtitle: "Smooth, confident skin: treated with care, just for you.",
    cta: "View Price List",
    booking: "Book Appointment",
  },
  ru: {
    subtitle: "Гладкая кожа навсегда: с заботой, профессионально и именно для вас.",
    cta: "Смотреть прайс-лист",
    booking: "Записаться",
  },
};

function Typewriter({ text }: { text: string }) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.035, delayChildren: 1.6 } } }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.01 } },
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        variants={{ hidden: { opacity: 0 }, visible: { opacity: [1, 0, 1, 0, 1, 0] } }}
        transition={{ duration: 1.2, delay: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
      >
        |
      </motion.span>
    </motion.span>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={heroBg.src} alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Main heading */}
          <div className="inline-block max-w-full px-4 sm:px-0">
            <motion.h1
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                  background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A, #DAA520, #C9A961)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  backgroundSize: "200% 200%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              />
              <span className="relative z-10">
                <span
                  className="font-brand text-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light break-words"
                  style={{ letterSpacing: "0.01em", overflowWrap: "anywhere" }}
                >
                  Laser<span style={{ margin: "0 -0.1em" }}>&</span>Beauty
                </span>
                <br />
                <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-3 sm:mt-2 flex-wrap">
                  {/* Left line — reveals left to right */}
                  <motion.div
                    className="h-[2px] w-8 sm:w-12 md:w-24 shrink-0"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                    style={{ background: "linear-gradient(90deg, transparent, #C9A961, #D4AF37)" }}
                  />
                  {/* By Narin — reveal like a signature */}
                  <motion.span
                    className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-normal py-1 sm:py-2 md:py-3 lg:py-4 text-center"
                    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.6 }}
                    animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                    transition={{ duration: 1.0, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A, #DAA520)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  >
                    By Narin
                  </motion.span>
                  {/* Right line */}
                  <motion.div
                    className="h-[2px] w-8 sm:w-12 md:w-24 shrink-0"
                    initial={{ scaleX: 0, originX: 1 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                    style={{ background: "linear-gradient(90deg, #D4AF37, #C9A961, transparent)" }}
                  />
                </div>
              </span>
            </motion.h1>
          </div>

          {/* Subtitle — typewriter */}
          <motion.div
            className="px-4 sm:px-0 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="max-w-3xl px-4 sm:px-8 py-3 sm:py-4 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,248,237,0.55)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(201,169,97,0.3)",
              }}
            >
              <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-normal tracking-wide text-neutral-900 font-brand">
                <Typewriter text={t.subtitle} />
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/pricing">
              <motion.button
                className="px-7 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 overflow-hidden relative"
                style={{
                  background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A)",
                  color: "#000",
                  boxShadow: "0 10px 25px rgba(201, 169, 97, 0.3)",
                }}
                whileHover={{ y: -2, boxShadow: "0 15px 35px rgba(201, 169, 97, 0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%", opacity: 0.6 }}
                  animate={{ x: "200%", opacity: 0 }}
                  transition={{ duration: 0.9, delay: 3.0, ease: "easeOut" }}
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}
                />
                {t.cta}
              </motion.button>
            </Link>

            <Link href="/booking">
              <motion.button
                className="px-7 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 overflow-hidden relative"
                style={{
                  background: "linear-gradient(135deg, #C9A961, #D4AF37, #E6BE5A)",
                  color: "#000",
                  boxShadow: "0 10px 25px rgba(201, 169, 97, 0.3)",
                }}
                whileHover={{ y: -2, boxShadow: "0 15px 35px rgba(201, 169, 97, 0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                {t.booking}
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </section>
  );
}
