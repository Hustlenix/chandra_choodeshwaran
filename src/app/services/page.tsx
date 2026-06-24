import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceGrid } from '@/components/pages/Services/ServiceGrid'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Services - Soft Skills Training, Counselling & EI Coaching in Hosur',
  description: 'Explore professional services: soft skills training, emotional intelligence coaching, counselling, career guidance, and public speaking training in Hosur.',
  path: '/services',
  keywords: ['soft skills training hosur', 'emotional intelligence training', 'career guidance tamil nadu'],
})

export default function ServicesPage() {
  return (
    <PageLayout background="white">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />
      <SectionHeading
        as="h1"
        badge="SERVICES"
        title="Services & Offerings"
        subtitle="A comprehensive range of training, coaching, and counselling services designed to help individuals and organizations thrive."
        align="center"
        size="md"
      />
      <ServiceGrid />
      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          See my <Link href="/experience" className="text-pink-500 hover:underline">experience</Link>,{' '}
          <Link href="/about" className="text-pink-500 hover:underline">about me</Link>, or{' '}
          <Link href="/contact" className="text-pink-500 hover:underline">book a session</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
