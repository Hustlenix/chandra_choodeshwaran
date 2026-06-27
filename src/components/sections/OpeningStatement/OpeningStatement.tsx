'use client'

import { motion } from 'framer-motion'
import { OPENING_CONTENT } from '@/content/home'
import ScrollIndicator from './ScrollIndicator'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.8,
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function OpeningStatement() {
  const words = OPENING_CONTENT.headline.split(' ')

  return (
    <section
      id="opening"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Clean background */}
      <div className="absolute inset-0 bg-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-16">
        <div className="max-w-6xl">
          {/* Badge */}
          <motion.p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-accent-400 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {OPENING_CONTENT.badge}
          </motion.p>

          {/* Headline — Framer Motion word-by-word stagger */}
          <motion.h2
            className="font-serif text-[clamp(2.8rem,8vw,8rem)] leading-[0.85] tracking-[-0.05em] text-text-primary"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline-block"
                variants={wordVariants}
              >
                {word}
                {i < words.length - 1 && '\u00A0'}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-text-muted sm:mt-8 sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {OPENING_CONTENT.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}
