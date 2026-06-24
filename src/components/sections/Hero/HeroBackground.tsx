'use client'

import { useEffect, useRef } from 'react'

export function HeroBackground() {
  const meshRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!meshRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100
      meshRef.current.style.setProperty('--mouse-x', `${x}%`)
      meshRef.current.style.setProperty('--mouse-y', `${y}%`)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={meshRef}
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blush-100" />
      
      {/* Animated mesh blobs */}
      <div
        className="absolute -top-1/2 -right-1/4 h-[80vh] w-[80vh] rounded-full opacity-30 mesh-gradient"
        style={{
          background: 'radial-gradient(circle, rgba(224,123,140,0.3) 0%, transparent 70%)',
          animation: 'meshDrift 20s ease infinite',
        }}
      />
      <div
        className="absolute -bottom-1/4 -left-1/4 h-[60vh] w-[60vh] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(212,63,109,0.2) 0%, transparent 70%)',
          animation: 'meshDrift 25s ease infinite reverse',
        }}
      />
      
      {/* Mouse-reactive gradient spot */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-1000"
        style={{
          background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(224,123,140,0.12) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
