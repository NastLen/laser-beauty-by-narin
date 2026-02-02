"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(
            ellipse 1400px 700px at 15% 20%,
            rgba(250, 241, 227, 0.9),
            transparent 55%
          ),
          radial-gradient(
            ellipse 1000px 800px at 85% 15%,
            rgba(242, 227, 198, 0.7),
            transparent 60%
          ),
          radial-gradient(
            ellipse 900px 600px at 50% 70%,
            rgba(234, 216, 166, 0.5),
            transparent 65%
          ),
          radial-gradient(
            ellipse 1200px 500px at 70% 85%,
            rgba(250, 241, 227, 0.6),
            transparent 70%
          ),
          linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.4) 0%,
            transparent 40%,
            transparent 60%,
            rgba(234, 216, 166, 0.2) 100%
          ),
          linear-gradient(
            25deg,
            rgba(242, 227, 198, 0.3) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 30% 50%,
            rgba(255, 248, 237, 0.95),
            rgba(250, 241, 227, 0.9) 35%,
            rgba(242, 227, 198, 0.85) 70%,
            rgba(234, 216, 166, 0.8) 100%
          )
        `,
      }}
    >
      {/* Subtle ambient light accents */}
      <div
        className="absolute top-1/5 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 248, 237, 0.4), transparent 70%)",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/5 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(234, 216, 166, 0.25), transparent 70%)",
          filter: "blur(90px)",
          animation: "float 10s ease-in-out infinite",
          animationDelay: "2s",
        }}
      ></div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Overline */}
          <div className="inline-block">
            <span className="px-6 py-2 bg-gradient-to-r from-gold-200 to-champagne-200 text-gold-800 font-semibold tracking-wide uppercase text-sm rounded-full border border-gold-300/50 shadow-elegant">
              Premium Laser Hair Removal
            </span>
          </div>

          {/* Main heading */}
          <div className="inline-block">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight px-12 py-8 text-center"
              style={{
                background: "#FFF8ED",
                border: "2px solid transparent",
                borderRadius: "24px",
                backgroundClip: "padding-box",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "24px",
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
                  className="font-brand text-black text-5xl md:text-6xl lg:text-7xl font-light"
                  style={{ letterSpacing: "0.02em" }}
                >
                  Laser<span style={{ margin: "0 -0.1em" }}>&</span>Beauty
                </span>
                <br />
                <div className="flex items-center justify-center gap-6 mt-2">
                  <div
                    className="h-[2px] w-16 md:w-24"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #C9A961, #D4AF37)",
                    }}
                  ></div>
                  <span
                    className="font-script text-5xl md:text-6xl lg:text-7xl font-normal tracking-normal"
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
                    className="h-[2px] w-16 md:w-24"
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
          <p className="text-2xl md:text-3xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            Experience cutting-edge laser technology in a luxurious, serene
            environment designed for your comfort
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Link href="/contact">
              <Button size="lg">Book Your Session</Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gold-300/50 shadow-elegant">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-bronze-500 rounded-xl flex items-center justify-center shadow-glow-gold">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="font-semibold text-neutral-800">
                Premium Quality
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gold-300/50 shadow-elegant">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-bronze-500 rounded-xl flex items-center justify-center shadow-glow-gold">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-semibold text-neutral-800">
                Certified Experts
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gold-300/50 shadow-elegant">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-bronze-500 rounded-xl flex items-center justify-center shadow-glow-gold">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-semibold text-neutral-800">
                Personal Touch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
