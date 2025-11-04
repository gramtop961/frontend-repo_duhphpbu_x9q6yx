import React from 'react';
import Navbar from './components/Navbar';
import ParallaxHero from './components/ParallaxHero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main>
        <ParallaxHero />
        <FeatureGrid />
        {/* CTA section */}
        <section id="cta" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-indigo-50 via-fuchsia-50 to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950" />
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">Pronto a dare profondità al tuo sito?</h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                  Integra l'effetto parallasse con pochi componenti e ottieni un look moderno senza compromettere le performance.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#" className="inline-flex items-center rounded-md bg-zinc-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-zinc-800 transition dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">Scarica demo</a>
                  <a href="#features" className="inline-flex items-center rounded-md ring-1 ring-zinc-300 dark:ring-zinc-700 px-5 py-3 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">Scopri le funzioni</a>
                </div>
              </div>
              <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6">
                <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-sky-500/20 grid place-items-center">
                  <div className="text-center">
                    <div className="mx-auto h-16 w-16 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur grid place-items-center text-zinc-900 dark:text-white font-bold">3D</div>
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300 max-w-sm">Compatibile con grafiche SVG, immagini, e scene 3D (Spline) per un impatto ancora maggiore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
