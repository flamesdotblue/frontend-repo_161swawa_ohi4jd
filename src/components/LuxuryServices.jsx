import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Calendar, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'End‑to‑End Production',
    icon: Crown,
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop',
    desc: 'Concept, design, logistics, and flawlessly executed showcalling — tailored to your brand of luxury.',
  },
  {
    title: 'Signature Styling',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1547815749-8382b10924d8?q=80&w=2000&auto=format&fit=crop',
    desc: 'Haute décor, florals, and atmospheric lighting that feel sculpted and cinematic.',
  },
  {
    title: 'White‑Glove Coordination',
    icon: Calendar,
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop',
    desc: 'Discreet guest services, VIP handling, and seamless timeline orchestration.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } }),
};

const LuxuryServices = () => {
  return (
    <section id="services" className="relative w-full bg-[#090c11] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.08),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
              Our Signature Services
            </h2>
            <p className="mt-3 max-w-xl text-white/60">
              A curated suite of offerings engineered to deliver a rarefied, unforgettable atmosphere.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

              <div className="relative z-10 p-6">
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2">
                  <s.icon className="h-4 w-4 text-white/80" />
                  <span className="text-xs tracking-wider text-white/70">PREMIUM</span>
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60">Bespoke • Discreet • World‑Class</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 transition-colors group-hover:bg-white/20">
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryServices;
