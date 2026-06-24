import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AwardTimeline } from '@/components/pages/Awards/AwardTimeline'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Awards & Recognition - Chandra Choodeshwaran M - Hosur, Tamil Nadu',
  description: 'View the awards and recognition received by Chandra Choodeshwaran M including Times Edu Ex Award, ISTD Outstanding National Trainer, and more.',
  path: '/awards',
  keywords: ['emotional intelligence award tamil nadu', 'best trainer hosur'],
})

export default function AwardsPage() {
  return (
    <PageLayout background="white">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Awards', href: '/awards' }]} />
      <SectionHeading
        as="h1"
        badge="RECOGNITION"
        title="Awards & Recognition"
        subtitle="A timeline of milestones and achievements that reflect a commitment to excellence in training, counselling, and community service."
        align="center"
        size="md"
      />
      <AwardTimeline />
      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          View my <Link href="/experience" className="text-pink-500 hover:underline">professional journey</Link> or{' '}
          <Link href="/about" className="text-pink-500 hover:underline">learn more about me</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
