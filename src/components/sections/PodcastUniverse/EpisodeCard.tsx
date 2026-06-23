'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

interface Episode {
  title: string
  description: string
  duration: string
  episodeNumber: number
  featured?: boolean
  themes: string[]
}

interface EpisodeCardProps {
  episode: Episode
  spotifyUrl: string
  featured?: boolean
}

export default function EpisodeCard({
  episode,
  spotifyUrl,
  featured = false,
}: EpisodeCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-gradient-to-r transition-all duration-300',
        'hover:-translate-y-0.5 hover:shadow-xl',
        featured
          ? 'border-l-[6px] border-gold-400 from-navy-800/90 to-navy-700/50 p-8 hover:shadow-gold-500/8'
          : 'border-l-4 border-gold-500/60 from-navy-800/80 to-navy-700/30 p-6 hover:shadow-gold-500/5'
      )}
    >
      {/* ── Top section: meta + title + description ── */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-micro uppercase tracking-widest text-gold-500/70">
              EP {String(episode.episodeNumber).padStart(2, '0')}
            </span>
            {featured && (
              <span className="rounded-full bg-gold-500/15 px-3 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-gold-400">
                Featured
              </span>
            )}
          </div>

          <h3
            className={cn(
              'font-serif leading-tight text-white',
              featured ? 'text-heading-2' : 'text-heading-3'
            )}
          >
            {episode.title}
          </h3>

          <p className="text-body-sm leading-relaxed text-muted">
            {episode.description}
          </p>
        </div>

        <span className="shrink-0 whitespace-nowrap font-mono text-micro uppercase tracking-wider text-white/30">
          {episode.duration}
        </span>
      </div>

      {/* ── Bottom section: theme tags + CTA ── */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {episode.themes.map((theme) => (
            <span
              key={theme}
              className="rounded-full bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/35"
            >
              {theme}
            </span>
          ))}
        </div>

        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider transition-all duration-300',
            featured
              ? 'bg-gold-500/15 text-gold-400 hover:bg-gold-500/25'
              : 'bg-white/[0.06] text-white/50 hover:bg-white/[0.12] hover:text-white'
          )}
        >
          {/* Spotify icon */}
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          Listen on Spotify
        </a>
      </div>
    </motion.div>
  )
}
