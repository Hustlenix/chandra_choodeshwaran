'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface HeroCTAProps {
  onBook: () => void
  onWatch: () => void
}

export default function HeroCTA({ onBook, onWatch }: HeroCTAProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 sm:flex-row"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Button
        variant="primary"
        size="lg"
        onClick={onBook}
        className="group relative overflow-hidden"
      >
        <span className="relative z-10">Book a Session</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </Button>

      <Button
        variant="secondary"
        size="lg"
        onClick={onWatch}
        className="group"
      >
        <span>Watch Journey</span>
        <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
      </Button>
    </motion.div>
  )
}
