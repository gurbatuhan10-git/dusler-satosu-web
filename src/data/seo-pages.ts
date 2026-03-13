import { SeoPageData } from "./types";
import { sharedFaq } from "./shared";

export const atasehirAnaokulu: SeoPageData = {
  slug: "atasehir-anaokulu",
  type: "anaokulu",
  metaTitle: "Atasehir Anaokulu | Dusler Satosu — 24 Yillik Deneyim, 3 Kampus",
  metaDescription:
    "Atasehir'de en iyi anaokulu arayanlar icin: 24 yillik deneyim, uzman psikolog kadrosu, bilimsel egitim programlari. 3 kampuste ucretsiz okul ziyareti.",

  hero: {
    headline: "Atasehir'de Anaokulu Arayanlar Icin Dogru Adres",
    subheadline:
      "24 yildir Atasehir'de ailelerin guvenini kazanan Dusler Satosu, uc kampusuyle cocugunuz icin en uygun egitim ortamini sunuyor.",
    badges: [
      "MEB Onayli",
      "24 Yil Deneyim",
      "3 Kampus",
      "Uzman Psikolog Kadrosu",
    ],
  },

  intro:
    "Erken cocukluk donemi, insan yasaminin en kritik gelisim penceresidir. Bu donemde alinan nitelikli egitim, cocugunuzun sosyal, duygusal ve bilissel gelisiminin temelini atar. Dusler Satosu olarak 24 yildir bu sorumlulugu bilincle tasiyoruz.",

  campusLinks: [
    {
      name: "Bati Atasehir Kampusu",
      slug: "/kampusler/bati-atasehir",
      highlight: "Ingilizce ve GEMS Bilim Programi odakli",
    },
    {
      name: "Dogu Atasehir Kampusu",
      slug: "/kampusler/dogu-atasehir",
      highlight: "Drama ve Muzik odakli, merkezi konum",
    },
    {
      name: "Koc Universitesi Kampusu",
      slug: "/kampusler/koc-universitesi",
      highlight: "Kampus ekosistemi, Fen ve Doga odakli",
    },
  ],

  sharedContent: {
    methodology:
      "Dusler Satosu'nun egitim modeli, dunya capinda kanitlanmis yaklasimlardan beslenen ozgun bir sentezdir.",
    methodologyItems: [
      "High-Scope: Cocugun aktif katilimiyla ogrenme",
      "Reggio Emilia: Cevreden ilham alan proje bazli egitim",
      "Montessori: Bagimsizlik ve oz-duzenleme",
      "Waldorf: Yaraticilik ve hayal gucu",
    ],
    healthProtocol:
      "Her kampusumuzde okul hemsiresi gorev yapmaktadir. Duzenli saglik taramasi, hijyen protokolleri ve acil durum planlari uygulanir.",
    nutrition:
      "Diyetisyen esliginde hazirlanan mevsimsel menu. Menude tavuk yer almamaktadir. Alerji ve ozel beslenme gereksinimleri bireysel olarak karsilanir.",
  },

  faq: [
    ...sharedFaq,
    {
      question: "Hangi kampus cocugum icin uygun?",
      answer:
        "Her kampusumuz ayni yuksek standartlarda egitim sunar, ancak farkli vurgulara sahiptir. Ucretsiz okul ziyaretiyle kampusleri yerinde gorebilir, cocugunuz icin en uygun secimi birlikte yapabiliriz.",
    },
  ],

  ctaSection: {
    headline: "Cocugunuz Icin En Uygun Kampusu Birlikte Belirleyelim",
    subtext:
      "Uc kampusumuzdan dilediginize ucretsiz ziyaret randevusu alin. Uzman kadromuz size rehberlik etsin.",
  },
};

export const atasehirKres: SeoPageData = {
  slug: "atasehir-kres",
  type: "kres",
  metaTitle: "Atasehir Kres | Dusler Satosu — Guvende ve Sevgiyle Buyuyen Bebekler",
  metaDescription:
    "Atasehir'de 2 yas ve ustu icin guvenli kres. Duyusal kesif programi, uzman psikolog destegi, kademeli adaptasyon. Ucretsiz okul ziyareti.",

  hero: {
    headline: "Atasehir'de 2 Yas ve Ustu Icin Guvenli Kres",
    subheadline:
      "Cocugunuzun hayatindaki ilk egitim deneyimi, dogru ellerde olmalidir. 24 yillik deneyimimizle en kucuklere guvenli, sevgi dolu bir baslangic sunuyoruz.",
    badges: [
      "MEB Onayli",
      "Uzman Psikolog Destegi",
      "Kademeli Adaptasyon",
      "Kucuk Gruplar",
    ],
  },

  intro:
    "Iki yas, bir cocugun dunyayi kendi bedeninden kesfetmeye basladigi, duyusal deneyimlerin en yogun yasandigi donemdir. Bu hassas donemde dogru bir egitim ortami, cocugunuzun tum gelecegini sekillendiren temelleri atar.",

  campusLinks: [
    {
      name: "Bati Atasehir Kampusu",
      slug: "/kampusler/bati-atasehir",
      highlight: "Duyusal kesif atolyeleri ve guvenli oyun alanlari",
    },
    {
      name: "Dogu Atasehir Kampusu",
      slug: "/kampusler/dogu-atasehir",
      highlight: "Merkezi konum, muzik ve ritim odakli program",
    },
    {
      name: "Koc Universitesi Kampusu",
      slug: "/kampusler/koc-universitesi",
      highlight: "Dogayla ic ice guvenli kampus ortami",
    },
  ],

  sharedContent: {
    methodology:
      "Kucuk Kasifler programimiz, 2+ yas grubu icin ozel olarak tasarlanmis duyusal kesif temelli bir egitim modelidir.",
    methodologyItems: [
      "Duyusal Kesif Atolyeleri: Dokunma, koklama, tatma deneyimleri",
      "Motor Gelisim Parkurlari: Bedenini taniyan cocuk, ozguvenini kesfeder",
      "Ritim ve Muzik: Orff enstrumanlariyla duygusal ifade",
      "Sosyallesme: Paylasma, sira bekleme, empatinin ilk adimlari",
    ],
    healthProtocol:
      "Her kampusumuzde okul hemsiresi gorev yapmaktadir. Kucuk yastaki cocuklarimiz icin ozel hijyen protokolleri ve guvenlik onlemleri uygulanir.",
    nutrition:
      "Yas grubuna uygun, diyetisyen esliginde hazirlanan ozel menu. Alerji ve hassasiyet takibi bireysel yapilir.",
  },

  faq: [
    {
      question: "Kac yasindan itibaren kayit yapilabiliyor?",
      answer:
        "2 yas ve ustu cocuklar icin kayit yapilmaktadir. Cocugunuzun gelisim duzeyi ve hazir bulunuslugu, uzman kadromuz tarafindan degerlendirilir.",
    },
    {
      question: "Adaptasyon sureci nasil isleniyor?",
      answer:
        "Kademeli uyum programimiz, ilk hafta veli esliginde baslar. Psikologumuz hem cocugu hem aileyi bu surecte birebir destekler. Her cocugun kendi temposuna saygi gosterilir.",
    },
    {
      question: "Cocugum ilk ayda neler kazanir?",
      answer:
        "Ilk ayda cocugunuz guvenli baglanma, temel sosyallesme, rutin olusturma ve ortama uyum saglar. Bu kazanimlar, ailemizle paylasilan haftalik gelisim raporlariyla takip edilir.",
    },
    ...sharedFaq.slice(2),
  ],

  ctaSection: {
    headline: "Cocugunuzun Ilk Egitim Deneyimini Yakindan Taniyin",
    subtext:
      "Guvenli ve sevgi dolu ortamimizi ucretsiz ziyaret edin. Uzman kadromuz cocugunuzun gelisimi hakkinda size rehberlik etsin.",
  },
};
