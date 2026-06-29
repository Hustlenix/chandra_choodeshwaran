'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { Presentation, Heart } from 'lucide-react'

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
            <Card variant="bordered-hover" padding="lg" className="h-full group">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-warm text-text-muted transition-colors duration-500 group-hover:bg-glow-warm/30">
                <Presentation className="h-5 w-5" />
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
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Card variant="bordered-hover" padding="lg" className="h-full group">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-warm text-text-muted transition-colors duration-500 group-hover:bg-glow-warm/30">
                <Heart className="h-5 w-5" />
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
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
