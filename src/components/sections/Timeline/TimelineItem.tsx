'use client'

import { motion } from 'framer-motion'

interface TimelineItemProps {
  year: number
  title: string
  organization: string
  description: string
  index: number
}

export default function TimelineItem({
  year,
  title,
  organization,
  description,
  index,
}: TimelineItemProps) {
  return (
    <div className="flex w-[380px] flex-shrink-0 flex-col justify-center px-8 sm:w-[450px] lg:w-[500px]">
      <div className="relative">
        {/* Year */}
        <motion.span
          className="font-mono text-7xl font-bold text-white/10 sm:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {year}
        </motion.span>

        {/* Node indicator */}
        <motion.div
          className="absolute -left-10 top-4 h-3 w-3 rounded-full border-2 border-gold-500 bg-navy-900"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        />

        {/* Content */}
        <div className="mt-2">
          <motion.h3
            className="font-serif text-2xl text-white sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-gold-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 + index * 0.1 }}
          >
            {organization}
          </motion.p>
          <motion.p
            className="mt-4 text-sm leading-relaxed text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
