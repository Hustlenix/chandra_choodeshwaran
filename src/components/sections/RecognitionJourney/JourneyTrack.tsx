'use client'

import { motion } from 'framer-motion'
import { JOURNEY_MILESTONES } from '@/content/awards'
import JourneyMilestone from './JourneyMilestone'

export default function JourneyTrack() {
  return (
    <div className="relative bg-surface-white">
      {/* Vertical timeline line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border-light hidden md:block" />

      <div className="mx-auto max-w-[1200px] px-6 pb-section md:px-8 lg:px-12">
        <div className="relative flex flex-col gap-24 md:gap-32">
          {JOURNEY_MILESTONES.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <JourneyMilestone
                year={milestone.year}
                title={milestone.title}
                organization={milestone.organization}
                description={milestone.description}
                index={i}
              />
            </motion.div>
          ))}
        </div>

        {/* End cap */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-serif text-2xl italic text-text-muted/40">
            The journey continues&hellip;
          </span>
        </motion.div>
      </div>
    </div>
  )
}
