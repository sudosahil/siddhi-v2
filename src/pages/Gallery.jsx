import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';
import manifest from '../data/gallery-manifest.json';

function GalleryPhoto({ photo, index, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="mb-3 break-inside-avoid cursor-pointer rounded-xl overflow-hidden relative group shadow-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: (index % 12) * 0.03 }}
      onClick={onClick}
    >
      {/* Blur placeholder — visible while thumb is loading */}
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${photo.blur})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(12px)',
          transform: 'scale(1.1)',
          opacity: loaded ? 0 : 1,
        }}
      />
      {/* Thumbnail */}
      <img
        src={`/gallery/thumbs/${photo.file}`}
        alt={`Gallery photo ${index + 1}`}
        width={photo.width}
        height={photo.height}
        loading={index < 12 ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`relative w-full block transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 scale-75 group-hover:scale-100 transition-transform duration-300">
          <ZoomIn size={22} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const isOpen = lightboxIndex !== null;
  const open   = (i) => setLightboxIndex(i);
  const close  = useCallback(() => setLightboxIndex(null), []);
  const prev   = useCallback(() => setLightboxIndex(i => (i - 1 + manifest.length) % manifest.length), []);
  const next   = useCallback(() => setLightboxIndex(i => (i + 1) % manifest.length), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <Helmet>
        <title>Gallery | Siddhi's Coaching Classes Chembur</title>
        <meta name="description" content="Photos from classrooms, events, and student life at Siddhi's Coaching Classes, Chembur, Mumbai." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-saffron/20 text-saffron text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Life at Siddhi's
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Our Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-2xl mx-auto">
            Moments from classrooms, events, and student life — a glimpse into what makes Siddhi's special.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white/80 text-sm">
            <Images size={15} />
            {manifest.length} photos
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {manifest.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <Images size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-heading font-semibold text-lg">No photos yet</p>
              <p className="text-sm mt-1">Add images to <code>public/gallery/</code> and run <code>npm run compress-gallery</code>.</p>
            </div>
          ) : (
            <div style={{ columns: '2', columnGap: '12px' }} className="[column-count:2] sm:[column-count:3] lg:[column-count:4]">
              {manifest.map((photo, i) => (
                <GalleryPhoto key={photo.file} photo={photo} index={i} onClick={() => open(i)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox — uses full-size image */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={close}
          >
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tabular-nums pointer-events-none">
              {lightboxIndex + 1} / {manifest.length}
            </div>

            <button onClick={close} className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all z-10" aria-label="Close">
              <X size={20} />
            </button>

            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10" aria-label="Previous photo">
              <ChevronLeft size={26} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxIndex}
                src={`/gallery/${manifest[lightboxIndex].file}`}
                alt={`Gallery photo ${lightboxIndex + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-h-[88vh] max-w-[82vw] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10" aria-label="Next photo">
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
