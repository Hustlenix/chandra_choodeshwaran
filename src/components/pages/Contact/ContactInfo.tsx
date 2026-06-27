import { SITE } from '@/config/site'
import { SOCIAL_LINKS } from '@/config/social'
import { MapPin, Mail, Globe } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 font-medium text-heading-4 text-text-primary">Contact Details</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-text-muted" />
            <div>
              <p className="text-sm font-medium text-text-primary">Location</p>
              <p className="text-sm text-text-secondary">{SITE.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-text-muted" />
            <div>
              <p className="text-sm font-medium text-text-primary">Email</p>
              <p className="text-sm text-text-secondary">{SITE.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="mt-0.5 h-5 w-5 shrink-0 text-text-muted" />
            <div>
              <p className="text-sm font-medium text-text-primary">Languages</p>
              <p className="text-sm text-text-secondary">{SITE.languages.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-heading-4 text-text-primary">Connect</h3>
        <div className="flex flex-wrap gap-3">
          {SOCIAL_LINKS.filter((l) => l.platform !== 'email').map((link) => (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
