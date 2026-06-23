'use client'

import { useRef, useEffect, useCallback } from 'react'

export default function MeshBackground() {
  const bgRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    }
    if (bgRef.current) {
      const { x, y } = mouseRef.current
      bgRef.current.style.setProperty('--mouse-x', String(x))
      bgRef.current.style.setProperty('--mouse-y', String(y))
    }
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReduced) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 overflow-hidden"
      style={
        {
          '--mouse-x': 0.5,
          '--mouse-y': 0.5,
        } as React.CSSProperties
      }
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-navy-900" />

      {/* Animated mesh layers - CSS keyframes only */}
      <div
        className="absolute inset-0 mesh-gradient"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(212, 175, 55, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 70%, rgba(232, 197, 74, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(10, 15, 30, 1) 0%, transparent 100%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Mouse-reactive accent */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-1000"
        style={{
          background:
            'radial-gradient(circle 300px at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(212, 175, 55, 0.08) 0%, transparent 100%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}
