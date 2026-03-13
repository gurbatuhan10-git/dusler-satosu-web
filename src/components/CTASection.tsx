"use client";
import { useState } from "react";
import { CampusData } from "@/data/types";
import { MessageCircle, AlertCircle, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface Props {
  data: CampusData["ctaSection"];
  campusName: string;
}

export default function CTASection({ data, campusName }: Props) {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    childAge: "",
    campus: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/randevu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: campusName }),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", phone: "", childAge: "", campus: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="kayit"
      className="section-padding bg-gradient-to-br from-brand-pembe to-brand-pembe/80"
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
            {formState === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-yesil/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-yesil" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-koyu mb-2">
                  Randevu Talebiniz Alındı!
                </h3>
                <p className="text-brand-gri text-sm">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-semibold text-lg text-brand-koyu mb-6">
                  Ücretsiz Okul Ziyareti Randevusu
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-medium text-brand-gri mb-1.5 uppercase tracking-wider">
                      Veli Adı Soyadı *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pembe focus:ring-2 focus:ring-brand-pembe/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-gri mb-1.5 uppercase tracking-wider">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pembe focus:ring-2 focus:ring-brand-pembe/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-gri mb-1.5 uppercase tracking-wider">
                      Çocuğunuzun Yaşı
                    </label>
                    <select
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pembe focus:ring-2 focus:ring-brand-pembe/20 outline-none text-sm transition-all bg-white"
                    >
                      <option value="">Seçiniz</option>
                      <option value="2">2 yaş</option>
                      <option value="3">3 yaş</option>
                      <option value="4">4 yaş</option>
                      <option value="5">5 yaş</option>
                      <option value="6">6 yaş</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-gri mb-1.5 uppercase tracking-wider">
                      Tercih Edilen Kampüs
                    </label>
                    <select
                      value={formData.campus}
                      onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pembe focus:ring-2 focus:ring-brand-pembe/20 outline-none text-sm transition-all bg-white"
                    >
                      <option value="">Seçiniz</option>
                      <option value="bati-atasehir">Batı Ataşehir</option>
                      <option value="dogu-atasehir">Doğu Ataşehir</option>
                      <option value="koc-universitesi">Koç Üniversitesi</option>
                    </select>
                  </div>

                  {formState === "error" && (
                    <p className="text-red-500 text-sm">
                      Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp ile iletişime geçin.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-pembe text-white font-semibold rounded-2xl hover:bg-brand-pembe/90 transition-all shadow-lg hover:shadow-xl mt-2 disabled:opacity-70"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        30 Saniyede Randevu Al
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}

            <div className="mt-4 text-center">
              <a
                href={`https://wa.me/902165551234?text=${encodeURIComponent(`Merhaba, ${campusName} kampüsü için okul ziyareti randevusu almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-gri hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                veya WhatsApp ile iletişime geçin
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <span className="text-xs text-brand-gri">MEB Onaylı</span>
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
