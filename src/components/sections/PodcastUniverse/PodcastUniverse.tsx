'use client'

import { useState, useMemo } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PODCAST } from '@/content/podcast'
import ThemeFilter from './ThemeFilter'
import EpisodeCard from './EpisodeCard'

export default function PodcastUniverse() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null)
  const { title, subtitle, spotifyUrl, themes, episodes } = PODCAST

  const filteredEpisodes = useMemo(() => {
    if (!activeTheme || activeTheme === 'all') return episodes
    return episodes.filter((ep) => ep.themes.includes(activeTheme))
  }, [activeTheme, episodes])

  const featuredEpisode = useMemo(
    () => filteredEpisodes.find((ep) => ep.featured),
    [filteredEpisodes],
  )
  const episodeList = useMemo(
    () => filteredEpisodes.filter((ep) => !ep.featured),
    [filteredEpisodes],
  )

  return (
    <section id="podcast" className="py-section-lg">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <SectionHeading title={title} subtitle={subtitle} align="center" />

        <ThemeFilter
          themes={themes}
          activeTheme={activeTheme}
          onThemeSelect={setActiveTheme}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {featuredEpisode && (
              <EpisodeCard episode={featuredEpisode} spotifyUrl={spotifyUrl} featured />
            )}

            {episodeList.length > 0 ? (
              <div className="space-y-4">
                {episodeList.map((ep) => (
                  <EpisodeCard key={ep.episodeNumber} episode={ep} spotifyUrl={spotifyUrl} />
                ))}
              </div>
            ) : !featuredEpisode ? (
              <p className="py-16 text-center text-body-sm text-text-muted">
                No episodes match the selected theme.
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-card border border-border-light bg-surface-warm lg:sticky lg:top-24">
              <iframe
                src={spotifyUrl.replace('/show/', '/embed/show/')}
                width="100%"
                height="232"
                allow="encrypted-media"
                className="w-full"
                title="Podcast on Spotify"
              />
            </div>
            <p className="mt-3 text-center text-caption uppercase tracking-widest text-text-muted">
              Listen on Spotify
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
