import { cn } from '@/lib/utils'

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-badge bg-surface-warm px-3 py-1 text-xs font-medium text-text-secondary', className)}>
      {children}
    </span>
  )
}
