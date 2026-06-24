'use client'

import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface Theme {
  id: string
  label: string
}

interface ThemeFilterProps {
  themes: Theme[]
  activeTheme: string | null
  onThemeSelect: (themeId: string | null) => void
}

export default function ThemeFilter({
  themes,
  activeTheme,
  onThemeSelect,
}: ThemeFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const activeButtonRef = useRef<HTMLButtonElement>(null)

  /* Auto-scroll the active chip into view */
  useEffect(() => {
    if (activeButtonRef.current && scrollRef.current) {
      const container = scrollRef.current
      const btn = activeButtonRef.current
      const offset = btn.offsetLeft - container.offsetLeft - 16
      container.scrollTo({ left: offset, behavior: 'smooth' })
    }
  }, [activeTheme])

  return (
    <div className="flex justify-center">
      <div
        ref={scrollRef}
        className="no-scrollbar flex w-full max-w-2xl gap-2 overflow-x-auto pb-2"
      >
        {themes.map((theme) => {
          const isActive =
            activeTheme === theme.id ||
            (!activeTheme && theme.id === 'all')

          return (
            <button
              key={theme.id}
              ref={isActive ? activeButtonRef : undefined}
              onClick={() =>
                onThemeSelect(theme.id === 'all' ? null : theme.id)
              }
              className={cn(
                'shrink-0 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300',
                isActive
                  ? 'border border-pink-400 bg-pink-100/30 text-pink-500 shadow-lg shadow-pink-400/10'
                  : 'border border-border-light bg-pink-50/20 text-text-muted backdrop-blur-sm hover:border-border-medium hover:text-text-primary'
              )}
            >
              {theme.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
