import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeading({ badge, title, subtitle, align = 'left', as: Tag = 'h2', className }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {badge && (
        <span className="mb-3 inline-block rounded-badge bg-surface-warm px-3 py-1 text-xs font-medium text-text-secondary">
          {badge}
        </span>
      )}
      <Tag className="font-display text-heading-1 text-text-primary">{title}</Tag>
      {subtitle && (
        <p className="mt-3 max-w-lg text-body text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  )
}
