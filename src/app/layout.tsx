import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Figtree } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
  themeColor: '#0A0F1E',
}

export const metadata: Metadata = {
  title: 'Chandrachoodeshwaran M | Mastering Human Potential',
  description:
    'Helping people communicate, lead, and grow through emotional intelligence. Emotional Intelligence Coach & Trainer.',
  openGraph: {
    title: 'Chandrachoodeshwaran M | Mastering Human Potential',
    description:
      'Helping people communicate, lead, and grow through emotional intelligence.',
    type: 'website',
    locale: 'en_IN',
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
        {/* Skip-to-content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        <Providers>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
