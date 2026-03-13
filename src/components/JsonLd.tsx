interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessSchema(campus: {
  name: string;
  slug: string;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: `Düşler Şatosu ${campus.name} Anaokulu`,
    description: `Ataşehir ${campus.name}'de 24 yıllık deneyimle çocuk merkezli eğitim. MEB onaylı anaokulu.`,
    url: `https://dusler-satosu-web.vercel.app/kampusler/${campus.slug}`,
    telephone: "+902165551234",
    address: {
      "@type": "PostalAddress",
      addressLocality: campus.location,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9923,
      longitude: 29.1244,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:30",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "Düşler Şatosu Anaokulu",
      url: "https://dusler-satosu-web.vercel.app",
      foundingDate: "2002",
      numberOfEmployees: "50+",
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
