"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/about", label: "Обо мне" },
    { href: "/services", label: "Лазерная эпиляция" },
    { href: "/pricing", label: "Прайс-лист" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <>
      {/* Hamburger Icon always visible */}
      <button
        className="fixed top-6 left-6 z-[60] p-3 rounded-full bg-white/90 shadow-elegant border border-gold-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-7 h-7 text-gold-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <VscMenu className="w-7 h-7 text-gold-700" />
        )}
      </button>

      {/* Sidebar Menu (all screens) */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 z-50 bg-white/95 backdrop-blur-md shadow-elegant flex flex-col items-center pt-28 pb-10 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-72"}`}
      >
        {/* Vertical Navigation */}
        <nav className="flex flex-col gap-6 w-full flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full text-lg font-medium px-6 py-2 rounded-xl transition-colors hover:bg-gradient-to-r hover:from-gold-100 hover:to-champagne-100 hover:text-gold-700 ${
                pathname === link.href
                  ? "bg-gradient-to-r from-gold-50 to-champagne-50 text-gold-700 shadow-elegant"
                  : "text-neutral-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-8 px-6">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-500 text-white text-lg font-semibold rounded-full hover:shadow-glow-gold transition-all duration-300 hover:scale-105">
              Записаться
            </button>
          </Link>
        </nav>
        {/* Social Icons */}
        <div className="flex gap-4 mt-auto pb-10">
          <a
            href="#"
            className="p-3 rounded-full bg-gold-100 hover:bg-gold-200 transition-colors"
            aria-label="Instagram"
          >
            <PiInstagramLogoDuotone className="w-6 h-6 text-cream-500" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gold-100 hover:bg-gold-200 transition-colors"
            aria-label="Facebook"
          >
            <IoLogoFacebook className="w-6 h-6 text-cream-500" />
          </a>
        </div>
      </aside>
    </>
  );
}
