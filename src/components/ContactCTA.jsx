import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] text-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 md:p-16 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0" style={{
            background: 'radial-gradient(800px 400px at 90% 10%, rgba(255,255,255,0.18), transparent 60%)'
          }} />

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight">
            Elevate your next event
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-2xl text-white/70">
            Share your vision—our producers will respond within 24 hours with a bespoke proposal.
          </motion.p>

          <form className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input className="w-full rounded-xl bg-white/10 border border-white/10 p-4 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Full name" />
            <input type="email" className="w-full rounded-xl bg-white/10 border border-white/10 p-4 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" />
            <input className="w-full rounded-xl bg-white/10 border border-white/10 p-4 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Event type" />
            <textarea rows={4} className="md:col-span-2 w-full rounded-xl bg-white/10 border border-white/10 p-4 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Tell us about your vision" />
            <button type="button" className="w-full rounded-xl bg-white text-black font-medium px-6 py-4 shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_14px_40px_rgba(255,255,255,0.25)] transition">Request Proposal →</button>
          </form>

          <div className="mt-8 text-sm text-white/60">By submitting, you agree to our terms and privacy policy.</div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-white/60">
          <p>© {new Date().getFullYear()} Aurum Events. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Pinterest</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
