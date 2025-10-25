import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1521334726092-b509a19597d1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526057565006-20beab8dd2cc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1536935339748-021ed8eaa8be?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546484959-f833b191a9c5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative w-full bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Visual Journal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 text-white/60 max-w-2xl">
              A curated selection from recent productions—textures, light, and atmosphere.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl">
              <img
                src={src}
                alt="Event"
                className="h-44 md:h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(800px 300px at 50% 50%, rgba(255,255,255,0.12), transparent 60%)'
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
