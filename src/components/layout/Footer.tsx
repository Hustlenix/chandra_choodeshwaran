import Link from 'next/link'
import { SITE } from '@/config/site'
import { NAV_ITEMS } from '@/config/navigation'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { FIVE_PILLARS } from '@/content/pillars'
import BackToTop from './BackToTop'

const SERVICE_LINKS = FIVE_PILLARS.map((p) => ({
  label: p.title,
  href: `/services/${p.id}`,
}))

export default function Footer() {
  return (
    <footer className="relative bg-surface-dark text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/[0.03] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-pink-400/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-section md:px-8 lg:px-12">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl">
              <span className="bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">C</span>handra
              <span className="bg-gradient-to-r from-pink-300 to-pink-200 bg-clip-text text-transparent">choo</span>deshwaran
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {SITE.positioning}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/30">
              <span className="inline-block h-2 w-2 rounded-full bg-pink-400/50" />
              {SITE.location}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-white/30">
              Quick Links
            </p>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 transition-all duration-300 hover:text-pink-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-white/30">
              Services
            </p>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 transition-all duration-300 hover:text-pink-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-white/30">
              Connect
            </p>
            <SocialLinks showLabels variant="grid" />
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${SITE.email}`}
                className="block text-sm text-white/50 transition-colors duration-300 hover:text-pink-300"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} {SITE.name}
            </p>
            <p className="text-sm text-white/20">
              Built with purpose in Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  )
}
