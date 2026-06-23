'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import FeaturedEpisode from './FeaturedEpisode'
import EpisodeList from './EpisodeList'
import TopicCluster from './TopicCluster'
import { PODCAST_FALLBACK } from '@/lib/constants'

export default function Podcast() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null)

  const podcast = PODCAST_FALLBACK
  const featured = podcast.featuredEpisode
  const allTopics = podcast.topicClusters || []
  const episodes = activeTopic
    ? podcast.episodes.filter(
        (ep) => ep.title.toLowerCase().includes(activeTopic.toLowerCase())
      )
    : podcast.episodes

  return (
    <section id="podcast" className="relative bg-navy-900 py-section-lg">
      {/* Tamil decorative element */}
      <div className="pointer-events-none absolute right-0 top-0 select-none overflow-hidden">
        <span className="block -translate-y-1/2 translate-x-1/4 font-serif text-[120px] leading-none text-white/[0.02] sm:text-[180px]">
          மனதுக்கு ஒரு குரல்
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
        <SectionHeading
          badge="Podcast"
          title="Chandru's Psychology In Tamil"
          subtitle={podcast.description}
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured + Topics */}
          <div className="space-y-10 lg:col-span-2">
            <FeaturedEpisode
              title={featured.title}
              description={featured.description}
              duration={featured.duration}
              episodeNumber={featured.episodeNumber}
              spotifyUrl={podcast.spotifyUrl}
            />
            <TopicCluster
              topics={allTopics}
              activeTopic={activeTopic}
              onTopicSelect={setActiveTopic}
            />
          </div>

          {/* Episode list */}
          <div>
            <EpisodeList
              episodes={episodes}
              spotifyUrl={podcast.spotifyUrl}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
