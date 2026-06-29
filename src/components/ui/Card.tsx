import { cn } from '@/lib/utils'
import Link from 'next/link'

const variants = {
  default: 'bg-surface-warm',
  elevated: 'bg-white shadow-card',
  interactive: 'bg-white shadow-control hover:shadow-card transition-shadow',
  bordered: 'border border-border-light bg-surface-white',
  'bordered-hover': 'border border-border-light/60 bg-surface-white hover:border-border-medium hover:shadow-card hover:-translate-y-0.5 transition-all duration-500',
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
  href,
}: {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'interactive' | 'bordered' | 'bordered-hover'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  as?: 'div' | 'article' | 'section'
  href?: string
}) {
  const cls = cn('rounded-card', variants[variant], paddings[padding], className)

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <Tag className={cls}>
      {children}
    </Tag>
  )
}
