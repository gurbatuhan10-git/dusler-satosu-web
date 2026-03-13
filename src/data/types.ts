export interface CampusData {
  slug: string;
  name: string;
  fullName: string;
  location: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
    badges: string[];
    imageAlt: string;
  };
  quickInfo: {
    yas: string;
    saat: string;
    sinifMevcudu: string;
    konum: string;
  };
  whyUs: {
    intro: string;
    cards: { icon: string; title: string; description: string }[];
  };
  programs: ProgramTab[];
  branches: {
    list: string[];
    spotlight: string[];
    dailySchedule: ScheduleItem[];
  };
  socialProof: {
    stats: { value: string; label: string }[];
    testimonials: { text: string; author: string; child: string }[];
    familyConsulting?: string;
  };
  faq: { question: string; answer: string }[];
  ctaSection: {
    headline: string;
    subtext: string;
    urgencyText?: string;
  };
  extraSection?: {
    title: string;
    content: string;
    items?: string[];
  };
}

export interface ProgramTab {
  age: string;
  title: string;
  subtitle: string;
  intro: string;
  items: string[];
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface SeoPageData {
  slug: string;
  type: "anaokulu" | "kres";
  metaTitle: string;
  metaDescription: string;
  hero: {
    headline: string;
    subheadline: string;
    badges: string[];
  };
  intro: string;
  campusLinks: { name: string; slug: string; highlight: string }[];
  sharedContent: {
    methodology: string;
    methodologyItems: string[];
    healthProtocol: string;
    nutrition: string;
  };
  faq: { question: string; answer: string }[];
  ctaSection: {
    headline: string;
    subtext: string;
  };
}
