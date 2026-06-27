import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

interface TimelineItemProps {
  item: {
    year: number
    title: string
    organization: string
    description: string
  }
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <Card variant="elevated" padding="lg">
      <div className="mb-2 flex items-center gap-3">
        <Badge variant="accent" size="md">{item.year}</Badge>
        <span className="text-sm font-medium text-text-muted">{item.organization}</span>
      </div>
      <h3 className="font-serif text-heading-4 text-text-primary">{item.title}</h3>
      <p className="mt-2 text-body-sm text-text-muted">{item.description}</p>
    </Card>
  )
}
