import type { Metadata } from "next";
import CampusPage from "@/components/CampusPage";
import JsonLd, { localBusinessSchema, faqSchema } from "@/components/JsonLd";
import { doguAtasehir } from "@/data/campuses";

export const metadata: Metadata = {
  title: doguAtasehir.metaTitle,
  description: doguAtasehir.metaDescription,
  alternates: { canonical: "/kampusler/dogu-atasehir" },
};

export default function DoguAtasehirPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema({ name: doguAtasehir.name, slug: doguAtasehir.slug, location: doguAtasehir.location })} />
      <JsonLd data={faqSchema(doguAtasehir.faq)} />
      <CampusPage data={doguAtasehir} />
    </>
  );
}
