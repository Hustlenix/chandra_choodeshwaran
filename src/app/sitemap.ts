import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chandrachoodeshwaran.com'
  const pages = [
    { path: '', changeFreq: 'weekly' as const, priority: 1.0 },
    { path: '/about', changeFreq: 'monthly' as const, priority: 0.8 },
    { path: '/services', changeFreq: 'monthly' as const, priority: 0.9 },
    { path: '/podcast', changeFreq: 'weekly' as const, priority: 0.8 },
    { path: '/awards', changeFreq: 'monthly' as const, priority: 0.6 },
    { path: '/experience', changeFreq: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFreq: 'monthly' as const, priority: 0.7 },
  ]

  return pages.map(({ path, changeFreq, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }))
}
