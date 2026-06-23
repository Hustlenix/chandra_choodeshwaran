'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/types'

interface QuoteCardProps {
  testimonial: Testimonial
  index: number
}

export default function QuoteCard({ testimonial, index }: QuoteCardProps) {
  return (
    <motion.div
      className="group relative border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.04]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -4 }}
    >
      {/* Decorative quote mark */}
      <span className="pointer-events-none absolute -left-2 -top-2 select-none font-serif text-7xl leading-none text-white/5">
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote className="relative z-10">
        <p className="text-sm leading-relaxed text-white/80">
          {testimonial.quote}
        </p>
      </blockquote>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold uppercase text-white/50">
          {testimonial.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="font-medium text-white/80">
            {testimonial.name}
          </p>
          {(testimonial.role || testimonial.organization) && (
            <p className="text-xs text-muted">
              {[testimonial.role, testimonial.organization]
                .filter(Boolean)
                .join(', ')}
            </p>
          )}
        </div>
      </div>

      {/* Source badge */}
      {testimonial.source && (
        <span
          className={cn(
            'absolute right-4 top-4 rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider',
            'border-white/10 text-muted'
          )}
        >
          {testimonial.source}
        </span>
      )}
    </motion.div>
  )
}
