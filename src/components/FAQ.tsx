"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  items: { question: string; answer: string }[];
}

export default function FAQ({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-brand-acik">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10">
          <span className="badge mb-4">Sik Sorulan Sorular</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-koyu mt-4">
            Merak Ettikleriniz
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-semibold text-brand-koyu text-sm pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gri flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-brand-gri text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
