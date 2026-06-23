'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/ui/Container'
import { PODCAST_DATA } from '@/lib/constants'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import ThemeFilter from './ThemeFilter'
import EpisodeCard from './EpisodeCard'

export default function PodcastUniverse() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null)

  const { badge, title, subtitle, spotifyUrl, tamilMotto, themes, episodes } =
    PODCAST_DATA

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
      className="relative overflow-hidden bg-navy-900 py-section-lg"
    >
      {/* ── Tamil watermark ── */}
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap font-serif text-[clamp(6rem,20vw,20rem)] leading-none text-white/[0.02]">
          {tamilMotto}
        </span>
      </div>

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
                <p className="py-16 text-center text-body-sm text-muted">
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
              className="sticky top-24 overflow-hidden rounded-2xl border border-white/5 bg-navy-800/30 backdrop-blur-sm"
            >
              <iframe
                src="https://open.spotify.com/embed/show/7jte6TL6cXPKVdqgO2jqqu"
                width="100%"
                height="232"
                allow="encrypted-media"
                className="w-full"
              />
            </motion.div>

            <p className="mt-3 text-center text-micro uppercase tracking-widest text-muted">
              Listen on Spotify
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
