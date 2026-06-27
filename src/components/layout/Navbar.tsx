'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/config/navigation'
import { SITE } from '@/config/site'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-surface-white/95 backdrop-blur supports-[backdrop-filter]:bg-surface-white/80">
      <nav className="mx-auto flex h-12 max-w-[1200px] items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="font-display text-sm font-[700] tracking-[0.05em] text-text-primary"
        >
          {SITE.initials}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-pill px-3 py-1.5 text-sm transition-colors',
                item.isActive(pathname)
                  ? 'bg-surface-warm font-medium text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-8 w-8 items-center justify-center md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <div className="flex flex-col gap-1">
              <span className="block h-px w-5 bg-text-primary" />
              <span className="block h-px w-5 bg-text-primary" />
            </div>
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border-light bg-surface-white md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'rounded-pill px-3 py-2 text-sm transition-colors',
                  item.isActive(pathname)
                    ? 'bg-surface-warm font-medium text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
