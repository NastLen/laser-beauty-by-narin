"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
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
                    className="font-script text-3xl md:text-4xl lg:text-5xl font-normal tracking-normal py-2 md:py-3 lg:py-4"
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
        </div>
      </div>
    </section>
  );
}
