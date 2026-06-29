'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { EXPERIENCE } from '@/content/experience'
import { TimelineItem } from './TimelineItem'

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-200 via-accent-400 to-transparent hidden md:block" />
      
      <div className="space-y-12">
        {EXPERIENCE.map((item, i) => (
          <ScrollReveal
            key={item.year + item.title}
            delay={i * 100}
            className="relative pl-0 md:pl-12"
          >
            <div className="absolute left-0 top-2 hidden h-3 w-3 -translate-x-1.5 rounded-full border-2 border-accent-400 bg-white md:block" />
            <TimelineItem item={item} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
