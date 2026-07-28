import React, { useState, useEffect, useCallback } from "react";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToId } from "@/lib/checkout";

const SHOWCASE = [
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/21d91fa4e_5.jpg",
    title: "Na Zona Cinzenta",
    desc: "Henry Cavill em uma missão de risco. Guy Ritchie dirige.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/b48c942a7_6.jpg",
    title: "Devoradores de Estrelas",
    desc: "Um astronauta sozinho tenta salvar a Terra no espaço sideral.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/bb8960e06_7.jpg",
    title: "A Revolução dos Bichos",
    desc: "Alegoria da revolução. A verdade sempre vence.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/bd0da5a8a_8.jpg",
    title: "Hit Para Dois",
    desc: "Uma cantora de casamentos, uma estrela do rock e a música entre elas.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/a11629d63_9.jpg",
    title: "Fome Fatal",
    desc: "Terror real e imprevisível. Na natureza, ninguém é o caçador.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/0f6a7c8f5_10.jpg",
    title: "Largados e Pelados: Campeões do Mundo",
    desc: "40 dias de sobrevivência pelo maior prêmio da história da franquia.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/1bc9b3b6f_11.jpg",
    title: "Mentes Criminosas",
    desc: "Temporada 19. Os casos do FBI contra os assassinos mais perigosos.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/33e551278_12.jpg",
    title: "Jogada de Risco",
    desc: "Um ex-jogador se reinventa como agente esportivo. Temporada 1.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/1d11ec6ba_13.jpg",
    title: "Anniversary",
    desc: "Uma família muito unida é dividida por um novo movimento.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/44781a17d_14.jpg",
    title: "A Morte de Robin Hood",
    desc: "Robin Hood ferido recebe uma chance de salvação nas mãos de uma misteriosa mulher.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/56e002eba_15.jpg",
    title: "Malakhit: Magia na Kanikulas",
    desc: "Três estudantes encontram uma pepita mágica de malakita. Temporada 1.",
  },
  {
    src: "https://media.base44.com/images/public/6a621943468c81361d253558/b4c1ae79e_16.jpg",
    title: "Unidos: Manchester City Tricampeão",
    desc: "A crônica da conquista histórica da temporada 2022-2023.",
  },
];

const PER_PAGE = 4;

export default function Showcase() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(SHOWCASE.length / PER_PAGE);

  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative overflow-hidden bg-obsidian text-white py-20 lg:py-28 border-t border-white/10">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-fuchsia-600/20 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-[360px] w-[360px] rounded-full bg-cyan-500/15 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/50 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold text-fuchsia-300">
            <Sparkles className="h-3.5 w-3.5" /> A experiência UniTV
          </span>
          <h2 className="mt-5 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Veja como é{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              o entretenimento sem limites
            </span>
          </h2>
        </div>

        <div className="mt-14 relative">
          {/* Carousel track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, p) => (
                <div key={p} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {SHOWCASE.slice(p * PER_PAGE, p * PER_PAGE + PER_PAGE).map((item) => (
                      <figure
                        key={item.src}
                        className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-fuchsia-500/50 via-violet-500/30 to-cyan-400/40 transition hover:from-fuchsia-500 hover:via-violet-500 hover:to-cyan-400"
                      >
                        <div className="relative rounded-[calc(1rem-1.5px)] bg-obsidian/90 backdrop-blur-xl overflow-hidden flex flex-col h-full">
                          <div className="relative overflow-hidden aspect-[2/3] bg-black w-full">
                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(192,38,211,0.18),transparent_70%)] z-10" />
                            <img
                              src={item.src}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
                            />
                          </div>
                          <figcaption className="p-3 sm:p-4 border-t border-white/10">
                            <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-tight">{item.title}</h3>
                            <p className="mt-1 text-xs text-zinc-400 leading-relaxed line-clamp-2">{item.desc}</p>
                          </figcaption>
                        </div>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Página anterior"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-11 w-11 rounded-full bg-obsidian ring-1 ring-fuchsia-500/40 hover:ring-fuchsia-500 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima página"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-11 w-11 rounded-full bg-obsidian ring-1 ring-fuchsia-500/40 hover:ring-fuchsia-500 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }).map((_, p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              aria-label={`Página ${p + 1}`}
              className={`h-2 rounded-full transition-all ${p === page ? "w-6 bg-fuchsia-500" : "w-2 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => scrollToId("planos")}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:brightness-110 text-white font-bold px-8 h-14 rounded-full text-base transition shadow-[0_0_40px_-8px_rgba(192,38,211,0.6)] focus:outline-none"
          >
            Quero a minha UniTV agora <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}