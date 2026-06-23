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
  index,
}: PillarCardProps) {
  return (
    <motion.button
      className={cn(
        'group relative flex cursor-pointer flex-col items-start justify-center px-8 py-12 text-left transition-all duration-500',
        isActive
          ? 'flex-[3] bg-gradient-to-b from-gold-500/10 to-transparent'
          : 'flex-1 hover:flex-[1.5] bg-white/[0.02] hover:bg-white/[0.04]',
        'border-r border-white/5 last:border-r-0'
      )}
      onMouseEnter={onActivate}
      onClick={onActivate}
      layout
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Gold accent line at top on active */}
      <motion.div
        className="absolute left-0 top-0 h-1 bg-gold-500"
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Icon */}
      <div className="mb-6">
        <PillarIcon icon={icon} isActive={isActive} />
      </div>

      {/* Title */}
      <h3
        className={cn(
          'font-serif text-xl transition-all duration-500',
          isActive ? 'text-gold-400' : 'text-white/80'
        )}
      >
        {title}
      </h3>

      {/* Description - visible only when active */}
      <motion.div
        className="mt-4 overflow-hidden"
        initial={false}
        animate={{
          height: isActive ? 'auto' : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </motion.div>

      {/* Index number */}
      <span className="absolute bottom-6 right-6 font-mono text-xs text-white/10">
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.button>
  )
}
