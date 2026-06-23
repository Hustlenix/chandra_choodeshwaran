import dynamic from 'next/dynamic'
import { SectionHeading } from '@/components/ui/SectionHeading'

const TimelineTrack = dynamic(
  () => import('@/components/sections/Timeline/TimelineTrack'),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-navy-900">
        <div className="h-px w-32 animate-pulse bg-gold-500/30" />
      </div>
    ),
  }
)

export default function Timeline() {
  return (
    <section id="journey" className="relative">
      <div className="mx-auto max-w-[1200px] px-6 pb-12 pt-section md:px-8 lg:px-12">
        <SectionHeading
          badge="Recognition"
          title="The Journey"
          subtitle="A journey of impact, growth, and recognition in emotional intelligence and leadership development."
          align="center"
        />
      </div>

      <TimelineTrack />
    </section>
  )
}
