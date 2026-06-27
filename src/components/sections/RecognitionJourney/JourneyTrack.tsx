import { JOURNEY_MILESTONES } from '@/content/awards'
import JourneyMilestone from './JourneyMilestone'

export default function JourneyTrack() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-section lg:px-12">
      <div className="space-y-16">
        {JOURNEY_MILESTONES.map((milestone, i) => (
          <JourneyMilestone
            key={milestone.year}
            year={milestone.year}
            title={milestone.title}
            organization={milestone.organization}
            description={milestone.description}
            index={i}
          />
        ))}
      </div>
      <div className="mt-16 text-center">
        <span className="font-display text-2xl italic text-text-muted/40">
          The journey continues&hellip;
        </span>
      </div>
    </div>
  )
}
