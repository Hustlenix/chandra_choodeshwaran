'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  noPadding?: boolean
  dark?: boolean
}

export function SectionWrapper({
  children,
  className,
  id,
  noPadding = false,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        !noPadding && 'py-section md:py-section-lg',
        dark ? 'bg-surface-dark' : 'bg-surface-white',
        className
      )}
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/[0.02] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-pink-500/[0.015] blur-[100px]" />
      </div>

      {/* Section connector line */}
      <div className="absolute top-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-400/15 to-transparent" />

      <div className="relative z-10">{children}</div>
    </section>
  )
}
