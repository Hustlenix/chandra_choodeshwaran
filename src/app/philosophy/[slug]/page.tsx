import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageLayout } from '@/components/layout/PageLayout'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'
import { SectionPattern } from '@/components/visual/SectionPattern'
import { PillarIllustration } from '@/components/visual/PillarIllustration'
import { FIVE_PILLARS } from '@/content/pillars'
import { buildMetadata } from '@/lib/metadata'
import { ChevronLeft, Eye, Heart, MessageCircle, Zap, TrendingUp } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mirror: Eye,
  waves: Heart,
  network: MessageCircle,
  compass: Zap,
  ascent: TrendingUp,
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return FIVE_PILLARS.map((pillar) => ({
    slug: pillar.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pillar = FIVE_PILLARS.find((p) => p.id === slug)
  if (!pillar) return {}

  return buildMetadata({
    title: `${pillar.title} — A Pillar of Human Potential`,
    description: pillar.description.slice(0, 160),
    path: `/philosophy/${slug}`,
    ogType: 'article',
    keywords: [pillar.title, 'five pillars philosophy', 'human potential framework'],
  })
}

export default async function PillarDetailPage({ params }: Props) {
  const { slug } = await params
  const pillar = FIVE_PILLARS.find((p) => p.id === slug)

  if (!pillar) {
    notFound()
  }

  const Icon = iconMap[pillar.visualType] || Eye
  const relatedPillars = FIVE_PILLARS.filter((p) => p.id !== slug).slice(0, 3)

  return (
    <PageLayout background="blush" glow="warm">
      <SectionPattern />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Philosophy', href: '/philosophy' }, { name: pillar.title, href: `/philosophy/${slug}` }]} />
      <Link
        href="/philosophy"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-500"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Philosophy
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative mb-8 overflow-hidden rounded-card bg-gradient-to-br from-surface-warm via-surface-white to-glow-amber/10 p-8">
            <div className="relative z-10">
              <Badge className="mb-4">{pillar.number}</Badge>
              <h1 className="font-serif text-heading-2 text-text-primary">{pillar.title}</h1>
              <p className="mt-3 text-body-lg text-text-muted">{pillar.subtitle}</p>
            </div>
            <div className="absolute bottom-0 right-0 h-40 w-40 opacity-30">
              <PillarIllustration type={pillar.visualType} />
            </div>
          </div>

          <div className="space-y-4 text-body text-text-secondary leading-relaxed">
            <p>{pillar.description}</p>
          </div>

          {relatedPillars.length > 0 && (
            <div className="mt-16">
              <h3 className="mb-6 font-serif text-heading-3 text-text-primary">Related Pillars</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {relatedPillars.map((p, i) => (
                  <ScrollReveal key={p.id} delay={i * 50}>
                    <Link href={`/philosophy/${p.id}`}>
                      <Card variant="bordered-hover" padding="md" className="h-full">
                        <Badge className="mb-2">{p.number}</Badge>
                        <h4 className="font-serif text-heading-4 text-text-primary">{p.title}</h4>
                        <p className="mt-1 text-body-sm text-text-muted line-clamp-2">{p.description}</p>
                      </Card>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <ScrollReveal>
            <Card variant="elevated" padding="lg">
              <div className="mb-4 h-32 w-full rounded-xl bg-gradient-to-br from-accent-50 to-glow-amber/10 flex items-center justify-center">
                <Icon className="h-12 w-12 text-accent-500/80" />
              </div>
              <h3 className="font-serif text-heading-4 text-text-primary">Key Metrics</h3>
              <div className="mt-4 space-y-4">
                {pillar.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="font-serif text-display-sm text-accent-500">{metric.value}</span>
                    <p className="text-sm text-text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </PageLayout>
  )
}
