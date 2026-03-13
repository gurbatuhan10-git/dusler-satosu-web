import { CampusData } from "@/data/types";
import { CheckCircle } from "lucide-react";

interface Props {
  data: NonNullable<CampusData["extraSection"]>;
}

export default function ExtraSection({ data }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="card bg-gradient-to-br from-brand-acik to-brand-krem border border-brand-pembe/10">
          <h2 className="font-display font-bold text-xl md:text-2xl text-brand-koyu mb-3">
            {data.title}
          </h2>
          <p className="text-brand-gri leading-relaxed mb-6">{data.content}</p>

          {data.items && (
            <ul className="space-y-3">
              {data.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-yesil flex-shrink-0 mt-0.5" />
                  <span className="text-brand-koyu text-sm">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
