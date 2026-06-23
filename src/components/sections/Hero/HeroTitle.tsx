'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { wordReveal } from '@/lib/animations'

interface HeroTitleProps {
  text: string
}

export default function HeroTitle({ text }: HeroTitleProps) {
  const words = text.split(' ')

  return (
    <h1 className="font-serif text-6xl leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={wordReveal}
            initial="hidden"
            animate="visible"
            custom={i}
            transition={{
              delay: i * 0.12,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}
