import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceGrid } from '@/components/pages/Services/ServiceGrid'
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
    <PageLayout background="white">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Philosophy', href: '/philosophy' }]} />
      <SectionHeading
        as="h1"
        badge="PHILOSOPHY"
        title="The Five Pillars"
        subtitle="A complete framework for human growth — five interconnected capacities that shape how we understand ourselves, relate to others, and navigate the world."
        align="center"
        size="md"
      />
      <ServiceGrid />
      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          Explore the <Link href="/philosophy" className="text-accent-500 hover:underline">five pillars</Link>, learn{' '}
          <Link href="/about" className="text-accent-500 hover:underline">about me</Link>, or listen to the{' '}
          <Link href="/podcast" className="text-accent-500 hover:underline">podcast</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
