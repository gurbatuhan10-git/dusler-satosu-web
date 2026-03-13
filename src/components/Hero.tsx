import { CampusData } from "@/data/types";
import { Play, MessageCircle } from "lucide-react";

interface Props {
  data: CampusData["hero"];
  campusName: string;
}

export default function Hero({ data, campusName }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-acik via-white to-brand-krem">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {data.badges.map((badge) => (
                <span key={badge} className="badge">{badge}</span>
              ))}
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-koyu leading-tight">
              {data.headline}
            </h1>

            <p className="text-lg text-brand-gri leading-relaxed max-w-xl">
              {data.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#kayit" className="btn-primary">
                {data.cta1}
              </a>
              <a
                href={`https://wa.me/902165551234?text=${encodeURIComponent(`Merhaba, ${campusName} kampusu hakkinda bilgi almak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                {data.cta2}
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl placeholder-img text-center p-8 border-2 border-dashed border-brand-turkuaz/30">
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-turkuaz/20 flex items-center justify-center">
                  <Play className="w-8 h-8 text-brand-turkuaz ml-1" />
                </div>
                <p className="text-sm text-brand-gri font-medium">
                  {data.imageAlt}
                </p>
                <p className="text-xs text-brand-gri/60">
                  Profesyonel fotograf veya 360° sanal tur
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 border border-gray-100">
              <div className="text-xs text-brand-gri">Deneyim</div>
              <div className="font-display font-bold text-2xl text-brand-turkuaz">24 Yil</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-turkuaz/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yesil/5 rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
