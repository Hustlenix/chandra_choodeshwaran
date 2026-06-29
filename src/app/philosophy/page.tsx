import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceGrid } from '@/components/pages/Services/ServiceGrid'
import { SectionPattern } from '@/components/visual/SectionPattern'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Philosophy - The Five Pillars of Human Potential',
  description: 'Explore the five interconnected pillars that form a complete philosophy for human growth: Self Awareness, Emotional Intelligence, Communication, Leadership, and Growth.',
  path: '/philosophy',
  keywords: ['five pillars philosophy', 'human potential', 'self awareness', 'emotional intelligence', 'personal growth framework'],
})

export default function PhilosophyPage() {
  return (
    <PageLayout background="white" glow="glow">
      <SectionPattern />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Philosophy', href: '/philosophy' }]} />
      <SectionHeading
        as="h1"
        badge="PHILOSOPHY"
        title="The Five Pillars"
        subtitle="A complete framework for human growth — five interconnected capacities that shape how we understand ourselves, relate to others, and navigate the world."
        align="center"
      />
      <ServiceGrid />
    </PageLayout>
  )
}
