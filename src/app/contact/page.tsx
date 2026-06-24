import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/pages/Contact/ContactForm'
import { ContactInfo } from '@/components/pages/Contact/ContactInfo'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch with Chandra Choodeshwaran M. Book a free discovery call for soft skills training, counselling, or emotional intelligence coaching in Hosur.',
  path: '/contact',
  keywords: ['contact soft skills trainer hosur', 'book counselling session tamil nadu'],
})

export default function ContactPage() {
  return (
    <PageLayout background="white">
      <SectionHeading
        badge="CONNECT"
        title="Get In Touch"
        subtitle="Ready to begin your journey? Reach out and let's start a conversation."
        align="center"
        size="md"
      />
      <div className="grid gap-12 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </PageLayout>
  )
}
