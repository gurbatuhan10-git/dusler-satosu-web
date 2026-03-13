"use client";
import { useState } from "react";
import { ProgramTab } from "@/data/types";
import { CheckCircle } from "lucide-react";

interface Props {
  programs: ProgramTab[];
}

export default function Programs({ programs }: Props) {
  const [active, setActive] = useState(0);
  const prog = programs[active];

  return (
    <section className="section-padding bg-brand-acik">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge mb-4">Eğitim Programları</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-koyu mt-4">
            Yaşa Özel, Bilimsel Temelli Eğitim Programları
          </h2>
          <p className="text-brand-gri mt-4 leading-relaxed">
            İlk altı yıl, beynin ve duygusal gelişimin büyük kısmının tamamlandığı kritik bir penceredir.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {programs.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all ${
                active === i
                  ? "bg-brand-turkuaz text-white shadow-lg shadow-brand-turkuaz/25"
                  : "bg-white text-brand-koyu hover:bg-brand-turkuaz/5 border border-gray-200"
              }`}
            >
              {p.age}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="card max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="font-display font-bold text-xl text-brand-koyu">
              {prog.title}
            </h3>
            <p className="text-sm text-brand-turkuaz font-medium mt-1">
              {prog.subtitle}
            </p>
          </div>

          <p className="text-brand-gri leading-relaxed mb-6">{prog.intro}</p>

          <ul className="space-y-3">
            {prog.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-yesil flex-shrink-0 mt-0.5" />
                <span className="text-brand-koyu text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="#kayit" className="btn-primary">
            Çocuğunuz için en uygun programı birlikte belirleyelim
          </a>
        </div>
      </div>
    </section>
  );
}
