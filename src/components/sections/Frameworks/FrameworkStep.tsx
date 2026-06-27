import { FRAMEWORKS } from '@/content/frameworks'

type FrameworkData = (typeof FRAMEWORKS)[number]

interface FrameworkStepProps {
  framework: FrameworkData
  index: number
}

export default function FrameworkStep({ framework, index }: FrameworkStepProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <div className="mb-12 md:mb-16">
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-accent-400/60">
            Framework {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="font-display text-heading-2 text-text-primary">{framework.name}</h2>
          <p className="mt-4 max-w-2xl text-body-lg text-text-muted">
            {framework.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {framework.steps.map((step, i) => (
            <div
              key={i}
              className="rounded-card border border-border-light bg-surface-white p-5 shadow-card transition-shadow hover:shadow-elevated"
            >
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-100 text-sm font-bold text-accent-600">
                {i + 1}
              </span>
              <h4 className="font-display text-heading-4 text-text-primary">{step.label}</h4>
              <p className="mt-1 text-body-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
