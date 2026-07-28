import React from 'react';

export default function TopBar() {
  return (
    <header className="w-full bg-[#0d0722] border-b border-white/10 sticky top-0 z-50">
      {/* Banner Superior Roxa */}
      <div className="bg-[#9333ea] py-1.5 text-center text-xs font-semibold text-white tracking-wide">
        AUTO-DELIVERY ATIVO 24/7 • Entrega instantânea de códigos via Pix em segundos • 100% Garantido
      </div>

      {/* Navegação e Logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg overflow-hidden border-2 border-purple-400">
            🏎️
          </div>
          <div>
            <h1 className="font-bold text-lg text-white leading-tight">Carudo Recargas</h1>
            <p className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">• UNITV OFICIAL</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
          <a href="#duvidas" className="hover:text-white transition-colors">Dúvidas</a>
          <a href="#download" className="hover:text-white transition-colors flex items-center gap-1">
            <span>↓</span> Download
          </a>
        </nav>

        <a
          href="#planos"
          className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2"
        >
          <span>⚡</span> Comprar Agora
        </a>
      </div>
    </header>
  );
}