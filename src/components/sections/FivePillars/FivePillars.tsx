'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FIVE_PILLARS } from '@/content/pillars'

function PillarCard({ pillar, index }: { pillar: typeof FIVE_PILLARS[0]; index: number }) {
  const isReversed = index % 2 !== 0

  return (
    <ScrollReveal delay={index * 100}>
      <div className={`flex flex-col gap-10 lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex-1">
          <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
            {pillar.number}
          </span>
          <h3 className="font-display text-heading-1 text-text-primary">{pillar.title}</h3>
          {pillar.subtitle && (
            <p className="mt-2 text-body-lg text-text-secondary/80">{pillar.subtitle}</p>
          )}
          <p className="mt-5 text-body-lg leading-relaxed text-text-secondary">
            {pillar.description}
          </p>
          {pillar.metrics && (
            <div className="mt-8 flex flex-wrap gap-8">
              {pillar.metrics.map((m) => (
                <div key={m.label}>
                  <span className="font-display text-3xl font-[300] text-text-primary">
                    {m.value}
                  </span>
                  <p className="mt-1 text-sm text-text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-8 h-px w-16 bg-border-light" />
        </div>

        <div className="flex flex-1 items-center justify-center rounded-card bg-surface-warm/60 p-16">
          <span className="font-display text-[5rem] font-[200] leading-none text-text-muted/20">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function FivePillars() {
  return (
    <section id="five-pillars" className="relative overflow-hidden py-section-lg">
      <div className="bg-glow-radial-amber pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading
            badge="PILLARS"
            title="The Five Pillars"
            subtitle="A complete framework for human transformation — built through a decade of training, counselling, and real-world application."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-20 space-y-24">
          {FIVE_PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
