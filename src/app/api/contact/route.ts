import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().max(200).optional(),
  message: z.string().min(1, 'Message is required').max(5000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { name, email, subject, message } = parsed.data

    // Use Resend if configured
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'chandrachoodeshwaran@gmail.com',
          replyTo: email,
          subject: `[Website Contact] ${subject || 'New Inquiry'} from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <hr />
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      })

      if (!resendRes.ok) {
        const err = await resendRes.text()
        console.error('Resend error:', err)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }
    } else {
      // Fallback: log the message (static export fallback)
      console.log('Contact form submission:', { name, email, subject, message })
    }

    return NextResponse.json(
      { success: true, message: 'Thank you for your message. I will get back to you soon.' },
      { status: 200 },
    )
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
