'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { VOICES } from '@/lib/constants'
import { staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'
import VoiceCard from './VoiceCard'

export default function VoicesOfChange() {
  return (
    <section id="voices" className="relative overflow-hidden bg-surface-white py-section-lg">
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-pink-400/[0.03] blur-[120px]" />
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] -translate-x-1/3 rounded-full bg-pink-500/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <SectionHeading
          badge="VOICES"
          title="Voices of Change"
          subtitle="Real stories from individuals and organizations who have experienced transformation through emotional intelligence."
          align="center"
          pinkAccent
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={cn(
            'grid grid-cols-1 gap-6 md:gap-8',
            'md:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {VOICES.map((voice, index) => (
            <div
              key={`${voice.name}-${index}`}
              className={cn(
                voice.featured ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1'
              )}
            >
              <VoiceCard voice={voice} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
