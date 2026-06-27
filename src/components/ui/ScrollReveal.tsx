'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export function ScrollReveal({
  children,
  className,
  delay,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('revealed'), delay ?? 0)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={cn('scroll-reveal', className)}>
      {children}
    </div>
  )
}
