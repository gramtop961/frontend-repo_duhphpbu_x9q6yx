import { motion } from 'framer-motion';
import { Anchor, Ship, Compass } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-blue-500 to-teal-400 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
          style={{ fontFamily: 'IBM Plex Sans, ui-sans-serif' }}
        >
          Our port‑town story
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-white/90"
        >
          Born by the docks and shaped by sea breezes, Island Plus blends mindful design with
          coastal calm. We source reclaimed fabrics and ocean‑bound plastics, then craft pieces
          meant to age with salt, sun, and stories.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Card icon={Anchor} title="Anchored in craft" desc="Small batches, hand‑finished textures, and a pace that respects the tide." />
          <Card icon={Ship} title="Trade winds" desc="Partners across port towns share materials and know‑how without waste." />
          <Card icon={Compass} title="True north" desc="Design choices guided by durability, repairability, and low impact." />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md"
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-white/85">{desc}</p>
    </motion.div>
  );
}
