import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DemoButton({ className = '', size = 'md' }) {
  const sizeClasses = size === 'lg'
    ? 'px-8 py-4 text-base'
    : 'px-5 py-2.5 text-sm';

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2, repeat: 2, repeatDelay: 3 }}
      className="inline-block"
    >
      <Link
        to="/admissions"
        className={`inline-block bg-saffron text-white font-heading font-semibold rounded-full shadow-md hover:bg-amber-600 transition-colors duration-200 ${sizeClasses} ${className}`}
      >
        Book Free Demo Lecture
      </Link>
    </motion.div>
  );
}
