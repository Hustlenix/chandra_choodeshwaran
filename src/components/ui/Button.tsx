'use client'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  children: React.ReactNode
}

const base =
  'inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 cursor-pointer'

const variants = {
  primary:
    'bg-pink-400 text-white hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-400/25 active:bg-pink-600',
  secondary:
    'border border-pink-400/50 text-pink-500 hover:bg-pink-50 hover:border-pink-400',
  ghost: 'text-text-muted hover:text-pink-500 hover:bg-pink-50',
  outline:
    'border border-pink-400/30 text-pink-500 hover:bg-pink-50 hover:border-pink-400',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    if (href) {
      const isExternal = href.startsWith('http') || href.startsWith('mailto')
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(base, variants[variant], sizes[size], className)}
          >
            {children}
          </a>
        )
      }
      return (
        <Link
          href={href}
          className={cn(base, variants[variant], sizes[size], className)}
        >
          {children}
        </Link>
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
