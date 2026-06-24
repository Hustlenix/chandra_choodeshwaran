'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { VoiceCard as VoiceCardType } from '@/types'

interface VoiceCardProps {
  voice: VoiceCardType
  index: number
}

export default function VoiceCard({ voice, index }: VoiceCardProps) {
  const isFeatured = voice.featured

  return (
    <motion.div
      className={cn(
        'group relative border border-border-light bg-pink-50/20 backdrop-blur-sm transition-all duration-500',
        'hover:border-pink-400/30 hover:bg-pink-50/40',
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
      whileHover={{ y: -4 }}
    >
      {/* Decorative opening quotation mark */}
      <span
        className="pointer-events-none absolute select-none font-serif uppercase leading-none text-pink-400"
        style={{
          opacity: 0.12,
          fontSize: isFeatured ? 'clamp(6rem, 12vw, 10rem)' : 'clamp(4rem, 8vw, 7rem)',
          top: isFeatured ? '-0.15em' : '-0.1em',
          left: isFeatured ? '-0.05em' : '-0.03em',
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <blockquote className="relative z-10">
        <p
          className={cn(
            'font-serif italic leading-relaxed text-text-primary/90',
            isFeatured ? 'text-body-lg md:text-heading-4' : 'text-body'
          )}
        >
          {voice.quote}
        </p>
      </blockquote>

      {/* Gold accent line */}
      <div
        className={cn(
          'mt-6 h-px bg-gradient-to-r from-pink-400/50 to-transparent',
          isFeatured ? 'mt-8 w-16' : 'mt-6 w-12'
        )}
      />

      {/* Author & Role */}
      <div className={cn('space-y-1', isFeatured ? 'mt-6' : 'mt-5')}>
        <p className="font-sans font-medium text-pink-500">
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
