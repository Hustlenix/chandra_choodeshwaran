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
      viewport={{ once: true }}
      className={cn(
        'mb-16 md:mb-20',
        align === 'center' ? 'text-center' : '',
        className
      )}
    >
      <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-pink-400">
        {badge}
      </span>
      <Tag
        className={cn(
          'font-serif leading-tight text-text-primary',
          titleSizes[size],
          pinkAccent ? 'text-gradient-pink' : ''
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            'mt-6 text-body-lg text-text-muted',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          )}
        >
          {subtitle}
        </p>
      )}
      {decorative && (
        <div
          className={cn(
            'mt-8 h-px w-16 bg-gradient-to-r from-pink-400/50 to-transparent',
            align === 'center' ? 'mx-auto' : ''
          )}
        />
      )}
    </motion.div>
  )
}
