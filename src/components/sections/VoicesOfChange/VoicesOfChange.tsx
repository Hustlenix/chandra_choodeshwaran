import { SectionHeading } from '@/components/ui/SectionHeading'
import { VOICES } from '@/content/testimonials'
import { cn } from '@/lib/utils'
import VoiceCard from './VoiceCard'

export default function VoicesOfChange() {
  return (
    <section id="voices" className="bg-surface-white py-section-lg">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <SectionHeading
          badge="VOICES"
          title="Voices of Change"
          subtitle="Real stories from individuals and organizations who have experienced transformation through emotional intelligence."
          align="center"
        />

        <div
          className={cn(
            'mt-12 grid grid-cols-1 gap-6 md:gap-8',
            'md:grid-cols-2 lg:grid-cols-3',
          )}
        >
          {VOICES.map((voice, index) => (
            <div
              key={`${voice.name}-${index}`}
              className={cn(
                voice.featured
                  ? 'md:col-span-2 lg:col-span-2'
                  : 'md:col-span-1 lg:col-span-1',
              )}
            >
              <VoiceCard voice={voice} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
