import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0e13] text-white" id="home">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tl from-emerald-400/20 via-indigo-500/10 to-transparent blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto w-full text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <p className="text-sm text-white/80">Bespoke Event Architecture</p>
          </div>

          <h1 className="mx-auto max-w-5xl bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
            Curating Legendary, Luxury Experiences
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70 md:text-xl">
            From intimate soirées to world‑class galas — we design, produce, and orchestrate events that feel otherworldly.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-8 py-4 text-white backdrop-blur-xl transition-colors hover:bg-white/20"
            >
              Explore Our Craft
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white/90 backdrop-blur-xl transition-colors hover:border-white/30 hover:text-white"
            >
              Request a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
