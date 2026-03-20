import Hero from "@/components/sections/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* About Me */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 mb-8">
            About Me
          </h2>

          <div className="space-y-6 text-neutral-700 text-lg leading-relaxed font-light">
            <p>
              I’m Narine, a specialist in laser hair removal. I work with the
              advanced DEKA Motus AX technology to ensure treatments are
              effective, safe, and максимально comfortable.
            </p>

            <p>
              I received my professional training in Germany and successfully
              passed all required certifications, which allows me to provide
              services at the highest standards.
            </p>

            <p>
              My goal is to help you feel confident, comfortable, and enjoy the
              feeling of smooth, beautiful skin.
            </p>

            <p className="text-neutral-500 text-base pt-4">
              You are always welcome to book your appointment anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
