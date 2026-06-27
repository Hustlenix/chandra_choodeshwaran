import { FIVE_PILLARS } from '@/content/pillars'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function FivePillars() {
  return (
    <section id="five-pillars" className="py-section-lg">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading
          badge="PILLARS"
          title="The Five Pillars"
          subtitle="A complete framework for human transformation — built through a decade of training, counselling, and real-world application."
          align="center"
        />

        <div className="mt-16 space-y-20">
          {FIVE_PILLARS.map((pillar, i) => {
            const isReversed = i % 2 !== 0
            return (
              <div
                key={pillar.id}
                className={`flex flex-col gap-8 lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <span className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-accent-400/60">
                    {pillar.number}
                  </span>
                  <h2 className="font-display text-heading-1 text-text-primary">{pillar.title}</h2>
                  <p className="mt-1 text-lg text-accent-400/80">{pillar.subtitle}</p>
                  <p className="mt-4 text-body-lg leading-relaxed text-text-muted">
                    {pillar.description}
                  </p>
                  {pillar.metrics && (
                    <div className="mt-6 flex flex-wrap gap-6">
                      {pillar.metrics.map((m) => (
                        <div key={m.label}>
                          <span className="font-display text-3xl font-bold text-accent-500">
                            {m.value}
                          </span>
                          <p className="mt-1 text-sm text-text-muted">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 items-center justify-center rounded-card border border-border-light bg-accent-100/40 p-12">
                  <span className="font-display text-6xl font-light text-accent-400/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
