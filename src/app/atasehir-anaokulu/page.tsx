import type { Metadata } from "next";
import SeoPageLayout from "@/components/SeoPageLayout";
import JsonLd, { faqSchema } from "@/components/JsonLd";
import { atasehirAnaokulu } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: atasehirAnaokulu.metaTitle,
  description: atasehirAnaokulu.metaDescription,
  alternates: { canonical: "/atasehir-anaokulu" },
};

export default function AtasehirAnaokuluPage() {
  return (
    <>
      <JsonLd data={faqSchema(atasehirAnaokulu.faq)} />
      <SeoPageLayout data={atasehirAnaokulu} />
    </>
  );
}
