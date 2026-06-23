'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer } from '@/lib/animations'
import PillarCard from './PillarCard'
import PillarIcon from './PillarIcon'
import { PILLARS } from '@/lib/constants'

export default function HumanOS() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleActivate = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  return (
    <section
      id="philosophy"
      className="relative min-h-screen bg-navy-900 py-section-lg"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <SectionHeading
          badge="Philosophy"
          title="The Human Operating System"
          subtitle="Five interconnected pillars that form the foundation of emotional mastery and human potential."
          align="center"
        />

        {/* Desktop: horizontal row */}
        <motion.div
          className="hidden h-[400px] md:flex"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PILLARS.map((pillar, i) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              isActive={activeIndex === i}
              onActivate={() => handleActivate(i)}
              index={i}
            />
          ))}
        </motion.div>

        {/* Mobile: vertical accordion */}
        <div className="flex flex-col gap-2 md:hidden">
          {PILLARS.map((pillar, i) => (
            <PillarCardMobile
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              isActive={activeIndex === i}
              onActivate={() =>
                handleActivate(activeIndex === i ? -1 : i)
              }
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCardMobile({
  title,
  description,
  icon,
  isActive,
  onActivate,
}: {
  title: string
  description: string
  icon: string
  isActive: boolean
  onActivate: () => void
  index: number
}) {
  return (
    <motion.button
      className={cn(
        'w-full border border-white/10 px-6 py-5 text-left transition-all duration-300',
        isActive ? 'bg-gold-500/10 border-gold-500/30' : 'bg-white/[0.02]'
      )}
      onClick={onActivate}
      layout
    >
      <div className="flex items-center gap-4">
        <PillarIcon icon={icon} isActive={isActive} />
        <h3
          className={cn(
            'font-serif text-lg transition-colors duration-300',
            isActive ? 'text-gold-400' : 'text-white/80'
          )}
        >
          {title}
        </h3>
      </div>
      <motion.div
        className="mt-4 overflow-hidden"
        initial={false}
        animate={{
          height: isActive ? 'auto' : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </motion.div>
    </motion.button>
  )
}
