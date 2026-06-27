'use client'

'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

interface SectionHeadingProps {
  badge: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

const titleSizes = {
  sm: 'text-heading-3 md:text-heading-2',
  md: 'text-heading-2 md:text-heading-1',
  lg: 'text-display-sm md:text-display',
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  size = 'md',
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={cn(
        'mb-14 md:mb-18',
        align === 'center' ? 'text-center' : '',
        className
      )}
    >
      <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.3em] text-accent-400/80">
        {badge}
      </span>
      <div className={cn('mx-auto h-px w-8 bg-accent-400/30 mb-5', align === 'center' ? '' : '')} />
      <Tag className={cn('font-serif leading-[1.05] tracking-[-0.02em] text-text-primary', titleSizes[size])}>
        {title}
      </Tag>
      {subtitle && (
        <p className={cn(
          'mt-5 text-body-lg leading-relaxed text-text-muted',
          align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
