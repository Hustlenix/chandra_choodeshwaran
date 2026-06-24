'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroBackground } from './HeroBackground'
import { Button } from '@/components/ui/Button'
import { HOME_HERO } from '@/content/home'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackground />
      
      <motion.div
        className="mx-auto w-full max-w-[1200px] px-6 pt-32 pb-20 md:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-pink-400">
            {HOME_HERO.badge}
          </span>
        </motion.div>

        {/* Headline - Word by word reveal */}
        <motion.h1
          className="max-w-4xl font-serif text-display-sm font-normal leading-[1] tracking-[-0.03em] text-text-primary md:text-display lg:text-display-lg"
          variants={itemVariants}
        >
          {HOME_HERO.headline.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {word}
                {i < HOME_HERO.headline.split(' ').length - 1 ? '\u00A0' : ''}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 max-w-2xl text-body-lg text-text-muted md:text-body-lg"
          variants={itemVariants}
        >
          {HOME_HERO.subtitle}
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Book a Free Call
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary" size="lg">
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* Trust Indicators Row */}
        <motion.div
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3"
          variants={itemVariants}
        >
          {HOME_HERO.trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" aria-hidden="true" />
              <span className="text-sm text-text-secondary">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-text-muted">Scroll</span>
            <div className="h-8 w-[1px] bg-pink-300 animate-scroll-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
