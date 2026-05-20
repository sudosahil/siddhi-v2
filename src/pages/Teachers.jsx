import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { teachers } from '../data/teachers';

const filters = ['All', 'Science', 'Commerce', 'Entrance', 'Counselling'];

export default function Teachers() {
  const [active, setActive] = useState('All');

  const filtered = teachers.filter(t => active === 'All' || t.section === active);

  return (
    <>
      <Helmet>
        <title>Our Teachers | Expert Faculty — Siddhi's Coaching Classes Chembur</title>
        <meta name="description" content="Meet the experienced faculty at Siddhi's Coaching Classes Chembur. Subject experts including PhD holders, MBBS doctors, CA, CS, and IITians." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-saffron/20 text-saffron text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Faculty
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Teachers
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-2xl mx-auto">
            Qualified, passionate, and deeply committed to every student's success.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === f ? 'bg-navy text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map(t => (
                <motion.div
                  key={t.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 text-center"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-[3/4] bg-gray-50">
                    <img
                      src={t.photo ? `/teachers/${t.photo}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=1B2A4A&color=fff&size=400`}
                      alt={t.name}
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=1B2A4A&color=fff&size=400`; }}
                      style={t.objectPosition ? { objectPosition: t.objectPosition } : undefined}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-navy text-sm">{t.name}</h3>
                    <p className="text-saffron text-sm font-medium mt-0.5">{t.subject}</p>
                    <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-500">
                      <GraduationCap size={11} />
                      <span>{t.qualification}</span>
                    </div>
                    <span className="inline-block mt-2 text-xs bg-navy/5 text-navy rounded-full px-3 py-1">{t.experience}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl text-navy mb-3">Want to Learn From Our Teachers?</h2>
          <p className="text-gray-600 mb-6">Book a free demo lecture and experience our teaching firsthand — no commitment required.</p>
          <a
            href="https://wa.me/919594345743?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20lecture."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-saffron text-white font-heading font-semibold px-8 py-3 rounded-full hover:bg-amber-600 transition-colors"
          >
            Book Free Demo Lecture
          </a>
        </div>
      </section>
    </>
  );
}
