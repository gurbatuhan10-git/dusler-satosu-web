import { CampusData } from "@/data/types";
import Hero from "./Hero";
import QuickInfo from "./QuickInfo";
import WhyUs from "./WhyUs";
import Programs from "./Programs";
import Branches from "./Branches";
import SocialProof from "./SocialProof";
import ExtraSection from "./ExtraSection";
import FAQ from "./FAQ";
import CTASection from "./CTASection";

interface Props {
  data: CampusData;
}

export default function CampusPage({ data }: Props) {
  return (
    <>
      <Hero data={data.hero} campusName={data.name} />
      <QuickInfo data={data.quickInfo} />
      <WhyUs data={data.whyUs} campusName={data.name} />
      <Programs programs={data.programs} />
      <Branches data={data.branches} campusName={data.name} />
      <SocialProof data={data.socialProof} />
      {data.extraSection && <ExtraSection data={data.extraSection} />}
      <FAQ items={data.faq} />
      <CTASection data={data.ctaSection} campusName={data.name} />
    </>
  );
}
