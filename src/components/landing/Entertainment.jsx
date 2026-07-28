import React from "react";
import { Tv, Film, Star, Grid3x3, ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/checkout";

const FEATURES = [
  { icon: Tv, label: "Canais ao vivo" },
  { icon: Film, label: "Filmes e séries" },
  { icon: Star, label: "Conteúdos exclusivos" },
  { icon: Grid3x3, label: "Mais de 10.000 títulos" },
];

const ENTRETENIMENTO_IMG =
  "https://media.base44.com/images/public/6a621943468c81361d253558/d4c2a8edc_WhatsAppImage2026-07-17at113410.jpg";

export default function Entertainment() {
  return (
    <section className="bg-obsidian text-white py-20 lg:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-1.5 text-xs font-semibold text-electric">
            Destaque da loja
          </span>
          <h2 className="mt-5 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Todo o entretenimento que você ama,{" "}
            <span className="bg-gradient-to-r from-gold to-electric bg-clip-text text-transparent">
              em um só lugar
            </span>
          </h2>
          <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
            Com a recarga UniTV você assiste tudo — dos streamings mais
            populares aos maiores lançamentos de cinema.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-gold/10 ring-1 ring-gold/40 text-gold">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-zinc-200">{label}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToId("planos")}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:brightness-110 text-white font-bold px-7 h-14 rounded-full transition shadow-[0_0_40px_-8px_rgba(192,38,211,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
          >
            Assinar UniTV agora <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-gold/20 to-electric/20 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 overflow-hidden">
            <img
              src={ENTRETENIMENTO_IMG}
              alt="Família assistindo UniTV com filmes e séries em alta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}