'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function RevealText({
  children,
  className = '',
  delay = 0,
  as: Tag = 'p',
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const words = children.split(' ')

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Tag className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '100%' }}
              animate={isInView ? { y: 0 } : { y: '100%' }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.04,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {word}{' '}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  )
}
