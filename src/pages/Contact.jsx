import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { siteInfo } from '../data/siteInfo';

const WA_NUMBER = '919594345743';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! My name is ${form.name}.\n\n${form.message}\n\nMy number: ${form.phone}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Siddhi Coaching Classes Chembur Mumbai</title>
        <meta name="description" content="Contact Siddhi Coaching Classes in Chembur, Mumbai. Call us, WhatsApp us, or fill in the form. We are located near Chembur Station." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 pt-4">
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 text-lg max-w-xl mx-auto">
            We are always happy to hear from you. Reach out and we will respond within 2 hours.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-2xl text-navy mb-6">Contact Details</h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: <MapPin size={20} className="text-saffron" />, label: 'Centre 1 — Shell Colony', content: siteInfo.centres[0].address, href: null },
                  { icon: <MapPin size={20} className="text-saffron" />, label: 'Centre 2 — Adarsha Vidyalaya', content: siteInfo.centres[1].address, href: null },
                  { icon: <Phone size={20} className="text-saffron" />, label: 'Phone (Click to Call)', content: siteInfo.phoneDisplay, href: `tel:${siteInfo.phone1}` },
                  { icon: <MessageCircle size={20} className="text-[#25D366]" />, label: 'WhatsApp', content: '+91 95943 45743', href: `https://wa.me/${WA_NUMBER}` },
                  { icon: <Clock size={20} className="text-saffron" />, label: 'Timings', content: siteInfo.timings, href: null },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm text-navy font-medium hover:text-saffron transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-navy font-medium">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-navy/5 rounded-xl p-4 border border-navy/10">
                <h3 className="font-heading font-semibold text-navy mb-2">Directions from Chembur Station</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Exit Chembur railway station and head towards Shell Colony Road. Our main centre (Veena Serene, B Wing) and second centre (near Adarsha Vidyalaya) are both on Shell Colony Road in Sahakar Nagar. 5-minute walk from both Chembur railway and metro stations.
                </p>
              </div>
            </motion.div>

            {/* Form + Map */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3!2d72.8993!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNTQnMDAuOCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Siddhi Coaching Location"
                />
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-semibold text-navy mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy resize-none" placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="w-full bg-[#25D366] text-white font-heading font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
                    <MessageCircle size={18} /> Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
