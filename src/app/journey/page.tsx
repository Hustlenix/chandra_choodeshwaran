import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Timeline } from '@/components/pages/Experience/Timeline'
import { PROFESSIONAL_HIGHLIGHTS } from '@/content/experience'
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
    <PageLayout background="blush">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Journey', href: '/journey' }]} />
      <SectionHeading
        as="h1"
        badge="JOURNEY"
        title="Professional Journey"
        subtitle="A career dedicated to understanding human potential and helping others realize theirs."
        align="center"
        size="md"
      />
      <Timeline />
      <div className="mt-20">
        <SectionHeading
          badge="HIGHLIGHTS"
          title="Areas of Expertise"
          subtitle="Three core pillars that have defined a career in training, counselling, and community leadership."
          align="center"
          size="sm"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {PROFESSIONAL_HIGHLIGHTS.map((area) => (
            <div
              key={area.category}
              className="rounded-2xl border border-border-light bg-white/60 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 font-serif text-heading-4 text-text-primary">{area.category}</h3>
              <ul className="space-y-3">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          Explore my{' '}
          <Link href="/philosophy" className="text-accent-500 hover:underline">philosophy</Link>,{' '}
          <Link href="/about" className="text-accent-500 hover:underline">learn about me</Link>, or{' '}
          <Link href="/podcast" className="text-accent-500 hover:underline">listen to the podcast</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
