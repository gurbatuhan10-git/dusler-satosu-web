import { SeoPageData } from "./types";
import { sharedFaq } from "./shared";

export const atasehirAnaokulu: SeoPageData = {
  slug: "atasehir-anaokulu",
  type: "anaokulu",
  metaTitle: "Ataşehir Anaokulu | Düşler Şatosu — 24 Yıllık Deneyim, 3 Kampüs",
  metaDescription:
    "Ataşehir'de en iyi anaokulu arayanlar için: 24 yıllık deneyim, uzman psikolog kadrosu, bilimsel eğitim programları. 3 kampüste ücretsiz okul ziyareti.",

  hero: {
    headline: "Ataşehir'de Anaokulu Arayanlar İçin Doğru Adres",
    subheadline:
      "24 yıldır Ataşehir'de ailelerin güvenini kazanan Düşler Şatosu, üç kampüsüyle çocuğunuz için en uygun eğitim ortamını sunuyor.",
    badges: [
      "MEB Onaylı",
      "24 Yıl Deneyim",
      "3 Kampüs",
      "Uzman Psikolog Kadrosu",
    ],
  },

  intro:
    "Erken çocukluk dönemi, insan yaşamının en kritik gelişim penceresidir. Bu dönemde alınan nitelikli eğitim, çocuğunuzun sosyal, duygusal ve bilişsel gelişiminin temelini atar. Düşler Şatosu olarak 24 yıldır bu sorumluluğu bilinçle taşıyoruz.",

  campusLinks: [
    {
      name: "Batı Ataşehir Kampüsü",
      slug: "/kampusler/bati-atasehir",
      highlight: "İngilizce ve GEMS Bilim Programı odaklı",
      image: "/images/card-bati-atasehir.jpg",
    },
    {
      name: "Doğu Ataşehir Kampüsü",
      slug: "/kampusler/dogu-atasehir",
      highlight: "Drama ve Müzik odaklı, merkezi konum",
      image: "/images/card-dogu-atasehir.jpg",
    },
    {
      name: "Koç Üniversitesi Kampüsü",
      slug: "/kampusler/koc-universitesi",
      highlight: "Kampüs ekosistemi, Fen ve Doğa odaklı",
      image: "/images/card-koc-universitesi.jpg",
    },
  ],

  sharedContent: {
    methodology:
      "Düşler Şatosu'nun eğitim modeli, dünya çapında kanıtlanmış yaklaşımlardan beslenen özgün bir sentezdir.",
    methodologyItems: [
      "High-Scope: Çocuğun aktif katılımıyla öğrenme",
      "Reggio Emilia: Çevreden ilham alan proje bazlı eğitim",
      "Montessori: Bağımsızlık ve öz-düzenleme",
      "Waldorf: Yaratıcılık ve hayal gücü",
    ],
    healthProtocol:
      "Her kampüsümüzde okul hemşiresi görev yapmaktadır. Düzenli sağlık taraması, hijyen protokolleri ve acil durum planları uygulanır.",
    nutrition:
      "Diyetisyen eşliğinde hazırlanan mevsimsel menü. Menüde tavuk yer almamaktadır. Alerji ve özel beslenme gereksinimleri bireysel olarak karşılanır.",
  },

  faq: [
    ...sharedFaq,
    {
      question: "Hangi kampüs çocuğum için uygun?",
      answer:
        "Her kampüsümüz aynı yüksek standartlarda eğitim sunar, ancak farklı vurgulara sahiptir. Ücretsiz okul ziyaretiyle kampüsleri yerinde görebilir, çocuğunuz için en uygun seçimi birlikte yapabiliriz.",
    },
  ],

  ctaSection: {
    headline: "Çocuğunuz İçin En Uygun Kampüsü Birlikte Belirleyelim",
    subtext:
      "Üç kampüsümüzden dilediğinize ücretsiz ziyaret randevusu alın. Uzman kadromuz size rehberlik etsin.",
  },
};

export const atasehirKres: SeoPageData = {
  slug: "atasehir-kres",
  type: "kres",
  metaTitle: "Ataşehir Kreş | Düşler Şatosu — Güvende ve Sevgiyle Büyüyen Bebekler",
  metaDescription:
    "Ataşehir'de 2 yaş ve üstü için güvenli kreş. Duyusal keşif programı, uzman psikolog desteği, kademeli adaptasyon. Ücretsiz okul ziyareti.",

  hero: {
    headline: "Ataşehir'de 2 Yaş ve Üstü İçin Güvenli Kreş",
    subheadline:
      "Çocuğunuzun hayatındaki ilk eğitim deneyimi, doğru ellerde olmalıdır. 24 yıllık deneyimimizle en küçüklere güvenli, sevgi dolu bir başlangıç sunuyoruz.",
    badges: [
      "MEB Onaylı",
      "Uzman Psikolog Desteği",
      "Kademeli Adaptasyon",
      "Küçük Gruplar",
    ],
  },

  intro:
    "İki yaş, bir çocuğun dünyayı kendi bedeninden keşfetmeye başladığı, duyusal deneyimlerin en yoğun yaşandığı dönemdir. Bu hassas dönemde doğru bir eğitim ortamı, çocuğunuzun tüm geleceğini şekillendiren temelleri atar.",

  campusLinks: [
    {
      name: "Batı Ataşehir Kampüsü",
      slug: "/kampusler/bati-atasehir",
      highlight: "Duyusal keşif atölyeleri ve güvenli oyun alanları",
      image: "/images/card-bati-atasehir.jpg",
    },
    {
      name: "Doğu Ataşehir Kampüsü",
      slug: "/kampusler/dogu-atasehir",
      highlight: "Merkezi konum, müzik ve ritim odaklı program",
      image: "/images/card-dogu-atasehir.jpg",
    },
    {
      name: "Koç Üniversitesi Kampüsü",
      slug: "/kampusler/koc-universitesi",
      highlight: "Doğayla iç içe güvenli kampüs ortamı",
      image: "/images/card-koc-universitesi.jpg",
    },
  ],

  sharedContent: {
    methodology:
      "Küçük Kâşifler programımız, 2+ yaş grubu için özel olarak tasarlanmış duyusal keşif temelli bir eğitim modelidir.",
    methodologyItems: [
      "Duyusal Keşif Atölyeleri: Dokunma, koklama, tatma deneyimleri",
      "Motor Gelişim Parkurları: Bedenini tanıyan çocuk, özgüvenini keşfeder",
      "Ritim ve Müzik: Orff enstrümanlarıyla duygusal ifade",
      "Sosyalleşme: Paylaşma, sıra bekleme, empatinin ilk adımları",
    ],
    healthProtocol:
      "Her kampüsümüzde okul hemşiresi görev yapmaktadır. Küçük yaştaki çocuklarımız için özel hijyen protokolleri ve güvenlik önlemleri uygulanır.",
    nutrition:
      "Yaş grubuna uygun, diyetisyen eşliğinde hazırlanan özel menü. Alerji ve hassasiyet takibi bireysel yapılır.",
  },

  faq: [
    {
      question: "Kaç yaşından itibaren kayıt yapılabiliyor?",
      answer:
        "2 yaş ve üstü çocuklar için kayıt yapılmaktadır. Çocuğunuzun gelişim düzeyi ve hazır bulunuşluğu, uzman kadromuz tarafından değerlendirilir.",
    },
    {
      question: "Adaptasyon süreci nasıl işleniyor?",
      answer:
        "Kademeli uyum programımız, ilk hafta veli eşliğinde başlar. Psikologumuz hem çocuğu hem aileyi bu süreçte birebir destekler. Her çocuğun kendi temposuna saygı gösterilir.",
    },
    {
      question: "Çocuğum ilk ayda neler kazanır?",
      answer:
        "İlk ayda çocuğunuz güvenli bağlanma, temel sosyalleşme, rutin oluşturma ve ortama uyum sağlar. Bu kazanımlar, ailemizle paylaşılan haftalık gelişim raporlarıyla takip edilir.",
    },
    ...sharedFaq.slice(2),
  ],

  ctaSection: {
    headline: "Çocuğunuzun İlk Eğitim Deneyimini Yakından Tanıyın",
    subtext:
      "Güvenli ve sevgi dolu ortamımızı ücretsiz ziyaret edin. Uzman kadromuz çocuğunuzun gelişimi hakkında size rehberlik etsin.",
  },
};
