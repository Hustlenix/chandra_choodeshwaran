import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'pink' | 'rose' | 'outline'
  size?: 'sm' | 'md'
  className?: string
}

const variants = {
  pink: 'bg-pink-100 text-pink-700 border border-pink-200',
  rose: 'bg-rose-50 text-pink-600 border border-pink-200',
  outline: 'bg-transparent text-pink-500 border border-pink-300',
}

const sizes = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export function Badge({
  children,
  variant = 'pink',
  size = 'sm',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  )
}
