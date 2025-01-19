'use client'

import type { ActionResponse } from '@/types/contact'

import { toast } from 'sonner'
import { useActionState, useEffect } from 'react'
import { BuildingIcon, MailIcon, PhoneIcon } from 'lucide-react'

import { submitEmail } from '@/actions/contact'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const initialState: ActionResponse = {
  success: false,
  message: ''
}

export default function ContactPage() {
  const [state, action, isPending] = useActionState(submitEmail, initialState)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
      } else if (state.errors) {
        toast.error(state.message)
      } else {
        toast(state.message)
      }
    }
  }, [state])

  return (
    <main className='flex-1 relative isolate'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2'>
              <svg
                aria-hidden='true'
                className='absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'>
                <defs>
                  <pattern
                    x='100%'
                    y={-1}
                    id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                    width={200}
                    height={200}
                    patternUnits='userSpaceOnUse'>
                    <path d='M130 200V.5M.5 .5H200' fill='none' />
                  </pattern>
                </defs>
                <rect fill='white' width='100%' height='100%' strokeWidth={0} />
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg x='100%' y={-1} className='overflow-visible fill-gray-50'>
                  <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                </svg>
                <rect fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)' width='100%' height='100%' strokeWidth={0} />
              </svg>
            </div>
            <h2 className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
              Get in touch
            </h2>
            <p className='mt-6 text-lg/8 text-gray-600'>
              Have a question or want to learn more about our services? Fill out the form below and we&apos;ll get back
              to you as soon as possible.
            </p>
            <dl className='mt-10 space-y-4 text-base/7 text-gray-600'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Address</span>
                  <BuildingIcon aria-hidden='true' className='h-7 w-6 text-gray-400' />
                </dt>
                <dd>Hudsonville, MI 49426</dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Telephone</span>
                  <PhoneIcon aria-hidden='true' className='h-7 w-6 text-gray-400' />
                </dt>
                <dd>
                  <a href='tel:(616) 404-4335' className='hover:text-gray-900'>
                    (616) 404-GEEK
                  </a>
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Email</span>
                  <MailIcon aria-hidden='true' className='h-7 w-6 text-gray-400' />
                </dt>
                <dd>
                  <a href='mailto:info@mcneesmedia.com' className='hover:text-gray-900'>
                    info@mcneesmedia.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action={action}
          autoComplete='on'
          className='space-y-6 px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                name='name'
                placeholder='John Smith'
                required
                defaultValue={state?.values?.name}
                autoComplete='name'
                aria-describedby='name-error'
                className={state?.errors?.name ? 'border-red-500' : ''}
              />
              {state?.errors?.name && (
                <p id='name-error' className='text-sm text-red-500'>
                  {state.errors.name[0]}
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='business-name'>Business Name (optional)</Label>
              <Input
                id='business-name'
                name='business-name'
                maxLength={20}
                defaultValue={state?.values?.businessName}
                autoComplete='organization'
                aria-describedby='business-name-error'
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                  id='email'
                  name='email'
                  required
                  minLength={2}
                  maxLength={50}
                  defaultValue={state?.values?.email}
                  autoComplete='email'
                  aria-describedby='email-error'
                  className={state?.errors?.email ? 'border-red-500' : ''}
                />
                {state?.errors?.email && (
                  <p id='email-error' className='text-sm text-red-500'>
                    {state.errors.email[0]}
                  </p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input
                  id='phone'
                  name='phone'
                  type='tel'
                  required
                  minLength={2}
                  maxLength={50}
                  defaultValue={state?.values?.phone}
                  autoComplete='tel'
                  aria-describedby='state-error'
                  className={state?.errors?.phone ? 'border-red-500' : ''}
                />
                {state?.errors?.phone && (
                  <p id='state-error' className='text-sm text-red-500'>
                    {state.errors.phone[0]}
                  </p>
                )}
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                name='message'
                required
                rows={4}
                defaultValue={state?.values?.message}
                aria-describedby='message-error'
                className={state?.errors?.message ? 'border-red-500' : ''}
              />
              {state?.errors?.message && (
                <p id='message-error' className='text-sm text-red-500'>
                  {state.errors.message[0]}
                </p>
              )}
            </div>
          </div>

          <Button type='submit' className='w-full' disabled={isPending}>
            {isPending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </main>
  )
}
