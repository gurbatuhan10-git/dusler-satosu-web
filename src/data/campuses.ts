import { CampusData } from "./types";
import { sharedPrograms, sharedFaq, baseSchedule } from "./shared";

// ========================================================
//  BATI ATAŞEHİR
// ========================================================
export const batiAtasehir: CampusData = {
  slug: "bati-atasehir",
  name: "Batı Ataşehir",
  fullName: "Düşler Şatosu Batı Ataşehir Anaokulu",
  location: "Batı Ataşehir, İstanbul",
  metaTitle: "Batı Ataşehir Anaokulu | Düşler Şatosu — 24 Yıllık Güven",
  metaDescription:
    "Batı Ataşehir'de şehrin içinde çocuklara ayrı bir dünya. Uzman psikolog kadrosu, bilimsel eğitim programları ve güvenli ortam. Ücretsiz okul ziyareti için randevu alın.",

  hero: {
    headline: "Batı Ataşehir'de Çocuğunuza Ayrı Bir Dünya Kurduk",
    subheadline:
      "Şehrin tam merkezinde, yirmi dört yıldır çocuklar için özel olarak tasarlanmış bir eğitim dünyası sizi bekliyor. Uzman psikolog kadromuz ve native İngilizce eğitmenlerimizle her çocuk burada kendi hikâyesini yazar.",
    cta1: "Ücretsiz Okul Gezisi Ayırtın",
    cta2: "WhatsApp ile Bilgi Alın",
    badges: [
      "MEB Onaylı",
      "24 Yıl Deneyim",
      "Uzman Psikolog Kadrosu",
      "5.000+ Mezun Aile",
    ],
    imageAlt: "Düşler Şatosu Batı Ataşehir anaokulu sınıf içi etkinlik",
    heroImage: "/images/hero-bati-atasehir.jpg",
  },

  quickInfo: {
    yas: "2 — 6 yaş",
    saat: "07:30 — 18:30",
    sinifMevcudu: "12 — 18 öğrenci",
    konum: "Batı Ataşehir Merkez",
  },

  whyUs: {
    intro:
      "Bir çocuğun sağlıklı bir birey olarak büyüyebilmesi için kendini güvende, değerli ve merak duygusunu özgürce yaşayabileceği bir ortama ihtiyacı vardır.",
    cards: [
      {
        icon: "Shield",
        title: "Şehrin Kalbinde, Özel Tasarlanmış Eğitim Dünyası",
        description:
          "Batı Ataşehir'in merkezinde konumlanan anaokulumuz, çocuklarınız için özel olarak tasarlanmış güvenli ve ilham verici bir mekândadır.",
      },
      {
        icon: "Brain",
        title: "Uzman Psikolog Kadrosu — Her Çocuğa Bireysel Destek",
        description:
          "Her yaş grubuna özel ilgi sunan psikolog kadromuz, çocuğunuzun duygusal gelişimini bireysel olarak takip eder ve aile danışmanlığı hizmeti sunar.",
      },
      {
        icon: "GraduationCap",
        title: "Uzman Branş Eğitmenleri — Zengin Öğrenme Fırsatları",
        description:
          "İngilizce, müzik, jimnastik, drama, yoga, fen ve doğa, dans ve ritim — tüm branş dersleri uzman eğitmenlerle ve eğitim ücretine dahildir.",
      },
      {
        icon: "Users",
        title: "Küçük Sınıflar, Büyük İlgi",
        description:
          "Her yaş grubuna uygun sınıf mevcudu planlamasıyla çocuğunuz tanınır, bilinir ve değer görür.",
      },
    ],
  },

  programs: sharedPrograms,

  branches: {
    list: [
      "İngilizce (Native eğitmenlerle)",
      "Müzik / Orff",
      "Jimnastik",
      "Drama",
      "Yoga",
      "Fen ve Doğa",
      "Dans ve Ritim",
      "GEMS Bilim Programı",
    ],
    spotlight: ["İngilizce", "GEMS Bilim Programı"],
    dailySchedule: baseSchedule,
  },

  socialProof: {
    stats: [
      { value: "24", label: "Yıl Deneyim" },
      { value: "5.000+", label: "Mezun Aile" },
      { value: "%97", label: "Veli Memnuniyeti" },
      { value: "3", label: "Kampüs" },
    ],
    testimonials: [
      {
        text: "Çocuğumuzun ilk gününden itibaren kendini güvende hissettiğini gördük. Psikolog desteği bizim için çok değerli.",
        author: "Elif K.",
        child: "4 yaş velisi",
      },
      {
        text: "Native İngilizce eğitmenleri sayesinde çocuğumuz doğal bir şekilde iki dilli büyüyor.",
        author: "Mehmet A.",
        child: "5 yaş velisi",
      },
    ],
    familyConsulting:
      "Aile Danışmanlığı hizmetimiz kapsamında psikolog kadromuz düzenli aile görüşmeleri, çocuk gelişimi seminerleri ve bireysel danışmanlık seansları sunmaktadır.",
  },

  faq: sharedFaq,

  ctaSection: {
    headline: "Çocuğunuz İçin En Doğru Adımı Birlikte Atalım",
    subtext:
      "Ücretsiz okul ziyareti ile eğitim ortamımızı yakından tanıyın. Sınırlı kontenjan — erken kayıt avantajından yararlanın.",
    urgencyText: "2025-2026 kayıtları devam ediyor — sınırlı kontenjan",
  },
};

// ========================================================
//  DOĞU ATAŞEHİR
// ========================================================
export const doguAtasehir: CampusData = {
  slug: "dogu-atasehir",
  name: "Doğu Ataşehir",
  fullName: "Düşler Şatosu Doğu Ataşehir Anaokulu",
  location: "Doğu Ataşehir, İstanbul",
  metaTitle:
    "Doğu Ataşehir Anaokulu | Düşler Şatosu — Eğitimde 24 Yıllık Güven",
  metaDescription:
    "Doğu Ataşehir'in merkezinde, 24 yıllık deneyimle çocuk merkezli eğitim. Uzman psikolog kadrosu, drama ve müzik odaklı program. Okul ziyareti için randevu alın.",

  hero: {
    headline: "Doğu Ataşehir'de Her Çocuk Kendi Hikâyesini Yazar",
    subheadline:
      "Merkezi konumuyla ulaşımı kolay, yirmi dört yıllık deneyimiyle güvenilir. Drama ve müzik odaklı zengin programımızla çocuğunuzun ifade becerilerini geliştiriyoruz.",
    cta1: "Ücretsiz Okul Gezisi Ayırtın",
    cta2: "WhatsApp ile Bilgi Alın",
    badges: [
      "MEB Onaylı",
      "24 Yıl Deneyim",
      "Uzman Psikolog Kadrosu",
      "Merkezi Konum",
    ],
    imageAlt: "Düşler Şatosu Doğu Ataşehir anaokulu drama etkinliği",
    heroImage: "/images/hero-dogu-atasehir.jpg",
  },

  quickInfo: {
    yas: "2 — 6 yaş",
    saat: "07:30 — 18:30",
    sinifMevcudu: "12 — 18 öğrenci",
    konum: "Doğu Ataşehir Merkez",
  },

  whyUs: {
    intro:
      "Her çocuğun özgür bir birey olarak gelişmesi için kendini ifade edebildiği, değer gördüğü bir ortam şart.",
    cards: [
      {
        icon: "MapPin",
        title: "Merkezi Konum, Kolay Ulaşım",
        description:
          "Doğu Ataşehir'in kalbinde, toplu taşıma ve ana arterlere yakın konumuyla aileler için pratik ve güvenli.",
      },
      {
        icon: "Brain",
        title: "Uzman Psikolog Kadrosu — Bireysel Takip",
        description:
          "Her yaş grubuna özel ilgi sunan psikolog kadromuz, çocuğunuzun duygusal gelişimini bireysel olarak takip eder.",
      },
      {
        icon: "Music",
        title: "Drama ve Müzik Odaklı Zengin Program",
        description:
          "İfade sanatları, kendini tanımanın ve empati geliştirmenin en etkili aracıdır. Kampüsümüzde drama ve müzik özel vurgulu olarak sunulmaktadır.",
      },
      {
        icon: "Users",
        title: "Küçük Sınıflar, Büyük İlgi",
        description:
          "Her yaş grubuna uygun sınıf mevcudu planlamasıyla çocuğunuz tanınır, bilinir ve değer görür.",
      },
    ],
  },

  programs: sharedPrograms,

  branches: {
    list: [
      "İngilizce (Native eğitmenlerle)",
      "Müzik / Orff",
      "Jimnastik",
      "Drama",
      "Yoga",
      "Fen ve Doğa",
      "Dans ve Ritim",
      "GEMS Bilim Programı",
    ],
    spotlight: ["Drama", "Müzik / Orff"],
    dailySchedule: baseSchedule,
  },

  socialProof: {
    stats: [
      { value: "24", label: "Yıl Deneyim" },
      { value: "5.000+", label: "Mezun Aile" },
      { value: "%97", label: "Veli Memnuniyeti" },
      { value: "3", label: "Kampüs" },
    ],
    testimonials: [
      {
        text: "Drama dersleri sayesinde çocuğumuz çok daha özgüvenli ve ifade becerisi güçlü bir birey haline geldi.",
        author: "Ayşe T.",
        child: "5 yaş velisi",
      },
      {
        text: "Merkezi konumu ve profesyonel kadrosuyla en doğru tercihimiz oldu. İki çocuğumu da gönderiyorum.",
        author: "Can B.",
        child: "3 ve 5 yaş velisi",
      },
    ],
    familyConsulting:
      "Aile Danışmanlığı hizmetimiz kapsamında psikolog kadromuz düzenli aile görüşmeleri ve bireysel danışmanlık seansları sunmaktadır.",
  },

  faq: sharedFaq,

  ctaSection: {
    headline: "Çocuğunuz İçin En Doğru Adımı Birlikte Atalım",
    subtext:
      "Ücretsiz okul ziyareti ile eğitim ortamımızı yakından tanıyın. Sınırlı kontenjan — erken kayıt avantajından yararlanın.",
    urgencyText: "2025-2026 kayıtları devam ediyor — sınırlı kontenjan",
  },
};

// ========================================================
//  KOÇ ÜNİVERSİTESİ
// ========================================================
export const kocUniversitesi: CampusData = {
  slug: "koc-universitesi",
  name: "Koç Üniversitesi",
  fullName: "Düşler Şatosu Koç Üniversitesi Anaokulu",
  location: "Koç Üniversitesi Kampüsü, İstanbul",
  metaTitle:
    "Koç Üniversitesi Anaokulu | Düşler Şatosu — Kampüs Ekosisteminde Eğitim",
  metaDescription:
    "Koç Üniversitesi kampüsünde, akademik ekosistem içinde erken çocukluk eğitimi. Fen, doğa ve yoga odaklı program. 24 yıllık Düşler Şatosu güvencesi.",

  hero: {
    headline: "Koç Üniversitesi Kampüsünde Erken Çocukluk Eğitiminin En İyisi",
    subheadline:
      "Türkiye'nin önde gelen üniversitesinin kampüs ekosisteminde, bilimsel merak ve doğayla iç içe büyüyen çocuklar. Fen, doğa ve yoga odaklı benzersiz programımız.",
    cta1: "Ücretsiz Kampüs Turu Ayırtın",
    cta2: "WhatsApp ile Bilgi Alın",
    badges: [
      "MEB Onaylı",
      "24 Yıl Deneyim",
      "Kampüs Ekosistemi",
      "Uzman Psikolog Kadrosu",
    ],
    imageAlt: "Düşler Şatosu Koç Üniversitesi kampüsü anaokulu",
    heroImage: "/images/hero-koc-universitesi.jpg",
  },

  quickInfo: {
    yas: "2 — 6 yaş",
    saat: "07:30 — 18:30",
    sinifMevcudu: "12 — 18 öğrenci",
    konum: "Koç Üniversitesi Kampüsü",
  },

  whyUs: {
    intro:
      "Bir üniversite kampüsünün sunabileceği benzersiz kaynaklarla, çocuğunuzun merak duygusunu besleyecek eşsiz bir ortam.",
    cards: [
      {
        icon: "Building",
        title: "Kampüs Ekosistemi — Benzersiz Öğrenme Ortamı",
        description:
          "Koç Üniversitesi'nin geniş yeşil alanları, kütüphaneleri ve spor tesislerinden faydalanan, akademik bir atmosferde eğitim.",
      },
      {
        icon: "Brain",
        title: "Uzman Psikolog Kadrosu — Bireysel Takip",
        description:
          "Her yaş grubuna özel ilgi sunan psikolog kadromuz, çocuğunuzun duygusal gelişimini bireysel olarak takip eder.",
      },
      {
        icon: "Leaf",
        title: "Fen, Doğa ve Yoga Odaklı Program",
        description:
          "Kampüsün doğal ortamını eğitimin merkezine taşıyan programımızda fen deneyleri, doğa keşfi ve yoga ile bütünsel gelişim.",
      },
      {
        icon: "Users",
        title: "Küçük Sınıflar, Büyük İlgi",
        description:
          "Her yaş grubuna uygun sınıf mevcudu planlamasıyla çocuğunuz tanınır, bilinir ve değer görür.",
      },
    ],
  },

  programs: sharedPrograms,

  branches: {
    list: [
      "İngilizce (Native eğitmenlerle)",
      "Müzik / Orff",
      "Jimnastik",
      "Drama",
      "Yoga",
      "Fen ve Doğa",
      "Dans ve Ritim",
      "GEMS Bilim Programı",
    ],
    spotlight: ["Fen ve Doğa", "Yoga"],
    dailySchedule: baseSchedule,
  },

  socialProof: {
    stats: [
      { value: "24", label: "Yıl Deneyim" },
      { value: "5.000+", label: "Mezun Aile" },
      { value: "%97", label: "Veli Memnuniyeti" },
      { value: "3", label: "Kampüs" },
    ],
    testimonials: [
      {
        text: "Üniversite kampüsünde büyümek çocuğumuza bambaşka bir perspektif kattı. Doğayla iç içe, bilimsel merakla dolu günler.",
        author: "Zeynep D.",
        child: "4 yaş velisi",
      },
      {
        text: "Yoga ve mindfulness uygulamaları çocuğumuzun duygusal dengesine inanılmaz katkı sağladı.",
        author: "Burak S.",
        child: "5 yaş velisi",
      },
    ],
    familyConsulting:
      "Aile Danışmanlığı hizmetimiz kapsamında psikolog kadromuz düzenli aile görüşmeleri ve bireysel danışmanlık seansları sunmaktadır.",
  },

  faq: sharedFaq,

  ctaSection: {
    headline: "Kampüs Ekosisteminde Eğitimi Yakından Tanıyın",
    subtext:
      "Ücretsiz kampüs turu ile benzersiz eğitim ortamımızı keşfedin. Sınırlı kontenjan — erken kayıt avantajından yararlanın.",
    urgencyText: "2025-2026 kayıtları devam ediyor — sınırlı kontenjan",
  },

  extraSection: {
    title: "Kampüs Ekosisteminin Avantajları",
    content:
      "Koç Üniversitesi kampüsünün sundukları sadece bir anaokulu binası değil, komple bir yaşam ve öğrenme ekosistemidir.",
    items: [
      "Geniş yeşil alanlar ve doğal keşif ortamları",
      "Üniversite kütüphanesi ve bilim merkezlerine düzenli ziyaretler",
      "Spor tesisleri ve yüzme havuzu imkânları",
      "Akademik kadroyla etkileşim fırsatları",
      "Güvenli ve kontrollü kampüs ulaşımı",
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
