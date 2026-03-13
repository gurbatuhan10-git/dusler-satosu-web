import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-koyu text-white">
      <div className="container-custom section-padding pb-8">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Düşler Şatosu Anaokulu"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <div className="font-display font-bold text-sm">Düşler Şatosu</div>
                <div className="text-xs text-gray-400">Anaokulları — 24 Yıldır</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              24 yıldır çocukların merakını, yaratıcılığını ve özgüvenini besleyen güvenli eğitim ortamları sunuyoruz.
            </p>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-brand-pembe">
              Kampüslerimiz
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/kampusler/bati-atasehir" className="hover:text-white transition-colors flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-pembe" /> Batı Ataşehir
                </Link>
              </li>
              <li>
                <Link href="/kampusler/dogu-atasehir" className="hover:text-white transition-colors flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-pembe" /> Doğu Ataşehir
                </Link>
              </li>
              <li>
                <Link href="/kampusler/koc-universitesi" className="hover:text-white transition-colors flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-pembe" /> Koç Üniversitesi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-brand-pembe">
              İletişim
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-pembe" /> 0216 555 12 34
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-pembe" /> info@duslersatosu.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-brand-pembe">
              Bizi Takip Edin
            </h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-pembe flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-pembe flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-pembe flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Düşler Şatosu Anaokulu. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-gray-300 transition-colors">KVKK Aydınlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
