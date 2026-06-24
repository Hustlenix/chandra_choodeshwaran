import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BioSection } from '@/components/pages/About/BioSection'
import { CredentialsGrid } from '@/components/pages/About/CredentialsGrid'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'Learn about Chandra Choodeshwaran M — a certified emotional intelligence coach, counsellor, and public speaking trainer based in Hosur, Tamil Nadu.',
  path: '/about',
  ogType: 'profile',
  keywords: ['counsellor in hosur', 'emotional intelligence coach', 'public speaking trainer tamil nadu'],
})

export default function AboutPage() {
  return (
    <PageLayout background="blush">
      <SectionHeading
        badge="ABOUT"
        title="About Chandra Choodeshwaran M"
        subtitle="A certified emotional intelligence trainer, counsellor, and public speaking coach dedicated to helping people transform through self-awareness."
        align="center"
        size="md"
      />
      <BioSection />
      <CredentialsGrid />
    </PageLayout>
  )
}
