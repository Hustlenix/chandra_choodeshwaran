import { FIVE_PILLARS } from '@/content/pillars'
import { ServiceCard } from './ServiceCard'

export function ServiceGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {FIVE_PILLARS.map((pillar) => (
        <ServiceCard key={pillar.id} pillar={pillar} />
      ))}
    </div>
  )
}
