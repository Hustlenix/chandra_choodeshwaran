interface JourneyMilestoneProps {
  year: number
  title: string
  organization: string
  description: string
  index: number
}

export default function JourneyMilestone({
  year,
  title,
  organization,
  description,
  index,
}: JourneyMilestoneProps) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative flex flex-col gap-4 md:flex-row md:items-start">
      <div className={`flex-1 md:text-right ${isLeft ? 'md:pr-12' : 'md:pl-12 md:order-3'}`}>
        <span className="font-mono text-5xl font-bold text-text-primary/10 sm:text-6xl">
          {year}
        </span>
      </div>

      <div className="relative z-10 flex w-16 shrink-0 items-start justify-center md:order-2">
        <div className="mt-3 h-4 w-4 rounded-full border-2 border-accent-400/60 bg-surface-white" />
      </div>

      <div className={`flex-1 ${isLeft ? '' : 'md:text-right md:pr-12'}`}>
        <span className="mb-1 block font-mono text-xs uppercase tracking-[0.3em] text-accent-500">
          {organization}
        </span>
        <h3 className="font-display text-heading-2 text-text-primary">{title}</h3>
        <p className="mt-3 max-w-lg text-body leading-relaxed text-text-muted">{description}</p>
      </div>
    </div>
  )
}
