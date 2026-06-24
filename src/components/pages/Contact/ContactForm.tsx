'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CONTACT_PAGE } from '@/content/contact'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${CONTACT_PAGE.email}?subject=${encodeURIComponent(formData.subject || 'New Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.open(mailtoLink, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-pink-50 p-8 text-center">
        <h3 className="font-serif text-heading-3 text-pink-600">Thank You!</h3>
        <p className="mt-4 text-text-muted">
          Your email client has been opened. Feel free to send your message and I&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
          {CONTACT_PAGE.formFields.name.label}
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder={CONTACT_PAGE.formFields.name.placeholder}
          className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-200"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
          {CONTACT_PAGE.formFields.email.label}
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder={CONTACT_PAGE.formFields.email.placeholder}
          className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-200"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-primary">
          {CONTACT_PAGE.formFields.subject.label}
        </label>
        <input
          type="text"
          id="subject"
          placeholder={CONTACT_PAGE.formFields.subject.placeholder}
          className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-200"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
          {CONTACT_PAGE.formFields.message.label}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder={CONTACT_PAGE.formFields.message.placeholder}
          className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-200 resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <Button variant="primary" size="lg" type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
