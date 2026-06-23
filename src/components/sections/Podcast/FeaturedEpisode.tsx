'use client'

import { motion } from 'framer-motion'
import { Play, Clock, ArrowUpRight } from 'lucide-react'

interface FeaturedEpisodeProps {
  title: string
  description: string
  duration?: string
  episodeNumber?: number
  spotifyUrl?: string
}

export default function FeaturedEpisode({
  title,
  description,
  duration,
  episodeNumber,
  spotifyUrl,
}: FeaturedEpisodeProps) {
  return (
    <motion.a
      href={spotifyUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden bg-gradient-to-br from-navy-700 to-navy-800 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Cover art area */}
        <div className="relative aspect-square overflow-hidden md:aspect-auto">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold-500/10 to-navy-800">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/90 text-navy-900 shadow-xl shadow-gold-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-400">
              <Play className="ml-1 h-8 w-8" fill="currentColor" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        </div>

        {/* Episode info */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-500">
            Featured Episode
          </span>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-3">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted">
            {duration && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {duration}
              </span>
            )}
            {episodeNumber && (
              <span className="font-mono">EP.{String(episodeNumber).padStart(2, '0')}</span>
            )}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-gold-400 transition-all duration-300 group-hover:gap-3">
            <span>Listen on Spotify</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.a>
  )
}
