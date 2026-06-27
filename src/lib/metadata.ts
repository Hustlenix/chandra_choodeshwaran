import type { Metadata } from 'next'
import { SITE } from '@/config/site'

interface PageSEOProps {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'profile' | 'article'
  keywords?: string[]
  images?: { url: string; width: number; height: number }[]
}

export function buildMetadata({
  title,
  description,
  path,
  ogType = 'website',
  keywords = [],
  images,
}: PageSEOProps): Metadata {
  const url = `${SITE.baseUrl}${path}`
  const fullTitle = `${title} | ${SITE.name}`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type: ogType,
      locale: 'en_IN',
      images: images || [{ url: `${SITE.baseUrl}/images/og-default.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: images || [`${SITE.baseUrl}/images/og-default.jpg`],
    },
  }
}
