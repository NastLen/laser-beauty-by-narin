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
        <svg
          className="w-7 h-7 text-gold-700"
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
          >
            <svg
              className="w-6 h-6 text-gold-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
            </svg>
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gold-100 hover:bg-gold-200 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gold-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
