import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EpisodeGrid } from '@/components/pages/Podcast/EpisodeGrid'
import { SpotifyEmbed } from '@/components/pages/Podcast/SpotifyEmbed'
import { buildMetadata } from '@/lib/metadata'
import { PODCAST } from '@/content/podcast'

export const metadata: Metadata = buildMetadata({
  title: 'Podcast',
  description: "Listen to Chandru's Psychology In Tamil — a Tamil podcast on emotional intelligence, psychology, communication, and personal growth.",
  path: '/podcast',
  keywords: ['psychology podcast tamil', 'emotional intelligence podcast', 'tamil personal growth podcast'],
})

export default function PodcastPage() {
  return (
    <PageLayout background="blush">
      <SectionHeading
        badge="LISTEN"
        title={PODCAST.title}
        subtitle={PODCAST.subtitle}
        align="center"
        size="md"
      />

      <div className="mb-12">
        <p className="text-center font-serif text-2xl text-pink-400">
          {PODCAST.tamilMotto}
        </p>
      </div>

      <div className="mb-16">
        <SpotifyEmbed />
      </div>

      <EpisodeGrid />
    </PageLayout>
  )
}
