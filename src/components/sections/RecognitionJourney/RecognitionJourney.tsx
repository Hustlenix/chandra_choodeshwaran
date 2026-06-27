import { SectionHeading } from '@/components/ui/SectionHeading'
import { JOURNEY_MILESTONES } from '@/content/awards'

export default function RecognitionJourney() {
  return (
    <section id="recognition" className="py-section-lg">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading
          badge="RECOGNITION"
          title="The Journey"
          subtitle="A journey of impact, growth, and recognition in emotional intelligence and leadership development."
          align="center"
        />

        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 h-full w-px bg-border-light md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {JOURNEY_MILESTONES.map((milestone, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col gap-4 md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Year */}
                  <div className="flex-1 md:text-right">
                    <span className="font-mono text-5xl font-bold text-text-primary/10 sm:text-6xl">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 flex w-16 shrink-0 items-start justify-center">
                    <div className="mt-3 h-4 w-4 rounded-full border-2 border-accent-400/60 bg-surface-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="mb-1 block font-mono text-xs uppercase tracking-[0.3em] text-accent-500">
                      {milestone.organization}
                    </span>
                    <h3 className="font-display text-heading-2 text-text-primary">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-body leading-relaxed text-text-muted">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <span className="font-display text-2xl italic text-text-muted/40">
              The journey continues&hellip;
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
