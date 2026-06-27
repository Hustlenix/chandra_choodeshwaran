'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { PODCAST } from '@/content/podcast'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import ThemeFilter from './ThemeFilter'
import EpisodeCard from './EpisodeCard'

export default function PodcastUniverse() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null)

  const { badge, title, subtitle, spotifyUrl, themes, episodes } =
    PODCAST

  const filteredEpisodes = useMemo(() => {
    if (!activeTheme || activeTheme === 'all') return episodes
    return episodes.filter((ep) => ep.themes.includes(activeTheme))
  }, [activeTheme, episodes])

  const featuredEpisode = useMemo(
    () => filteredEpisodes.find((ep) => ep.featured),
    [filteredEpisodes]
  )

  const episodeList = useMemo(
    () => filteredEpisodes.filter((ep) => !ep.featured),
    [filteredEpisodes]
  )

  return (
    <section
      id="podcast"
      className="relative overflow-hidden bg-surface-white py-section-lg"
    >
      <Container className="relative z-10">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        {/* ── Theme filter chips ── */}
        <ThemeFilter
          themes={themes}
          activeTheme={activeTheme}
          onThemeSelect={setActiveTheme}
        />

        {/* ── Content grid ── */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* Left column – featured + episode list */}
          <div className="space-y-8 lg:col-span-2">
            {featuredEpisode && (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <EpisodeCard
                  episode={featuredEpisode}
                  spotifyUrl={spotifyUrl}
                  featured
                />
              </motion.div>
            )}

            {episodeList.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {episodeList.map((ep) => (
                  <EpisodeCard
                    key={ep.episodeNumber}
                    episode={ep}
                    spotifyUrl={spotifyUrl}
                  />
                ))}
              </motion.div>
            ) : (
              !featuredEpisode && (
                <p className="py-16 text-center text-body-sm text-text-muted">
                  No episodes match the selected theme.
                </p>
              )
            )}
          </div>

          {/* Right column – Spotify embed */}
          <div className="lg:col-span-1">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 overflow-hidden rounded-2xl border border-border-light bg-surface-blush/30"
            >
              <iframe
                src={spotifyUrl.replace('/show/', '/embed/show/')}
                width="100%"
                height="232"
                allow="encrypted-media"
                className="w-full"
                title="Chandru's Psychology In Tamil on Spotify"
              />
            </motion.div>

            <p className="mt-3 text-center text-micro uppercase tracking-widest text-text-muted">
              Listen on Spotify
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
