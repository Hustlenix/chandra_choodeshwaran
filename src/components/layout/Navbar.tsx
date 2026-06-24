'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/config/navigation'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { Button } from '@/components/ui/Button'
import MobileNav from './MobileNav'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const direction = useScrollDirection()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 shadow-sm shadow-pink-400/5 backdrop-blur-xl'
            : 'bg-transparent'
        )}
        animate={{ y: direction === 'down' && isScrolled ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="group font-serif text-xl tracking-wide text-text-primary transition-colors duration-300 hover:text-pink-500"
          >
            <span className="text-pink-500">C</span>handra
            <span className="text-pink-400">choo</span>deshwaran
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = item.isActive(pathname)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group relative py-2 text-sm uppercase tracking-[0.15em] transition-colors duration-300',
                    active ? 'text-pink-500' : 'text-text-muted hover:text-pink-400'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-px transition-all duration-300',
                      active ? 'w-full bg-pink-500' : 'w-0 bg-pink-400 group-hover:w-full'
                    )}
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Book a Session
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="h-px w-6 bg-text-primary"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-px w-6 bg-text-primary"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-px w-6 bg-text-primary"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
