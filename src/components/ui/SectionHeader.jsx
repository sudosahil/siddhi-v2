import { motion } from 'framer-motion';

export default function SectionHeader({ label, heading, subtext, light = false }) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${light ? 'text-saffron bg-white/10' : 'text-saffron bg-saffron/10'}`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy'}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
