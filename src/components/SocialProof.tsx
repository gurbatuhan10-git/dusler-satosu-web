import { CampusData } from "@/data/types";
import { Quote, Heart } from "lucide-react";

interface Props {
  data: CampusData["socialProof"];
}

export default function SocialProof({ data }: Props) {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-koyu to-brand-koyu/95 text-white">
      <div className="container-custom">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {data.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-brand-turkuaz">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-turkuaz text-sm font-medium rounded-full">
            <Heart className="w-3.5 h-3.5" /> Ailelerimizden
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl mt-4">
            Velilerimiz Ne Diyor?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <Quote className="w-8 h-8 text-brand-turkuaz/40 mb-4" />
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-turkuaz/20 flex items-center justify-center text-brand-turkuaz font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.author}</div>
                  <div className="text-xs text-gray-500">{t.child}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Family Consulting */}
        {data.familyConsulting && (
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-display font-semibold text-lg text-brand-turkuaz mb-2">
                Aile Danismanligi Hizmeti
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {data.familyConsulting}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
