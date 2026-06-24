'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OPENING_CONTENT } from '@/lib/constants'
import ScrollIndicator from './ScrollIndicator'

gsap.registerPlugin(ScrollTrigger)

export default function OpeningStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const headline = headlineRef.current
    if (!headline) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      // Ensure all words are visible when motion is reduced
      const words = headline.querySelectorAll<HTMLElement>('.reveal-word')
      words.forEach((word) => {
        word.style.clipPath = 'inset(0 0 0 0)'
      })
      return
    }

    const ctx = gsap.context(() => {
      const words = headline.querySelectorAll<HTMLElement>('.reveal-word')
      if (!words.length) return

      gsap.fromTo(
        words,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0 0 0)',
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
        }
      )
    }, headline)

    return () => ctx.revert()
  }, [])

  const words = OPENING_CONTENT.headline.split(' ')

  return (
    <section
      ref={sectionRef}
      id="opening"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* ─── Animated Mesh Background ─────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-surface-white" />

        {/* Drifting pink gradient orbs */}
        <div
          className="absolute inset-0 animate-gradient-drift opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 100% 70% at 15% 20%, rgba(236, 72, 153, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse 80% 100% at 85% 30%, rgba(244, 114, 182, 0.07) 0%, transparent 60%),
              radial-gradient(ellipse 60% 60% at 50% 80%, rgba(255, 240, 245, 0.9) 0%, transparent 100%),
              radial-gradient(ellipse 50% 50% at 70% 60%, rgba(236, 72, 153, 0.04) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        />

        {/* Pink accent blobs */}
        <div
          className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-drift-slow rounded-full opacity-[0.03] blur-[120px]"
          style={{ backgroundColor: '#ec4899' }}
        />
        <div
          className="absolute right-1/4 top-1/2 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 animate-drift-slow rounded-full opacity-[0.02] blur-[100px]"
          style={{ backgroundColor: '#ec4899', animationDelay: '-7s' }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(236,72,153,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.06) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ─── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-8 lg:px-16">
        <div className="max-w-6xl">
          {/* Badge */}
          <motion.p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-pink-400 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {OPENING_CONTENT.badge}
          </motion.p>

          {/* Massive headline — word-by-word GSAP clip-path reveal */}
          <h1
            ref={headlineRef}
            className="font-serif text-[clamp(2.8rem,9vw,9rem)] leading-[0.85] tracking-[-0.05em] text-text-primary"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="reveal-word inline-block will-change-[clip-path]"
                style={{ clipPath: 'inset(0 100% 0 0)' }}
              >
                {word}
                {i < words.length - 1 && '\u00A0'}
              </span>
            ))}
          </h1>

          {/* Subtitle — fades in after delay */}
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

      {/* ─── Scroll Indicator ─────────────────────────────────────── */}
      <ScrollIndicator />
    </section>
  )
}
