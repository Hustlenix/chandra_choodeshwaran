'use client'

import { motion } from 'framer-motion'

interface ImpactVisualProps {
  blockId: string
  variant?: string
}

export default function ImpactVisual({ blockId, variant }: ImpactVisualProps) {
  if (variant === 'split' || blockId === 'emotional-intelligence') {
    return (
      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-64 w-64 sm:h-80 sm:w-80">
          {[1, 2, 3, 4].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border border-gold-500/20"
              style={{ margin: `${(ring - 1) * 20}px` }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ring * 0.15, duration: 0.6 }}
            />
          ))}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="font-serif text-4xl text-gold-500">EQ</span>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  if (variant === 'full' || blockId === 'communication') {
    return (
      <motion.div
        className="flex h-full w-full items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg viewBox="0 0 400 200" className="w-full max-w-md">
          <motion.path
            d="M0 100 Q50 40 100 100 T200 100 T300 100 T400 100"
            fill="none"
            stroke="rgba(212, 175, 55, 0.3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0 120 Q50 80 100 120 T200 120 T300 120 T400 120"
            fill="none"
            stroke="rgba(212, 175, 55, 0.15)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0 80 Q50 30 100 80 T200 80 T300 80 T400 80"
            fill="none"
            stroke="rgba(212, 175, 55, 0.1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    )
  }

  if (variant === 'diagonal' || blockId === 'leadership') {
    return (
      <motion.div
        className="flex h-full w-full items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg viewBox="0 0 200 200" className="h-48 w-48">
          <motion.polygon
            points="100,10 190,100 100,190 10,100"
            fill="none"
            stroke="rgba(212, 175, 55, 0.3)"
            strokeWidth="1.5"
            initial={{ opacity: 0, rotate: -30 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.polygon
            points="100,40 160,100 100,160 40,100"
            fill="none"
            stroke="rgba(212, 175, 55, 0.2)"
            strokeWidth="1"
            initial={{ opacity: 0, rotate: 30 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="15"
            fill="rgba(212, 175, 55, 0.15)"
            stroke="rgba(212, 175, 55, 0.4)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </svg>
      </motion.div>
    )
  }

  if (variant === 'grid' || blockId === 'counselling') {
    return (
      <motion.div
        className="flex h-full w-full items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg viewBox="0 0 300 200" className="w-full max-w-sm">
          <motion.path
            d="M150 0 L150 80"
            fill="none"
            stroke="rgba(212, 175, 55, 0.3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d="M150 80 L80 160"
            fill="none"
            stroke="rgba(212, 175, 55, 0.2)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.path
            d="M150 80 L220 160"
            fill="none"
            stroke="rgba(212, 175, 55, 0.2)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.path
            d="M150 80 L150 160"
            fill="none"
            stroke="rgba(212, 175, 55, 0.25)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
          {[
            { cx: 80, cy: 160, delay: 0.3 },
            { cx: 220, cy: 160, delay: 0.5 },
            { cx: 150, cy: 160, delay: 0.7 },
            { cx: 150, cy: 80, delay: 0.1 },
          ].map((circle, i) => (
            <motion.circle
              key={i}
              cx={circle.cx}
              cy={circle.cy}
              r="4"
              fill="rgba(212, 175, 55, 0.4)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: circle.delay + 0.5, duration: 0.4 }}
            />
          ))}
        </svg>
      </motion.div>
    )
  }

  return null
}
