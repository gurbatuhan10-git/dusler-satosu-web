# Claude Code Prompt — Aşağıdaki metni Claude Code'a yapıştır

---

Bu klasörde `dusler-satosu-clean` adında bir Next.js 14 prototip projesi var. Düşler Şatosu Anaokulu için 5 sayfalık landing page sitesi. Şunları sırasıyla yap:

## 1. Kurulum
- `npm install` ile bağımlılıkları yükle
- Herhangi bir hata varsa düzelt

## 2. Build & Test
- `npm run build` çalıştır
- Eğer TypeScript veya build hatası varsa düzelt ve tekrar dene
- Build başarılı olana kadar devam et

## 3. Canlı Önizleme
- `npm run dev` ile geliştirme sunucusunu başlat
- Tarayıcımda http://localhost:3000 açılabilir durumda olsun
- 5 sayfanın tamamını kontrol et:
  - /kampusler/bati-atasehir
  - /kampusler/dogu-atasehir
  - /kampusler/koc-universitesi
  - /atasehir-anaokulu
  - /atasehir-kres

## 4. Git & GitHub
- `git init` ile repo oluştur
- Tüm dosyaları commit et (node_modules hariç, .gitignore zaten mevcut)
- GitHub'da `dusler-satosu-web` adında yeni bir repo oluştur ve push et

## 5. Vercel Deploy
- Vercel CLI yoksa `npm i -g vercel` ile kur
- `vercel` komutuyla deploy et
- Deploy URL'ini bana ver

## Proje Hakkında Bilgi
- **Tech:** Next.js 14 (App Router) + Tailwind CSS + TypeScript + Lucide React
- **İçerik dosyaları:** `src/data/` klasöründe (campuses.ts, seo-pages.ts, shared.ts)
- **Bileşenler:** `src/components/` klasöründe (Hero, Programs, FAQ, CTA formu vb.)
- **Marka renkleri:** Turkuaz #4ABDBD, Fuşya #E91E8C, Turuncu #F7941D, Yeşil #8DC63F
- **docs/ klasöründe** orijinal içerik dokümanı var (Dusler_Satosu_LP_Final_v4.docx)

Her adımı tamamladıktan sonra sonucu bildir ve bir sonrakine geç.
