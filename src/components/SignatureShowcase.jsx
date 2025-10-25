import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521334753452-4f4f5f1f0c81?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540932239986-30128078f3c4?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514517220038-3dfb0521d914?q=80&w=2000&auto=format&fit=crop',
];

const SignatureShowcase = () => {
  return (
    <section className="relative w-full bg-[#0a0d12] py-24 text-white" id="showcase">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_40%),radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Signature Moments
          </h2>
          <p className="mt-3 max-w-xl text-white/60">
            A glimpse into the worlds we craft — immersive, luminous, unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <img
                src={src}
                alt="Luxury event"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureShowcase;
