import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { faqs } from '../data/faq';

const WA_NUMBER = '919594345743';

const steps = [
  { step: '01', title: 'Enquire', desc: 'Call us, WhatsApp us, or fill the form below. We will call you back within 2 hours.' },
  { step: '02', title: 'Free Demo Class', desc: 'Attend a free demo class in your subject and batch preference. No obligation.' },
  { step: '03', title: 'Confirm Admission', desc: 'If you are happy, complete the admission form and fee payment to secure your seat.' },
];

const fees = [
  { course: 'SSC (8th–10th)', duration: '1 year', monthly: '₹2,500 – ₹3,500', annual: '₹28,000 – ₹38,000', notes: 'Study material included' },
  { course: 'CBSE (8th–12th)', duration: '1 year', monthly: '₹3,000 – ₹4,500', annual: '₹32,000 – ₹48,000', notes: 'Study material included' },
  { course: 'ICSE (8th–12th)', duration: '1 year', monthly: '₹3,500 – ₹5,000', annual: '₹38,000 – ₹54,000', notes: 'Project guidance included' },
  { course: 'Commerce (11th–12th)', duration: '1 year', monthly: '₹3,000 – ₹4,000', annual: '₹32,000 – ₹44,000', notes: 'Career counselling included' },
  { course: 'JEE Foundation', duration: '1 year', monthly: '₹4,000 – ₹5,500', annual: '₹44,000 – ₹60,000', notes: 'Weekly All-India tests' },
  { course: 'NEET Foundation', duration: '1 year', monthly: '₹4,000 – ₹5,500', annual: '₹44,000 – ₹60,000', notes: 'Diagram practice included' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full text-left flex items-center justify-between py-4 gap-4"
      >
        <span className="font-heading font-medium text-navy text-sm">{q}</span>
        <ChevronDown size={18} className={`text-saffron shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 text-sm leading-relaxed pb-4">{a}</p>
      </motion.div>
    </div>
  );
}

export default function Admissions() {
  const [form, setForm] = useState({ name: '', parentName: '', class: '', board: '', phone: '', batch: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I would like to enquire about admission at Siddhi Coaching Classes.

*Student Name:* ${form.name}
*Parent Name:* ${form.parentName}
*Class:* ${form.class}
*Board:* ${form.board}
*Phone:* ${form.phone}
*Preferred Batch:* ${form.batch}
*Message:* ${form.message || 'N/A'}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <>
      <Helmet>
        <title>Admissions | Join Siddhi Coaching Classes Chembur</title>
        <meta name="description" content="Admission process, fee structure, and inquiry form for Siddhi Coaching Classes Chembur. Book a free demo class today." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 pt-4">
            Admissions Open 2025–26
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 text-lg max-w-xl mx-auto">
            Seats are limited. Secure your child's spot today.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Process" heading="How to Join Siddhi" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-saffron text-white font-heading font-bold text-sm flex items-center justify-center shadow-md">
                  {s.step}
                </div>
                <div className="mt-4" />
                <h3 className="font-heading font-semibold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form + Scholarship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-2xl text-navy mb-6">Enquire Now</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: 'Student Name', type: 'text', required: true },
                  { name: 'parentName', label: 'Parent / Guardian Name', type: 'text', required: true },
                  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      required={f.required}
                      value={form[f.name]}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
                      placeholder={f.label}
                    />
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                    <select name="class" value={form.class} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy">
                      <option value="">Select Class</option>
                      {['8th', '9th', '10th', '11th', '12th'].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Board</label>
                    <select name="board" value={form.board} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy">
                      <option value="">Select Board</option>
                      {['SSC', 'CBSE', 'ICSE', 'HSC', 'JEE Foundation', 'NEET Foundation'].map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Batch Time</label>
                  <select name="batch" value={form.batch} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy">
                    <option value="">Select Preferred Batch</option>
                    <option>Morning (6:30 AM – 10:00 AM)</option>
                    <option>Afternoon (1:00 PM – 5:00 PM)</option>
                    <option>Evening (5:00 PM – 9:00 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy resize-none"
                    placeholder="Any specific question or requirement?"
                  />
                </div>
                <button type="submit" className="w-full bg-saffron text-white font-heading font-semibold py-3.5 rounded-xl hover:bg-amber-600 transition-colors">
                  Send Enquiry via WhatsApp →
                </button>
              </form>
            </motion.div>

            {/* Scholarship + Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-saffron/10 border border-saffron/30 rounded-2xl p-6">
                <div className="mb-3">
                    <h3 className="font-heading font-semibold text-navy text-lg">Scholarship for Achievers</h3>
                    <p className="text-gray-600 text-sm">Students who scored above 85% in their previous year's final exams receive a <strong className="text-saffron">10% fee waiver</strong> for the first academic year.</p>
                </div>
                <p className="text-gray-500 text-xs">Applicable on annual fee payment. Proof of marks required at time of admission.</p>
              </div>

              <div className="bg-navy/5 rounded-2xl p-6 space-y-3">
                <h3 className="font-heading font-semibold text-navy">Documents Required</h3>
                <ul className="space-y-2">
                  {["Previous year's marksheet", 'School leaving certificate (if applicable)', 'Aadhar Card / ID proof of student', "Parent's contact number & email"].map(d => (
                    <li key={d} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-emerald">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/brochure.pdf"
                download
                className="flex items-center justify-center gap-2 border-2 border-navy text-navy font-heading font-semibold py-3 rounded-xl hover:bg-navy hover:text-white transition-all"
              >
                <Download size={18} /> Download Our Brochure (PDF)
              </a>

              <div className="bg-emerald/10 border border-emerald/20 rounded-2xl p-5">
                <h3 className="font-heading font-semibold text-navy mb-2">Payment Options</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cash', 'UPI / PhonePe', 'Google Pay', 'Bank Transfer', 'Cheque'].map(m => (
                    <span key={m} className="bg-white text-navy text-xs font-medium rounded-lg px-3 py-1.5 border border-emerald/20">{m}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">Annual payment carries a 5% discount.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fee Table */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Fee Structure" heading="Transparent Pricing" subtext="No hidden charges. Study material and doubt sessions included in the fee." />
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Course</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Duration</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Monthly Fee</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Annual Fee</th>
                    <th className="text-left px-5 py-3.5 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-50 ${i % 2 === 0 ? 'bg-cream/40' : 'bg-white'}`}>
                      <td className="px-5 py-3 font-medium text-navy">{row.course}</td>
                      <td className="px-5 py-3 text-gray-500">{row.duration}</td>
                      <td className="px-5 py-3 font-semibold text-gray-800">{row.monthly}</td>
                      <td className="px-5 py-3 text-gray-600">{row.annual}</td>
                      <td className="px-5 py-3 text-xs text-emerald font-medium">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader label="FAQs" heading="Frequently Asked Questions" />
          <div className="bg-cream rounded-2xl p-6 border border-gray-100">
            {faqs.map((f, i) => <FAQItem key={i} q={f.question} a={f.answer} />)}
          </div>
        </div>
      </section>
    </>
  );
}
