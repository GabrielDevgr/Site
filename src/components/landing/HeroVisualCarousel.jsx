import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  "https://media.base44.com/images/public/6a621943468c81361d253558/72772410f_WhatsAppImage2026-07-17at113029.jpg",
  "https://media.base44.com/images/public/6a621943468c81361d253558/c40a8654a_Filmes.png",
  "https://media.base44.com/images/public/6a621943468c81361d253558/0df745ee1_Futebol.png",
];

export default function HeroVisualCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIdx((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        key={SLIDES[idx]}
        src={SLIDES[idx]}
        alt="UniTV"
        className="w-full object-contain block"
        style={{ animation: "heroFadeIn 0.6s ease" }}
      />

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-9 w-9 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur transition"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={next}
        aria-label="Próximo"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-9 w-9 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur transition"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-fuchsia-500" : "w-1.5 bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>

      <style>{`@keyframes heroFadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}