'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { OPENING_CONTENT } from '@/content/home'

export default function OpeningStatement() {
  const words = OPENING_CONTENT.headline.split(' ')

  return (
    <section className="relative min-h-screen overflow-hidden bg-surface-white">
      <div className="bg-glow-radial-warm pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-glow-section pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-32 lg:px-16">
        <ScrollReveal>
          <span className="mb-8 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
            {OPENING_CONTENT.badge}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.88] tracking-[-0.05em] text-text-primary">
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block">
                {word}
                {i < words.length - 1 && '\u00A0'}
              </span>
            ))}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mt-10 max-w-3xl text-body-lg leading-relaxed text-text-secondary">
            {OPENING_CONTENT.subtitle}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
