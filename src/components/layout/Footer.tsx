import Link from 'next/link'
import { SITE } from '@/config/site'
import { SOCIAL_LINKS } from '@/config/social'

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-warm">
      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="font-display text-sm font-[700] tracking-[0.05em]">
              {SITE.initials}
            </Link>
            <p className="mt-2 max-w-sm text-sm text-text-secondary">
              {SITE.positioning}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.filter((l) => l.platform !== 'email').map((link) => (
              <a
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border-light pt-6 text-sm text-text-muted md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <a href={`mailto:${SITE.email}`} className="hover:text-text-primary">{SITE.email}</a>
        </div>
      </div>
    </footer>
  )
}
