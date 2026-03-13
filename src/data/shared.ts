import { ProgramTab, ScheduleItem } from "./types";

// ========== SHARED PROGRAMS (70% skeleton) ==========
export const sharedPrograms: ProgramTab[] = [
  {
    age: "2+",
    title: "Kucuk Kasifler: Ilk Adimlar",
    subtitle: "Duyularin Dili",
    intro:
      "Insan yasaminin ilk yillari, bir agacin kokleri gibidir. Bu kokleri sevgiyle besledigimiz Kucuk Kasifler programimiz, cocugunuzun dunyayi kendi bedeninden kesfetmesine zemin hazirlar.",
    items: [
      "Duyusal Kesif Atolyeleri: Dokunma, koklama, tatma — kum, su, hamur ve boya ile serbest deneyim",
      "Motor Gelisim Parkurlari: Tirmanma, dengeleme, koordinasyon — bedenini taniyan cocuk, ozguvenini kesfeder",
      "Ritim ve Muzik: Orff enstrumanlariyla muzigin dilini ogrenme",
      "Dil Gelisimi: Hikaye dinleme, sarkilar, parmak oyunlari",
      "Sosyallesme: Paylasma, sira bekleme, empati — birlikte olmanin ilk deneyimleri",
    ],
  },
  {
    age: "3+",
    title: "Merakli Bilginler: Sorular Cagi",
    subtitle: "Kesfet ve Sorgula",
    intro:
      "Uc yas, sorularin catirdadigidir. 'Neden?' sorusu, bilimsel dusuncenin ilk kivilcimidir.",
    items: [
      "Dil ve Ifade: Hikaye anlatma, rol yapma, duygu kartlari",
      "Erken Matematik (Maths World): Sayilari oyunlarla kesfetme",
      "Sosyal Beceriler: Grup projeleri, catisma cozumu",
      "Doga ve Bilim (Fun with Science): Gozlem, deneme, sorgulama",
    ],
  },
  {
    age: "4+",
    title: "Aktif Ogrenenler: Kesfederek Ogren",
    subtitle: "Proje Bazli Ogrenme",
    intro:
      "Dort yas, cocuklarin kendi sorularindan yola cikan, derinlemesine projelere hazirlanan donemdir.",
    items: [
      "Proje Bazli Ogrenme: Cocuklarin kendi sorularindan yola cikan projeler",
      "Drama ve Ifade Sanatlari: Farkli rollere burunme — empati ve perspektif alma",
      "GEMS Bilim Programi: California Universitesi Lawrence Hall of Science mufredati",
      "Gunluk Yasam Becerileri: Ekmek yapma, yogurt mayalama — bagimsizlik ve sorumluluk",
    ],
  },
  {
    age: "5+",
    title: "Okula Hazirlik: Gelecege Hazir Bireyler",
    subtitle: "Guvencli Gecis",
    intro:
      "Nitelikli erken cocukluk egitimi, yasam boyu basarinin temelidir. Okula Hazirlik programimiz bu bilincle tasarlanmistir.",
    items: [
      "Akademik Hazirlik: Okuma-yazmaya hazirlik, matematiksel dusunme",
      "Oz Bakim ve Sorumluluk: Kendi esyalarini duzenleme, gunluk rutinleri yonetme",
      "Liderlik ve Is Birligi: Grup gorevlerinde sorumluluk alma, karar verme",
      "Duygusal Okuryazarlik: Duygu yonetimi, stresle basa cikma",
      "Sosyal Beceri Uygulamalari: Akran iliskileri, iletisim ve catisma cozumu",
    ],
  },
];

// ========== SHARED FAQ ==========
export const sharedFaq = [
  {
    question: "Adaptasyon sureci nasil isleniyor?",
    answer:
      "Ilk hafta kademeli uyum programi uygulanir. Psikologumuz hem cocugu hem aileyi bu surecte birebir destekler. Her cocugun kendi temposuna saygi gosterilir.",
  },
  {
    question: "Sinif mevcutlari kac kisi?",
    answer:
      "Yas grubuna gore 12-18 kisi arasinda degisir. Her sinifta bir sinif ogretmeni ve bir yardimci ogretmen bulunur.",
  },
  {
    question: "Beslenme nasil planlanir?",
    answer:
      "Diyetisyen eslginde hazurlanan mevsimsel menu uygulanir. Menude tavuk yer almamaktadir. Alerji ve ozel beslenme gereksinimleri bireysel olarak karsilanir.",
  },
  {
    question: "Telefonla gun icinde bilgi alabilir miyim?",
    answer:
      "Evet, gun icinde sinif ogretmeninize ulasabilir, cocugunuzun durumu hakkinda bilgi alabilirsiniz. Ayrica duzenli olarak gun sonu bilgilendirmesi yapilir.",
  },
  {
    question: "Cocugum yemek secerse ne yapilir?",
    answer:
      "Uzman kadromuz, cocuklarin farkli tatlari kesfetmesi icin olumlu ve zorlayici olmayan bir yaklasim benimser. Birlikte yeme kulturu ve cesitli sunum teknikleriyle yeni tatlar tanitilir.",
  },
  {
    question: "Okul saatleri nedir?",
    answer:
      "Okulumuz 07:30 - 18:30 saatleri arasinda hizmet vermektedir. Sabah karsilama 07:30'da baslar.",
  },
  {
    question: "Brans dersleri ayrica ucretli mi?",
    answer:
      "Hayir. Ingilizce, muzik, jimnastik, drama, yoga, fen ve doga, dans ve ritim dahil tum brans dersleri egitim ucretine dahildir.",
  },
];

// ========== BASE SCHEDULE ==========
export const baseSchedule: ScheduleItem[] = [
  { time: "07:30", activity: "Karsilama ve Sinif Koselerinde Serbest Kesif" },
  { time: "09:00", activity: "Kahvalti ve Sofra Paylasimi" },
  { time: "09:30", activity: "Sabah Cemberi: Gunun plani, duygular, sarkilar" },
  { time: "10:00", activity: "Brans Dersi" },
  { time: "10:30", activity: "Yaratici Atolye: Boyalar, kil, dogal materyaller" },
  { time: "11:00", activity: "Acik Hava: Bahce ve oyun alaninda serbest kesif" },
  { time: "11:30", activity: "Kesif ve Problem Cozme Oyunlari" },
  { time: "12:00", activity: "Ogle Yemegi" },
  { time: "12:30", activity: "Dinlenme / Sessiz Etkinlik (sakin zaman)" },
  { time: "13:30", activity: "Muzik ve Hareket: Ritim, dans, beden farkindaligi" },
  { time: "14:00", activity: "Atolye / Proje Calismasi" },
  { time: "15:00", activity: "Ikindi Kahvaltisi" },
  { time: "15:30", activity: "Hikaye / Serbest Oyun / Bahce" },
  { time: "17:00", activity: "Veli Karsilama Baslangici" },
  { time: "18:30", activity: "Okul Kapanisi" },
];
