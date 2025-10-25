import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactFooter = () => {
  return (
    <footer id="contact" className="relative w-full bg-[#090b10] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:grid-cols-2 md:p-12">
          <div>
            <h3 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
              Begin Your Signature Affair
            </h3>
            <p className="mt-3 max-w-md text-white/70">
              Share your vision — we will architect an experience that resonates at a higher frequency.
            </p>

            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> concierge@apexevents.studio</p>
              <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> +1 (212) 555‑0199</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Manhattan • Dubai • Monaco</p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-4"
          >
            <input
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-xl focus:border-white/30"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-xl focus:border-white/30"
              placeholder="Email address"
              required
            />
            <textarea
              rows="4"
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-xl focus:border-white/30"
              placeholder="Tell us about your event"
            />
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-white/90 px-6 py-3 font-medium text-black transition-colors hover:bg-white"
            >
              Request Proposal →
            </motion.button>
          </motion.form>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Apex Events Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
