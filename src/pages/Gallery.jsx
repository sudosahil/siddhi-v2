import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const categories = ['All', 'Classrooms', 'Events', 'Prize Distribution', 'Activities'];

const images = [
  { id: 1, src: 'https://picsum.photos/seed/classroom1/600/400', caption: 'Our Spacious Classroom — Batch A', category: 'Classrooms' },
  { id: 2, src: 'https://picsum.photos/seed/classroom2/600/400', caption: 'Smart Board in Action', category: 'Classrooms' },
  { id: 3, src: 'https://picsum.photos/seed/classroom3/600/400', caption: 'Library and Study Area', category: 'Classrooms' },
  { id: 4, src: 'https://picsum.photos/seed/event1/600/400', caption: 'Annual Day 2024 — Cultural Programme', category: 'Events' },
  { id: 5, src: 'https://picsum.photos/seed/event2/600/400', caption: 'Science Exhibition — Students at Display', category: 'Events' },
  { id: 6, src: 'https://picsum.photos/seed/event3/600/400', caption: 'Parent-Teacher Meeting — June 2024', category: 'Events' },
  { id: 7, src: 'https://picsum.photos/seed/prize1/600/400', caption: 'SSC Topper Felicitation — 2024', category: 'Prize Distribution' },
  { id: 8, src: 'https://picsum.photos/seed/prize2/600/400', caption: 'CBSE Board Toppers Awarded', category: 'Prize Distribution' },
  { id: 9, src: 'https://picsum.photos/seed/prize3/600/400', caption: 'Merit Scholarship Distribution Ceremony', category: 'Prize Distribution' },
  { id: 10, src: 'https://picsum.photos/seed/activity1/600/400', caption: 'Maths Olympiad Practice Session', category: 'Activities' },
  { id: 11, src: 'https://picsum.photos/seed/activity2/600/400', caption: 'Debate Competition — English', category: 'Activities' },
  { id: 12, src: 'https://picsum.photos/seed/activity3/600/400', caption: 'Group Study in Action', category: 'Activities' },
  { id: 13, src: 'https://picsum.photos/seed/class4/600/400', caption: 'Chemistry Lab Demonstration', category: 'Classrooms' },
  { id: 14, src: 'https://picsum.photos/seed/event4/600/400', caption: 'Republic Day Celebration 2024', category: 'Events' },
  { id: 15, src: 'https://picsum.photos/seed/prize4/600/400', caption: 'ICSE Star Performers — 2023', category: 'Prize Distribution' },
  { id: 16, src: 'https://picsum.photos/seed/activity4/600/400', caption: 'Career Counselling Workshop', category: 'Activities' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = images.filter(img => activeFilter === 'All' || img.category === activeFilter);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex(i => (i + 1) % filtered.length);

  return (
    <>
      <Helmet>
        <title>Gallery | Siddhi Coaching Classes Chembur</title>
        <meta name="description" content="Photos from classrooms, events, prize distributions, and activities at Siddhi Coaching Classes Chembur." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 pt-4">
            Our Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 text-lg max-w-xl mx-auto">
            Glimpses of learning, laughter, and achievement at Siddhi.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === c ? 'bg-navy text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group cursor-pointer rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-square relative"
                  onClick={() => openLightbox(i)}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-white text-xs font-medium line-clamp-2">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/80 hover:text-white p-2">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white/80 hover:text-white p-2">
              <ChevronLeft size={36} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-3xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={filtered[lightboxIndex]?.src} alt="" className="w-full rounded-xl max-h-[70vh] object-contain" />
              <p className="text-white/80 text-sm text-center mt-3">{filtered[lightboxIndex]?.caption}</p>
              <p className="text-white/40 text-xs text-center mt-1">{lightboxIndex + 1} / {filtered.length}</p>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white/80 hover:text-white p-2">
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
