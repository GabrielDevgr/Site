import React, { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";

const FAQS = [
  {
    q: "Quão rápida é a entrega?",
    a: "Extremamente rápida. Assim que o Pix é confirmado, nosso sistema envia seu código de ativação automaticamente por e-mail — normalmente em menos de 10 segundos.",
  },
  {
    q: "Vocês funcionam às 3 da manhã?",
    a: "Sim. A entrega é 100% automatizada e roda 24 horas por dia, 7 dias por semana. Não importa o horário, o Carudo não dorme no ponto.",
  },
  {
    q: "O Pix é automático mesmo?",
    a: "É automático. O pagamento é confirmado na hora pela API do Pix e o código é liberado sem precisar de aprovação manual ou falar com atendente.",
  },
  {
    q: "E se meu código não chegar?",
    a: "Nossa garantia é total: em caso de qualquer falha, fazemos o reenvio imediato ou o reembolso. Nosso suporte 24/7 está pronto para resolver.",
  },
  {
    q: "Quais produtos posso comprar?",
    a: "Recargas UniTV (mensal, trimestral e anual). O catálogo é atualizado com frequência.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    /* id alterado para "duvidas" para bater com o href="#duvidas" do TopBar */
    /* translate="no" e className="notranslate" impedem traduções automáticas bizarras no mobile */
    <section 
      id="duvidas" 
      translate="no" 
      className="notranslate bg-obsidian text-white py-20 lg:py-28 border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div className="text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-zinc-400">
            Direto ao ponto. Se ficou alguma dúvida, o suporte responde na hora.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-white">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-zinc-300 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-zinc-400">
          <ShieldCheck className="h-5 w-5 text-gold" />
          Entrega e satisfação 100% garantidas — reembolso ou reenvio imediato.
        </div>
      </div>
    </section>
  );
}