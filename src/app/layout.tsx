import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dusler Satosu Anaokulu — 24 Yildir Guvenle",
  description:
    "Atasehir'de 3 kampuste, 24 yillik deneyimle cocuk merkezli egitim. MEB onayli, uzman psikolog kadrosu. Ucretsiz okul ziyareti icin randevu alin.",
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
      </body>
    </html>
  );
}
