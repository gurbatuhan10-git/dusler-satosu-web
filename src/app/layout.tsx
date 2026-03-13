import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://dusler-satosu-web.vercel.app"),
  title: {
    default: "Düşler Şatosu Anaokulu — 24 Yıldır Güvenle",
    template: "%s | Düşler Şatosu",
  },
  description:
    "Ataşehir'de 3 kampüste, 24 yıllık deneyimle çocuk merkezli eğitim. MEB onaylı, uzman psikolog kadrosu. Ücretsiz okul ziyareti için randevu alın.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Düşler Şatosu Anaokulu",
    title: "Düşler Şatosu Anaokulu — 24 Yıldır Güvenle",
    description:
      "Ataşehir'de 3 kampüste, 24 yıllık deneyimle çocuk merkezli eğitim. MEB onaylı, uzman psikolog kadrosu.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 900, alt: "Düşler Şatosu Anaokulu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Düşler Şatosu Anaokulu",
    description:
      "Ataşehir'de 3 kampüste, 24 yıllık deneyimle çocuk merkezli eğitim.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
