'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PODCAST } from '@/content/podcast'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const themeLabels: Record<string, string> = {
  'emotional-intelligence': 'EI',
  'communication': 'Comm',
  'empathy': 'Empathy',
  'leadership': 'Leadership',
  'psychology': 'Psychology',
  'growth': 'Growth',
}

export function EpisodeGrid() {
  const [activeTheme, setActiveTheme] = useState('all')
  const episodes = PODCAST.themes.find(t => t.id === activeTheme)
    ? PODCAST.episodes.filter(ep => activeTheme === 'all' || ep.themes.includes(activeTheme))
    : PODCAST.episodes

  return (
    <div className="space-y-8">
      {/* Theme filter */}
      <div className="flex flex-wrap gap-2">
        {PODCAST.themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setActiveTheme(theme.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeTheme === theme.id
                ? 'bg-pink-400 text-white'
                : 'bg-pink-50 text-text-muted hover:bg-pink-100 hover:text-pink-600'
            }`}
          >
            {theme.label}
          </button>
        ))}
      </div>

      {/* Episode grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {episodes.map((episode, i) => {
          const slug = episode.title.toLowerCase().replace(/\s+/g, '-')
          return (
            <motion.div
              key={episode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link href={`/podcast/${slug}`} className="block h-full">
                <Card variant="interactive" padding="md" className="h-full">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="rose" size="sm">Ep {episode.episodeNumber}</Badge>
                    <span className="text-xs text-text-muted">{episode.duration}</span>
                  </div>
                  <h3 className="font-serif text-heading-4 text-text-primary mb-2">
                    {episode.title}
                    {episode.featured && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-pink-100 px-2 py-0.5 text-xs font-medium text-pink-600">
                        Featured
                      </span>
                    )}
                  </h3>
                  <p className="text-body-sm text-text-muted line-clamp-2 mb-3">{episode.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {episode.themes.map((theme) => (
                      <span key={theme} className="rounded-full bg-pink-50 px-2.5 py-0.5 text-xs text-pink-600">
                        {themeLabels[theme] || theme}
                      </span>
                    ))}
                  </div>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
