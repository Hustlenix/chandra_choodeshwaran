'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SITE } from '@/config/site'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border-light py-section-lg">
      <div className="bg-glow-radial pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[800px] px-6 text-center lg:px-12">
        <ScrollReveal>
          <span className="mb-6 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
            {SITE.initials}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-text-primary">
            Ready to begin your journey?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mx-auto mt-6 max-w-lg text-body-lg leading-relaxed text-text-secondary">
            Whether you are looking for training, counselling, or simply want to explore the philosophy — the next step starts with a conversation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/philosophy"
              className="inline-flex items-center gap-2 rounded-pill bg-text-primary px-6 py-3 text-sm font-medium text-text-inverse transition-all hover:opacity-90"
            >
                Explore the philosophy
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 rounded-pill border border-border-light bg-surface-white px-6 py-3 text-sm font-medium text-text-primary shadow-control transition-all hover:bg-surface-warm"
            >
              Get in touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
