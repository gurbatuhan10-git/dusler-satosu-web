# Dusler Satosu Anaokulu — Prototip Website

## Hizli Baslangic

```bash
# 1. Bagimliliklari yukle
npm install

# 2. Gelistirme sunucusunu baslat
npm run dev

# 3. Tarayicida ac: http://localhost:3000
```

## Vercel'e Deploy

### Yontem 1: GitHub + Vercel (Onerilen)

1. Bu klasoru GitHub'a push edin:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/KULLANICI_ADI/dusler-satosu-web.git
   git push -u origin main
   ```

2. [vercel.com](https://vercel.com) adresine gidin
3. "Import Project" > GitHub reponuzu secin
4. Ayar yapmadan "Deploy" butonuna basin — otomatik olarak alglanir

### Yontem 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Yapi

```
src/
  app/                          # Sayfa route'lari
    kampusler/
      bati-atasehir/page.tsx    # Sayfa 1
      dogu-atasehir/page.tsx    # Sayfa 2
      koc-universitesi/page.tsx # Sayfa 3
    atasehir-anaokulu/page.tsx  # Sayfa 4 (SEO)
    atasehir-kres/page.tsx      # Sayfa 5 (SEO)
  components/                   # UI bilesenleri
  data/                         # Icerik verileri (BURADA DUZENLEYIN)
    campuses.ts                 # 3 kampus icerigi
    seo-pages.ts                # 2 SEO sayfa icerigi
    shared.ts                   # Paylasilan programlar, FAQ, gunluk akis
    types.ts                    # TypeScript tanimlari
```

## Icerik Duzenleme

Tum icerik `src/data/` klasorundedir. Tasarima dokunmadan icerigi degistirmek icin:

- **Kampus metinleri**: `src/data/campuses.ts`
- **SEO sayfa metinleri**: `src/data/seo-pages.ts`
- **Paylasilan icerik** (programlar, FAQ, gunluk akis): `src/data/shared.ts`

## Tasarim Ozellestirme

- **Renkler**: `tailwind.config.ts` > `colors.brand`
- **Fontlar**: `tailwind.config.ts` > `fontFamily`
- **Global stiller**: `src/app/globals.css`
- **Bilesen tasarimlari**: `src/components/` klasorudeki dosyalar

## Fotograf Ekleme

Placeholder'lar `placeholder-img` class'i ile isaretlenmistir. Gercek fotograflarla degistirmek icin:

1. Fotograflari `public/images/` klasorune koyun
2. Ilgili bilesen dosyasindaki placeholder `<div>`'i `<Image>` bileseni ile degistirin

## Teknolojiler

- **Next.js 14** (App Router)
- **Tailwind CSS** (Utility-first styling)
- **TypeScript** (Tip guvenligi)
- **Lucide React** (Ikonlar)
