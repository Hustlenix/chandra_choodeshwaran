import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageLayout } from '@/components/layout/PageLayout'
import { Badge } from '@/components/ui/Badge'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
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
    title: pillar.title,
    description: pillar.description.slice(0, 160),
    path: `/services/${slug}`,
    ogType: 'article',
    keywords: [pillar.title, 'soft skills training', 'emotional intelligence'],
  })
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const pillar = FIVE_PILLARS.find((p) => p.id === slug)

  if (!pillar) {
    notFound()
  }

  const Icon = iconMap[pillar.visualType] || Eye

  return (
    <PageLayout background="blush">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: pillar.title, href: `/services/${slug}` }]} />
      <Link
        href="/services"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-pink-500"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Services
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Badge variant="pink" size="md" className="mb-4">{pillar.number}</Badge>
          <h1 className="font-serif text-heading-2 text-text-primary">{pillar.title}</h1>
          <p className="mt-3 text-body-lg text-text-muted">{pillar.subtitle}</p>
          <div className="mt-8 space-y-4 text-body text-text-secondary leading-relaxed">
            <p>{pillar.description}</p>
          </div>

          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Book a Session
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Card variant="elevated" padding="lg">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50">
              <Icon className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="font-serif text-heading-4 text-text-primary">Key Metrics</h3>
            <div className="mt-4 space-y-4">
              {pillar.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="font-serif text-display-sm text-pink-500">{metric.value}</span>
                  <p className="text-sm text-text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}
