'use client'

import { useState } from 'react'
import { HUMAN_OS, HUMAN_OS_PILLARS } from '@/content/pillars'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Eye, Heart, MessageCircle, Zap, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  eye: Eye,
  heart: Heart,
  'message-circle': MessageCircle,
  zap: Zap,
  'trending-up': TrendingUp,
}

export default function HumanOS() {
  const [activePillar, setActivePillar] = useState<string | null>(null)

  return (
    <section id="human-os" className="py-section-lg">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading
          badge={HUMAN_OS.badge}
          title={HUMAN_OS.title}
          subtitle={HUMAN_OS.subtitle}
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HUMAN_OS_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            const isActive = activePillar === pillar.id

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar((prev) => (prev === pillar.id ? null : pillar.id))}
                className={cn(
                  'rounded-card border p-6 text-left transition-all duration-300',
                  isActive
                    ? 'border-accent-400 bg-accent-50 shadow-card'
                    : 'border-border-light bg-surface-white hover:border-accent-300 hover:shadow-card',
                )}
              >
                <span
                  className={cn(
                    'mb-3 flex h-10 w-10 items-center justify-center rounded-full transition-colors',
                    isActive ? 'bg-accent-100 text-accent-600' : 'bg-surface-warm text-text-muted',
                  )}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </span>
                <h3 className="font-display text-heading-3 text-text-primary">{pillar.title}</h3>
                {isActive && (
                  <p className="mt-3 text-body-sm leading-relaxed text-text-muted">
                    {pillar.description}
                  </p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
