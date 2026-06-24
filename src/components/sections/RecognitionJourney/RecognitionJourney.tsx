'use client'

import dynamic from 'next/dynamic'
import { SectionHeading } from '@/components/ui/SectionHeading'

const JourneyTrack = dynamic(
  () => import('@/components/sections/RecognitionJourney/JourneyTrack'),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-surface-white">
        <div className="h-px w-32 animate-pulse bg-pink-400/30" />
      </div>
    ),
  }
)

export default function RecognitionJourney() {
  return (
    <section id="recognition" className="relative">
      <div className="mx-auto max-w-[1200px] px-6 pb-12 pt-section md:px-8 lg:px-12">
        <SectionHeading
          badge="RECOGNITION"
          title="The Journey"
          subtitle="A journey of impact, growth, and recognition in emotional intelligence and leadership development."
          align="center"
        />
      </div>

      <JourneyTrack />
    </section>
  )
}
