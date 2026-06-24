import { SITE } from '@/config/site'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { MapPin, Mail, Phone } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 font-serif text-heading-4 text-text-primary">Contact Details</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pink-400" />
            <div>
              <p className="text-sm font-medium text-text-primary">Location</p>
              <p className="text-sm text-text-muted">{SITE.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-pink-400" />
            <div>
              <p className="text-sm font-medium text-text-primary">Email</p>
              <p className="text-sm text-text-muted">{SITE.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-pink-400" />
            <div>
              <p className="text-sm font-medium text-text-primary">Languages</p>
              <p className="text-sm text-text-muted">{SITE.languages.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-serif text-heading-4 text-text-primary">Connect</h3>
        <SocialLinks showLabels variant="grid" />
      </div>
    </div>
  )
}
