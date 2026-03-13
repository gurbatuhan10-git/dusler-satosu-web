import type { Metadata } from "next";
import CampusPage from "@/components/CampusPage";
import JsonLd, { localBusinessSchema, faqSchema } from "@/components/JsonLd";
import { batiAtasehir } from "@/data/campuses";

export const metadata: Metadata = {
  title: batiAtasehir.metaTitle,
  description: batiAtasehir.metaDescription,
  alternates: { canonical: "/kampusler/bati-atasehir" },
};

export default function BatiAtasehirPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema({ name: batiAtasehir.name, slug: batiAtasehir.slug, location: batiAtasehir.location })} />
      <JsonLd data={faqSchema(batiAtasehir.faq)} />
      <CampusPage data={batiAtasehir} />
    </>
  );
}
