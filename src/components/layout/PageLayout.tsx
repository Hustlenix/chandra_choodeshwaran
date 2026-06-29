import { cn } from '@/lib/utils'

const bgMap: Record<string, string> = {
  white: 'bg-surface-white',
  blush: 'bg-surface-warm',
}

const glowMap: Record<string, string> = {
  none: '',
  warm: 'bg-glow-radial',
  amber: 'bg-glow-radial-amber',
  glow: 'bg-glow-radial bg-glow-radial-amber',
}

export function PageLayout({
  children,
  className,
  background = 'white',
  glow = 'none',
}: {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'blush'
  glow?: 'none' | 'warm' | 'amber' | 'glow'
}) {
  return (
    <section className={cn('relative overflow-hidden', bgMap[background] || bgMap.white, className)}>
      {glow !== 'none' && <div className={cn('pointer-events-none absolute inset-0', glowMap[glow])} aria-hidden="true" />}
      <div className="relative px-6 py-16 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">{children}</div>
      </div>
    </section>
  )
}
