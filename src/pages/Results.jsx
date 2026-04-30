import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { results } from '../data/results';

const years = [2024, 2023, 2022, 2021];
const boards = ['All', 'SSC', 'CBSE', 'ICSE'];

export default function Results() {
  const [year, setYear] = useState(2024);
  const [board, setBoard] = useState('All');

  const filtered = results.filter(r =>
    r.year === year && (board === 'All' || r.board === board)
  );

  const sscAvg = filtered.filter(r => r.board === 'SSC').reduce((acc, r, _, arr) => acc + r.percentage / arr.length, 0);
  const cbseCount = filtered.filter(r => r.board === 'CBSE' && r.percentage >= 90).length;
  const icseCount = filtered.filter(r => r.board === 'ICSE' && r.percentage >= 90).length;

  return (
    <>
      <Helmet>
        <title>Toppers & Results | Siddhi Coaching Classes Chembur</title>
        <meta name="description" content="See the outstanding results achieved by Siddhi Coaching Classes students across SSC, CBSE, and ICSE boards in Chembur, Mumbai." />
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
            200+ students scored above 90% across boards in 2024 alone.
          </motion.p>
          {/* Aggregate stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-6">
            {[
              { val: 200, suf: '+', label: 'Scored 90%+ in 2024' },
              { val: 98, suf: '%', label: 'SSC Pass Rate' },
              { val: 16, suf: '', label: 'Consecutive Years of Toppers' },
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
            {/* Board filter */}
            <div className="flex gap-2 flex-wrap">
              {boards.map(b => (
                <button
                  key={b}
                  onClick={() => setBoard(b)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${board === b ? 'bg-saffron text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-saffron hover:text-saffron'}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${year}-${board}`}
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
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
                >
                  <div className="relative inline-block mb-3">
                    <img src={r.avatar} alt={r.name} className="w-16 h-16 rounded-full object-cover" />
                    {r.percentage >= 95 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-saffron rounded-full border-2 border-white" />
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm">{r.name}</h3>
                  <div className="text-2xl font-bold text-saffron my-1">{r.percentage}%</div>
                  <div className="text-xs text-gray-400 mb-1">({r.marks})</div>
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${r.board === 'SSC' ? 'bg-navy/10 text-navy' : r.board === 'CBSE' ? 'bg-emerald/10 text-emerald' : 'bg-saffron/10 text-saffron'}`}>
                    {r.board} Board
                  </span>
                  <p className="text-xs text-gray-500 mb-3">{r.school}</p>
                  <p className="text-xs text-gray-400 italic">"{r.quote.substring(0, 80)}..."</p>
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

      {/* Board-wise stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Board Statistics"
            heading={`Performance Summary — ${year}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { board: 'SSC', color: 'navy', stat: sscAvg > 0 ? `${sscAvg.toFixed(1)}%` : 'N/A', label: 'Average Score' },
              { board: 'CBSE', color: 'emerald', stat: `${cbseCount}`, label: 'Students scored 90%+' },
              { board: 'ICSE', color: 'saffron', stat: `${icseCount}`, label: 'Students scored 90%+' },
            ].map(s => (
              <div key={s.board} className="bg-cream rounded-2xl p-6 text-center border border-gray-100">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-${s.color}/10 text-${s.color}`}>{s.board} Board</span>
                <div className="font-heading font-bold text-3xl text-navy mb-1">{s.stat}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
