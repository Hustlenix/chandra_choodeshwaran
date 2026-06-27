'use client'

import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/config/navigation'
import { X } from 'lucide-react'

interface MobileNavProps {
  onClose: () => void
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    lastFocusedRef.current = document.activeElement as HTMLElement
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
      lastFocusedRef.current?.focus()
    }
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }

    if (e.key === 'Tab') {
      const container = containerRef.current
      if (!container) return

      const focusable = container.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [onClose])

  return (
    <motion.div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-40 flex flex-col bg-white/95 backdrop-blur-xl md:hidden"
      initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
      exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      onKeyDown={handleKeyDown}
    >
      <div className="flex justify-end px-6 pt-6">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-text-muted hover:text-text-primary hover:bg-accent-50 focus:outline-none focus:ring-2 focus:ring-accent-400/50"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col items-center justify-center gap-10">
        {NAV_ITEMS.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="group text-3xl uppercase tracking-[0.2em] text-text-muted transition-colors duration-300 hover:text-accent-500 focus:outline-none focus:text-accent-500"
            >
              <span className="font-serif">{item.label}</span>
              <span className="mx-auto mt-1 block h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-full group-focus:w-full" />
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  )
}
