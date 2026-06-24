import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageLayout } from '@/components/layout/PageLayout'
import { Badge } from '@/components/ui/Badge'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'
import { Button } from '@/components/ui/Button'
import { SpotifyEmbed } from '@/components/pages/Podcast/SpotifyEmbed'
import { PODCAST } from '@/content/podcast'
import { buildMetadata } from '@/lib/metadata'
import { ChevronLeft } from 'lucide-react'

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
    <PageLayout background="blush">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Podcast', href: '/podcast' }, { name: episode.title, href: `/podcast/${slug}` }]} />
      <Link
        href="/podcast"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-pink-500"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Episodes
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="pink" size="md">Episode {episode.episodeNumber}</Badge>
            <span className="text-sm text-text-muted">{episode.duration}</span>
          </div>
          <h1 className="font-serif text-heading-2 text-text-primary">
            {episode.title}
            {episode.featured && (
              <span className="ml-3 inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600 align-middle">
                Featured
              </span>
            )}
          </h1>
          <p className="mt-6 text-body-lg text-text-muted">{episode.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {episode.themes.map((theme) => {
              const themeObj = PODCAST.themes.find(t => t.id === theme)
              return (
                <span key={theme} className="rounded-full bg-pink-50 px-3 py-1 text-sm text-pink-600">
                  {themeObj?.label || theme}
                </span>
              )
            })}
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Share Your Thoughts
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <SpotifyEmbed />
        </div>
      </div>
    </PageLayout>
  )
}
