import React from 'react';
import { Sparkles, MousePointer, Gauge, Layers } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Profondità realistica",
    desc: "Livelli multipli che si muovono a velocità diverse per un effetto 3D naturale.",
  },
  {
    icon: Gauge,
    title: "Prestazioni fluide",
    desc: "Animazioni ottimizzate con requestAnimationFrame e listener passivi.",
  },
  {
    icon: MousePointer,
    title: "Reattivo al movimento",
    desc: "Interazione sia allo scroll che al movimento del mouse per maggiore immersione.",
  },
  {
    icon: Layers,
    title: "Design modulare",
    desc: "Componenti separati e riutilizzabili per adattarsi a qualsiasi progetto.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Perché il nostro parallasse è migliore</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Cura dei dettagli, resa visiva e performance pensate per esperienze moderne e piacevoli.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
