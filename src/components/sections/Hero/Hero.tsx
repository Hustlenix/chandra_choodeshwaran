'use client'

import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Award, Users, Briefcase } from 'lucide-react'
import MeshBackground from './MeshBackground'
import HeroTitle from './HeroTitle'
import HeroCTA from './HeroCTA'
import { HERO_FALLBACK, PERSON_FALLBACK } from '@/lib/constants'

const iconMap = [Award, Users, Briefcase]

export default function Hero() {
  const scrollToPhilosophy = useCallback(() => {
    const el = document.getElementById('philosophy')
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  const scrollToJourney = useCallback(() => {
    const el = document.getElementById('journey')
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl">
          {/* Eyebrow tag */}
          <motion.p
            className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-gold-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {PERSON_FALLBACK.tagline}
          </motion.p>

          {/* Main headline with word-reveal */}
          <HeroTitle text={HERO_FALLBACK.headline} />

          {/* Subtitle */}
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {HERO_FALLBACK.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-12">
            <HeroCTA onBook={scrollToPhilosophy} onWatch={scrollToJourney} />
          </div>

          {/* Trust indicators row */}
          <motion.div
            className="mt-16 flex flex-wrap items-center gap-6 sm:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {HERO_FALLBACK.trustItems.map((item, i) => {
              const Icon = iconMap[i % iconMap.length]
              return (
                <div key={item} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-gold-500" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
