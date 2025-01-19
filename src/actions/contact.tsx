'use server'

import { z } from 'zod'
import type { ActionResponse, ContactFormData } from '@/types/contact'

import Template from '@/src/emails/contact-form'
import { Resend } from 'resend'
import { render } from '@react-email/components'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().nonempty(),
  businessName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().nonempty(),
  message: z.string().nonempty()
})

export async function submitEmail(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  try {
    const rawData: ContactFormData = {
      name: formData.get('name') as string,
      businessName: formData.get('business-name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string
    }

    const validatedData = contactSchema.safeParse(rawData)

    if (!validatedData.success) {
      return {
        success: false,
        message: 'Please fix the errors in the form',
        errors: validatedData.error.flatten().fieldErrors,
        values: rawData
      }
    }

    const email = await resend.emails.send({
      from: 'McNees Media <noreply@mcnees.me>',
      to: 'McNees Media <info@mcneesmedia.com>',
      subject: 'New Website Contact Form Submission',
      replyTo: validatedData.data.email,
      react: <Template data={validatedData.data} />,
      text: await render(<Template data={validatedData.data} />, {
        plainText: true
      })
    })

    if (email.error) {
      console.error(email.error)
      throw new Error('Resend error')
    }

    return {
      success: true,
      message: "We've received your message! We'll be in touch soon."
    }
  } catch (error) {
    console.error('Error submitting message:', error)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later or give us a call!'
    }
  }
}
