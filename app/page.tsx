import Hero from "@/components/sections/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4">✨</div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-neutral-600 text-sm">
                Мы используем только лучшее оборудование и материалы
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4">👩‍⚕️</div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                Certified Experts
              </h3>
              <p className="text-neutral-600 text-sm">
                Наша команда - сертифицированные специалисты с многолетним
                опытом
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4">💝</div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                Personal Touch
              </h3>
              <p className="text-neutral-600 text-sm">
                Индивидуальный подход к каждому клиенту
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Sections */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Премиальные услуги в роскошной обстановке
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services" className="group">
              <div className="card hover:scale-105 transition-transform duration-300 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-400 to-bronze-400 flex items-center justify-center text-white text-2xl">
                  ✨
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  Услуги
                </h3>
                <p className="text-neutral-600 mb-4">
                  Профессиональная лазерная эпиляция с использованием новейших
                  технологий
                </p>
                <span className="text-gold-600 font-medium group-hover:text-gold-700">
                  Узнать больше →
                </span>
              </div>
            </Link>

            <Link href="/benefits" className="group">
              <div className="card hover:scale-105 transition-transform duration-300 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-400 to-bronze-400 flex items-center justify-center text-white text-2xl">
                  💎
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  Преимущества
                </h3>
                <p className="text-neutral-600 mb-4">
                  Безопасные процедуры с долгосрочным результатом
                </p>
                <span className="text-gold-600 font-medium group-hover:text-gold-700">
                  Узнать больше →
                </span>
              </div>
            </Link>

            <Link href="/pricing" className="group">
              <div className="card hover:scale-105 transition-transform duration-300 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-400 to-bronze-400 flex items-center justify-center text-white text-2xl">
                  💰
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                  Цены
                </h3>
                <p className="text-neutral-600 mb-4">
                  Прозрачные цены и выгодные пакеты услуг
                </p>
                <span className="text-gold-600 font-medium group-hover:text-gold-700">
                  Узнать больше →
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-500 text-white text-base font-semibold rounded-full hover:shadow-glow-gold transition-all duration-300 hover:scale-105">
                Записаться на процедуру
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
