import type { Metadata } from "next";
import SeoPageLayout from "@/components/SeoPageLayout";
import { atasehirAnaokulu } from "@/data/seo-pages";

export const metadata: Metadata = {
  title: atasehirAnaokulu.metaTitle,
  description: atasehirAnaokulu.metaDescription,
};

export default function AtasehirAnaokuluPage() {
  return <SeoPageLayout data={atasehirAnaokulu} />;
}
