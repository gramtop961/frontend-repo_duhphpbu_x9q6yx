import React, { useEffect, useRef, useState } from 'react';

export default function ParallaxHero() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(window.scrollY || window.pageYOffset));
    };

    const handleMouse = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1..1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1..1
      setMouse({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  // Parallax factors (smaller is slower / further away)
  const fBg = 0.15; // background gradient
  const fStars = 0.25; // stars layer
  const fClouds = 0.4; // clouds
  const fMountainsFar = 0.55; // distant mountains
  const fMountainsNear = 0.8; // near mountains

  return (
    <section ref={containerRef} className="relative isolate min-h-[90vh] overflow-hidden bg-zinc-950 text-white" aria-label="Hero con effetto parallasse">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${offset * fBg}px)`
        }}
      >
        <div className="absolute -top-40 -left-40 h-[60rem] w-[60rem] rounded-full bg-gradient-to-br from-indigo-600/50 via-fuchsia-500/40 to-pink-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[50rem] w-[50rem] rounded-full bg-gradient-to-tr from-sky-500/30 via-cyan-500/30 to-emerald-400/30 blur-3xl" />
      </div>

      {/* Stars layer */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          transform: `translateY(${offset * fStars}px) translateX(${mouse.x * 10}px)`,
          backgroundImage:
            'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8) 50%, transparent 51%), ' +
            'radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.6) 50%, transparent 51%), ' +
            'radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.7) 50%, transparent 51%), ' +
            'radial-gradient(2px 2px at 80% 60%, rgba(255,255,255,0.7) 50%, transparent 51%)',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Clouds layer */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-20 h-64 opacity-80"
        style={{
          transform: `translateY(${offset * fClouds}px) translateX(${mouse.x * 15}px)`
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cloud" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
            </linearGradient>
          </defs>
          <path d="M0,120 C120,90 240,150 360,130 C480,110 600,60 720,80 C840,100 960,160 1080,150 C1140,146 1200,130 1200,130 L1200,300 L0,300 Z" fill="url(#cloud)" />
        </svg>
      </div>

      {/* Mountains - far */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{
          transform: `translateY(${offset * fMountainsFar}px) translateX(${mouse.x * 6}px)`
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M0,300 L200,160 L340,260 L520,120 L700,240 L860,150 L1100,280 L1200,260 L1200,400 L0,400 Z" fill="#2b2f3a" />
        </svg>
      </div>

      {/* Mountains - near */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[45vh]"
        style={{
          transform: `translateY(${offset * fMountainsNear}px) translateX(${mouse.x * 3}px)`
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M0,320 L160,220 L300,320 L460,180 L640,300 L820,210 L980,320 L1200,260 L1200,400 L0,400 Z" fill="#1f2430" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Nuovo: effetto parallasse più fluido
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-[1.1]">
            Un bell'effetto parallasse, morbido e reattivo
          </h1>
          <p className="mt-5 text-zinc-300 text-lg">
            Muovi il mouse e scorri la pagina: gli elementi sullo sfondo si muovono a velocità diverse creando profondità e una sensazione di immersione.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#features" className="inline-flex items-center rounded-md bg-white text-zinc-900 px-5 py-3 text-sm font-medium shadow hover:shadow-md transition">
              Scopri di più
            </a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-transparent ring-1 ring-white/30 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              Provalo ora
            </a>
          </div>
        </div>
      </div>

      {/* Gradient overlay for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
