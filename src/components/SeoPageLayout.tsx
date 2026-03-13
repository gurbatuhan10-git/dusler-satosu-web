"use client";
import { SeoPageData } from "@/data/types";
import Link from "next/link";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Shield,
  Star,
  MessageCircle,
} from "lucide-react";

interface Props {
  data: SeoPageData;
}

export default function SeoPageLayout({ data }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-acik via-white to-brand-krem section-padding">
        <div className="container-custom text-center max-w-4xl">
          <div className="flex justify-center flex-wrap gap-2 mb-6">
            {data.hero.badges.map((b) => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-koyu leading-tight">
            {data.hero.headline}
          </h1>
          <p className="text-lg text-brand-gri leading-relaxed mt-6 max-w-2xl mx-auto">
            {data.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#kayit" className="btn-primary">
              Ücretsiz Okul Ziyareti
            </a>
            <a
              href={`https://wa.me/902165551234?text=${encodeURIComponent("Merhaba, anaokulu hakkında bilgi almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Bilgi Alın
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pembe/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-brand-gri leading-relaxed text-lg">{data.intro}</p>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="section-padding bg-brand-acik">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-koyu">
              3 Kampüs, Tek Kalite Standardı
            </h2>
            <p className="text-brand-gri mt-3">
              Her kampüsümüz aynı yüksek standartta, farklı vurgularla eğitim sunmaktadır.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.campusLinks.map((c) => (
              <Link
                key={c.slug}
                href={c.slug}
                className="card group hover:-translate-y-1 border border-brand-pembe/10"
              >
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5">
                  {c.image ? (
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full placeholder-img text-xs">Kampüs fotoğrafı</div>
                  )}
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-koyu group-hover:text-brand-pembe transition-colors">
                  {c.name}
                </h3>
                <p className="text-sm text-brand-gri mt-2">{c.highlight}</p>
                <div className="flex items-center gap-1 text-brand-pembe text-sm font-medium mt-4">
                  Kampüsü İncele <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <span className="badge mb-4">Eğitim Yaklaşımları</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-koyu mt-4">
              {data.type === "kres"
                ? "Küçük Kâşifler Programı"
                : "Dünya Çapında Kanıtlanmış Eğitim Modeli"}
            </h2>
            <p className="text-brand-gri mt-4 leading-relaxed">
              {data.sharedContent.methodology}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {data.sharedContent.methodologyItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-brand-acik"
              >
                <CheckCircle className="w-5 h-5 text-brand-mor flex-shrink-0 mt-0.5" />
                <span className="text-sm text-brand-koyu">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Nutrition */}
      <section className="section-padding bg-brand-acik">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-pembe/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-pembe" />
                </div>
                <h3 className="font-display font-semibold text-brand-koyu">
                  Sağlık Protokolü
                </h3>
              </div>
              <p className="text-brand-gri text-sm leading-relaxed">
                {data.sharedContent.healthProtocol}
              </p>
            </div>
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-mor/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-brand-mor" />
                </div>
                <h3 className="font-display font-semibold text-brand-koyu">
                  Beslenme
                </h3>
              </div>
              <p className="text-brand-gri text-sm leading-relaxed">
                {data.sharedContent.nutrition}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-brand-koyu text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "24", label: "Yıl Deneyim" },
              { value: "5.000+", label: "Mezun Aile" },
              { value: "%97", label: "Veli Memnuniyeti" },
              { value: "3", label: "Kampüs" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display font-bold text-3xl text-brand-pembe">
                  {s.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={data.faq} />

      {/* CTA */}
      <CTASection
        data={{ headline: data.ctaSection.headline, subtext: data.ctaSection.subtext }}
        campusName="Ataşehir"
      />
    </>
  );
}
