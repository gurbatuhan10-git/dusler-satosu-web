import type { Metadata } from "next";
import CampusPage from "@/components/CampusPage";
import JsonLd, { localBusinessSchema, faqSchema } from "@/components/JsonLd";
import { kocUniversitesi } from "@/data/campuses";

export const metadata: Metadata = {
  title: kocUniversitesi.metaTitle,
  description: kocUniversitesi.metaDescription,
  alternates: { canonical: "/kampusler/koc-universitesi" },
};

export default function KocUniversitesiPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema({ name: kocUniversitesi.name, slug: kocUniversitesi.slug, location: kocUniversitesi.location })} />
      <JsonLd data={faqSchema(kocUniversitesi.faq)} />
      <CampusPage data={kocUniversitesi} />
    </>
  );
}
