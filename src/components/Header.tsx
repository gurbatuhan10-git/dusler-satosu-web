"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const campusItems = [
  { label: "Batı Ataşehir", href: "/kampusler/bati-atasehir" },
  { label: "Doğu Ataşehir", href: "/kampusler/dogu-atasehir" },
  { label: "Koç Üniversitesi", href: "/kampusler/koc-universitesi" },
];

const seoItems = [
  { label: "Ataşehir Anaokulu", href: "/atasehir-anaokulu" },
  { label: "Ataşehir Kreş", href: "/atasehir-kres" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-turkuaz to-brand-yesil flex items-center justify-center text-white font-bold text-lg font-display">
            DŞ
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-brand-koyu text-sm leading-tight">
              Düşler Şatosu
            </div>
            <div className="text-xs text-brand-gri">Anaokulu</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {campusItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-brand-koyu/80 hover:text-brand-turkuaz rounded-lg hover:bg-brand-turkuaz/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="w-px h-5 bg-gray-200 mx-1" />
          {seoItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-brand-gri hover:text-brand-turkuaz rounded-lg hover:bg-brand-turkuaz/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+902165551234"
            className="flex items-center gap-2 text-sm text-brand-gri hover:text-brand-turkuaz transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>0216 555 12 34</span>
          </a>
          <Link
            href="#kayit"
            className="px-5 py-2.5 bg-brand-turkuaz text-white text-sm font-semibold rounded-xl hover:bg-brand-turkuaz/90 transition-all"
          >
            Ziyaret Randevusu
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Menü"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <nav className="flex flex-col gap-1 pt-4">
            <div className="px-4 py-2 text-xs font-semibold text-brand-gri uppercase tracking-wider">
              Kampüsler
            </div>
            {campusItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-brand-koyu font-medium rounded-lg hover:bg-brand-turkuaz/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-2 mt-2 text-xs font-semibold text-brand-gri uppercase tracking-wider">
              Bilgi Sayfaları
            </div>
            {seoItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-brand-koyu font-medium rounded-lg hover:bg-brand-turkuaz/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="#kayit"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-3 bg-brand-turkuaz text-white font-semibold rounded-xl"
            >
              Ziyaret Randevusu
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
