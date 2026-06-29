'use client'

import { useState, type FormEvent } from 'react'
import { SITE } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { Mail, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${name} — chandrachoodeshwaran.com`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-card border border-border-light/60 bg-surface-white p-10 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-accent-400" />
        <h3 className="font-serif text-heading-3 text-text-primary">Message Ready</h3>
        <p className="mt-2 text-text-muted">
          Your email client has been opened. Just click send to complete your message.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-input border border-border-light bg-surface-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-400/30"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-input border border-border-light bg-surface-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-400/30"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
          Your Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-input border border-border-light bg-surface-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-400/30 resize-y"
          placeholder="Tell me what's on your mind..."
        />
      </div>
      <Button variant="primary" size="lg" type="submit" className="w-full">
        <Mail className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
