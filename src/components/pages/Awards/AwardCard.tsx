import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

interface AwardCardProps {
  award: {
    year: number
    title: string
    organization: string
    description: string
  }
  index: number
}

export function AwardCard({ award, index }: AwardCardProps) {
  return (
    <Card variant="elevated" padding="lg">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <Badge variant="pink" size="md">{award.year}</Badge>
            <span className="text-sm font-medium text-text-muted">{award.organization}</span>
          </div>
          <h3 className="font-serif text-heading-4 text-text-primary">{award.title}</h3>
          <p className="mt-2 text-body-sm text-text-muted">{award.description}</p>
        </div>
      </div>
    </Card>
  )
}
