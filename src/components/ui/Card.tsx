import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'interactive'
  as?: 'div' | 'article' | 'section'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const variants = {
  default: 'card-premium',
  elevated: 'card-premium hover:shadow-xl hover:shadow-pink-400/10',
  interactive: 'card-premium hover:shadow-xl hover:shadow-pink-400/10 cursor-pointer group',
}

const paddings = {
  none: '',
  sm: 'p-5',
  md: 'p-7',
  lg: 'p-9',
}

export function Card({
  children,
  className,
  variant = 'default',
  as: Tag = 'div',
  padding = 'md',
}: CardProps) {
  return (
    <Tag className={cn(variants[variant], paddings[padding], className)}>
      {children}
    </Tag>
  )
}
