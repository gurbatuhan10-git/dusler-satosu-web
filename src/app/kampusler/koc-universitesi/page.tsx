import type { Metadata } from "next";
import CampusPage from "@/components/CampusPage";
import { kocUniversitesi } from "@/data/campuses";

export const metadata: Metadata = {
  title: kocUniversitesi.metaTitle,
  description: kocUniversitesi.metaDescription,
};

export default function KocUniversitesiPage() {
  return <CampusPage data={kocUniversitesi} />;
}
