import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, BookOpen, MessageCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { courses } from '../data/courses';

const filters = ['All', 'School', 'Science', 'Commerce', 'Entrance'];

const WA_NUMBER = '917208476547';
function enquireWA(courseName) {
  const msg = encodeURIComponent(`Hi, I would like to enquire about the ${courseName} course at Siddhi's Coaching Classes.`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

export default function Courses() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = courses.filter(c => active === 'All' || c.section === active);

  return (
    <>
      <Helmet>
        <title>Coaching Courses in Chembur | SSC HSC JEE NEET MH-CET Classes — Siddhi's Coaching Classes</title>
        <meta name="description" content="Explore coaching programs at Siddhi's Coaching Classes Chembur — SSC Board, HSC Science & Commerce, MH-CET, JEE, NEET, CA Foundation." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-saffron/20 text-saffron text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Programs
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Find the Right Course
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert coaching for every board and every class — with small batches and dedicated teachers.
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
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 ${active === f ? 'bg-navy text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map(c => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className="h-2 bg-navy" />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-heading font-semibold text-navy text-lg">{c.title}</h3>
                        <p className="text-saffron text-sm font-medium">Classes {c.classes}</p>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-500 rounded-lg px-2 py-1 mt-1">{c.board}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {c.subjects.slice(0, 4).map(s => (
                        <span key={s} className="text-xs bg-navy/5 text-navy rounded-md px-2 py-0.5">{s}</span>
                      ))}
                      {c.subjects.length > 4 && <span className="text-xs text-gray-400">+{c.subjects.length - 4} more</span>}
                    </div>

                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock size={14} className="text-saffron" />
                        {c.batchType}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Users size={14} className="text-saffron" />
                        Max 20 students / batch
                      </div>
                      <div className="flex items-center gap-2 text-gray-900 text-sm font-semibold">
                        <BookOpen size={14} className="text-saffron" />
                        {c.highlight}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelected(c)}
                        className="flex-1 border-2 border-navy text-navy font-semibold text-sm py-2 rounded-xl hover:bg-navy hover:text-white transition-all"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => enquireWA(c.title)}
                        className="flex-1 bg-[#25D366] text-white font-semibold text-sm py-2 rounded-xl flex items-center justify-center gap-1 hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle size={14} /> Enquire
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="h-2 rounded-t-2xl bg-navy" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-heading font-bold text-navy text-2xl">{selected.title}</h2>
                    <p className="text-saffron font-medium">Classes {selected.classes} | {selected.board}</p>
                  </div>
                  <button onClick={() => setSelected(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                    <X size={20} />
                  </button>
                </div>

                <div className="mb-5">
                  <h4 className="font-heading font-semibold text-navy mb-2">Subjects Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.subjects.map(s => (
                      <span key={s} className="text-sm bg-navy/5 text-navy rounded-lg px-3 py-1">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-saffron/10 rounded-xl px-4 py-3 mb-5">
                  <BookOpen size={16} className="text-saffron shrink-0" />
                  <span className="text-sm font-semibold text-navy">{selected.highlight}</span>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock size={14} className="text-saffron" />
                    {selected.batchType}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users size={14} className="text-saffron" />
                    Max 20 students per batch
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => { enquireWA(selected.title); setSelected(null); }}
                    className="flex-1 bg-[#25D366] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={16} /> Enquire on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
