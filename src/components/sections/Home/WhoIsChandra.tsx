'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SITE } from '@/config/site'

export function WhoIsChandra() {
  return (
    <section className="relative overflow-hidden py-section-lg">
      <div className="bg-glow-radial pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="mb-6 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
              About
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-heading-1 text-text-primary">
              Chandra Choodeshwaran M
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-body-lg leading-relaxed text-text-secondary">
              A certified Emotional Intelligence Trainer, Counsellor, and Public Speaking Coach based in {SITE.location}. With over 15 years of experience, he has dedicated his career to helping individuals and organizations unlock their full potential through emotional intelligence and human development.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-4 text-body-lg leading-relaxed text-text-secondary">
              His approach combines evidence-based psychological frameworks with practical, real-world application. Whether working with students, professionals, or leaders — he brings empathy, clarity, and structure to every interaction.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-10 flex gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-pill bg-text-primary px-5 py-2.5 text-sm font-medium text-text-inverse transition-all hover:opacity-90"
              >
                Read the full story
              </Link>
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 rounded-pill border border-border-light bg-surface-white px-5 py-2.5 text-sm font-medium text-text-primary shadow-control transition-all hover:bg-surface-warm"
              >
                View my journey
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
