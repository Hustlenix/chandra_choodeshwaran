import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactInfo } from '@/components/pages/Contact/ContactInfo'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Connect - Chandra Choodeshwaran M - Hosur, Tamil Nadu',
  description: 'Reach out to Chandra Choodeshwaran M for speaking engagements, collaborations, or conversations about emotional intelligence and human development.',
  path: '/connect',
  keywords: ['contact soft skills trainer hosur', 'emotional intelligence specialist tamil nadu'],
})

export default function ConnectPage() {
  return (
    <PageLayout background="white">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Connect', href: '/connect' }]} />
      <SectionHeading
        as="h1"
        badge="CONNECT"
        title="Get In Touch"
        subtitle="Whether you have a question, a speaking invitation, or simply want to connect — I'd love to hear from you."
        align="center"
      />
      <div className="mx-auto max-w-lg">
        <ContactInfo />
      </div>
      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          Explore my{' '}
          <Link href="/about" className="text-accent-500 hover:underline">story</Link>,{' '}
          <Link href="/podcast" className="text-accent-500 hover:underline">listen to the podcast</Link>, or{' '}
          <Link href="/philosophy" className="text-accent-500 hover:underline">read my philosophy</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
