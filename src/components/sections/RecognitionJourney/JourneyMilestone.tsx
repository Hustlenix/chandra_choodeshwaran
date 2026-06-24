'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface JourneyMilestoneProps {
  year: number
  title: string
  organization: string
  description: string
  index: number
  isActive?: boolean
  isMobile?: boolean
}

export default function JourneyMilestone({
  year,
  title,
  organization,
  description,
  index,
  isActive = false,
  isMobile = false,
}: JourneyMilestoneProps) {
  return (
    <div
      className={cn(
        'relative flex flex-shrink-0 items-center justify-center',
        isMobile
          ? 'min-h-[60vh] w-full'
          : 'min-h-screen w-screen'
      )}
    >
      {/* Massive year in background */}
      <span
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center font-bold text-text-primary select-none',
          isMobile ? 'text-number-lg' : 'text-number-massive'
        )}
        style={{ opacity: isMobile ? 0.05 : isActive ? 0.12 : 0.06 }}
      >
        {year}
      </span>

      {/* Pink dot on timeline (desktop only) */}
      {!isMobile && (
        <div
          className={cn(
            'absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-700 ease-out',
            isActive
              ? 'h-4 w-4 border-pink-400 bg-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.4)]'
              : 'h-3 w-3 border-pink-400/60 bg-surface-white'
          )}
          style={{ top: '65%' }}
        />
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: isMobile ? '0px' : '-100px' }}
        transition={{ duration: 0.6, delay: isMobile ? index * 0.1 : 0 }}
      >
        {/* Organization label */}
        <span className="mb-3 block font-mono text-xs uppercase tracking-[0.3em] text-pink-500">
          {organization}
        </span>

        {/* Title */}
        <h3 className="font-serif text-heading-2 text-text-primary sm:text-heading-1">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-6 text-body-lg leading-relaxed text-text-muted">
          {description}
        </p>
      </motion.div>

      {/* Mobile timeline indicator */}
      {isMobile && (
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pink-400/60">
            Milestone {index + 1}
          </span>
          <span className="h-px w-8 bg-pink-400/30" />
          <span className="font-mono text-xs text-text-primary/40">{year}</span>
        </div>
      )}
    </div>
  )
}
