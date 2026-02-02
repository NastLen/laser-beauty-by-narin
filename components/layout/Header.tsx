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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`text-2xl font-serif font-semibold transition-colors ${
                isScrolled ? "text-gold-600" : "text-gold-700"
              }`}
            >
              Laser Beauty
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-600 ${
                  pathname === link.href
                    ? "text-gold-600"
                    : isScrolled
                      ? "text-neutral-700"
                      : "text-neutral-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-500 text-white text-sm font-semibold rounded-full hover:shadow-glow-gold transition-all duration-300 hover:scale-105">
                Записаться
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-gold-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-elegant">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-gold-600 ${
                    pathname === link.href
                      ? "text-gold-600 bg-cream-50"
                      : "text-neutral-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full px-6 py-2.5 bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-500 text-white text-sm font-semibold rounded-full hover:shadow-glow-gold transition-all duration-300">
                    Записаться
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
