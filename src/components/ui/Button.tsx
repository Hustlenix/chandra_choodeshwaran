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
  'inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 cursor-pointer relative overflow-hidden'

const variants = {
  primary:
    'bg-gradient-to-r from-accent-400 to-accent-500 text-white hover:shadow-xl hover:shadow-accent-400/30 active:shadow-md active:shadow-accent-400/20 active:scale-[0.98]',
  secondary:
    'border border-accent-400/50 text-accent-500 hover:bg-accent-50/80 hover:border-accent-400 hover:shadow-md hover:shadow-accent-400/10',
  ghost: 'text-text-muted hover:text-accent-500 hover:bg-accent-50/60',
  outline:
    'border border-accent-400/30 text-accent-500 hover:bg-accent-50/80 hover:border-accent-400 hover:shadow-md hover:shadow-accent-400/10',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-4.5 text-lg',
  xl: 'px-11 py-5 text-lg',
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
