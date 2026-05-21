import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

function getAvatarUrl(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=E8951D&color=fff&size=300`;
}

const VARIANTS = {
  enter: (dir) => ({ opacity: 0, x: dir * 60 }),
  center:       { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir * -60 }),
};

export default function TopperCarousel({ toppers }) {
  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused]     = useState(false);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const next = () => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % toppers.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + toppers.length) % toppers.length);
  };

  useEffect(() => {
    if (paused || toppers.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % toppers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, toppers.length]);

  const topper = toppers[current];

  return (
    <div
      className="flex flex-col items-center gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card stack */}
      <div className="relative w-full max-w-xs sm:max-w-sm">
        {/* Stacked background cards */}
        <div className="absolute inset-2 bg-white/25 rounded-[2rem] rotate-6 scale-95" />
        <div className="absolute inset-1 bg-white/45 rounded-[2rem] -rotate-3 scale-[0.97]" />

        {/* Main card */}
        <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="flex flex-col"
            >
              {/* Photo — square, full width, arrows on sides */}
              <div className="relative w-full aspect-[3/2] bg-gray-50">
                <img
                  src={`/toppers/${topper.filename}`}
                  alt={topper.name}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = getAvatarUrl(topper.name); }}
                  className="w-full h-full object-contain"
                />

                {/* Year badge */}
                <div className="absolute top-3 right-3 bg-navy text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
                  {topper.year}
                </div>

                {/* Left arrow */}
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/55 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
                  aria-label="Previous topper"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Right arrow */}
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/55 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
                  aria-label="Next topper"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Info */}
              <div className="px-6 py-3 flex flex-col items-center text-center">
                <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron font-semibold text-xs rounded-full mb-2 tracking-wide uppercase">
                  {topper.board} Topper
                </span>
                <div className="font-heading font-bold text-3xl text-navy mb-1 leading-none">
                  {topper.percentage}
                </div>
                <p className="font-heading font-semibold text-gray-800 text-base leading-tight">
                  {topper.name}
                </p>
                {topper.achievement && (
                  <p className="text-xs text-gray-500 mt-1 leading-tight">{topper.achievement}</p>
                )}
                <div className="flex gap-1 mt-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={13} className="fill-saffron text-saffron" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 items-center">
        {toppers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? 'w-7 bg-saffron'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`View ${toppers[idx].name}`}
          />
        ))}
      </div>
    </div>
  );
}
