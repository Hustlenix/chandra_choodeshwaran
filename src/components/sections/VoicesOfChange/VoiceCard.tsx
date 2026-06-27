'use client'

import { motion } from 'framer-motion'
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
  index: number
}

export default function VoiceCard({ voice, index }: VoiceCardProps) {
  const isFeatured = voice.featured

  return (
    <motion.div
      className={cn(
        'border border-border-light bg-surface-white transition-all duration-300',
        isFeatured ? 'p-8 md:p-10' : 'p-6 md:p-8'
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Quote text */}
      <blockquote>
        <p
          className={cn(
            'font-serif italic leading-relaxed text-text-primary/90',
            isFeatured ? 'text-body-lg md:text-heading-4' : 'text-body'
          )}
        >
          {voice.quote}
        </p>
      </blockquote>

      {/* Separator line */}
      <div className={cn('mt-6 h-px bg-border-light', isFeatured ? 'mt-8' : 'mt-6')} />

      {/* Author & Role */}
      <div className={cn('space-y-1', isFeatured ? 'mt-6' : 'mt-5')}>
        <p className="font-sans font-medium text-accent-500">
          {voice.name}
        </p>
        {(voice.role || voice.organization) && (
          <p className="text-body-sm text-text-muted">
            {[voice.role, voice.organization].filter(Boolean).join(', ')}
          </p>
        )}
      </div>
    </motion.div>
  )
}
