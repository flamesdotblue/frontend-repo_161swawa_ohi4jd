import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Reserve your date
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-white/70">
              Share your vision and we will compose a bespoke proposal within 24 hours.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80">Worldwide Production</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80">Discretion & Privacy</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80">In-House Design</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80">White-Glove Service</div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/60">Full name</label>
                <input className="mt-2 w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none border border-white/10 focus:border-white/30" placeholder="Ava Laurent" />
              </div>
              <div>
                <label className="text-xs text-white/60">Email</label>
                <input type="email" className="mt-2 w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none border border-white/10 focus:border-white/30" placeholder="ava@studio.com" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-white/60">Event type</label>
                <input className="mt-2 w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none border border-white/10 focus:border-white/30" placeholder="Wedding / Gala / Private" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-white/60">Message</label>
                <textarea rows={4} className="mt-2 w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none border border-white/10 focus:border-white/30" placeholder="Tell us about your vision..." />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-white/50">By sending, you agree to our privacy policy.</p>
              <button className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 font-medium shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] transition">
                Request Proposal
                <span className="ml-2">→</span>
              </button>
            </div>

            <div className="pointer-events-none absolute -inset-0.5 -z-0 rounded-3xl" style={{
              background: 'radial-gradient(600px 200px at 80% 0%, rgba(255,255,255,0.15), transparent 60%)'
            }} />
          </motion.form>
        </div>
      </div>
    </section>
  );
}
