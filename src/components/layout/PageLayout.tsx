import { cn } from '@/lib/utils'

const bgMap: Record<string, string> = {
  white: 'bg-surface-white',
  blush: 'bg-surface-warm',
}

export function PageLayout({
  children,
  className,
  background = 'white',
}: {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'blush'
}) {
  return (
    <section className={cn(bgMap[background] || bgMap.white, 'px-6 py-16 md:py-24 lg:px-12', className)}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  )
}
