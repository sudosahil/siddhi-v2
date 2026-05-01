import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteInfo } from '../../data/siteInfo';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Results', to: '/results' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'About Us', to: '/about' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const waHref = `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-saffron rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">S</span>
            </div>
            <div>
              <div className="font-heading font-bold text-base">{siteInfo.name}</div>
              <div className="text-white/60 text-xs">Chembur, Mumbai</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            {siteInfo.tagline}. Chembur's trusted coaching institute since {siteInfo.since}. Empowering students across SSC, HSC Science, HSC Commerce, and competitive exams.
          </p>
          <div className="flex gap-3 mt-5">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            {/* Instagram */}
            <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="white" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1B2A4A"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-saffron mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 hover:text-saffron text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-saffron mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-white/70 text-sm">
              <MapPin size={16} className="mt-0.5 text-saffron shrink-0" />
              <span>{siteInfo.centres[0].address}</span>
            </li>
            <li className="flex gap-3 text-white/70 text-sm">
              <MapPin size={16} className="mt-0.5 text-saffron shrink-0" />
              <span>{siteInfo.centres[1].address}</span>
            </li>
            <li>
              <a href={`tel:${siteInfo.phone1}`} className="flex gap-3 text-white/70 hover:text-saffron text-sm transition-colors">
                <Phone size={16} className="mt-0.5 text-saffron shrink-0" />
                {siteInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-white/70 hover:text-saffron text-sm transition-colors">
                <Mail size={16} className="mt-0.5 text-saffron shrink-0" />
                WhatsApp Us
              </a>
            </li>
            <li className="flex gap-3 text-white/70 text-sm">
              <Clock size={16} className="mt-0.5 text-saffron shrink-0" />
              {siteInfo.timings}
            </li>
          </ul>
        </div>

        {/* Boards */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-saffron mb-4">Programs We Offer</h4>
          <div className="flex flex-wrap gap-2">
            {['SSC', 'HSC Science', 'HSC Commerce', 'MH-CET', 'JEE', 'NEET', 'CA Foundation'].map(b => (
              <span key={b} className="px-3 py-1 text-xs font-semibold bg-white/10 rounded-full text-white/80">
                {b}
              </span>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-white/70 text-xs mb-1">2 Centres in Chembur</p>
            <p className="text-white/70 text-xs">Shell Colony Road, Sahakar Nagar</p>
            <p className="text-white/70 text-xs mt-1">{siteInfo.social_handle}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 text-white/40 text-xs">
        <span>© 2025 {siteInfo.name}. Chembur, Mumbai. Since {siteInfo.since}.</span>
        <span className="hidden sm:inline text-white/20">|</span>
        <Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link>
      </div>
    </footer>
  );
}
