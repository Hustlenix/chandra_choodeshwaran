'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 text-gold-500/80" />
      </motion.div>
    </motion.div>
  )
}
