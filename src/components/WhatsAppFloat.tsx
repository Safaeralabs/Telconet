"use client";

import { company } from "@/lib/data";
import { Icons } from "./Icons";

export default function WhatsAppFloat() {
  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hola TecolNet, quiero información sobre sus planes de internet."
  )}`;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-4 pr-5 font-bold text-[#04230f] shadow-[0_12px_40px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <Icons.whatsapp className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Chatea con nosotros</span>
    </a>
  );
}
