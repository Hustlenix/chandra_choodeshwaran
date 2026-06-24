import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Timeline } from '@/components/pages/Experience/Timeline'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Experience - Chandra Choodeshwaran M - 15+ Years in Hosur',
  description: 'Explore the professional journey of Chandra Choodeshwaran M — from Microsoft Global Education Exchange to Times Edu Ex Award winner.',
  path: '/experience',
  keywords: ['soft skills trainer experience', 'emotional intelligence specialist credentials'],
})

export default function ExperiencePage() {
  return (
    <PageLayout background="blush">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Experience', href: '/experience' }]} />
      <SectionHeading
        as="h1"
        badge="JOURNEY"
        title="Professional Journey"
        subtitle="A career dedicated to understanding human potential and helping others realize theirs."
        align="center"
        size="md"
      />
      <Timeline />
      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          See my <Link href="/awards" className="text-pink-500 hover:underline">awards & recognition</Link>,{' '}
          <Link href="/services" className="text-pink-500 hover:underline">services offered</Link>, or{' '}
          <Link href="/about" className="text-pink-500 hover:underline">about me</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
