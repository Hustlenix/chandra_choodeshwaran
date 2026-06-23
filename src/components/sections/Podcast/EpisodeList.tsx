'use client'

import { motion } from 'framer-motion'
import { Play, Clock } from 'lucide-react'

interface EpisodeItem {
  title: string
  description: string
  duration?: string
  episodeNumber?: number
  featured?: boolean
}

interface EpisodeListProps {
  episodes: EpisodeItem[]
  spotifyUrl?: string
}

export default function EpisodeList({ episodes, spotifyUrl }: EpisodeListProps) {
  const nonFeatured = episodes.filter((ep) => !ep.featured).slice(0, 5)

  if (nonFeatured.length === 0) return null

  return (
    <div className="space-y-1">
      <h4 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Recent Episodes
      </h4>

      {nonFeatured.map((episode, i) => (
        <motion.div
          key={episode.title}
          className="group flex items-center gap-4 border-b border-white/5 px-4 py-4 transition-all duration-300 hover:bg-white/[0.02] sm:px-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-gold-500/50 group-hover:bg-gold-500/10">
            <Play className="ml-0.5 h-3.5 w-3.5 text-muted transition-colors duration-300 group-hover:text-gold-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-white/80 transition-colors duration-300 group-hover:text-white">
              {episode.title}
            </p>
            <div className="mt-0.5 flex items-center gap-3 text-xs text-muted">
              {episode.duration && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {episode.duration}
                </span>
              )}
            </div>
          </div>
          {episode.episodeNumber && (
            <span className="hidden font-mono text-xs text-white/20 sm:block">
              EP.{String(episode.episodeNumber).padStart(2, '0')}
            </span>
          )}
        </motion.div>
      ))}

      {spotifyUrl && (
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block px-4 py-3 text-center text-sm text-gold-500/60 transition-colors duration-300 hover:text-gold-400 sm:px-6"
        >
          View all episodes &rarr;
        </a>
      )}
    </div>
  )
}
