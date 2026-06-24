import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BioSection } from '@/components/pages/About/BioSection'
import { CredentialsGrid } from '@/components/pages/About/CredentialsGrid'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'About Chandra Choodeshwaran M - Soft Skills Trainer & Counsellor in Hosur',
  description: 'Learn about Chandra Choodeshwaran M — a certified emotional intelligence coach, counsellor, and public speaking trainer based in Hosur, Tamil Nadu.',
  path: '/about',
  ogType: 'profile',
  keywords: ['counsellor in hosur', 'emotional intelligence coach', 'public speaking trainer tamil nadu'],
})

export default function AboutPage() {
  return (
    <PageLayout background="blush">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
      <SectionHeading
        as="h1"
        badge="ABOUT"
        title="About Chandra Choodeshwaran M"
        subtitle="A certified emotional intelligence trainer, counsellor, and public speaking coach dedicated to helping people transform through self-awareness."
        align="center"
        size="md"
      />
      <BioSection />
      <CredentialsGrid />
      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          Learn about my <Link href="/services" className="text-pink-500 hover:underline">services</Link>,{' '}
          <Link href="/experience" className="text-pink-500 hover:underline">professional journey</Link>, or{' '}
          <Link href="/awards" className="text-pink-500 hover:underline">awards & recognition</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
