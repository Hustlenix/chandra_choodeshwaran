'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroBackground } from './HeroBackground'
import { HOME_HERO } from '@/content/home'
import { SITE } from '@/config/site'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
        {/* Badge — monospace, accent */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.35em] text-accent-400/80">
            {HOME_HERO.badge}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mb-8 font-mono text-sm tracking-[0.15em] text-accent-500/70"
        >
          {SITE.tagline}
        </motion.p>

        {/* Headline — solid dark text, single fade-up (no word-by-word) */}
        <motion.h1
          variants={itemVariants}
          className="max-w-4xl font-serif text-display-sm font-normal leading-[1] tracking-[-0.03em] text-text-primary md:text-display lg:text-display-lg"
        >
          {HOME_HERO.headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-2xl text-body-lg leading-relaxed text-text-muted/90 md:text-body-lg"
        >
          {HOME_HERO.subtitle}
        </motion.p>

        {/* Single subdued action link */}
        <motion.div variants={itemVariants} className="mt-10">
          <Link
            href="/podcast"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent-500 transition-colors hover:text-accent-600"
          >
            <span className="underline decoration-accent-400/30 underline-offset-4 transition-all group-hover:decoration-accent-400/60">
              Listen to the Podcast
            </span>
            <span aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </motion.div>

        {/* Trust indicators — clickable links to relevant pages */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3"
        >
          {HOME_HERO.trustItems.map((item, i) => {
            const href = item.includes('Times') || item.includes('National Trainer')
              ? '/awards'
              : item.includes('15+ Years')
                ? '/experience'
                : '/about'
            return (
              <Link
                key={`${item}-${i}`}
                href={href}
                className="flex items-center gap-2 transition-opacity hover:opacity-70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400/60" aria-hidden="true" />
                <span className="text-sm text-text-muted">{item}</span>
              </Link>
            )
          })}
        </motion.div>

        {/* Scroll indicator — minimal, editorial */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted/60">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-accent-300/60 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
