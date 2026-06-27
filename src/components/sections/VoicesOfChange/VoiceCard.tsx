import { cn } from '@/lib/utils'

interface VoiceData {
  name: string
  role?: string
  organization?: string
  quote: string
  featured?: boolean
}

interface VoiceCardProps {
  voice: VoiceData
}

export default function VoiceCard({ voice }: VoiceCardProps) {
  const isFeatured = voice.featured

  return (
    <div
      className={cn(
        'rounded-card border border-border-light bg-surface-white transition-shadow hover:shadow-card',
        isFeatured ? 'p-8 md:p-10' : 'p-6 md:p-8',
      )}
    >
      <blockquote>
        <p
          className={cn(
            'font-display italic leading-relaxed text-text-primary/90',
            isFeatured ? 'text-body-lg md:text-heading-4' : 'text-body',
          )}
        >
          &ldquo;{voice.quote}&rdquo;
        </p>
      </blockquote>

      <div className={cn('h-px bg-border-light', isFeatured ? 'mt-8' : 'mt-6')} />

      <div className={cn('space-y-1', isFeatured ? 'mt-6' : 'mt-5')}>
        <p className="font-sans font-medium text-accent-500">{voice.name}</p>
        {(voice.role || voice.organization) && (
          <p className="text-body-sm text-text-muted">
            {[voice.role, voice.organization].filter(Boolean).join(', ')}
          </p>
        )}
      </div>
    </div>
  )
}
