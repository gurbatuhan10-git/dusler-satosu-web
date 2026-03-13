import { CampusData } from "./types";
import { sharedPrograms, sharedFaq, baseSchedule } from "./shared";

// ========================================================
//  BATI ATASEHIR
// ========================================================
export const batiAtasehir: CampusData = {
  slug: "bati-atasehir",
  name: "Bati Atasehir",
  fullName: "Dusler Satosu Bati Atasehir Anaokulu",
  location: "Bati Atasehir, Istanbul",
  metaTitle: "Bati Atasehir Anaokulu | Dusler Satosu — 24 Yillik Guven",
  metaDescription:
    "Bati Atasehir'de sehrin icinde cocuklara ayri bir dunya. Uzman psikolog kadrosu, bilimsel egitim programlari ve guvenli ortam. Ucretsiz okul ziyareti icin randevu alin.",

  hero: {
    headline: "Bati Atasehir'de Cocugunuza Ayri Bir Dunya Kurduk",
    subheadline:
      "Sehrin tam merkezinde, yirmi dort yildir cocuklar icin ozel olarak tasarlanmis bir egitim dunyasi sizi bekliyor. Uzman psikolog kadromuz ve native Ingilizce egitmenlerimizle her cocuk burada kendi hikayesini yazar.",
    cta1: "Anaokulumuzu Kesfedin",
    cta2: "WhatsApp ile Bilgi Alin",
    badges: [
      "MEB Onayli",
      "24 Yil Deneyim",
      "Uzman Psikolog Kadrosu",
      "5.000+ Mezun Aile",
    ],
    imageAlt: "Dusler Satosu Bati Atasehir anaokulu sinif ici etkinlik",
  },

  quickInfo: {
    yas: "2 — 6 yas",
    saat: "07:30 — 18:30",
    sinifMevcudu: "12 — 18 ogrenci",
    konum: "Bati Atasehir Merkez",
  },

  whyUs: {
    intro:
      "Bir cocugun saglikli bir birey olarak buyuyebilmesi icin kendini guvende, degerli ve merak duygusunu ozgurce yasayabilecegi bir ortama ihtiyaci vardir.",
    cards: [
      {
        icon: "Shield",
        title: "Sehrin Kalbinde, Ozel Tasarlanmis Egitim Dunyasi",
        description:
          "Bati Atasehir'in merkezinde konumlanan anaokulumuz, cocuklariniz icin ozel olarak tasarlanmis guvenli ve ilham verici bir mekandadir.",
      },
      {
        icon: "Brain",
        title: "Uzman Psikolog Kadrosu — Her Cocuga Bireysel Destek",
        description:
          "Her yas grubuna ozel ilgi sunan psikolog kadromuz, cocugunuzun duygusal gelisimini bireysel olarak takip eder ve aile danismanligi hizmeti sunar.",
      },
      {
        icon: "GraduationCap",
        title: "Uzman Brans Egitmenleri — Zengin Ogrenme Firsatlari",
        description:
          "Ingilizce, muzik, jimnastik, drama, yoga, fen ve doga, dans ve ritim — tum brans dersleri uzman egitmenlerle ve egitim ucretine dahildir.",
      },
      {
        icon: "Users",
        title: "Kucuk Siniflar, Buyuk Ilgi",
        description:
          "Her yas grubuna uygun sinif mevcudu planlamasiyla cocugunuz taninir, bilinir ve deger gorur.",
      },
    ],
  },

  programs: sharedPrograms,

  branches: {
    list: [
      "Ingilizce (Native egitmenlerle)",
      "Muzik / Orff",
      "Jimnastik",
      "Drama",
      "Yoga",
      "Fen ve Doga",
      "Dans ve Ritim",
      "GEMS Bilim Programi",
    ],
    spotlight: ["Ingilizce", "GEMS Bilim Programi"],
    dailySchedule: baseSchedule,
  },

  socialProof: {
    stats: [
      { value: "24", label: "Yil Deneyim" },
      { value: "5.000+", label: "Mezun Aile" },
      { value: "%97", label: "Veli Memnuniyeti" },
      { value: "3", label: "Kampus" },
    ],
    testimonials: [
      {
        text: "Cocugumuzun ilk gununden itibaren kendini guvende hissettigini gorduk. Psikolog destegi bizim icin cok degerli.",
        author: "Elif K.",
        child: "4 yas velisi",
      },
      {
        text: "Native Ingilizce egitmenleri sayesinde cocugumuz dogal bir sekilde iki dilli buyuyor.",
        author: "Mehmet A.",
        child: "5 yas velisi",
      },
    ],
    familyConsulting:
      "Aile Danismanligi hizmetimiz kapsaminda psikolog kadromuz duzenli aile gorusmeleri, cocuk gelisimi seminerleri ve bireysel danismanlik seanslari sunmaktadir.",
  },

  faq: sharedFaq,

  ctaSection: {
    headline: "Cocugunuz Icin En Dogru Adimi Birlikte Atalim",
    subtext:
      "Ucretsiz okul ziyareti ile egitim ortamimizi yakindan taniyin. Sinirli kontenjan — erken kayit avantajindan yararlanin.",
    urgencyText: "2025-2026 kayitlari devam ediyor — sinirli kontenjan",
  },
};

// ========================================================
//  DOGU ATASEHIR
// ========================================================
export const doguAtasehir: CampusData = {
  slug: "dogu-atasehir",
  name: "Dogu Atasehir",
  fullName: "Dusler Satosu Dogu Atasehir Anaokulu",
  location: "Dogu Atasehir, Istanbul",
  metaTitle:
    "Dogu Atasehir Anaokulu | Dusler Satosu — Egitimde 24 Yillik Guven",
  metaDescription:
    "Dogu Atasehir'in merkezinde, 24 yillik deneyimle cocuk merkezli egitim. Uzman psikolog kadrosu, drama ve muzik odakli program. Okul ziyareti icin randevu alin.",

  hero: {
    headline: "Dogu Atasehir'de Her Cocuk Kendi Hikayesini Yazar",
    subheadline:
      "Merkezi konumuyla ulasimi kolay, yirmi dort yillik deneyimiyle guvenilir. Drama ve muzik odakli zengin programimizla cocugunuzun ifade becerilerini gelistiriyoruz.",
    cta1: "Okulumuzu Ziyaret Edin",
    cta2: "WhatsApp ile Bilgi Alin",
    badges: [
      "MEB Onayli",
      "24 Yil Deneyim",
      "Uzman Psikolog Kadrosu",
      "Merkezi Konum",
    ],
    imageAlt: "Dusler Satosu Dogu Atasehir anaokulu drama etkinligi",
  },

  quickInfo: {
    yas: "2 — 6 yas",
    saat: "07:30 — 18:30",
    sinifMevcudu: "12 — 18 ogrenci",
    konum: "Dogu Atasehir Merkez",
  },

  whyUs: {
    intro:
      "Her cocugun ozgur bir birey olarak gelismesi icin kendini ifade edebildigi, deger gordugu bir ortam sart.",
    cards: [
      {
        icon: "MapPin",
        title: "Merkezi Konum, Kolay Ulasim",
        description:
          "Dogu Atasehir'in kalbinde, toplu tasima ve ana arterlere yakin konumuyla aileler icin pratik ve guvenli.",
      },
      {
        icon: "Brain",
        title: "Uzman Psikolog Kadrosu — Bireysel Takip",
        description:
          "Her yas grubuna ozel ilgi sunan psikolog kadromuz, cocugunuzun duygusal gelisimini bireysel olarak takip eder.",
      },
      {
        icon: "Music",
        title: "Drama ve Muzik Odakli Zengin Program",
        description:
          "Ifade sanatlari, kendini tanimi ve empati gelistirmenin en etkili aracidir. Kampusumuzde drama ve muzik ozel vurgulu olarak sunulmaktadir.",
      },
      {
        icon: "Users",
        title: "Kucuk Siniflar, Buyuk Ilgi",
        description:
          "Her yas grubuna uygun sinif mevcudu planlamasiyla cocugunuz taninir, bilinir ve deger gorur.",
      },
    ],
  },

  programs: sharedPrograms,

  branches: {
    list: [
      "Ingilizce (Native egitmenlerle)",
      "Muzik / Orff",
      "Jimnastik",
      "Drama",
      "Yoga",
      "Fen ve Doga",
      "Dans ve Ritim",
      "GEMS Bilim Programi",
    ],
    spotlight: ["Drama", "Muzik / Orff"],
    dailySchedule: baseSchedule,
  },

  socialProof: {
    stats: [
      { value: "24", label: "Yil Deneyim" },
      { value: "5.000+", label: "Mezun Aile" },
      { value: "%97", label: "Veli Memnuniyeti" },
      { value: "3", label: "Kampus" },
    ],
    testimonials: [
      {
        text: "Drama dersleri sayesinde cocugumuz cok daha ozguvenli ve ifade becerisi guclu bir birey haline geldi.",
        author: "Ayse T.",
        child: "5 yas velisi",
      },
      {
        text: "Merkezi konumu ve profesyonel kadrosuyla en dogru tercihimiz oldu. Iki cocugumu da gonderiyorum.",
        author: "Can B.",
        child: "3 ve 5 yas velisi",
      },
    ],
    familyConsulting:
      "Aile Danismanligi hizmetimiz kapsaminda psikolog kadromuz duzenli aile gorusmeleri ve bireysel danismanlik seanslari sunmaktadir.",
  },

  faq: sharedFaq,

  ctaSection: {
    headline: "Cocugunuz Icin En Dogru Adimi Birlikte Atalim",
    subtext:
      "Ucretsiz okul ziyareti ile egitim ortamimizi yakindan taniyin. Sinirli kontenjan — erken kayit avantajindan yararlanin.",
    urgencyText: "2025-2026 kayitlari devam ediyor — sinirli kontenjan",
  },
};

// ========================================================
//  KOC UNIVERSITESI
// ========================================================
export const kocUniversitesi: CampusData = {
  slug: "koc-universitesi",
  name: "Koc Universitesi",
  fullName: "Dusler Satosu Koc Universitesi Anaokulu",
  location: "Koc Universitesi Kampusu, Istanbul",
  metaTitle:
    "Koc Universitesi Anaokulu | Dusler Satosu — Kampus Ekosisteminde Egitim",
  metaDescription:
    "Koc Universitesi kampusunde, akademik ekosistem icinde erken cocukluk egitimi. Fen, doga ve yoga odakli program. 24 yillik Dusler Satosu guvencesi.",

  hero: {
    headline: "Koc Universitesi Kampusunde Erken Cocukluk Egitiminin En Iyisi",
    subheadline:
      "Turkiye'nin onde gelen universitesinin kampus ekosisteminde, bilimsel merak ve dogayla ic ice buyuyen cocuklar. Fen, doga ve yoga odakli benzersiz programimiz.",
    cta1: "Kampusumuzu Kesfedin",
    cta2: "WhatsApp ile Bilgi Alin",
    badges: [
      "MEB Onayli",
      "24 Yil Deneyim",
      "Kampus Ekosistemi",
      "Uzman Psikolog Kadrosu",
    ],
    imageAlt: "Dusler Satosu Koc Universitesi kampusu anaokulu",
  },

  quickInfo: {
    yas: "2 — 6 yas",
    saat: "07:30 — 18:30",
    sinifMevcudu: "12 — 18 ogrenci",
    konum: "Koc Universitesi Kampusu",
  },

  whyUs: {
    intro:
      "Bir universite kampusunun sunabilecegi benzersiz kaynaklarla, cocugunuzun merak duygusunu besleyecek esssiz bir ortam.",
    cards: [
      {
        icon: "Building",
        title: "Kampus Ekosistemi — Benzersiz Ogrenme Ortami",
        description:
          "Koc Universitesi'nin genis yesil alanlari, kutuphaneleri ve spor tesislerinden faydalanan, akademik bir atmosferde egitim.",
      },
      {
        icon: "Brain",
        title: "Uzman Psikolog Kadrosu — Bireysel Takip",
        description:
          "Her yas grubuna ozel ilgi sunan psikolog kadromuz, cocugunuzun duygusal gelisimini bireysel olarak takip eder.",
      },
      {
        icon: "Leaf",
        title: "Fen, Doga ve Yoga Odakli Program",
        description:
          "Kampusun dogal ortamini egitimin merkezine tasiyan programimizda fen deneyleri, doga kesfi ve yoga ile butunsel gelisim.",
      },
      {
        icon: "Users",
        title: "Kucuk Siniflar, Buyuk Ilgi",
        description:
          "Her yas grubuna uygun sinif mevcudu planlamasiyla cocugunuz taninir, bilinir ve deger gorur.",
      },
    ],
  },

  programs: sharedPrograms,

  branches: {
    list: [
      "Ingilizce (Native egitmenlerle)",
      "Muzik / Orff",
      "Jimnastik",
      "Drama",
      "Yoga",
      "Fen ve Doga",
      "Dans ve Ritim",
      "GEMS Bilim Programi",
    ],
    spotlight: ["Fen ve Doga", "Yoga"],
    dailySchedule: baseSchedule,
  },

  socialProof: {
    stats: [
      { value: "24", label: "Yil Deneyim" },
      { value: "5.000+", label: "Mezun Aile" },
      { value: "%97", label: "Veli Memnuniyeti" },
      { value: "3", label: "Kampus" },
    ],
    testimonials: [
      {
        text: "Universite kampusunde buyumek cocugumuza bambaska bir perspektif katti. Dogayla ic ice, bilimsel merakla dolu gunler.",
        author: "Zeynep D.",
        child: "4 yas velisi",
      },
      {
        text: "Yoga ve mindfulness uygulamalari cocugumuzun duygusal dengesine inanilmaz katki sagladi.",
        author: "Burak S.",
        child: "5 yas velisi",
      },
    ],
    familyConsulting:
      "Aile Danismanligi hizmetimiz kapsaminda psikolog kadromuz duzenli aile gorusmeleri ve bireysel danismanlik seanslari sunmaktadir.",
  },

  faq: sharedFaq,

  ctaSection: {
    headline: "Kampus Ekosisteminde Egitimi Yakindan Taniyin",
    subtext:
      "Ucretsiz kampus turu ile benzersiz egitim ortamimizi kesfedin. Sinirli kontenjan — erken kayit avantajindan yararlanin.",
    urgencyText: "2025-2026 kayitlari devam ediyor — sinirli kontenjan",
  },

  extraSection: {
    title: "Kampus Ekosisteminin Avantajlari",
    content:
      "Koc Universitesi kampusunun sunduklari sadece bir anaokulu binasi degil, komple bir yasam ve ogrenme ekosistemidir.",
    items: [
      "Genis yesil alanlar ve dogal kesif ortamlari",
      "Universite kutuphanesi ve bilim merkezlerine duzenli ziyaretler",
      "Spor tesisleri ve yuzme havuzu imkanlari",
      "Akademik kadroyla etkilesim firsatlari",
      "Guvenli ve kontrollü kampus ulasimi",
    ],
  },
};

// ========================================================
//  ALL CAMPUSES
// ========================================================
export const allCampuses: CampusData[] = [
  batiAtasehir,
  doguAtasehir,
  kocUniversitesi,
];
