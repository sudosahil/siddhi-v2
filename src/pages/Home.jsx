import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Clock, Award, BookOpen, ChevronRight, Star, MapPin, Phone, MessageCircle, Download } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import DemoButton from '../components/ui/DemoButton';
import { courses } from '../data/courses';
import { teachers } from '../data/teachers';
import { results } from '../data/results';
import { testimonials } from '../data/testimonials';

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const stats = [
  { value: 1500, suffix: '+', label: 'Students Taught' },
  { value: 18, suffix: '+', label: 'Years of Excellence' },
  { value: 92, suffix: '%', label: 'Pass Rate' },
  { value: 50, suffix: '+', label: 'Expert Teachers' },
];

const whyUs = [
  { title: 'Small Batch Sizes', desc: 'Maximum 20 students per batch — every child gets undivided attention from the teacher.' },
  { title: 'Experienced Faculty', desc: 'Average 10+ years of teaching experience. Our faculty are subject experts, not just educators.' },
  { title: 'Result-Proven', desc: 'Toppers every year across SSC, CBSE, and ICSE boards. Our track record speaks for itself.' },
  { title: 'Flexible Batches', desc: 'Morning, afternoon, and evening batches — designed around school schedules.' },
];

export default function Home() {
  const topperPreview = results.filter(r => r.year === 2024).slice(0, 5);
  const teacherPreview = teachers.slice(0, 3);
  const testimonialPreview = testimonials.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Siddhi Coaching Classes Chembur | Best SSC CBSE ICSE Tuition in Chembur Mumbai</title>
        <meta name="description" content="Siddhi Coaching Classes in Chembur, Mumbai — trusted since 2006 for SSC, CBSE, ICSE, JEE, and NEET coaching. Small batches, experienced faculty, proven results." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-[#0d1a30]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.span variants={fadeUp} className="inline-block bg-saffron/20 text-saffron text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Chembur's Most Trusted Coaching Since 2006
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Child's Success <br />
              <span className="text-saffron">Starts Here.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Expert coaching for SSC, CBSE &amp; ICSE boards (Classes 8–12), JEE Foundation, and NEET Foundation. Small batches. Proven results. Personal attention.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <DemoButton size="lg" />
              <Link
                to="/results"
                className="inline-block border-2 border-white/40 text-white font-heading font-semibold rounded-full px-8 py-4 text-base hover:border-saffron hover:text-saffron transition-colors duration-200"
              >
                View Results →
              </Link>
              <a
                href="/brochure.pdf"
                download
                className="inline-flex items-center gap-2 border-2 border-white/20 bg-white/10 text-white font-heading font-semibold rounded-full px-8 py-4 text-base hover:bg-white/20 transition-colors duration-200"
              >
                <Download size={18} /> Download Brochure
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {['AK', 'PS', 'RM', 'SD'].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-saffron border-2 border-navy flex items-center justify-center text-xs font-bold text-white">{i[0]}</div>
                ))}
              </div>
              <p className="text-white/60 text-sm">
                <strong className="text-white">200+</strong> students enrolled this year
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-navy">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-500 text-sm mt-1 font-body">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Our Programs"
            heading="Coaching for Every Student"
            subtext="From school board exams to competitive entrance tests — we have the right program for your child."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courses.map(c => (
              <motion.div
                key={c.id}
                variants={fadeUp}
                className="bg-cream rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 group"
              >
                <h3 className="font-heading font-semibold text-navy text-lg mb-1">{c.name}</h3>
                <p className="text-saffron text-sm font-medium mb-2">Classes {c.classes}</p>
                <p className="text-gray-500 text-sm mb-4">{c.subjects.slice(0, 3).join(' · ')}{c.subjects.length > 3 ? ' & more' : ''}</p>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-1 text-navy font-semibold text-sm hover:text-saffron transition-colors group-hover:gap-2"
                >
                  Know More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/courses" className="inline-flex items-center gap-2 bg-navy text-white font-heading font-semibold px-8 py-3 rounded-full hover:bg-navy/90 transition-colors">
              View All Courses <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Siddhi */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Why Choose Us"
            heading="What Makes Siddhi Different"
            subtext="We are not just another coaching centre. We are a community that genuinely cares about every student's growth."
            light
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyUs.map((w, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <h3 className="font-heading font-semibold text-white text-base mb-2">{w.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Toppers Wall Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="2024 Results"
            heading="Our Proud Toppers"
            subtext="Year after year, Siddhi students top their boards. Here are our 2024 stars."
          />
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {topperPreview.map(t => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-shrink-0 w-56 text-center"
              >
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                <div className="font-heading font-semibold text-navy text-sm">{t.name}</div>
                <div className="text-saffron font-bold text-xl my-1">{t.percentage}%</div>
                <div className="text-xs text-gray-400 bg-gray-50 rounded-lg px-2 py-1 mb-1">{t.board} Board</div>
                <div className="text-xs text-gray-500">{t.school}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/results" className="inline-flex items-center gap-2 text-navy font-heading font-semibold hover:text-saffron transition-colors">
              View All Results <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Teacher Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Our Faculty"
            heading="Learn from the Best"
            subtext="Our teachers are not just qualified — they are passionate educators who know how to make concepts stick."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {teacherPreview.map(t => (
              <motion.div
                key={t.id}
                variants={fadeUp}
                className="bg-cream rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="font-heading font-semibold text-navy">{t.name}</h3>
                <p className="text-saffron text-sm font-medium mt-0.5">{t.subject}</p>
                <p className="text-gray-400 text-xs mt-1">{t.qualification}</p>
                <div className="flex justify-center gap-3 mt-3">
                  <span className="text-xs bg-navy/5 text-navy rounded-full px-3 py-1">{t.experience} yrs exp</span>
                  <span className="text-xs bg-emerald/10 text-emerald rounded-full px-3 py-1">{t.students}+ students</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Link to="/teachers" className="inline-flex items-center gap-2 text-navy font-heading font-semibold hover:text-saffron transition-colors">
              Meet All Teachers <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Parent Reviews"
            heading="What Parents Say"
            subtext="The trust of Chembur's families is our greatest achievement."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonialPreview.map(t => (
              <motion.div
                key={t.id}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={14} className="fill-saffron text-saffron" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.parentName} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-heading font-semibold text-navy text-sm">{t.parentName}</div>
                    <div className="text-gray-400 text-xs">{t.childInfo}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Batch Schedule Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Batch Timings"
            heading="Flexible Schedules for Every Student"
            subtext="We work around your school schedule — not the other way around."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { label: 'Morning Batch', time: '6:30 AM – 10:00 AM', desc: 'Ideal for students who prefer early hours. Fresh mind, best focus.' },
              { label: 'Afternoon Batch', time: '1:00 PM – 5:00 PM', desc: 'Perfect for students with later school hours or half-day sessions.' },
              { label: 'Evening Batch', time: '5:00 PM – 9:00 PM', desc: 'Best for students with full school days. Unwind and then learn.' },
            ].map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-cream rounded-2xl p-6 border border-gray-100 text-center shadow-sm"
              >
                <h3 className="font-heading font-semibold text-navy mb-1">{b.label}</h3>
                <div className="text-saffron font-bold text-sm mb-3">{b.time}</div>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Link to="/schedule" className="inline-flex items-center gap-2 bg-navy text-white font-heading font-semibold px-8 py-3 rounded-full hover:bg-navy/90 transition-colors">
              See Full Schedule <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label="Find Us"
            heading="We Are Right Here in Chembur"
            subtext="Conveniently located, just 5 minutes from Chembur Station."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-md h-72 lg:h-96"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3!2d72.8993!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNTQnMDAuOCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Siddhi Coaching Classes Location"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-saffron" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-navy">Address</div>
                  <p className="text-gray-600 text-sm mt-0.5">Shop no.5 Veena Serene, B Wing, Sahakar Nagar 4,<br />Shell Colony Road, Chembur, Mumbai - 400071</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-saffron" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-navy">Phone</div>
                  <a href="tel:+919594345743" className="text-gray-600 text-sm hover:text-saffron transition-colors">+91 95943 45743</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-navy">WhatsApp</div>
                  <a href="https://wa.me/919594345743" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-[#25D366] transition-colors">Chat with us</a>
                </div>
              </div>
              <div className="mt-4 p-4 bg-saffron/10 rounded-xl border border-saffron/20">
                <p className="text-navy text-sm font-medium">Landmarks near us:</p>
                <ul className="text-gray-600 text-sm mt-1 space-y-0.5">
                  <li>• 5 min walk from Chembur Railway Station</li>
                  <li>• 3 min from Chembur Metro Station</li>
                  <li>• Shell Colony Road, near Sahakar Nagar</li>
                </ul>
              </div>
              <DemoButton size="lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
