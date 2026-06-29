'use client'

import { useEffect, useRef } from 'react'
import { SITE } from '@/config/site'

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-glow-amber/10"
          style={{
            width: `${40 + i * 20}px`,
            height: `${40 + i * 20}px`,
            left: `${10 + i * 8}%`,
            top: `${10 + (i % 4) * 20}%`,
            animation: `floatSlow ${7 + i * 1.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <div
          key={`s-${i}`}
          className="absolute rounded-full bg-glow-warm/20"
          style={{
            width: `${6 + i * 3}px`,
            height: `${6 + i * 3}px`,
            left: `${25 + i * 16}%`,
            top: `${35 + (i % 2) * 28}%`,
            animation: `floatMedium ${5 + i * 1.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.6 + 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const to = setTimeout(() => {
      if (titleRef.current) titleRef.current.style.opacity = '1'
      if (contentRef.current) contentRef.current.style.opacity = '1'
    }, 100)
    return () => clearTimeout(to)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-surface-white">
      <div className="bg-glow-radial pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-glow-radial-amber pointer-events-none absolute inset-0" aria-hidden="true" />
      <Particles />

      <div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-6 py-32 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center">
            <span
              className="mb-5 inline-flex self-start rounded-badge bg-surface-warm/80 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm"
              style={{ opacity: 0, animation: 'rise 0.8s ease-out 0.3s forwards' }}
            >
              Emotional Intelligence Trainer
            </span>

            <h1
              ref={titleRef}
              className="font-display text-display leading-[1.06] tracking-[-0.04em] text-text-primary"
              style={{ opacity: 0, transition: 'opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.5s' }}
            >
              {SITE.shortName}
            </h1>

            <p
              className="mt-5 max-w-lg text-body-lg leading-relaxed text-text-secondary"
              style={{ opacity: 0, animation: 'rise 0.8s ease-out 0.7s forwards' }}
            >
              {SITE.positioning}
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              style={{ opacity: 0, animation: 'rise 0.8s ease-out 0.9s forwards' }}
            >
              <a
                href="/podcast"
                className="inline-flex items-center justify-center rounded-pill bg-text-primary px-6 py-3 text-sm font-medium text-text-inverse transition-all duration-500 hover:opacity-90 hover:shadow-glow"
              >
                Listen to the Podcast
              </a>
              <a
                href="/philosophy"
                className="inline-flex items-center justify-center rounded-pill border border-border-light/80 bg-surface-white/80 px-6 py-3 text-sm font-medium text-text-primary shadow-control backdrop-blur-sm transition-all duration-500 hover:bg-surface-warm hover:shadow-warm"
              >
                Explore My Philosophy
              </a>
            </div>
          </div>

          <div
            ref={contentRef}
            className="flex flex-col justify-center"
            style={{ opacity: 0, transition: 'opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.6s' }}
          >
            <p className="text-body leading-relaxed text-text-secondary">
              Based in {SITE.location}, I help individuals and organizations unlock their full potential through emotional intelligence, effective communication, and human development. With over 15 years of experience, my approach combines evidence-based frameworks with practical, real-world application.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-glow-amber/60" />
                15+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-glow-amber/60" />
                500+ Workshops
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-glow-amber/60" />
                10,000+ Lives Impacted
              </span>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ opacity: 0, animation: 'fadeIn 1s ease-out 2s forwards' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted/50">Scroll</span>
            <div className="h-10 w-px bg-gradient-to-b from-text-muted/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
