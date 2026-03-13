"use client";
import { CampusData } from "@/data/types";
import { MessageCircle, AlertCircle, ArrowRight } from "lucide-react";

interface Props {
  data: CampusData["ctaSection"];
  campusName: string;
}

export default function CTASection({ data, campusName }: Props) {
  return (
    <section
      id="kayit"
      className="section-padding bg-gradient-to-br from-brand-turkuaz to-brand-turkuaz/80"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-white">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              {data.headline}
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">{data.subtext}</p>

            {data.urgencyText && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full text-sm font-medium">
                <AlertCircle className="w-4 h-4" />
                {data.urgencyText}
              </div>
            )}
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="font-display font-semibold text-lg text-brand-koyu mb-6">
              Ucretsiz Okul Ziyareti Randevusu
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-brand-gri mb-1.5 uppercase tracking-wider">
                  Veli Adi Soyadi
                </label>
                <input
                  type="text"
                  placeholder="Adiniz Soyadiniz"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-turkuaz focus:ring-2 focus:ring-brand-turkuaz/20 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-gri mb-1.5 uppercase tracking-wider">
                  Telefon
                </label>
                <input
                  type="tel"
                  placeholder="05XX XXX XX XX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-turkuaz focus:ring-2 focus:ring-brand-turkuaz/20 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-gri mb-1.5 uppercase tracking-wider">
                  Cocugunuzun Yasi
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-turkuaz focus:ring-2 focus:ring-brand-turkuaz/20 outline-none text-sm transition-all bg-white">
                  <option value="">Seciniz</option>
                  <option value="2">2 yas</option>
                  <option value="3">3 yas</option>
                  <option value="4">4 yas</option>
                  <option value="5">5 yas</option>
                  <option value="6">6 yas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-gri mb-1.5 uppercase tracking-wider">
                  Tercih Edilen Kampus
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-turkuaz focus:ring-2 focus:ring-brand-turkuaz/20 outline-none text-sm transition-all bg-white">
                  <option value="">Seciniz</option>
                  <option value="bati">Bati Atasehir</option>
                  <option value="dogu">Dogu Atasehir</option>
                  <option value="koc">Koc Universitesi</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-turkuaz text-white font-semibold rounded-2xl hover:bg-brand-turkuaz/90 transition-all shadow-lg hover:shadow-xl mt-2"
              >
                Randevu Olustur
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-4 text-center">
              <a
                href={`https://wa.me/902165551234?text=${encodeURIComponent(`Merhaba, ${campusName} kampusu icin okul ziyareti randevusu almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-gri hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                veya WhatsApp ile iletisime gecin
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <span className="text-xs text-brand-gri">MEB Onayli</span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-brand-gri">KVKK Uyumlu</span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-brand-gri">Bilgileriniz Gizlidir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
