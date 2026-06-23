import { NAV_ITEMS, PERSON_FALLBACK, CONTACT_FALLBACK } from '@/lib/constants'
import { SocialLinks } from '@/components/ui/SocialLinks'
import BackToTop from './BackToTop'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-900">
      <div className="mx-auto max-w-[1200px] px-6 py-section md:px-8 lg:px-12">
        {/* Grid: brand, quick links, social */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand info */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl text-white">
              <span className="text-gold-500">C</span>handracho<span className="text-gold-500">o</span>deshwaran
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {PERSON_FALLBACK.positioning}
            </p>
            <p className="mt-4 text-sm text-muted">
              Based in {CONTACT_FALLBACK.location}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">
              Quick Links
            </p>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-gold-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">
              Connect
            </p>
            <SocialLinks />
            <div className="mt-6 space-y-2 text-sm text-muted">
              {CONTACT_FALLBACK.instagram && (
                <p>Instagram: {CONTACT_FALLBACK.instagram.join(', ')}</p>
              )}
              {CONTACT_FALLBACK.clubhouse && (
                <p>Clubhouse: {CONTACT_FALLBACK.clubhouse}</p>
              )}
              {CONTACT_FALLBACK.email && (
                <p>Email: {CONTACT_FALLBACK.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-16 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} {PERSON_FALLBACK.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted">
              Built with purpose in Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  )
}
