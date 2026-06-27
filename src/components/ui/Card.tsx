import { cn } from '@/lib/utils'

const variants = {
  default: 'bg-surface-warm',
  elevated: 'bg-white shadow-card',
  interactive: 'bg-white shadow-control hover:shadow-card transition-shadow',
}

const paddings = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
}

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'lg',
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'interactive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  as?: 'div' | 'article' | 'section'
}) {
  return (
    <Tag className={cn('rounded-card', variants[variant], paddings[padding], className)}>
      {children}
    </Tag>
  )
}
