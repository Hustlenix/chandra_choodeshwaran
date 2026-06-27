'use client'

import { cn } from '@/lib/utils'

interface Theme {
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
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-2xl flex-wrap justify-center gap-2">
        {themes.map((theme) => {
          const isActive =
            activeTheme === theme.id || (!activeTheme && theme.id === 'all')

          return (
            <button
              key={theme.id}
              onClick={() => onThemeSelect(theme.id === 'all' ? null : theme.id)}
              className={cn(
                'rounded-pill px-5 py-2 text-xs font-medium uppercase tracking-wider transition-colors',
                isActive
                  ? 'border border-accent-400 bg-accent-100/30 text-accent-500'
                  : 'border border-border-light bg-surface-white text-text-muted hover:border-border-medium hover:text-text-primary',
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
