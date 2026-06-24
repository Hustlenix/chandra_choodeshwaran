import type { Metadata } from 'next'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/PageLayout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/pages/Contact/ContactForm'
import { ContactInfo } from '@/components/pages/Contact/ContactInfo'
import { buildMetadata } from '@/lib/metadata'
import { BreadcrumbSchema } from '@/components/ui/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Contact - Book a Session with Chandra Choodeshwaran M in Hosur',
  description: 'Get in touch with Chandra Choodeshwaran M. Book a free discovery call for soft skills training, counselling, or emotional intelligence coaching in Hosur.',
  path: '/contact',
  keywords: ['contact soft skills trainer hosur', 'book counselling session tamil nadu'],
})

export default function ContactPage() {
  return (
    <PageLayout background="white">
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
      <SectionHeading
        as="h1"
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
      <div className="mt-16 border-t border-border-light pt-12 text-center">
        <p className="text-text-muted">
          Explore my <Link href="/services" className="text-pink-500 hover:underline">services</Link>,{' '}
          <Link href="/about" className="text-pink-500 hover:underline">learn about me</Link>, or{' '}
          <Link href="/podcast" className="text-pink-500 hover:underline">listen to the podcast</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
