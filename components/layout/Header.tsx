"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    { href: "/about", label: "О нас" },
    { href: "/services", label: "Услуги" },
    { href: "/benefits", label: "Преимущества" },
    { href: "/pricing", label: "Цены" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 z-50 bg-white/95 backdrop-blur-md shadow-elegant flex flex-col items-center py-10">
      {/* Logo */}
      <Link href="/" className="mb-12">
        <span className="text-2xl font-serif font-semibold text-gold-700">
          Laser Beauty
        </span>
      </Link>
      {/* Vertical Navigation */}
      <nav className="flex flex-col gap-6 w-full">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
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
    </aside>
  );
}
