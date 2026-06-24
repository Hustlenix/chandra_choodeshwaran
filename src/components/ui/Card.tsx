import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'interactive'
  as?: 'div' | 'article' | 'section'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const variants = {
  default: 'bg-white border border-border-light shadow-sm',
  elevated: 'bg-white shadow-lg border-border-medium',
  interactive: 'bg-white border border-border-light shadow-sm hover:border-pink-300 hover:shadow-md hover:shadow-pink-400/10 transition-all duration-300 cursor-pointer',
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className,
  variant = 'default',
  as: Tag = 'div',
  padding = 'md',
}: CardProps) {
  return (
    <Tag className={cn('rounded-2xl', variants[variant], paddings[padding], className)}>
      {children}
    </Tag>
  )
}
