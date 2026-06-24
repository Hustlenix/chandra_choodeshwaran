'use client'

import { cn } from '@/lib/utils'
import { Eye, MessageCircle, Heart, Zap, TrendingUp } from 'lucide-react'

interface PillarIconProps {
  icon: string
  isActive: boolean
  className?: string
}

const iconMap: Record<string, React.ElementType> = {
  eye: Eye,
  'message-circle': MessageCircle,
  heart: Heart,
  zap: Zap,
  'trending-up': TrendingUp,
}

export default function PillarIcon({ icon, isActive, className }: PillarIconProps) {
  const Icon = iconMap[icon] || Eye

  return (
    <div
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300',
        isActive
          ? 'border-pink-400 bg-pink-100/30 text-pink-500'
          : 'border-border-light text-text-muted/40',
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  )
}
