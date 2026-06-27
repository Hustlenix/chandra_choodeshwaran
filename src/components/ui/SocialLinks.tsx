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
    sm: 'h-11 w-11',
    md: 'h-11 w-11',
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
        variant === 'row' ? 'flex flex-wrap gap-2' : 'grid grid-cols-2 gap-2',
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
              'group inline-flex items-center gap-2.5 transition-all duration-300',
              showLabels
                ? 'rounded-xl border border-white/10 px-4 py-2.5 text-white/60 hover:text-accent-300 hover:border-accent-400/30 hover:bg-white/5'
                : 'flex items-center justify-center ' + sizeClasses[size] + ' rounded-full border border-border-light text-text-muted hover:text-accent-500 hover:border-accent-300 hover:bg-accent-50 hover:shadow-md hover:shadow-accent-400/10'
            )}
            aria-label={link.ariaLabel}
          >
            <Icon className={cn(iconSizes[size], 'shrink-0 transition-transform duration-300 group-hover:scale-110')} />
            {showLabels && (
              <span className="text-sm font-medium">{link.label}</span>
            )}
          </a>
        )
      })}
    </div>
  )
}
