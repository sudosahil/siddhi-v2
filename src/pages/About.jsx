import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import DemoButton from '../components/ui/DemoButton';

const milestones = [
  { year: 2006, event: 'Siddhi Coaching Classes founded by Vinod Sir in Chembur.' },
  { year: 2008, event: 'First batch of SSC students — 45 students, 94% pass rate.' },
  { year: 2012, event: 'Expanded to CBSE and ICSE coaching. 500 students milestone reached.' },
  { year: 2015, event: 'Introduced Commerce stream coaching. New center inaugurated.' },
  { year: 2018, event: 'Launched JEE Foundation and NEET Foundation batches. 1000 students enrolled.' },
  { year: 2020, event: 'Transitioned to online classes during COVID-19. Zero disruption in education.' },
  { year: 2022, event: 'Upgraded infrastructure — smart classrooms, digital boards, CCTV security.' },
  { year: 2024, event: '1500+ students. 50+ faculty. 18 consecutive years of Board toppers.' },
];

const values = [
  { title: 'Academic Excellence', desc: 'We never compromise on the quality of teaching. Every class, every test, every doubt session is designed to push the student towards their best.' },
  { title: 'Personal Attention', desc: 'Small batch sizes and open-door access to teachers mean no student ever feels left behind or hesitant to ask questions.' },
  { title: 'Transparency', desc: 'Parents are always kept informed — about progress, attendance, weak areas, and performance. We believe in full transparency.' },
  { title: 'Student Wellbeing', desc: 'Education is not just marks. We care about the mental health, confidence, and holistic development of every student who walks through our doors.' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Siddhi Coaching Classes Chembur — Our Story & Mission</title>
        <meta name="description" content="Learn the story of Siddhi Coaching Classes — founded in 2006 in Chembur, Mumbai, with a mission to provide quality education with personal attention." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-saffron/20 text-saffron text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Story
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            About Siddhi Coaching
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-navy rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <img
                  src="https://ui-avatars.com/api/?name=Vinod+Sir&background=1B2A4A&color=E8951D&size=400"
                  alt="Vinod Sir — Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-saffron text-white rounded-xl px-4 py-3 shadow-lg max-w-xs hidden lg:block">
                <p className="text-sm font-semibold">"Every child deserves a great teacher."</p>
                <p className="text-xs mt-0.5 text-white/80">— Vinod Sir, Founder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-saffron/10 text-saffron text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">Founder's Story</span>
              <h2 className="font-heading font-bold text-3xl text-navy mb-5">Vinod Sir</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Born and raised in Chembur, Vinod Sir spent his early career as a Mathematics teacher at a local municipal school. What he saw every day broke his heart — bright children with tremendous potential, struggling not because they lacked intelligence, but because they lacked access to focused, quality guidance.
                </p>
                <p>
                  In 2006, with a small borrowed space, a blackboard, and a batch of 12 students, he started Siddhi Coaching Classes. The name "Siddhi" — meaning achievement in Sanskrit — was not chosen lightly. It captured his belief that every child, with the right support, could achieve their true potential.
                </p>
                <p>
                  Today, 18 years later, Siddhi stands as Chembur's most trusted name in coaching. But the mission remains unchanged: personal attention, academic excellence, and a genuine investment in every student's future.
                </p>
              </div>
              <div className="mt-8">
                <DemoButton size="lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Our Purpose" heading="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-navy rounded-2xl p-8 text-white"
            >
              <div className="text-saffron font-heading font-bold text-sm uppercase tracking-wider mb-3">Our Mission</div>
              <p className="text-white/90 text-lg leading-relaxed">
                To provide every student in Chembur with access to high-quality, affordable, and personalised academic coaching — creating a foundation for lifelong learning and confidence.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-saffron rounded-2xl p-8 text-white"
            >
              <div className="text-white/70 font-heading font-bold text-sm uppercase tracking-wider mb-3">Our Vision</div>
              <p className="text-white/90 text-lg leading-relaxed">
                To be the coaching institute where every parent in Mumbai trusts their child's academic journey — and where every student looks back with gratitude at the foundation we helped build.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Our Journey" heading="Milestones That Matter" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy/20 hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex gap-4 sm:gap-8 items-start ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} hidden sm:block`} />
                  <div className="w-8 h-8 rounded-full bg-saffron text-white flex items-center justify-center text-xs font-bold shrink-0 relative z-10 shadow-md hidden sm:flex">
                    {i + 1}
                  </div>
                  <div className={`flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100 ${i % 2 === 0 ? '' : ''}`}>
                    <span className="text-saffron font-heading font-bold text-lg">{m.year}</span>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="Our Space" heading="A Place Built for Learning" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Classroom', 'Library', 'Notice Board', 'Study Hall'].map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-navy/5 rounded-2xl flex flex-col items-center justify-center border border-gray-100 hover:bg-navy/10 transition-colors"
              >
                <span className="text-navy font-medium text-sm">{room}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {['CCTV Surveillance', 'Smart Boards', 'Air Cooled Classrooms', 'Library Access', 'Wi-Fi Campus', 'Parent Waiting Area'].map(badge => (
              <span key={badge} className="bg-emerald/10 text-emerald text-sm font-medium px-4 py-1.5 rounded-full border border-emerald/20">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="What We Stand For" heading="Our Core Values" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <h3 className="font-heading font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
