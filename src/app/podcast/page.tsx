import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EpisodeGrid } from '@/components/pages/Podcast/EpisodeGrid'
import { SpotifyEmbed } from '@/components/pages/Podcast/SpotifyEmbed'
import { buildMetadata } from '@/lib/metadata'
import { PODCAST } from '@/content/podcast'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: "Chandru's Psychology In Tamil - Emotional Intelligence Podcast",
  description: "Listen to Chandru's Psychology In Tamil — a Tamil podcast on emotional intelligence, psychology, communication, and personal growth.",
  path: '/podcast',
  keywords: ['psychology podcast tamil', 'emotional intelligence podcast', 'tamil personal growth podcast'],
})

export default function PodcastPage() {
  return (
    <PageLayout background="blush">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Podcast', href: '/podcast' }]} />
      <SectionHeading
        as="h1"
        badge="LISTEN"
        title={PODCAST.title}
        subtitle={PODCAST.subtitle}
        align="center"
      />

      <div className="mb-12">
        <p className="text-center font-serif text-2xl text-accent-400">
          {PODCAST.tamilMotto}
        </p>
      </div>

      <div className="mb-16">
        <SpotifyEmbed />
      </div>

      <EpisodeGrid />

      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          Explore my <Link href="/philosophy" className="text-accent-500 hover:underline">philosophy</Link> or{' '}
          <Link href="/about" className="text-accent-500 hover:underline">learn about me</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
