import type { Metadata } from "next";
import CampusPage from "@/components/CampusPage";
import { batiAtasehir } from "@/data/campuses";

export const metadata: Metadata = {
  title: batiAtasehir.metaTitle,
  description: batiAtasehir.metaDescription,
};

export default function BatiAtasehirPage() {
  return <CampusPage data={batiAtasehir} />;
}
