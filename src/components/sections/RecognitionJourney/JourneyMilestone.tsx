'use client'

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
      {/* Year badge */}
      <div
        className={`flex-shrink-0 md:w-1/2 md:text-right ${isLeft ? 'md:order-1 md:pr-12' : 'md:order-3 md:pl-12'}`}
      >
        <span className="font-mono text-5xl font-bold text-text-primary/10 sm:text-6xl md:text-7xl">
          {year}
        </span>
      </div>

      {/* Timeline dot (desktop) */}
      <div className="hidden md:order-2 md:flex md:flex-shrink-0 md:items-start md:justify-center md:w-8">
        <div className="mt-3 h-4 w-4 rounded-full border-2 border-accent-400/60 bg-surface-white" />
      </div>

      {/* Content */}
      <div className={`flex-shrink-0 md:w-1/2 ${isLeft ? 'md:order-3 md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
        {/* Organization */}
        <span className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-accent-500">
          {organization}
        </span>

        {/* Title */}
        <h3 className="font-serif text-heading-3 text-text-primary sm:text-heading-2">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-lg text-body leading-relaxed text-text-muted">
          {description}
        </p>
      </div>
    </div>
  )
}
