import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient and vignette overlays (do not block interactions) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(1200px 600px at 70% 20%, rgba(120,119,198,0.15), transparent 60%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Glass Navbar */}
        <div className="px-6 md:px-10 pt-6">
          <div className="mx-auto max-w-7xl">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-white/80 to-white/20 shadow-[0_0_30px_rgba(255,255,255,0.4)]" />
                <span className="tracking-wide font-semibold text-white/90">AURUM EVENTS</span>
              </div>
              <div className="hidden md:flex items-center gap-8 text-white/70">
                <a href="#experiences" className="hover:text-white transition">Experiences</a>
                <a href="#gallery" className="hover:text-white transition">Gallery</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </div>
              <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-white/90 text-black px-4 py-2 text-sm font-medium hover:bg-white transition">Plan An Event</a>
            </div>
          </div>
        </div>

        {/* Hero copy */}
        <div className="flex-1 flex items-center">
          <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-2xl">
              Curated Luxury Events
              <span className="block text-white/70">crafted to transcend the ordinary.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-white/70">
              From intimate soirées to grand galas, we orchestrate experiences with flawless precision, modern artistry, and a touch of the sublime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
              className="mt-10 flex items-center gap-4">
              <a href="#experiences" className="group inline-flex items-center rounded-full px-6 py-3 bg-white text-black font-medium shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] transition">
                Explore Experiences
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full px-6 py-3 border border-white/20 bg-white/5 text-white/90 backdrop-blur-md hover:bg-white/10 transition">
                Request a Proposal
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
