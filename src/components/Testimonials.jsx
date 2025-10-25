import { motion } from 'framer-motion';

const quotes = [
  {
    quote: 'An otherworldly production. Every moment was choreographed with artistic precision.',
    author: 'Isabella Laurent, Creative Director',
  },
  {
    quote: 'The definition of modern luxury—discreet, flawless, unforgettable.',
    author: 'Jonathan Reed, CEO',
  },
  {
    quote: 'A symphony of service, beauty, and innovation. We were transported.',
    author: 'Marina Chen, Curator',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Words from our patrons</h2>
          <div className="hidden md:block text-white/50">★★★★★</div>
        </div>

        <div className="mt-12 relative">
          <motion.div
            className="flex gap-6 will-change-transform"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          >
            {[...quotes, ...quotes].map((t, i) => (
              <div key={i} className="min-w-[360px] max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-white/90">“{t.quote}”</p>
                <p className="mt-4 text-sm text-white/60">{t.author}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
