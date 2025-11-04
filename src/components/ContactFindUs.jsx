import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

export default function ContactFindUs() {
  const waveRef = useRef(null);

  useEffect(() => {
    const el = waveRef.current;
    if (!el) return;
    let raf;
    let t = 0;
    const animate = () => {
      t += 0.02;
      const d = `M0 30 Q 60 ${30 + Math.sin(t) * 8} 120 30 T 240 30 T 360 30 T 480 30 T 600 30 T 720 30 T 840 30 T 960 30`;
      el.setAttribute('d', d);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-teal-400 to-cyan-200 py-24 text-slate-800">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-full bg-white/60 p-2 shadow">
            <MapPin className="h-5 w-5 text-teal-700" />
          </div>
          <h3 className="text-3xl font-semibold" style={{ fontFamily: 'IBM Plex Sans, ui-sans-serif' }}>Find us</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Stylized map with wave overlay */}
          <div className="relative overflow-hidden rounded-2xl border border-teal-700/10 bg-white shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#e0fbff_0%,transparent_40%),radial-gradient(circle_at_70%_70%,#d5fff4_0%,transparent_45%)]" />
            <div className="relative z-10 p-4 text-sm text-slate-600">
              Harbor Street 7, Port‑side Market, Blue Bay
            </div>
            <svg viewBox="0 0 960 180" className="pointer-events-none absolute bottom-0 left-0 h-24 w-full">
              <path ref={waveRef} d="M0 30 Q 60 30 120 30 T 240 30 T 360 30 T 480 30 T 600 30 T 720 30 T 840 30 T 960 30" stroke="#1e90ff" strokeWidth="3" fill="none" />
            </svg>
            <div className="relative z-10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-teal-800">Open Thu–Sun</span>
                <a href="#" className="rounded-full bg-teal-600 px-3 py-1 text-sm text-white shadow hover:bg-teal-700">Directions</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-slate-700/90">
              Questions or collaborations? Drop a message and we’ll get back between tides.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input required placeholder="Name" className="rounded-lg border border-teal-700/10 bg-white/80 px-3 py-2 outline-none ring-teal-500/20 focus:ring" />
                <input required type="email" placeholder="Email" className="rounded-lg border border-teal-700/10 bg-white/80 px-3 py-2 outline-none ring-teal-500/20 focus:ring" />
              </div>
              <textarea required placeholder="Message" rows={4} className="w-full rounded-lg border border-teal-700/10 bg-white/80 px-3 py-2 outline-none ring-teal-500/20 focus:ring" />
              <button className="rounded-full bg-teal-700 px-5 py-2 text-white shadow hover:bg-teal-800">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
