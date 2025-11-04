import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Leaf, Recycle, Droplets } from 'lucide-react';

const products = [
  { id: 1, name: 'Seafoam Socks', price: '$18', tag: 'Recycled cotton', color: 'from-cyan-300 to-sky-400' },
  { id: 2, name: 'Drift Tee', price: '$28', tag: 'Organic dye', color: 'from-sky-300 to-teal-400' },
  { id: 3, name: 'Coral Cap', price: '$24', tag: 'Upcycled textile', color: 'from-teal-300 to-cyan-400' },
  { id: 4, name: 'Tide Tote', price: '$32', tag: 'Ocean plastic', color: 'from-sky-300 to-blue-400' },
  { id: 5, name: 'Pearl Scarf', price: '$22', tag: 'Bamboo fiber', color: 'from-cyan-300 to-teal-400' },
  { id: 6, name: 'Harbor Pins', price: '$12', tag: 'Reclaimed brass', color: 'from-teal-300 to-sky-400' },
];

export default function ShopUnderwater() {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      controls.start({ opacity: 0.5 + progress * 0.5, y: -progress * 10 });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  const handleParallax = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const layers = document.querySelectorAll('[data-parallax]');
    layers.forEach((el, i) => {
      const depth = (i + 1) * 2.5;
      el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  };

  return (
    <section
      id="shop"
      ref={containerRef}
      onMouseMove={handleParallax}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-cyan-200 via-sky-300 to-blue-500 text-white"
    >
      {/* Water surface shimmer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/50 via-white/10 to-transparent" />

      {/* Floating particles/bubbles */}
      <Bubbles />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20">
        <h3 className="text-3xl font-semibold drop-shadow-md md:text-4xl" style={{ fontFamily: 'IBM Plex Sans, ui-sans-serif' }}>
          Submarine Market
        </h3>
        <p className="mt-2 max-w-2xl text-white/85">
          Cozy finds floating at arm’s reach. Gentle currents, recycled stories.
        </p>
      </div>

      {/* Product grid with subtle parallax motion */}
      <motion.div
        animate={controls}
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((p, idx) => (
          <motion.div
            key={p.id}
            data-parallax
            whileHover={{ y: -6, rotate: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md"
          >
            <div className={`pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-40 blur-2xl transition-opacity group-hover:opacity-60`} />
            <div className="relative z-10 flex h-40 items-center justify-center">
              <div className={`h-24 w-24 rounded-xl bg-gradient-to-br ${p.color} shadow-inner`} />
            </div>
            <div className="relative z-10 mt-2 flex items-center justify-between">
              <div>
                <h4 className="font-semibold tracking-wide text-white">
                  {p.name}
                </h4>
                <p className="text-sm text-white/80">{p.tag}</p>
              </div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm shadow-sm">{p.price}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Eco badges */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 pb-16 text-white/90">
        <Badge icon={Recycle} text="Recycled materials" />
        <Badge icon={Leaf} text="Low‑impact dyes" />
        <Badge icon={Droplets} text="Water‑safe wash" />
      </div>

      {/* Depth gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-900/60 via-blue-800/40 to-transparent" />
    </section>
  );
}

function Badge({ icon: Icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md">
      <Icon className="h-4 w-4" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function Bubbles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 h-2 w-2 animate-bubble rounded-full bg-white/70"
          style={{
            left: `${(i * 11) % 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${8 + (i % 5)}s`,
            transform: `scale(${0.6 + (i % 3) * 0.3})`,
            opacity: 0.8,
          }}
        />
      ))}
      <style>
        {`
        @keyframes bubble {
          0% { transform: translateY(0) scale(0.8); opacity: .6; }
          60% { opacity: .9; }
          100% { transform: translateY(-110vh) scale(1); opacity: 0; }
        }
        .animate-bubble { animation-name: bubble; animation-timing-function: ease-out; animation-iteration-count: infinite; }
      `}
      </style>
    </div>
  );
}
