import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronDown, ShoppingBag, Info, MapPin, Waves } from 'lucide-react';

export default function HeroSurface() {
  const sectionRef = useRef(null);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-sky-200 via-cyan-100 to-sky-50 text-slate-800"
    >
      {/* Spline ocean waves scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft color overlay for watercolor vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-sky-100/60 mix-blend-soft-light" />

      {/* Header brand */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 shadow-lg ring-2 ring-white/60" />
          <h1 className="font-semibold tracking-wider text-slate-800/90 drop-shadow-sm" style={{ fontFamily: 'IBM Plex Sans, ui-sans-serif' }}>
            Island Plus
          </h1>
        </div>
        <nav className="hidden gap-6 md:flex">
          <button onClick={() => handleScrollTo('shop')} className="transition-colors hover:text-sky-700">Shop</button>
          <button onClick={() => handleScrollTo('about')} className="transition-colors hover:text-sky-700">About</button>
          <button onClick={() => handleScrollTo('contact')} className="transition-colors hover:text-sky-700">Find Us</button>
        </nav>
      </div>

      {/* Floating categories like buoys/driftwood labels */}
      <div className="relative z-10 mx-auto mt-20 flex max-w-5xl flex-wrap items-center justify-center gap-4 px-6 md:mt-28">
        {[
          { label: 'Socks', icon: Waves },
          { label: 'T‑Shirts', icon: ShoppingBag },
          { label: 'Accessories', icon: Info },
          { label: 'Recycled', icon: MapPin },
        ].map((item, idx) => (
          <button
            key={item.label}
            onClick={() => handleScrollTo('shop')}
            className="group relative isolate rounded-xl border border-white/50 bg-gradient-to-br from-sky-100/80 to-cyan-100/60 px-5 py-3 text-slate-700 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-xl"
            style={{
              transform: `translateY(${Math.sin(idx) * 4}px)`,
            }}
          >
            <span className="pointer-events-none absolute -inset-px rounded-xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-sky-700" />
              <span className="font-medium tracking-wide" style={{ fontFamily: 'Manrope, ui-sans-serif' }}>{item.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Tagline */}
      <div className="relative z-10 mx-auto mt-10 max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold leading-tight text-slate-800/95 md:text-5xl" style={{ fontFamily: 'IBM Plex Sans, ui-sans-serif' }}>
          Drift into the blue. Discover slow-made goods beneath the waves.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-700/90 md:text-lg">
          Minimal, ocean‑inspired pieces crafted from recycled materials.
        </p>
      </div>

      {/* Dive cue */}
      <div className="relative z-10 mt-16 flex items-center justify-center">
        <button
          onClick={() => handleScrollTo('shop')}
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-white/60 px-4 py-2 text-sky-800 shadow-md backdrop-blur-md transition hover:bg-white"
          aria-label="Dive to shop"
        >
          Dive below
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>

      {/* Gentle top light rays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 via-white/30 to-transparent" />
    </section>
  );
}
