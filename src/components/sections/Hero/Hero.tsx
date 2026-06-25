'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HeroBackground } from './HeroBackground'
import { Button } from '@/components/ui/Button'
import { HOME_HERO } from '@/content/home'
import { SITE } from '@/config/site'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-[8%] top-[20%] h-4 w-4 rounded-full bg-pink-300/20 float-slow" />
        <div className="absolute right-[12%] top-[30%] h-3 w-3 rounded-full bg-pink-400/15 float-medium" style={{ animationDelay: '-2s' }} />
        <div className="absolute left-[15%] bottom-[35%] h-2 w-2 rounded-full bg-pink-300/25 float-fast" style={{ animationDelay: '-4s' }} />
        <div className="absolute right-[20%] bottom-[25%] h-5 w-5 rounded-full bg-pink-400/10 float-slow" style={{ animationDelay: '-6s' }} />
      </div>

      <motion.div
        className="mx-auto w-full max-w-[1200px] px-6 pt-32 pb-20 md:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.35em] text-pink-400/80">
            {HOME_HERO.badge}
          </span>
        </motion.div>

        {/* Tagline - states profession explicitly */}
        <motion.p
          className="mb-8 font-mono text-sm tracking-[0.15em] text-pink-500/70"
          variants={itemVariants}
        >
          {SITE.tagline}
        </motion.p>

        {/* Headline - Word by word reveal */}
        <motion.h1
          className="max-w-4xl font-serif text-display-sm font-normal leading-[1] tracking-[-0.03em] md:text-display lg:text-display-lg"
          variants={itemVariants}
        >
          {HOME_HERO.headline.split(' ').map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block text-gradient-subtle"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.08,
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
          className="mt-8 max-w-2xl text-body-lg leading-relaxed text-text-muted/90 md:text-body-lg"
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
              className="link-premium flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400/60" aria-hidden="true" />
              <span className="text-sm text-text-muted">{item}</span>
            </Link>
            )
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted/60">Scroll</span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-pink-300 to-transparent animate-scroll-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
