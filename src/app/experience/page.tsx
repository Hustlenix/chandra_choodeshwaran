import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Timeline } from '@/components/pages/Experience/Timeline'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Professional Journey',
  description: 'Explore the professional journey of Chandra Choodeshwaran M — from Microsoft Global Education Exchange to Times Edu Ex Award winner.',
  path: '/experience',
  keywords: ['soft skills trainer experience', 'emotional intelligence specialist credentials'],
})

export default function ExperiencePage() {
  return (
    <PageLayout background="blush">
      <SectionHeading
        badge="JOURNEY"
        title="Professional Journey"
        subtitle="A career dedicated to understanding human potential and helping others realize theirs."
        align="center"
        size="md"
      />
      <Timeline />
    </PageLayout>
  )
}
