'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardStagger } from '@/lib/animations'

const gridItems: { icon: string; label: string; description: string }[] = [
  {
    icon: '◇',
    label: 'Self-Leadership',
    description: 'Master your inner world before leading others',
  },
  {
    icon: '◆',
    label: 'Authentic Influence',
    description: 'Build genuine authority without a title',
  },
  {
    icon: '○',
    label: 'Difficult Conversations',
    description: 'Navigate conflict with clarity and empathy',
  },
  {
    icon: '●',
    label: 'Culture Building',
    description: 'Create environments where people thrive',
  },
]

export default function PillarGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {gridItems.map((item, i) => (
        <motion.div
          key={item.label}
          custom={i}
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="group relative overflow-hidden rounded-2xl border border-border-light bg-pink-50/20 p-5 transition-colors duration-300 hover:border-pink-400/30 sm:p-7"
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-pink-400/10 blur-[60px]" />
          </div>

          <div className="relative z-10">
            <div
              className={cn(
                'mb-4 flex h-10 w-10 items-center justify-center rounded-lg',
                'bg-gradient-to-br from-pink-400/20 to-pink-400/5',
                'text-pink-500'
              )}
            >
              <span className="text-lg">{item.icon}</span>
            </div>
            <h4 className="font-serif text-base font-medium text-text-primary sm:text-lg">
              {item.label}
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-text-muted sm:text-sm">
              {item.description}
            </p>
          </div>

          <div className="absolute bottom-0 right-0 h-12 w-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-0 right-0 h-full w-full rounded-bl-[32px] bg-gradient-to-tl from-pink-400/10 to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
