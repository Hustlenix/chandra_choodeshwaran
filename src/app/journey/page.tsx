import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Timeline } from '@/components/pages/Experience/Timeline'
import { ExpertiseSection } from '@/components/pages/Journey/ExpertiseSection'
import { SectionPattern } from '@/components/visual/SectionPattern'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Professional Journey - Chandra Choodeshwaran M - 15+ Years in Hosur',
  description: 'Explore the professional journey of Chandra Choodeshwaran M — from Microsoft Global Education Exchange to Times Edu Ex Award winner.',
  path: '/journey',
  keywords: ['soft skills trainer experience', 'emotional intelligence specialist credentials'],
})

export default function JourneyPage() {
  return (
    <PageLayout background="blush" glow="warm">
      <SectionPattern />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Journey', href: '/journey' }]} />
      <SectionHeading
        as="h1"
        badge="JOURNEY"
        title="Professional Journey"
        subtitle="A career dedicated to understanding human potential and helping others realize theirs."
        align="center"
      />
      <ScrollReveal>
        <Timeline />
      </ScrollReveal>
      <div className="mt-20">
        <SectionHeading
          badge="HIGHLIGHTS"
          title="Areas of Expertise"
          subtitle="Three core pillars that have defined a career in training, counselling, and community leadership."
          align="center"
        />
        <ExpertiseSection />
      </div>
    </PageLayout>
  )
}
