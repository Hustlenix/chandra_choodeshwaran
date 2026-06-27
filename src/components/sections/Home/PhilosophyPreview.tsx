'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { OPENING_CONTENT } from '@/content/home'

export function PhilosophyPreview() {
  return (
    <section className="relative overflow-hidden py-section-lg">
      <div className="bg-glow-radial-warm pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <span className="mb-8 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
              Philosophy
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <blockquote className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-text-primary">
              &ldquo;{OPENING_CONTENT.headline}&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-body-lg leading-relaxed text-text-secondary">
              {OPENING_CONTENT.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10">
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 rounded-pill bg-text-primary px-6 py-3 text-sm font-medium text-text-inverse transition-all hover:opacity-90"
              >
                Explore the philosophy
                <span className="text-xs">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
