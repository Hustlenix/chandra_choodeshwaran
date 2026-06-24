'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HOME_STATS } from '@/content/home'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export function Stats() {
  return (
    <section className="bg-surface-blush py-section">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <SectionHeading
          badge="IMPACT"
          title="Measurable Results"
          subtitle="Numbers that reflect a decade of commitment to human development."
          size="sm"
        />

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {HOME_STATS.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <AnimatedCounter value={String(stat.value) + stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
