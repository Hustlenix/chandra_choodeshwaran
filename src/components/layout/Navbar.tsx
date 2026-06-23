'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { Button } from '@/components/ui/Button'
import MobileNav from './MobileNav'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const direction = useScrollDirection()
  const scrollProgress = useScrollProgress()
  const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''))
  const activeSection = useActiveSection(sectionIds)
  const isScrolled = scrollProgress > 0.02

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev)
  }, [])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  const scrollToSection = useCallback(
    (href: string) => {
      const id = href.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        const offset = 80
        const top = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
      closeMobile()
    },
    [closeMobile]
  )

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-navy-900/80 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'bg-transparent'
        )}
        initial={{ y: 0 }}
        animate={{ y: direction === 'down' && isScrolled ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-8 lg:px-12">
          {/* Left: Logo */}
          <a
            href="#"
            className="group font-serif text-xl tracking-wide text-white transition-colors duration-300 hover:text-gold-400"
          >
            <span className="text-gold-500">C</span>handru
          </a>

          {/* Center: Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'group relative py-2 text-sm uppercase tracking-[0.15em] transition-colors duration-300',
                    isActive ? 'text-gold-400' : 'text-muted hover:text-white'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-px bg-gold-500 transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Right: Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Book a Session
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobile}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="h-px w-6 bg-white"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-px w-6 bg-white"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-px w-6 bg-white"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>

        {/* Progress bar */}
        <motion.div
          className="h-px origin-left bg-gradient-to-r from-gold-500 to-gold-400"
          style={{ scaleX: scrollProgress }}
        />
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileNav onClose={closeMobile} onNavigate={scrollToSection} />
        )}
      </AnimatePresence>
    </>
  )
}
