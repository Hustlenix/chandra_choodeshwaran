import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactInfo } from '@/components/pages/Contact/ContactInfo'
import { ContactForm } from '@/components/pages/Contact/ContactForm'
import { SectionPattern } from '@/components/visual/SectionPattern'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Connect - Chandra Choodeshwaran M - Hosur, Tamil Nadu',
  description: 'Reach out to Chandra Choodeshwaran M for speaking engagements, collaborations, or conversations about emotional intelligence and human development.',
  path: '/connect',
  keywords: ['contact soft skills trainer hosur', 'emotional intelligence specialist tamil nadu'],
})

export default function ConnectPage() {
  return (
    <PageLayout background="white" glow="glow">
      <SectionPattern />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Connect', href: '/connect' }]} />
      <SectionHeading
        as="h1"
        badge="CONNECT"
        title="Get In Touch"
        subtitle="Whether you have a question, a speaking invitation, or simply want to connect — I'd love to hear from you."
        align="center"
      />
      <div className="mx-auto mt-12 grid gap-12 lg:grid-cols-2">
        <ScrollReveal>
          <ContactInfo />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </PageLayout>
  )
}
