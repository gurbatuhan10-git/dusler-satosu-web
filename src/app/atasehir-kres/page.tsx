import type { Metadata } from "next";
import SeoPageLayout from "@/components/SeoPageLayout";
import { atasehirKres } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: atasehirKres.metaTitle,
  description: atasehirKres.metaDescription,
};

export default function AtasehirKresPage() {
  return <SeoPageLayout data={atasehirKres} />;
}
