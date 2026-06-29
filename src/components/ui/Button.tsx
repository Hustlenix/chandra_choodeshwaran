import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variants = {
  primary: 'bg-text-primary text-text-inverse hover:opacity-90 hover:shadow-glow',
  secondary: 'bg-surface-white text-text-primary border border-border-light shadow-control hover:bg-surface-warm hover:shadow-warm',
  ghost: 'text-text-secondary hover:text-text-primary',
}

const sizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-sm',
}

export function Button({ children, variant = 'primary', size = 'md', href, className, onClick, type = 'button' }: ButtonProps) {
  const cls = cn('inline-flex items-center justify-center rounded-pill font-medium transition-all duration-500', variants[variant], sizes[size], className)

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
    }
    return <Link href={href} className={cls}>{children}</Link>
  }

  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
