'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import PillarIcon from './PillarIcon'

interface PillarCardProps {
  title: string
  description: string
  icon: string
  isActive: boolean
  onActivate: () => void
  index: number
}

export default function PillarCard({
  title,
  description,
  icon,
  isActive,
  onActivate,
}: PillarCardProps) {
  return (
    <motion.button
      className={cn(
        'group relative flex cursor-pointer flex-col px-6 transition-all duration-500',
        isActive
          ? 'flex-[3] border-l-2 border-pink-400 bg-pink-50/50 items-start text-left'
          : 'flex-1 items-center justify-center text-center bg-transparent hover:bg-pink-50/20 border-l border-border-light first:border-l-0',
        'hover:shadow-[0_0_30px_rgba(236,72,153,0.08)]'
      )}
      onMouseEnter={onActivate}
      onClick={onActivate}
      layout
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Background glow on active */}
      {isActive && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pink-400/5 to-transparent"
          layoutId="pillar-glow-bg"
          transition={{ duration: 0.4 }}
        />
      )}

      {/* Top pink bar accent for active card */}
      <motion.div
        className="absolute left-0 top-0 h-full w-0.5 bg-pink-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon — moves to top on active */}
      <motion.div
        className={cn(
          'transition-all duration-500',
          isActive ? 'mb-4 mt-6' : 'mb-2'
        )}
        layout
      >
        <PillarIcon icon={icon} isActive={isActive} />
      </motion.div>

      {/* Title */}
      <motion.h3
        className={cn(
          'font-serif transition-all duration-500',
          isActive ? 'text-pink-500 text-lg' : 'text-text-primary/70 text-sm'
        )}
        layout
      >
        {title}
      </motion.h3>

      {/* Description — visible only when active */}
      <motion.div
        className="w-full overflow-hidden"
        initial={false}
        animate={{
          height: isActive ? 'auto' : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <p className="mt-3 pb-6 text-sm leading-relaxed text-text-muted">
          {description}
        </p>
      </motion.div>
    </motion.button>
  )
}
