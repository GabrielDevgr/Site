import React from "react";
import { Headphones, ShieldCheck, Zap, MessageCircle } from "lucide-react";
import { scrollToId } from "@/lib/checkout";

const LOGO_URL =
  "https://media.base44.com/images/public/6a621943468c81361d253558/2cdb463f6_CARUDORECARGAS.png";

const WHATSAPP_URL = "https://wa.me/5500000000000";

export default function SiteFooter() {
  return (
    <footer 
      translate="no" 
      className="notranslate bg-obsidian text-white border-t border-white/10"
    >
      {/* trust badges strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid sm:grid-cols-3 gap-4">
        {[
          { icon: MessageCircle, label: "Suporte via WhatsApp", href: WHATSAPP_URL },
          { icon: ShieldCheck, label: "Entrega garantida" },
          { icon: Zap, label: "Entrega em < 10 segundos" },
        ].map(({ icon: Icon, label, href }) => {
          const inner = (
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-gold/40 transition">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-gold/10 ring-1 ring-gold/40 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-semibold text-sm">{label}</span>
            </div>
          );
          return href ? (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              {inner}
            </a>
          ) : (
            <div key={label}>{inner}</div>
          );
        })}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Carudo Recargas"
                className="h-16 w-auto max-w-[180px] object-contain"
              />
              <div>
                <div className="font-heading font-extrabold text-lg">
                  Carudo<span className="text-gold"> Recargas</span>
                </div>
                <div className="text-xs text-zinc-500">Sua diversão. Suas regras. Sua UniTV.</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-400 max-w-xs leading-relaxed">
              Loja digital automatizada de recargas UniTV. Pagamento via Pix com
              entrega instantânea do código de ativação.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-300 mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><button onClick={() => scrollToId("planos")} className="hover:text-gold">Planos</button></li>
              <li><button onClick={() => scrollToId("como-funciona")} className="hover:text-gold">Como funciona</button></li>
              <li><button onClick={() => scrollToId("duvidas")} className="hover:text-gold">Dúvidas</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-300 mb-3">Suporte 24/7</h4>
            <p className="text-sm text-zinc-400 mb-4">
              Ficou com dúvida? Fale agora com o suporte pelo WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:brightness-110 text-white font-bold px-5 h-12 text-sm transition shadow-[0_0_30px_-6px_rgba(192,38,211,0.6)]"
            >
              <Headphones className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} Carudo Recargas. Todos os direitos reservados.</span>
            <span>UniTV • A sua TV inteligente</span>
          </div>
        </div>
      </div>
    </footer>
  );
}