import { CampusData } from "@/data/types";
import {
  Shield,
  Brain,
  GraduationCap,
  Users,
  MapPin,
  Music,
  Building,
  Leaf,
} from "lucide-react";

interface Props {
  data: CampusData["whyUs"];
  campusName: string;
}

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Brain,
  GraduationCap,
  Users,
  MapPin,
  Music,
  Building,
  Leaf,
};

export default function WhyUs({ data, campusName }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge mb-4">Neden Biz?</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-koyu mt-4">
            Neden Dusler Satosu {campusName}?
          </h2>
          <p className="text-brand-gri mt-4 leading-relaxed">{data.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Shield;
            return (
              <div key={i} className="card group hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-turkuaz/10 to-brand-yesil/10 flex items-center justify-center flex-shrink-0 group-hover:from-brand-turkuaz/20 group-hover:to-brand-yesil/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-turkuaz" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-brand-koyu mb-2">
                      {card.title}
                    </h3>
                    <p className="text-brand-gri leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
