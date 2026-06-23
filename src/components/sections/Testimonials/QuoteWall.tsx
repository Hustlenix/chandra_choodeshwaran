'use client'

import { useRef, useEffect, useCallback } from 'react'
import QuoteCard from './QuoteCard'
import type { Testimonial } from '@/types'

interface QuoteWallProps {
  testimonials: Testimonial[]
}

export default function QuoteWall({ testimonials }: QuoteWallProps) {
  const wallRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!wallRef.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = wallRef.current.getBoundingClientRect()
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5

    const cards = wallRef.current.querySelectorAll('.quote-card-inner')
    cards.forEach((card, i) => {
      const el = card as HTMLElement
      const rotateX = y * (2 + (i % 3))
      const rotateY = x * (2 + (i % 3))
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReduced && wallRef.current) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  if (testimonials.length === 0) {
    return (
      <div className="py-20 text-center text-muted">
        <p className="font-serif text-2xl italic">
          Testimonials coming soon&hellip;
        </p>
      </div>
    )
  }

  return (
    <div
      ref={wallRef}
      className="columns-1 gap-6 sm:columns-2 lg:columns-3"
    >
      {testimonials.map((testimonial, i) => (
        <div
          key={testimonial._id || testimonial.name}
          className="quote-card mb-6 break-inside-avoid"
          style={{
            transform: `translateY(${i % 2 === 0 ? 0 : 30}px)`,
          }}
        >
          <div className="quote-card-inner transition-transform duration-200 ease-out">
            <QuoteCard testimonial={testimonial} index={i} />
          </div>
        </div>
      ))}
    </div>
  )
}
