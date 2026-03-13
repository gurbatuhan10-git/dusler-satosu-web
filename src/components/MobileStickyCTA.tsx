"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <a
          href="tel:+902165551234"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-brand-turkuaz"
        >
          <Phone className="w-4 h-4" />
          Hemen Ara
        </a>
        <a
          href="https://wa.me/902165551234?text=Merhaba%2C%20okul%20ziyareti%20randevusu%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-[#25D366]"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
