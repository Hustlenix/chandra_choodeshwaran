'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

interface SectionHeadingProps {
  badge: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  as?: 'h1' | 'h2' | 'h3'
  pinkAccent?: boolean
  decorative?: boolean
  className?: string
}

const titleSizes = {
  sm: 'text-heading-3 md:text-heading-2',
  md: 'text-heading-2 md:text-heading-1',
  lg: 'text-display-sm md:text-display',
  xl: 'text-display md:text-display-lg',
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  size = 'md',
  as: Tag = 'h2',
  pinkAccent = false,
  decorative = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={cn(
        'mb-16 md:mb-20',
        align === 'center' ? 'text-center' : '',
        className
      )}
    >
      <div className={cn('relative', align === 'center' ? 'inline-block' : '')}>
        <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.35em] text-pink-400/80">
          {badge}
        </span>
        <div className={cn(
          'mx-auto h-px w-8 bg-pink-400/30 mb-5',
          align === 'center' ? '' : ''
        )} />
      </div>
      <Tag
        className={cn(
          'font-serif leading-[1.05] tracking-[-0.02em]',
          titleSizes[size],
          pinkAccent ? 'text-gradient-pink' : 'text-gradient-subtle'
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            'mt-6 text-body-lg leading-relaxed',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
            pinkAccent ? 'text-text-muted/90' : 'text-text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
      {decorative && (
        <div
          className={cn(
            'mt-8 flex items-center gap-3',
            align === 'center' ? 'justify-center' : ''
          )}
        >
          <div className="h-px w-12 bg-gradient-to-r from-pink-400/50 to-transparent" />
          <div className="h-1.5 w-1.5 rotate-45 rounded-sm bg-pink-400/40" />
          <div className="h-px w-12 bg-gradient-to-l from-pink-400/50 to-transparent" />
        </div>
      )}
    </motion.div>
  )
}
