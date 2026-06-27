'use client'

import { motion } from 'framer-motion'
import { EXPERIENCE } from '@/content/experience'
import { TimelineItem } from './TimelineItem'

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-200 via-accent-400 to-transparent hidden md:block" />
      
      <div className="space-y-12">
        {EXPERIENCE.map((item, i) => (
          <motion.div
            key={item.year + item.title}
            className="relative pl-0 md:pl-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="absolute left-0 top-2 hidden h-3 w-3 -translate-x-1.5 rounded-full border-2 border-accent-400 bg-white md:block" />
            <TimelineItem item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
