'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
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
    <section id="human-os" className="relative overflow-hidden py-section-lg">
      <div className="bg-glow-radial-warm pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading
            badge={HUMAN_OS.badge}
            title={HUMAN_OS.title}
            subtitle={HUMAN_OS.subtitle}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HUMAN_OS_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon]
            const isActive = activePillar === pillar.id

            return (
              <ScrollReveal key={pillar.id} delay={i * 80}>
                <button
                  onClick={() => setActivePillar((prev) => (prev === pillar.id ? null : pillar.id))}
                  className={cn(
                    'group rounded-card border p-6 text-left transition-all duration-500',
                    isActive
                      ? 'border-border-light bg-white shadow-card'
                      : 'border-border-light/60 bg-surface-white hover:border-border-light hover:shadow-card',
                  )}
                >
                  <span
                    className={cn(
                      'mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500',
                      isActive
                        ? 'bg-glow-amber/20 text-text-primary shadow-warm'
                        : 'bg-surface-warm text-text-muted group-hover:bg-glow-warm/30',
                    )}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </span>
                  <h3 className="font-display text-heading-3 text-text-primary">{pillar.title}</h3>
                  <div className={cn('overflow-hidden transition-all duration-500', isActive ? 'mt-2 max-h-96' : 'mt-0 max-h-0')}>
                    <p className="text-body-sm leading-relaxed text-text-muted">
                      {pillar.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      'mt-4 inline-block text-xs font-medium transition-all duration-300',
                      isActive ? 'text-text-secondary' : 'text-text-muted/0 group-hover:text-text-muted',
                    )}
                  >
                    {isActive ? 'Click to close' : 'Click to learn more'}
                  </span>
                </button>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
