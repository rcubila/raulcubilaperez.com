import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'rcubila@gmail.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

type ContactBody = {
  firstName?: unknown
  lastName?: unknown
  email?: unknown
  message?: unknown
  company?: unknown
}

function asText(value: unknown, max: number) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

async function readBody(request: Request): Promise<ContactBody | null> {
  const contentType = request.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    try {
      return (await request.json()) as ContactBody
    } catch {
      return null
    }
  }

  try {
    const form = await request.formData()
    return {
      firstName: form.get('firstName'),
      lastName: form.get('lastName'),
      email: form.get('email'),
      message: form.get('message'),
      company: form.get('company'),
    }
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  const body = await readBody(request)
  if (!body) {
    return Response.json({ error: 'Please fill in all fields' }, { status: 400 })
  }

  if (asText(body.company, 200)) {
    return Response.json({ ok: true })
  }

  const firstName = asText(body.firstName, 80)
  const lastName = asText(body.lastName, 80)
  const email = asText(body.email, 200)
  const message = asText(body.message, 5000)

  if (!firstName || !lastName || !email || !message) {
    return Response.json({ error: 'Please fill in all fields' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please enter a valid email address' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'The contact form is not ready yet. Please email me directly.' }, { status: 503 })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Portfolio message from ${firstName} ${lastName}`,
    text: [`From: ${firstName} ${lastName}`, `Email: ${email}`, '', message].join('\n'),
  })

  if (error) {
    console.error('Contact email failed', error)
    return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
