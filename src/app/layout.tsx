import type { Metadata, Viewport } from 'next'
import { fontSans, fontDisplay, fontMono } from '@/lib/fonts'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PersonSchema, PodcastSeriesSchema } from '@/components/ui/JsonLd'

export const viewport: Viewport = {
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://chandrachoodeshwaran.com'),
  title: {
    default: 'Chandra Choodeshwaran M | Emotional Intelligence & Soft Skills Trainer',
    template: '%s | Chandra Choodeshwaran M',
  },
  description:
    'Helping people communicate, lead, and grow through emotional intelligence. Soft Skills Trainer in Hosur, Tamil Nadu.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Chandra Choodeshwaran M | Emotional Intelligence & Soft Skills Trainer',
    description: 'Helping people communicate, lead, and grow through emotional intelligence.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Chandra Choodeshwaran M',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandra Choodeshwaran M | Emotional Intelligence & Soft Skills Trainer',
    description: 'Helping people communicate, lead, and grow through emotional intelligence.',
    images: ['/images/og-default.svg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}>
      <body>
        <PersonSchema />
        <PodcastSeriesSchema />
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
