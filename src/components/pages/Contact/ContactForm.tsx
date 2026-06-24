'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import { CONTACT_PAGE } from '@/content/contact'
import { SITE } from '@/config/site'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target
      setFormData((prev) => ({ ...prev, [id]: value }))
    },
    []
  )

  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(formData.subject || 'New Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`

  return (
    <div className="space-y-6">
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <p className="text-sm text-text-muted">
        This site is currently static. Your message will be sent via your email app.
      </p>
      <a
        href={mailtoHref}
        className="inline-block w-full"
      >
        <Button variant="primary" size="lg" className="w-full">
          Send via Email
        </Button>
      </a>
    </div>
  )
}
