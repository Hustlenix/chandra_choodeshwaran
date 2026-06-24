'use client'

import { motion } from 'framer-motion'
import { AWARDS } from '@/content/awards'
import { AwardCard } from './AwardCard'

export function AwardTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-pink-200 via-pink-400 to-transparent hidden md:block" />
      
      <div className="space-y-12">
        {AWARDS.map((award, i) => (
          <motion.div
            key={award.year + award.title}
            className="relative pl-0 md:pl-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 hidden h-3 w-3 -translate-x-1.5 rounded-full border-2 border-pink-400 bg-white md:block" />
            
            <AwardCard award={award} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
