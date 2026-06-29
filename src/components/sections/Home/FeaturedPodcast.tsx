'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PODCAST } from '@/content/podcast'
import { SPOTIFY_SHOW_URL } from '@/config/social'
import { Play } from 'lucide-react'

export function FeaturedPodcast() {
  const featured = PODCAST.episodes.find((ep) => ep.featured) ?? PODCAST.episodes[0]

  return (
    <section className="relative overflow-hidden py-section-lg">
      <div className="bg-glow-radial-amber pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
        <ScrollReveal>
          <span className="mb-6 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
            Featured Episode
          </span>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal delay={100}>
            <div>
              <span className="mb-3 inline-block rounded-badge bg-surface-warm px-3 py-1 text-xs font-medium text-text-secondary">
                Ep. {featured.episodeNumber} &middot; {featured.duration}
              </span>
              <h2 className="mt-3 font-display text-heading-1 text-text-primary">
                {featured.title}
              </h2>
              <p className="mt-4 text-body-lg leading-relaxed text-text-secondary">
                {featured.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SPOTIFY_SHOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-pill bg-text-primary px-5 py-2.5 text-sm font-medium text-text-inverse transition-all duration-500 hover:opacity-90 hover:shadow-glow"
                >
                  Listen on Spotify
                </a>
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-2 rounded-pill border border-border-light bg-surface-white px-5 py-2.5 text-sm font-medium text-text-primary shadow-control transition-all duration-500 hover:bg-surface-warm hover:shadow-warm"
                >
                  Browse all episodes
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="rounded-card bg-surface-warm p-8 lg:p-12">
              <div className="aspect-square w-full max-w-[200px] mx-auto rounded-card bg-gradient-to-br from-glow-amber/20 to-surface-warm flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-text-primary flex items-center justify-center">
                    <Play className="ml-0.5 h-6 w-6 text-white" fill="currentColor" />
                  </div>
                  <p className="mt-3 text-sm text-text-muted">{PODCAST.episodes.length} episodes</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
