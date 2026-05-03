import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { results, resultStats } from '../data/results';
import { getTopperPhoto } from '../data/topperPhotos';

const years = ['2024-25', 'Previous Batch'];
const categories = ['All', 'SSC', 'Science', 'Commerce', 'Entrance'];

export default function Results() {
  const [year, setYear] = useState('2024-25');
  const [category, setCategory] = useState('All');

  const filtered = results.filter(r =>
    r.year === year && (category === 'All' || r.category === category)
  );

  return (
    <>
      <Helmet>
        <title>Toppers & Results | Siddhi's Coaching Classes Chembur</title>
        <meta name="description" content="See the outstanding results achieved by Siddhi's Coaching Classes students across SSC, HSC Science, HSC Commerce, and Entrance exams in Chembur, Mumbai." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-saffron/20 text-saffron text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Hall of Fame
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Our Proud Results
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            {resultStats.ssc2425.label}
          </motion.p>
          {/* Aggregate stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-6">
            {[
              { val: resultStats.ssc2425.above90, suf: `/${resultStats.ssc2425.totalStudents}`, label: 'Scored 90%+ (SSC 2024-25)' },
              { val: 97, suf: '%', label: 'Highest SSC Score' },
              { val: 22, suf: '+', label: 'Years of Toppers' },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-center">
                <div className="font-heading font-bold text-white text-2xl">
                  <AnimatedCounter target={s.val} suffix={s.suf} />
                </div>
                <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Filters */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
            {/* Year filter */}
            <div className="flex gap-2 flex-wrap">
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${year === y ? 'bg-navy text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'}`}
                >
                  {y}
                </button>
              ))}
            </div>
            {/* Category filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(b => (
                <button
                  key={b}
                  onClick={() => setCategory(b)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${category === b ? 'bg-saffron text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-saffron hover:text-saffron'}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${year}-${category}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map(r => (
                <motion.div
                  key={r.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-square bg-gray-50">
                    <img
                      src={getTopperPhoto(r.name) || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=E8951D&color=fff&size=200`}
                      alt={r.name}
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=E8951D&color=fff&size=200`; }}
                      className={`w-full h-full ${getTopperPhoto(r.name) ? 'object-contain' : 'object-cover'}`}
                    />
                    {r.highlight && (
                      <span className="absolute top-2 right-2 w-5 h-5 bg-saffron rounded-full border-2 border-white shadow" />
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-navy text-sm">{r.name}</h3>
                    <div className="text-2xl font-bold text-saffron my-1">{r.percentage}</div>
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${r.category === 'SSC' ? 'bg-navy/10 text-navy' : r.category === 'Science' ? 'bg-emerald/10 text-emerald' : 'bg-saffron/10 text-saffron'}`}>
                      {r.category}
                    </span>
                    {r.school && <p className="text-xs text-gray-500 mb-1">{r.school}</p>}
                    {r.rank && <p className="text-xs text-emerald font-semibold">{r.rank}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="font-heading font-semibold text-lg">No results found for this selection.</p>
            </div>
          )}
        </div>
      </section>

      {/* SSC Batch Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Batch Statistics"
            heading="SSC 2024-25 Performance"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-cream rounded-2xl p-6 text-center border border-gray-100">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-navy/10 text-navy">Total Students</span>
              <div className="font-heading font-bold text-3xl text-navy mb-1">{resultStats.ssc2425.totalStudents}</div>
              <div className="text-gray-500 text-sm">SSC 2024-25 Batch</div>
            </div>
            <div className="bg-cream rounded-2xl p-6 text-center border border-gray-100">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-saffron/10 text-saffron">Scored 90%+</span>
              <div className="font-heading font-bold text-3xl text-navy mb-1">{resultStats.ssc2425.above90}</div>
              <div className="text-gray-500 text-sm">Out of {resultStats.ssc2425.totalStudents} students</div>
            </div>
            <div className="bg-cream rounded-2xl p-6 text-center border border-gray-100">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-emerald/10 text-emerald">Top Score</span>
              <div className="font-heading font-bold text-3xl text-navy mb-1">{resultStats.ssc2425.topScore}</div>
              <div className="text-gray-500 text-sm">Highest in SSC 2024-25</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
