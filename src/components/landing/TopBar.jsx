import React, { useState } from 'react';
import { Tv, Wifi, Smartphone, X, Download, ShoppingCart } from 'lucide-react';
import logoImg from '../../assets/logo.png'; // Caminho correto voltando 2 pastas (landing -> components -> src)

export default function TopBar() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <header className="w-full bg-[#0d0722] border-b border-white/10 sticky top-0 z-50">
      {/* Banner Superior Roxo */}
      <div className="bg-[#9333ea] py-1.5 text-center text-xs font-semibold text-white tracking-wide">
        AUTO-DELIVERY ATIVO 24/7 • Entrega instantânea de códigos via Pix em segundos • 100% Garantido
      </div>

      {/* Navegação e Logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoImg} 
            alt="Carudo Recargas" 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.4)]" 
          />
          <div>
            <h1 className="font-bold text-lg text-white leading-tight">Carudo Recargas</h1>
            <p className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">• UNITV OFICIAL</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
          <a href="#duvidas" className="hover:text-white transition-colors">Dúvidas</a>
          
          {/* Botão que abre a janela flutuante */}
          <div className="relative">
            <button 
              onClick={() => setIsDownloadOpen(!isDownloadOpen)}
              className="hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
            >
              <Download className="w-4 h-4" /> Download
            </button>

            {/* Modal / Janela Flutuante de Download */}
            {isDownloadOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#0c071e]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-4 z-50">
                
                {/* Cabeçalho do Modal */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-white tracking-wider">BAIXAR UNITV</span>
                  <button 
                    onClick={() => setIsDownloadOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Opções de Download */}
                <div className="space-y-2">
                  {/* Smart TV */}
                  <a 
                    href="https://github.com/GabrielDevgr/DownloadsUniTV/releases/download/V1/Smartv.apk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <Tv className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Smart TV</p>
                      <p className="text-[11px] text-slate-400">Samsung, LG, TCL...</p>
                    </div>
                  </a>

                  {/* TV Box */}
                  <a 
                    href="https://github.com/GabrielDevgr/DownloadsUniTV/releases/download/V1/TVbox.apk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <Wifi className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">TV Box</p>
                      <p className="text-[11px] text-slate-400">Android Box, Formuler...</p>
                    </div>
                  </a>

                  {/* Mobile */}
                  <a 
                    href="https://github.com/GabrielDevgr/DownloadsUniTV/releases/download/V1/Mobile.apk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Mobile</p>
                      <p className="text-[11px] text-slate-400">Android e iOS</p>
                    </div>
                  </a>
                </div>

              </div>
            )}
          </div>
        </nav>

        {/* Botão de Alta Conversão */}
        <a
          href="#planos"
          className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 active:scale-95 flex items-center gap-2 group"
        >
          <ShoppingCart className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          <span>Comprar Agora</span>
        </a>
      </div>
    </header>
  );
}