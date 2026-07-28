import React from "react";
import { CheckCircle2, ArrowRight, Flame } from "lucide-react";
import { handleBuy } from "@/lib/checkout";

const PLANOS = [
  {
    id: "mensal",
    nome: "Mensal",
    validade: "30 dias",
    preco: "R$ 30,00",
    destaque: ["TV ao vivo + Filmes e Séries", "Ativação em segundos", "Qualquer tela"],
    imagem: "https://media.base44.com/images/public/6a621943468c81361d253558/673e7ff8d_mensal.png",
    popular: false,
  },
  {
    id: "trimestral",
    nome: "Trimestral",
    validade: "90 dias",
    preco: "R$ 75,00",
    destaque: ["TV ao vivo + Filmes e Séries", "Ativação em segundos", "Qualquer tela"],
    imagem: "https://media.base44.com/images/public/6a621943468c81361d253558/5c8ee8191_trimestral.png",
    popular: false,
  },
  {
    id: "anual",
    nome: "Anual",
    validade: "365 dias",
    preco: "R$ 199,00",
    destaque: ["TV ao vivo + Filmes e Séries", "Ativação em segundos", "Qualquer tela"],
    imagem: "https://media.base44.com/images/public/6a621943468c81361d253558/ce58b6849_anual.png",
    popular: true,
  },
];

export default function PlanMatrix() {
  return (
    <section id="planos" className="bg-obsidian text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/50 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold text-fuchsia-300">
            <Flame className="h-3.5 w-3.5" /> Catálogo Digital
          </span>
          <h2 className="mt-5 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            Escolha seu plano de{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              recarga UniTV
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Pague no Pix e receba seu código de ativação na hora. Simples assim.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:gap-8 md:grid-cols-3 items-stretch">
          {PLANOS.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-3xl p-[1px] transition ${
                p.popular
                  ? "md:-mt-4 md:mb-4 bg-gradient-to-b from-fuchsia-500 via-violet-500/40 to-transparent shadow-[0_0_60px_-12px_rgba(192,38,211,0.55)]"
                  : "bg-white/10"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white text-xs font-bold px-4 py-1 shadow-[0_0_24px_-4px_rgba(192,38,211,0.8)]">
                  Mais Popular
                </span>
              )}
              <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-obsidian/80 backdrop-blur-xl flex flex-col overflow-hidden">
                {/* Full-bleed card image */}
                <div className="relative w-full bg-black">
                  <img
                    src={p.imagem}
                    alt={`Plano UniTV ${p.nome}`}
                    className="w-full object-contain max-h-72"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-heading font-extrabold text-2xl">{p.nome}</h3>
                  <p className="text-sm text-zinc-400">Válido por {p.validade}</p>
                  <div className="mt-3">
                    <span className="text-xs text-zinc-500">a partir de</span>
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent leading-none">
                      {p.preco}
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {p.destaque.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-zinc-200">
                        <CheckCircle2 className="h-4 w-4 text-fuchsia-400 mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBuy(p.id)}
                    aria-label={`Comprar plano ${p.nome}`}
                    className={`mt-6 inline-flex items-center justify-center gap-2 h-14 rounded-full font-bold text-base transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 ${
                      p.popular
                        ? "bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:brightness-110 text-white shadow-[0_0_30px_-6px_rgba(192,38,211,0.6)]"
                        : "bg-white/5 ring-1 ring-fuchsia-500/40 text-white hover:bg-fuchsia-600/20"
                    }`}
                  >
                    Comprar Agora <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-zinc-500">
          Pagamento via Pix • Entrega automática por e-mail/WhatsApp • Reembolso garantido
        </p>
      </div>
    </section>
  );
}