import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Bespoke Weddings',
    desc: 'Tailored celebrations with couture design, artful florals, and meticulous orchestration.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Corporate Galas',
    desc: 'Immersive brand moments with elevated hospitality and experiential staging.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Private Soirées',
    desc: 'Intimate dinners and exclusive gatherings with refined detail and quiet luxury.',
    image: 'https://images.unsplash.com/photo-1518834107812-67b2d1f0a2d3?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative w-full bg-[#0a0a0a] text-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Signature Experiences</h2>
          <p className="mt-4 text-white/70">We choreograph end-to-end event journeys—concept, design, production, and guest experience—executed with couture precision.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="absolute inset-0">
                <img src={exp.image} alt={exp.title} className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="relative z-10 p-6 flex flex-col justify-end min-h-[380px]">
                <h3 className="text-2xl font-semibold drop-shadow-lg">{exp.title}</h3>
                <p className="mt-2 text-white/70">{exp.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/90">
                  <span className="rounded-full px-4 py-2 bg-white/10 border border-white/10 backdrop-blur">Discover</span>
                  <span className="opacity-70">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
