'use client'

import { SOCIAL_LINKS } from '@/config/social'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  className?: string
  showLabels?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'row' | 'grid'
}

export function SocialLinks({
  className,
  showLabels = false,
  size = 'md',
  variant = 'row',
}: SocialLinksProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  }

  return (
    <div
      className={cn(
        variant === 'row' ? 'flex flex-wrap gap-3' : 'grid grid-cols-2 gap-3',
        className
      )}
    >
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.platform}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'group inline-flex items-center gap-2 transition-all duration-300',
              'rounded-full border border-border-light',
              'text-text-muted hover:text-pink-500 hover:border-pink-300 hover:bg-pink-50',
              showLabels ? 'px-4 py-2' : 'flex items-center justify-center ' + sizeClasses[size]
            )}
            aria-label={link.ariaLabel}
          >
            <Icon className={cn(iconSizes[size], 'shrink-0')} />
            {showLabels && (
              <span className="text-sm font-medium">{link.label}</span>
            )}
          </a>
        )
      })}
    </div>
  )
}
