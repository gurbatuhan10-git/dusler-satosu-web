import { ProgramTab, ScheduleItem } from "./types";

// ========== SHARED PROGRAMS (70% skeleton) ==========
export const sharedPrograms: ProgramTab[] = [
  {
    age: "2+",
    title: "Küçük Kâşifler: İlk Adımlar",
    subtitle: "Duyuların Dili",
    intro:
      "İnsan yaşamının ilk yılları, bir ağacın kökleri gibidir. Bu kökleri sevgiyle beslediğimiz Küçük Kâşifler programımız, çocuğunuzun dünyayı kendi bedeninden keşfetmesine zemin hazırlar.",
    items: [
      "Duyusal Keşif Atölyeleri: Dokunma, koklama, tatma — kum, su, hamur ve boya ile serbest deneyim",
      "Motor Gelişim Parkurları: Tırmanma, dengeleme, koordinasyon — bedenini tanıyan çocuk, özgüvenini keşfeder",
      "Ritim ve Müzik: Orff enstrümanlarıyla müziğin dilini öğrenme",
      "Dil Gelişimi: Hikâye dinleme, şarkılar, parmak oyunları",
      "Sosyalleşme: Paylaşma, sıra bekleme, empati — birlikte olmanın ilk deneyimleri",
    ],
  },
  {
    age: "3+",
    title: "Meraklı Bilginler: Sorular Çağı",
    subtitle: "Keşfet ve Sorgula",
    intro:
      "Üç yaş, soruların çatırdadığıdır. 'Neden?' sorusu, bilimsel düşüncenin ilk kıvılcımıdır.",
    items: [
      "Dil ve İfade: Hikâye anlatma, rol yapma, duygu kartları",
      "Erken Matematik (Maths World): Sayıları oyunlarla keşfetme",
      "Sosyal Beceriler: Grup projeleri, çatışma çözümü",
      "Doğa ve Bilim (Fun with Science): Gözlem, deneme, sorgulama",
    ],
  },
  {
    age: "4+",
    title: "Aktif Öğrenenler: Keşfederek Öğren",
    subtitle: "Proje Bazlı Öğrenme",
    intro:
      "Dört yaş, çocukların kendi sorularından yola çıkan, derinlemesine projelere hazırlanan dönemdir.",
    items: [
      "Proje Bazlı Öğrenme: Çocukların kendi sorularından yola çıkan projeler",
      "Drama ve İfade Sanatları: Farklı rollere bürünme — empati ve perspektif alma",
      "GEMS Bilim Programı: California Üniversitesi Lawrence Hall of Science müfredatı",
      "Günlük Yaşam Becerileri: Ekmek yapma, yoğurt mayalama — bağımsızlık ve sorumluluk",
    ],
  },
  {
    age: "5+",
    title: "Okula Hazırlık: Geleceğe Hazır Bireyler",
    subtitle: "Güvençli Geçiş",
    intro:
      "Nitelikli erken çocukluk eğitimi, yaşam boyu başarının temelidir. Okula Hazırlık programımız bu bilinçle tasarlanmıştır.",
    items: [
      "Akademik Hazırlık: Okuma-yazmaya hazırlık, matematiksel düşünme",
      "Öz Bakım ve Sorumluluk: Kendi eşyalarını düzenleme, günlük rutinleri yönetme",
      "Liderlik ve İş Birliği: Grup görevlerinde sorumluluk alma, karar verme",
      "Duygusal Okuryazarlık: Duygu yönetimi, stresle başa çıkma",
      "Sosyal Beceri Uygulamaları: Akran ilişkileri, iletişim ve çatışma çözümü",
    ],
  },
];

// ========== SHARED FAQ ==========
export const sharedFaq = [
  {
    question: "Adaptasyon süreci nasıl işleniyor?",
    answer:
      "İlk hafta kademeli uyum programı uygulanır. Psikologumuz hem çocuğu hem aileyi bu süreçte birebir destekler. Her çocuğun kendi temposuna saygı gösterilir.",
  },
  {
    question: "Sınıf mevcutları kaç kişi?",
    answer:
      "Yaş grubuna göre 12-18 kişi arasında değişir. Her sınıfta bir sınıf öğretmeni ve bir yardımcı öğretmen bulunur.",
  },
  {
    question: "Beslenme nasıl planlanır?",
    answer:
      "Diyetisyen eşliğinde hazırlanan mevsimsel menü uygulanır. Menüde tavuk yer almamaktadır. Alerji ve özel beslenme gereksinimleri bireysel olarak karşılanır.",
  },
  {
    question: "Telefonla gün içinde bilgi alabilir miyim?",
    answer:
      "Evet, gün içinde sınıf öğretmeninize ulaşabilir, çocuğunuzun durumu hakkında bilgi alabilirsiniz. Ayrıca düzenli olarak gün sonu bilgilendirmesi yapılır.",
  },
  {
    question: "Çocuğum yemek seçerse ne yapılır?",
    answer:
      "Uzman kadromuz, çocukların farklı tatları keşfetmesi için olumlu ve zorlayıcı olmayan bir yaklaşım benimser. Birlikte yeme kültürü ve çeşitli sunum teknikleriyle yeni tatlar tanıtılır.",
  },
  {
    question: "Okul saatleri nedir?",
    answer:
      "Okulumuz 07:30 - 18:30 saatleri arasında hizmet vermektedir. Sabah karşılama 07:30'da başlar.",
  },
  {
    question: "Branş dersleri ayrıca ücretli mi?",
    answer:
      "Hayır. İngilizce, müzik, jimnastik, drama, yoga, fen ve doğa, dans ve ritim dahil tüm branş dersleri eğitim ücretine dahildir.",
  },
];

// ========== BASE SCHEDULE ==========
export const baseSchedule: ScheduleItem[] = [
  { time: "07:30", activity: "Karşılama ve Sınıf Köşelerinde Serbest Keşif" },
  { time: "09:00", activity: "Kahvaltı ve Sofra Paylaşımı" },
  { time: "09:30", activity: "Sabah Çemberi: Günün planı, duygular, şarkılar" },
  { time: "10:00", activity: "Branş Dersi" },
  { time: "10:30", activity: "Yaratıcı Atölye: Boyalar, kil, doğal materyaller" },
  { time: "11:00", activity: "Açık Hava: Bahçe ve oyun alanında serbest keşif" },
  { time: "11:30", activity: "Keşif ve Problem Çözme Oyunları" },
  { time: "12:00", activity: "Öğle Yemeği" },
  { time: "12:30", activity: "Dinlenme / Sessiz Etkinlik (sakin zaman)" },
  { time: "13:30", activity: "Müzik ve Hareket: Ritim, dans, beden farkındalığı" },
  { time: "14:00", activity: "Atölye / Proje Çalışması" },
  { time: "15:00", activity: "İkindi Kahvaltısı" },
  { time: "15:30", activity: "Hikâye / Serbest Oyun / Bahçe" },
  { time: "17:00", activity: "Veli Karşılama Başlangıcı" },
  { time: "18:30", activity: "Okul Kapanışı" },
];
