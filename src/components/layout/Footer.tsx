import Link from 'next/link'
import { SITE } from '@/config/site'
import { SocialLinks } from '@/components/ui/SocialLinks'
import BackToTop from './BackToTop'

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-section md:px-8 lg:px-12">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl">
              <span className="text-accent-400">C</span>handra
              <span>choo</span>deshwaran
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {SITE.positioning}
            </p>
            <div className="mt-4 text-sm text-white/30">
              {SITE.location}
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-white/30">
              Connect
            </p>
            <SocialLinks variant="grid" />
          </div>

          {/* Email */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-white/30">
              Email
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-white/50 transition-colors duration-300 hover:text-accent-300"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
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
