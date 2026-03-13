import type { Metadata } from "next";
import CampusPage from "@/components/CampusPage";
import { doguAtasehir } from "@/data/campuses";

export const metadata: Metadata = {
  title: doguAtasehir.metaTitle,
  description: doguAtasehir.metaDescription,
};

export default function DoguAtasehirPage() {
  return <CampusPage data={doguAtasehir} />;
}
