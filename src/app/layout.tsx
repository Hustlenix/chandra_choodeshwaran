import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Figtree } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PersonSchema, PodcastSeriesSchema } from '@/components/ui/JsonLd'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#E07B8C',
}

export const metadata: Metadata = {
  title: {
    default: 'Chandra Choodeshwaran M | Emotional Intelligence & Soft Skills Trainer',
    template: '%s | Chandra Choodeshwaran M',
  },
  description:
    'Helping people communicate, lead, and grow through emotional intelligence. Soft Skills Trainer in Hosur, Tamil Nadu.',
  openGraph: {
    title: 'Chandra Choodeshwaran M | Emotional Intelligence & Soft Skills Trainer',
    description:
      'Helping people communicate, lead, and grow through emotional intelligence.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Chandra Choodeshwaran M',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandra Choodeshwaran M | Emotional Intelligence & Soft Skills Trainer',
    description:
      'Helping people communicate, lead, and grow through emotional intelligence.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${figtree.variable}`}
    >
      <body>
        <PersonSchema />
        <PodcastSeriesSchema />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
        <ScrollToTop />
      </body>
    </html>
  )
}
