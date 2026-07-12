import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

// Rendered for any unknown path. Emits noindex so soft-404s (every URL currently
// returns HTTP 200 via the SPA rewrite) are kept out of Google's index.
export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Siddhi's Coaching Classes"
        description="The page you are looking for could not be found."
        noindex
      />
      <section className="bg-navy pt-32 pb-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-xl mx-auto px-4 sm:px-6">
          <p className="font-heading text-6xl font-bold text-saffron mb-4">404</p>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">Page not found</h1>
          <p className="text-white/70 mb-8">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="bg-saffron text-white font-heading font-semibold px-6 py-3 rounded-full hover:bg-amber-600 transition-colors">
              Go to Home
            </Link>
            <Link to="/courses" className="border-2 border-white/30 text-white font-heading font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
