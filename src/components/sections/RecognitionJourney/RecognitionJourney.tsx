'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { JOURNEY_MILESTONES } from '@/content/awards'

export default function RecognitionJourney() {
  return (
    <section id="recognition" className="relative overflow-hidden py-section-lg">
      <div className="bg-glow-radial pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading
            badge="RECOGNITION"
            title="The Journey"
            subtitle="A journey of impact, growth, and recognition in emotional intelligence and leadership development."
            align="center"
          />
        </ScrollReveal>

        <div className="relative mt-20">
          <div className="absolute left-8 top-0 h-full w-px bg-border-light md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-20">
            {JOURNEY_MILESTONES.map((milestone, i) => {
              const isLeft = i % 2 === 0
              return (
                <ScrollReveal key={milestone.year} delay={i * 100}>
                  <div
                    className={`relative flex flex-col gap-4 md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1 md:text-right">
                      <span className="font-mono text-5xl font-bold text-text-primary/[0.06] sm:text-7xl">
                        {milestone.year}
                      </span>
                    </div>

                    <div className="relative z-10 flex w-16 shrink-0 items-start justify-center">
                      <div className="mt-3 h-3 w-3 rounded-full border-2 border-border-light bg-surface-white transition-colors duration-500" />
                    </div>

                    <div className="flex-1">
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
                        {milestone.organization}
                      </span>
                      <h3 className="font-display text-heading-2 text-text-primary">
                        {milestone.title}
                      </h3>
                      <p className="mt-4 max-w-lg text-body leading-relaxed text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={JOURNEY_MILESTONES.length * 100 + 100}>
            <div className="mt-20 text-center">
              <span className="font-display text-2xl italic text-text-muted/30">
                The journey continues&hellip;
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
