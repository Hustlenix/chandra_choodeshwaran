import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AwardTimeline } from '@/components/pages/Awards/AwardTimeline'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Awards & Recognition',
  description: 'View the awards and recognition received by Chandra Choodeshwaran M including Times Edu Ex Award, ISTD Outstanding National Trainer, and more.',
  path: '/awards',
  keywords: ['emotional intelligence award tamil nadu', 'best trainer hosur'],
})

export default function AwardsPage() {
  return (
    <PageLayout background="white">
      <SectionHeading
        badge="RECOGNITION"
        title="Awards & Recognition"
        subtitle="A timeline of milestones and achievements that reflect a commitment to excellence in training, counselling, and community service."
        align="center"
        size="md"
      />
      <AwardTimeline />
    </PageLayout>
  )
}
