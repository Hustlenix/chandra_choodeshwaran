'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { VOICES } from '@/content/testimonials'
import { cn } from '@/lib/utils'
import VoiceCard from './VoiceCard'

export default function VoicesOfChange() {
  return (
    <section id="voices" className="relative overflow-hidden bg-surface-white py-section-lg">
      <div className="bg-glow-radial-amber pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading
            badge="VOICES"
            title="Voices of Change"
            subtitle="Real stories from individuals and organizations who have experienced transformation through emotional intelligence."
            align="center"
          />
        </ScrollReveal>

        <div className={cn('mt-16 grid grid-cols-1 gap-6 md:gap-8', 'md:grid-cols-2 lg:grid-cols-3')}>
          {VOICES.map((voice, index) => (
            <div
              key={`${voice.name}-${index}`}
              className={cn(voice.featured ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1')}
            >
              <ScrollReveal delay={index * 80}>
                <VoiceCard voice={voice} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
