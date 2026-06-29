'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { JOURNEY_MILESTONES } from '@/content/awards'
import { VOICES } from '@/content/testimonials'
import { Quote } from 'lucide-react'

export function TrustSocialProof() {
  const topTestimonials = VOICES.filter((v) => v.featured).slice(0, 2)

  return (
    <section className="relative overflow-hidden bg-surface-white py-section-lg">
      <div className="bg-glow-radial-amber pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <ScrollReveal>
          <span className="mb-6 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
            Recognition
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY_MILESTONES.map((m) => (
              <Card key={m.year} variant="bordered-hover" padding="lg">
                <span className="font-display text-3xl font-[200] text-text-muted/30">{m.year}</span>
                <h4 className="mt-2 font-medium text-text-primary">{m.title}</h4>
                <p className="mt-1 text-sm text-text-muted">{m.organization}</p>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {topTestimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={200 + i * 100}>
              <blockquote className="rounded-card bg-surface-warm p-8">
                <Quote className="mb-4 h-6 w-6 text-text-muted/30" />
                <p className="text-body leading-relaxed text-text-secondary">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-text-primary">{t.name}</span>
                  <span className="text-sm text-text-muted"> &middot; {t.role}</span>
                  {t.organization && (
                    <span className="text-sm text-text-muted">, {t.organization}</span>
                  )}
                </div>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
