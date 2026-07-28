import React from "react";

const SERVICES = [
  { name: "Netflix", img: "https://media.base44.com/images/public/6a621943468c81361d253558/aa8e42fa4_netflix.png", bg: "bg-black" },
  { name: "Prime Video", img: "https://media.base44.com/images/public/6a621943468c81361d253558/dd20d4250_primeVideo.png", bg: "bg-[#00A8E1]" },
  { name: "Disney+", img: "https://media.base44.com/images/public/6a621943468c81361d253558/fa359868e_disney-plus.jpg", bg: "bg-[#113CCF]" },
  { name: "HBO Max", img: "https://media.base44.com/images/public/6a621943468c81361d253558/1ee33a43d_hbo.jpg", bg: "bg-[#1E3E7B]" },
  { name: "Globoplay", img: "https://media.base44.com/images/public/6a621943468c81361d253558/8ad1c7e12_globoplayicon.png", bg: "bg-[#F03021]" },
  { name: "Apple TV+", img: "https://media.base44.com/images/public/6a621943468c81361d253558/2fdcc9716_apple-tv.png", bg: "bg-black" },
  { name: "Paramount+", img: "https://media.base44.com/images/public/6a621943468c81361d253558/0f5d37677_paramount.png", bg: "bg-[#0064FF]" },
  { name: "Twitch", img: "https://media.base44.com/images/public/6a621943468c81361d253558/f4331c8de_twitch.png", bg: "bg-[#9146FF]" },
];

export default function StreamingBar() {
  return (
    <section className="bg-obsidian border-y border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8">
          Todos os streamings em um só lugar
        </p>
        <div className="flex flex-wrap items-end justify-center gap-5">
          {SERVICES.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2 group">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${s.bg} flex items-center justify-center overflow-hidden ring-1 ring-white/10 transition group-hover:ring-fuchsia-500/60 group-hover:scale-105`}>
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-zinc-400 group-hover:text-white transition text-center leading-tight max-w-[72px]">
                {s.name}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-700 flex items-center justify-center ring-1 ring-fuchsia-500/50">
              <span className="text-white font-extrabold text-sm text-center leading-tight px-1">E muito mais!</span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-fuchsia-400 text-center leading-tight max-w-[72px]">+10.000 títulos</span>
          </div>
        </div>
      </div>
    </section>
  );
}