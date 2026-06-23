'use client'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 cursor-pointer'
    const variants = {
      primary: 'bg-gold-500 text-navy-900 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25 active:bg-gold-600',
      secondary: 'border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400',
      ghost: 'text-muted hover:text-white hover:bg-white/5',
    }
    const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' }

    if (href) {
      return (
        <a href={href} className={cn(base, variants[variant], sizes[size], className)}>
          {children}
        </a>
      )
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = 'Button'
export { Button }
