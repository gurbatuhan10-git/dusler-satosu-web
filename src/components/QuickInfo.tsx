import { CampusData } from "@/data/types";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

interface Props {
  data: CampusData["quickInfo"];
}

const icons = {
  yas: Calendar,
  saat: Clock,
  sinifMevcudu: Users,
  konum: MapPin,
};

const labels: Record<string, string> = {
  yas: "Yaş Grubu",
  saat: "Çalışma Saatleri",
  sinifMevcudu: "Sınıf Mevcudu",
  konum: "Konum",
};

export default function QuickInfo({ data }: Props) {
  return (
    <section className="relative -mt-8 z-10 px-4 md:px-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(Object.keys(data) as Array<keyof typeof data>).map((key) => {
            const Icon = icons[key];
            return (
              <div
                key={key}
                className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4 hover:shadow-lg transition-shadow border border-gray-50"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-turkuaz/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-turkuaz" />
                </div>
                <div>
                  <div className="text-xs text-brand-gri font-medium uppercase tracking-wider">
                    {labels[key]}
                  </div>
                  <div className="font-semibold text-brand-koyu mt-0.5">
                    {data[key]}
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
