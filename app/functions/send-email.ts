'use server'
import React from 'react'
import { Resend } from 'resend'
import ContactFormEmail from '../components/contact-form-email'

// Use an environment variable instead of a hardcoded key
const resend = new Resend("re_SfP7PaWQ_9srzL6vFYR9ibRuTJzXu6Zfo")

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string

  if (!email || !message || !subject) {
    return { error: 'All fields are required' }
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return { error: 'Invalid email format' }
  }

  if (message.length > 5000) {
    return { error: 'Message is too long' }
  }

  try {
    const data = await resend.emails.send({
      from: '<onboarding@resend.dev>',
      to: 'suryaravipati556@gmail.com',
      subject: `Portfolio Message: ${subject}`,
      replyTo: email,
      react: React.createElement(ContactFormEmail, { subject, message, email }),
    })
  
    console.log('Resend API Response:', data) // ✅ Log the response
  
    return { success: 'Email sent successfully', data }
  } catch (error) {
    console.error('Email sending error:', error)
    return { error: 'Failed to send email' }
  }
  
}
