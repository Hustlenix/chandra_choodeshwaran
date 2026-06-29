import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageLayout } from '@/components/layout/PageLayout'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'
import { Button } from '@/components/ui/Button'
import { SectionPattern } from '@/components/visual/SectionPattern'
import { SpotifyEmbed } from '@/components/pages/Podcast/SpotifyEmbed'
import { PODCAST } from '@/content/podcast'
import { buildMetadata } from '@/lib/metadata'
import { ChevronLeft, Play, Clock, Calendar } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PODCAST.episodes.map((ep) => ({
    slug: ep.title.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const episode = PODCAST.episodes.find(
    (ep) => ep.title.toLowerCase().replace(/\s+/g, '-') === slug
  )
  if (!episode) return {}

  return buildMetadata({
    title: episode.title,
    description: episode.description,
    path: `/podcast/${slug}`,
    ogType: 'article',
    keywords: ['podcast', 'emotional intelligence', ...episode.themes],
  })
}

export default async function EpisodeDetailPage({ params }: Props) {
  const { slug } = await params
  const episode = PODCAST.episodes.find(
    (ep) => ep.title.toLowerCase().replace(/\s+/g, '-') === slug
  )

  if (!episode) {
    notFound()
  }

  return (
    <PageLayout background="blush" glow="amber">
      <SectionPattern />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Podcast', href: '/podcast' }, { name: episode.title, href: `/podcast/${slug}` }]} />
      <Link
        href="/podcast"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-500"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Episodes
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative mb-8 overflow-hidden rounded-card bg-gradient-to-br from-accent-50 via-surface-white to-glow-amber/10 p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge>Episode {episode.episodeNumber}</Badge>
                <span className="flex items-center gap-1 text-sm text-text-muted">
                  <Clock className="h-3.5 w-3.5" /> {episode.duration}
                </span>
              </div>
              <h1 className="font-serif text-heading-2 text-text-primary">
                {episode.title}
                {episode.featured && (
                  <span className="ml-3 inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-sm font-medium text-accent-600 align-middle">
                    Featured
                  </span>
                )}
              </h1>
            </div>
            <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full bg-text-primary/5 flex items-center justify-center">
              <Play className="ml-1 h-8 w-8 text-text-muted/30" fill="currentColor" />
            </div>
          </div>

          <p className="text-body-lg text-text-muted">{episode.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {episode.themes.map((theme) => {
              const themeObj = PODCAST.themes.find(t => t.id === theme)
              return (
                <span key={theme} className="rounded-full bg-accent-100 px-3 py-1 text-sm text-accent-600">
                  {themeObj?.label || theme}
                </span>
              )
            })}
          </div>

          <div className="mt-8">
            <Link href="/connect">
              <Button variant="secondary" size="lg">
                Send a Message
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <ScrollReveal>
            <Card variant="elevated" padding="lg">
              <h3 className="mb-4 font-serif text-heading-4 text-text-primary">Episode Summary</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Episode</p>
                    <p className="text-sm text-text-muted">{episode.episodeNumber}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Duration</p>
                    <p className="text-sm text-text-muted">{episode.duration}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <SpotifyEmbed />
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </PageLayout>
  )
}
