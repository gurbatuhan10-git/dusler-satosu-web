import type { Metadata } from "next";
import SeoPageLayout from "@/components/SeoPageLayout";
import JsonLd, { faqSchema } from "@/components/JsonLd";
import { atasehirKres } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: atasehirKres.metaTitle,
  description: atasehirKres.metaDescription,
  alternates: { canonical: "/atasehir-kres" },
};

export default function AtasehirKresPage() {
  return (
    <>
      <JsonLd data={faqSchema(atasehirKres.faq)} />
      <SeoPageLayout data={atasehirKres} />
    </>
  );
}
