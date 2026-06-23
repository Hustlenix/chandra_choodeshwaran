'use client'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface SectionHeadingProps {
  badge: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ badge, title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : ''}`}
    >
      <span className="font-mono text-xs tracking-[0.3em] text-gold-500 uppercase mb-4 block">
        {badge}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
