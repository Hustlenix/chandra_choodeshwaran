'use client'

import { useEffect, useRef, useCallback } from 'react'

function createParticle() {
  const size = Math.random() * 4 + 2
  return {
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size,
    speed: Math.random() * 0.3 + 0.1,
    opacity: Math.random() * 0.12 + 0.03,
    delay: Math.random() * 5,
  }
}

export function HeroBackground() {
  const meshRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

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

  const particles = Array.from({ length: 20 }, () => createParticle())

  return (
    <div
      ref={meshRef}
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blush-100" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.3] grid-pattern" />

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

      {/* Additional floating blob */}
      <div
        className="absolute top-1/3 right-1/3 h-[40vh] w-[40vh] rounded-full opacity-10 float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(224,123,140,0.2) 0%, transparent 70%)',
          animationDelay: '-5s',
        }}
      />
      
      {/* Mouse-reactive gradient spot */}
      <div
        className="absolute inset-0 opacity-50 transition-all duration-1000"
        style={{
          background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(224,123,140,0.1) 0%, transparent 60%)',
        }}
      />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-pink-400/30 float-slow"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${6 + p.speed * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
