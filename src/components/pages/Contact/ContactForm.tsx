'use client'

import { useState, useCallback, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { CONTACT_PAGE } from '@/content/contact'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target
      setFormData((prev) => ({ ...prev, [id]: value }))
    },
    []
  )

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-green-200 bg-green-50/50 px-8 py-16 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="font-serif text-heading-3 text-text-primary">Message Sent!</h3>
        <p className="max-w-md text-text-muted">
          Thank you for reaching out. I will get back to you within 24 hours.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus('idle')}>
          Send Another Message
        </Button>
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
          disabled={status === 'submitting'}
          placeholder={CONTACT_PAGE.formFields.name.placeholder}
          className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-200 disabled:opacity-50"
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
          disabled={status === 'submitting'}
          placeholder={CONTACT_PAGE.formFields.email.placeholder}
          className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-200 disabled:opacity-50"
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
          disabled={status === 'submitting'}
          placeholder={CONTACT_PAGE.formFields.subject.placeholder}
          className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-200 disabled:opacity-50"
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
          disabled={status === 'submitting'}
          rows={5}
          placeholder={CONTACT_PAGE.formFields.message.placeholder}
          className="w-full rounded-xl border border-border-light bg-white px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-200 resize-none disabled:opacity-50"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
