import Link from "next/link";
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-turkuaz to-brand-yesil flex items-center justify-center text-white font-bold text-lg font-display">
                DS
              </div>
              <div>
                <div className="font-display font-bold text-sm">Dusler Satosu</div>
                <div className="text-xs text-gray-400">Anaokulu — 24 Yildir</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              24 yildir cocuklarin merakini, yaraticiligini ve ozguvenini besleyen guvenli egitim ortamlari sunuyoruz.
            </p>
          </div>

          {/* Campuses */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-brand-turkuaz">
              Kampuslerimiz
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/kampusler/bati-atasehir" className="hover:text-white transition-colors flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-turkuaz" /> Bati Atasehir
                </Link>
              </li>
              <li>
                <Link href="/kampusler/dogu-atasehir" className="hover:text-white transition-colors flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-turkuaz" /> Dogu Atasehir
                </Link>
              </li>
              <li>
                <Link href="/kampusler/koc-universitesi" className="hover:text-white transition-colors flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-turkuaz" /> Koc Universitesi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-brand-turkuaz">
              Iletisim
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-turkuaz" /> 0216 555 12 34
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-turkuaz" /> info@duslersakosu.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-brand-turkuaz">
              Bizi Takip Edin
            </h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-turkuaz flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-turkuaz flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-turkuaz flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Dusler Satosu Anaokulu. Tum haklari saklidir.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Gizlilik Politikasi</a>
            <a href="#" className="hover:text-gray-300 transition-colors">KVKK Aydinlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
