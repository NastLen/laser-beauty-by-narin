import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoDuotone } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif text-gold-400 mb-4">
              Laser Beauty by Narin
            </h3>
            <p className="text-sm leading-relaxed">
              Premium laser hair removal in a luxury setting. Experience the
              difference of personalized care and cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold-400 transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gold-400 transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-gold-400 transition-colors"
                >
                  Цены
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold-400 transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Ваш адрес</li>
              <li>📞 +7 (XXX) XXX-XX-XX</li>
              <li>✉️ info@laserbeauty.com</li>
              <li className="pt-4 flex space-x-4">
                <a href="#" aria-label="Instagram">
                  <PiInstagramLogoDuotone className="w-5 h-5 text-cream-200" />
                </a>
                <a href="#" aria-label="Facebook">
                  <IoLogoFacebook className="w-5 h-5 text-cream-200" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Laser Beauty by Narin. Все права
            защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
