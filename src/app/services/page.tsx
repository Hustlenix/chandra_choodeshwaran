import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceGrid } from '@/components/pages/Services/ServiceGrid'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description: 'Explore professional services: soft skills training, emotional intelligence coaching, counselling, career guidance, and public speaking training in Hosur.',
  path: '/services',
  keywords: ['soft skills training hosur', 'emotional intelligence training', 'career guidance tamil nadu'],
})

export default function ServicesPage() {
  return (
    <PageLayout background="white">
      <SectionHeading
        badge="SERVICES"
        title="Services & Offerings"
        subtitle="A comprehensive range of training, coaching, and counselling services designed to help individuals and organizations thrive."
        align="center"
        size="md"
      />
      <ServiceGrid />
    </PageLayout>
  )
}
