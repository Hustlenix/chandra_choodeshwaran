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
    <footer className="relative bg-surface-dark text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-section md:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl text-white">
              <span className="text-pink-400">C</span>handra
              <span className="text-pink-300">choo</span>deshwaran
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {SITE.positioning}
            </p>
            <p className="mt-4 text-sm text-white/40">
              Based in {SITE.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Quick Links
            </p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-pink-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Services
            </p>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-pink-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              Connect
            </p>
            <SocialLinks showLabels variant="grid" />
            <div className="mt-6 space-y-1">
              <p className="text-sm text-white/40">{SITE.email}</p>
              <p className="text-sm text-white/40">{SITE.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <p className="text-sm text-white/40">
              Built with purpose in Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  )
}
