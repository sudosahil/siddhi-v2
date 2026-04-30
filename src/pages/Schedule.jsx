import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import DemoButton from '../components/ui/DemoButton';
import { batches } from '../data/batches';

const tabs = [
  { key: 'morning', label: 'Morning Batch', time: '6:30 AM – 10:00 AM' },
  { key: 'afternoon', label: 'Afternoon Batch', time: '1:00 PM – 5:00 PM' },
  { key: 'evening', label: 'Evening Batch', time: '5:00 PM – 9:00 PM' },
];

export default function Schedule() {
  const [active, setActive] = useState('morning');
  const rows = batches[active];

  return (
    <>
      <Helmet>
        <title>Batch Schedule & Timetable | Siddhi Coaching Classes Chembur</title>
        <meta name="description" content="View morning, afternoon, and evening batch schedules at Siddhi Coaching Classes Chembur. Find the right time slot for your child." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 pt-4">
            Batch Schedule
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 text-lg max-w-xl mx-auto">
            Three convenient time slots — pick what works best for your child.
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
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${active === t.key ? 'bg-navy text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'}`}
              >
                <div className="text-left">
                  <div>{t.label}</div>
                  <div className={`text-xs font-normal ${active === t.key ? 'text-white/70' : 'text-gray-400'}`}>{t.time}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Table */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Class</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Subject</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Days</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Timings</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-50 ${i % 2 === 0 ? 'bg-cream/40' : 'bg-white'} hover:bg-saffron/5 transition-colors`}>
                      <td className="px-5 py-3 font-medium text-navy">{row.class}</td>
                      <td className="px-5 py-3 text-gray-700">{row.subject}</td>
                      <td className="px-5 py-3 text-gray-500">{row.days}</td>
                      <td className="px-5 py-3 font-medium text-gray-700">{row.timings}</td>
                      <td className="px-5 py-3 text-gray-600">{row.teacher}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-8">
            <p className="text-gray-500 text-sm">
              Full batches fill quickly. <strong className="text-navy">Book a free demo to secure your seat.</strong>
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="/brochure.pdf"
                download
                className="flex items-center gap-2 bg-saffron text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-amber-600 transition-all"
              >
                <Download size={16} /> Download Brochure
              </a>
              <button className="flex items-center gap-2 border-2 border-navy text-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-navy hover:text-white transition-all">
                <Download size={16} /> Download Timetable (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl text-white mb-3">Register for a Free Demo to Secure Your Seat</h2>
          <p className="text-white/70 mb-6">Seats fill fast — especially in 10th and 12th batches. Book your free demo class today.</p>
          <DemoButton size="lg" />
        </div>
      </section>
    </>
  );
}
