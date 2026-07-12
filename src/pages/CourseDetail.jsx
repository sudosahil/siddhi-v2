import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, MessageCircle, Check, ArrowLeft, ChevronRight } from 'lucide-react';
import Seo from '../components/Seo';
import { SITE_URL } from '../data/seo';
import { courses } from '../data/courses';

const WA_NUMBER = '917208476547';
function enquireWA(courseName) {
  const msg = encodeURIComponent(`Hi, I would like to enquire about the ${courseName} course at Siddhi's Coaching Classes.`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <>
        <Seo
          title="Course Not Found | Siddhi's Coaching Classes"
          description="The course you are looking for could not be found."
          path={`/courses/${slug ?? ''}`}
          noindex
        />
        <section className="bg-navy pt-32 pb-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-white mb-4">Course not found</h1>
          <Link to="/courses" className="text-saffron font-semibold">← Back to all courses</Link>
        </section>
      </>
    );
  }

  const d = course.detail;
  const path = `/courses/${course.slug}`;

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: d.heading,
    description: d.seoDescription,
    provider: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}${path}`,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      location: { '@type': 'Place', name: 'Shell Colony, Chembur, Mumbai 400071' },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Courses', item: `${SITE_URL}/courses` },
      { '@type': 'ListItem', position: 3, name: d.heading, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <>
      <Seo title={d.seoTitle} description={d.seoDescription} path={path} jsonLd={[courseSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/50 text-xs mb-5">
            <Link to="/" className="hover:text-saffron">Home</Link>
            <ChevronRight size={12} />
            <Link to="/courses" className="hover:text-saffron">Courses</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">{course.title}</span>
          </nav>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-saffron/20 text-saffron text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Classes {course.classes} · {course.board}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {d.heading}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-2xl">
            {course.highlight}
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              {d.intro.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
              ))}
            </div>

            <div>
              <h2 className="font-heading font-bold text-navy text-xl mb-4">What This Course Covers</h2>
              <ul className="space-y-2.5">
                {d.whatYouLearn.map(item => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <Check size={18} className="text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-navy text-xl mb-2">Who Is It For?</h2>
              <p className="text-gray-600 leading-relaxed">{d.whoFor}</p>
            </div>

            <div className="bg-saffron/10 border border-saffron/30 rounded-2xl p-5 flex gap-3">
              <BookOpen size={18} className="text-saffron shrink-0 mt-0.5" />
              <p className="text-navy text-sm font-medium leading-relaxed">{d.outcome}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-heading font-semibold text-navy mb-4">Course at a Glance</h3>
              <div className="space-y-3 text-sm mb-5">
                <div className="flex items-center gap-2 text-gray-600"><Clock size={15} className="text-saffron" /> {course.batchType} batches</div>
                <div className="flex items-center gap-2 text-gray-600"><Users size={15} className="text-saffron" /> Max 20 students / batch</div>
                <div className="flex items-center gap-2 text-gray-600"><BookOpen size={15} className="text-saffron" /> {course.classes}</div>
              </div>
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Subjects</p>
                <div className="flex flex-wrap gap-1.5">
                  {course.subjects.map(s => (
                    <span key={s} className="text-xs bg-navy/5 text-navy rounded-md px-2 py-1">{s}</span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => enquireWA(course.title)}
                className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors mb-3"
              >
                <MessageCircle size={16} /> Enquire on WhatsApp
              </button>
              <Link
                to="/admissions"
                className="w-full border-2 border-navy text-navy font-semibold py-2.5 rounded-xl flex items-center justify-center hover:bg-navy hover:text-white transition-all text-sm"
              >
                View Fees & Admissions
              </Link>
            </div>
            <Link to="/courses" className="flex items-center gap-2 text-navy hover:text-saffron text-sm font-medium px-2">
              <ArrowLeft size={16} /> All courses
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
