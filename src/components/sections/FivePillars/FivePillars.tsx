'use client'

import { motion } from 'framer-motion'
import { FIVE_PILLARS } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

export default function FivePillars() {
  return (
    <section id="five-pillars" className="relative">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-8 lg:px-12 lg:py-32">
        <SectionHeading
          badge="PILLARS"
          title="The Five Pillars"
          subtitle="A complete framework for human transformation — built through a decade of training, counselling, and real-world application."
          align="center"
          size="lg"
        />
      </div>

      {FIVE_PILLARS.map((pillar, index) => {
        const isReversed = index % 2 !== 0
        return (
          <motion.section
            key={pillar.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative min-h-[70vh] py-24 md:py-32"
          >
            <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
              <div
                className={cn(
                  'flex flex-col gap-12 md:gap-16 lg:items-center',
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                )}
              >
                {/* Content */}
                <div className="flex-1">
                  <span className="mb-3 block font-mono text-xs uppercase tracking-[0.3em] text-gold-500/60">
                    {pillar.number}
                  </span>
                  <h2 className="font-serif text-heading-2 leading-tight text-white sm:text-heading-1">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-lg text-gold-400/80 sm:text-xl">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-6 text-body-lg leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                  {pillar.metrics && (
                    <div className="mt-8 flex flex-wrap gap-6">
                      {pillar.metrics.map((m) => (
                        <div key={m.label}>
                          <span className="font-serif text-3xl font-bold text-gold-500 sm:text-4xl">
                            {m.value}
                          </span>
                          <p className="mt-1 text-sm text-muted">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Visual placeholder */}
                <div className="flex-1">
                  <div className="aspect-square rounded-3xl border border-white/5 bg-gradient-to-br from-gold-500/5 to-transparent backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </motion.section>
        )
      })}
    </section>
  )
}
