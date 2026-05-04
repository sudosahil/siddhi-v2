import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DemoButton from '../ui/DemoButton';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Results', to: '/results' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'About', to: '/about' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/siddhi-logo.jpeg" alt="Siddhi's Coaching" className="w-10 h-10 rounded-lg object-cover" />
          <div className="leading-tight">
            <div className={`font-heading font-bold text-sm md:text-base ${scrolled ? 'text-navy' : 'text-white'}`}>Siddhi's Coaching</div>
            <div className={`text-xs ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>Chembur, Mumbai</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-saffron'
                    : scrolled ? 'text-charcoal hover:text-saffron' : 'text-white hover:text-saffron'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <DemoButton />
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg font-body text-sm font-medium transition-colors ${isActive ? 'bg-navy/5 text-saffron' : 'text-charcoal hover:bg-gray-50'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3">
              <DemoButton className="w-full text-center" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
