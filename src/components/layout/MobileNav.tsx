'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { X } from 'lucide-react'

interface MobileNavProps {
  onClose: () => void
  onNavigate: (href: string) => void
}

export default function MobileNav({ onClose, onNavigate }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col bg-navy-900/98 backdrop-blur-xl md:hidden"
      initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
      exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Close button */}
      <div className="flex justify-end px-6 pt-6">
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-white/60 hover:text-white"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-1 flex-col items-center justify-center gap-10">
        {NAV_ITEMS.map((item, i) => (
          <motion.button
            key={item.href}
            onClick={() => onNavigate(item.href)}
            className="group text-3xl uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-gold-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="font-serif">{item.label}</span>
            <span className="mx-auto mt-1 block h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
          </motion.button>
        ))}

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate('#contact')}
          >
            Book a Session
          </Button>
        </motion.div>
      </nav>
    </motion.div>
  )
}
