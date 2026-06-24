import { cn } from '@/lib/utils'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'blush' | 'rose'
}

const bgClasses = {
  white: 'bg-surface-white',
  blush: 'bg-surface-blush',
  rose: 'bg-surface-rose',
}

export function PageLayout({
  children,
  className,
  background = 'white',
}: PageLayoutProps) {
  return (
    <section className={cn(bgClasses[background], 'min-h-screen', className)}>
      <div className="mx-auto max-w-[1200px] px-6 pt-page-top pb-section md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  )
}
