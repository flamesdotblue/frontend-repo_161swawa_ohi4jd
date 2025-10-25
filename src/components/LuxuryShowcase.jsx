import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function LuxuryShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} id="gallery" className="relative w-full bg-[#0a0a0a] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px 300px at 20% 10%, rgba(255,255,255,0.08), transparent 60%)'
      }} />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="lg:w-1/2 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Crafted Atmospheres</h2>
            <p className="mt-4 text-white/70">Signature palettes, bespoke tablescapes, artisan lighting, and sensory storytelling. Our team engineers the mood with couture-level finesse.</p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-white/60" style={{ width: `${(i + 1) * 12}%` }} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div style={{ y, scale }} className="relative grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
              <div className="col-span-7 row-span-6 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559753217-bbb7d4ffc9d5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmFuZCUyMGJhbGxyb29tfGVufDB8MHx8fDE3NjE0MzI2Mjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Grand ballroom" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-5 row-span-3 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1600&auto=format&fit=crop" alt="Couture tablescape" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-5 row-span-3 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1717778444574-f2a865927769?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcnRmdWwlMjBmbG9yYWxzfGVufDB8MHx8fDE3NjE0MzI2Mjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Artful florals" className="w-full h-full object-cover" />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
