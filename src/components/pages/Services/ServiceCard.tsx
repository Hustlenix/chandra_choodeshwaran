import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Eye, Heart, MessageCircle, Zap, TrendingUp } from 'lucide-react'
import type { PillarDetail } from '@/types'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  eye: Eye,
  heart: Heart,
  'message-circle': MessageCircle,
  zap: Zap,
  'trending-up': TrendingUp,
}

interface ServiceCardProps {
  pillar: PillarDetail
}

export function ServiceCard({ pillar }: ServiceCardProps) {
  const Icon = iconMap[pillar.visualType] || Eye

  return (
    <Link href={`/services/${pillar.id}`}>
      <Card variant="interactive" padding="lg" className="group h-full">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 transition-colors duration-300 group-hover:bg-pink-100">
          <Icon className="h-6 w-6 text-pink-500" />
        </div>
        <Badge variant="pink" size="sm" className="mb-3">{pillar.number}</Badge>
        <h3 className="mb-2 font-serif text-heading-4 text-text-primary">{pillar.title}</h3>
        <p className="mb-4 text-body-sm text-text-muted line-clamp-3">{pillar.description}</p>
        <div className="flex items-center gap-1 text-sm font-medium text-pink-500">
          Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  )
}
