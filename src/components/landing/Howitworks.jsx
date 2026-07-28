import React from 'react';
import { MousePointer, CreditCard, Mail, Tv, Radio, Smartphone } from 'lucide-react';

export default function Howitworks() {
  const steps = [
    {
      number: '01',
      icon: <MousePointer className="w-5 h-5 text-purple-400" />,
      title: 'Escolha seu plano',
      description: 'Selecione a recarga UniTV ideal: mensal, trimestral ou anual.',
    },
    {
      number: '02',
      icon: <CreditCard className="w-5 h-5 text-purple-400" />,
      title: 'Pague com Pix instantâneo',
      description: 'Checkout criptografado. O Pix é confirmado automaticamente em segundos.',
    },
    {
      number: '03',
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      title: 'Receba o código na hora',
      description: 'Seu código de ativação chega instantaneamente no e-mail/WhatsApp. Sem espera.',
    },
  ];

  const devices = [
    {
      icon: <Tv className="w-5 h-5 text-purple-400" />,
      title: 'Smart TV',
      subtitle: 'Samsung, LG, TCL e outros',
    },
    {
      icon: <Radio className="w-5 h-5 text-purple-400" />,
      title: 'TV Box',
      subtitle: 'Android Box, Formuler e mais',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      title: 'Mobile',
      subtitle: 'Android e iOS',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Título da Seção */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Como funciona — <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">3 passos</span>
        </h2>
        <p className="text-slate-400 text-sm">Rápido, automático e sem enrolação.</p>
      </div>

      {/* Grid com os 3 Passos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#120a21]/60 border border-purple-900/30 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/20 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-2xl font-black text-slate-700/50 select-none">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bloco do "Baixe o app UniTV" */}
      <div className="bg-[#120a21]/40 border border-purple-900/30 rounded-2xl p-6 md:p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-1">Baixe o app UniTV</h3>
          <p className="text-slate-400 text-xs">Disponível para Smart TV, TV Box e celular.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {devices.map((device, index) => (
            <div
              key={index}
              className="bg-[#180f2d]/80 border border-purple-900/20 rounded-xl p-4 flex items-center gap-4 hover:border-purple-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center shrink-0">
                {device.icon}
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{device.title}</h4>
                <p className="text-slate-400 text-[11px]">{device.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}