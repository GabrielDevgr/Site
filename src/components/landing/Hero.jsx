import React, { useEffect, useRef } from "react";
import { Zap, Clock, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { scrollToId } from "@/lib/checkout";
import HeroVisualCarousel from "@/components/landing/HeroVisualCarousel";

const HERO_BG =
  "https://media.base44.com/images/public/6a621943468c81361d253558/0f157c91c_WhatsAppImage2026-07-17at113409.jpg";

// Simulated TV titles that rotate on the "screen" overlay
const TV_TITLES = ["Stranger Things", "La Casa de Papel", "The Morning Show", "Scary Movie 6", "Money Heist X"];

const PERKS = [
  { icon: Zap, label: "Envio instantâneo via API" },
  { icon: ShieldCheck, label: "Checkout criptografado" },
  { icon: Clock, label: "Suporte 24/7" },
];

export default function Hero() {
  const tickerRef = useRef(null);
  const [titleIdx, setTitleIdx] = React.useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTitleIdx((i) => (i + 1) % TV_TITLES.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="topo" className="relative overflow-hidden bg-obsidian text-white">
      {/* Full-bleed cinematic backdrop */}
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/80 to-obsidian/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian" />
      {/* neon ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-fuchsia-600/30 blur-[140px]" />
      <div className="pointer-events-none absolute top-24 -right-32 h-[480px] w-[480px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/50 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold text-fuchsia-300">
              <Star className="h-3.5 w-3.5 fill-fuchsia-400 text-fuchsia-400" /> Loja digital automatizada
            </span>
            <h1 className="mt-6 font-heading font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Sua janela para o{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                entretenimento sem limites
              </span>
              .
            </h1>

            {/* Animated TV ticker */}
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/5 px-4 py-2.5 max-w-sm overflow-hidden">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse shrink-0" />
              <span className="text-sm text-zinc-300">Em alta agora: </span>
              <span
                key={titleIdx}
                className="text-sm font-bold text-fuchsia-300 truncate"
                style={{ animation: "fadeSlideIn 0.4s ease" }}
              >
                {TV_TITLES[titleIdx]}
              </span>
            </div>

            <p className="mt-5 text-lg text-zinc-300 max-w-xl leading-relaxed">
              Recargas UniTV com pagamento via Pix e entrega do código de ativação em menos de 10 segundos. Sem espera, sem complicação.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToId("planos")}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:brightness-110 text-white font-bold px-7 h-14 rounded-full text-base transition shadow-[0_0_40px_-8px_rgba(192,38,211,0.6)] focus:outline-none"
              >
                <Zap className="h-5 w-5" /> Comprar Agora via Pix
              </button>
              <button
                onClick={() => scrollToId("como-funciona")}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-fuchsia-400/60 text-white font-semibold px-7 h-14 rounded-full text-base transition"
              >
                Como funciona <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {PERKS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-white/5 ring-1 ring-fuchsia-500/50">
                    <Icon className="h-3.5 w-3.5 text-fuchsia-300" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero visual — full image, no crop */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-fuchsia-600/40 via-violet-600/30 to-cyan-500/30 blur-2xl" />
              <div className="relative rounded-[2rem] border border-fuchsia-500/30 bg-black/40 backdrop-blur-xl overflow-hidden">
                <HeroVisualCarousel />
                {/* Animated "NOW PLAYING" badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap rounded-full bg-black/70 backdrop-blur border border-fuchsia-500/50 text-white text-xs font-bold px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
                  <span
                    key={titleIdx}
                    style={{ animation: "fadeSlideIn 0.4s ease" }}
                  >
                    {TV_TITLES[titleIdx]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* quick-select bar */}
        <div className="mt-16 lg:mt-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <span className="px-2 text-xs uppercase tracking-widest text-zinc-400">Acesso rápido</span>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: "mensal", label: "Mensal — 30 dias" },
                { id: "trimestral", label: "Trimestral — 90 dias" },
                { id: "anual", label: "Anual — 365 dias", hot: true },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => scrollToId("planos")}
                  className={`group flex items-center justify-between rounded-xl px-4 h-12 text-sm font-semibold transition focus:outline-none ${
                    p.hot
                      ? "bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white"
                      : "bg-white/5 text-white hover:bg-white/10 ring-1 ring-fuchsia-500/30"
                  }`}
                >
                  {p.label}
                  <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}