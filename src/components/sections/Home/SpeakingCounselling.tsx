'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SITE } from '@/config/site'

export function SpeakingCounselling() {
  return (
    <section className="relative overflow-hidden py-section-lg">
      <div className="bg-glow-radial pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <ScrollReveal>
          <span className="mb-6 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
            Services
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-heading-1 text-text-primary">
            Speaking &amp; Counselling
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={200}>
            <div className="group rounded-card border border-border-light/60 bg-surface-white p-8 transition-all duration-500 hover:border-border-light hover:shadow-card">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-warm text-text-muted transition-colors group-hover:bg-glow-warm/30">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </span>
              <h3 className="font-display text-heading-3 text-text-primary">Training &amp; Speaking</h3>
              <p className="mt-3 text-body leading-relaxed text-text-secondary">
                Keynote speeches, workshops, and training programs on emotional intelligence, communication, and leadership for organizations, schools, and conferences across India.
              </p>
              <Link
                href="/journey"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-text-primary transition-all hover:gap-2"
              >
                Learn more <span className="text-xs">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="group rounded-card border border-border-light/60 bg-surface-white p-8 transition-all duration-500 hover:border-border-light hover:shadow-card">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-warm text-text-muted transition-colors group-hover:bg-glow-warm/30">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              <h3 className="font-display text-heading-3 text-text-primary">Counselling &amp; Mentoring</h3>
              <p className="mt-3 text-body leading-relaxed text-text-secondary">
                One-on-one counselling and mentoring sessions focused on career guidance, emotional well-being, and personal growth — grounded in evidence-based approaches and delivered with empathy.
              </p>
              <Link
                href="/connect"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-text-primary transition-all hover:gap-2"
              >
                Get in touch <span className="text-xs">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
