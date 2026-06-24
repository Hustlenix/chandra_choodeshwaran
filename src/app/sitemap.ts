import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'
import { FIVE_PILLARS } from '@/content/pillars'
import { PODCAST_EPISODES } from '@/content/podcast'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.baseUrl

  // Static pages
  const staticPages = [
    { path: '', changeFreq: 'weekly' as const, priority: 1.0 },
    { path: '/about', changeFreq: 'monthly' as const, priority: 0.8 },
    { path: '/services', changeFreq: 'monthly' as const, priority: 0.9 },
    { path: '/podcast', changeFreq: 'weekly' as const, priority: 0.8 },
    { path: '/awards', changeFreq: 'monthly' as const, priority: 0.6 },
    { path: '/experience', changeFreq: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFreq: 'monthly' as const, priority: 0.7 },
  ]

  // Dynamic service detail pages
  const servicePages = FIVE_PILLARS.map((pillar) => ({
    path: `/services/${pillar.id}`,
    changeFreq: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic podcast episode pages
  const podcastPages = PODCAST_EPISODES.map((episode) => ({
    path: `/podcast/${episode.title.toLowerCase().replace(/\s+/g, '-')}`,
    changeFreq: 'monthly' as const,
    priority: 0.6,
  }))

  const allPages = [...staticPages, ...servicePages, ...podcastPages]

  return allPages.map(({ path, changeFreq, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }))
}
