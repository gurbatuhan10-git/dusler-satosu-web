import { CampusData } from "@/data/types";
import { Star, Clock } from "lucide-react";

interface Props {
  data: CampusData["branches"];
  campusName: string;
}

export default function Branches({ data, campusName }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Branches */}
          <div>
            <span className="badge mb-4">Branş Dersleri</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-koyu mt-4 mb-2">
              Tüm Branşlar Eğitim Ücretine Dahildir
            </h2>
            <p className="text-brand-gri leading-relaxed mb-8">
              Çocuğunuzun farklı alanlarda deneyim kazanması için tasarlanmış zengin branş programımız.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {data.list.map((branch) => {
                const isSpotlight = data.spotlight.some((s) =>
                  branch.includes(s)
                );
                return (
                  <div
                    key={branch}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      isSpotlight
                        ? "bg-brand-pembe/10 border border-brand-pembe/20"
                        : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    {isSpotlight && (
                      <Star className="w-4 h-4 text-brand-turuncu flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        isSpotlight ? "text-brand-pembe" : "text-brand-koyu"
                      }`}
                    >
                      {branch}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Daily Schedule */}
          <div>
            <span className="badge mb-4">Günlük Akış</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-koyu mt-4 mb-8">
              Düşler Şatosu {campusName}&apos;de Bir Gün
            </h2>

            <div className="space-y-0">
              {data.dailySchedule.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0 group hover:bg-brand-acik/50 px-3 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2 w-16 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-brand-pembe" />
                    <span className="text-sm font-mono font-semibold text-brand-pembe">
                      {item.time}
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-brand-pembe/30 flex-shrink-0" />
                  <span className="text-sm text-brand-koyu">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
