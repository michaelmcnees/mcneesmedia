import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <section id='contact' className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Ready to Upgrade Your Home?</h2>
            <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Contact us today for a free consultation and quote. Let&apos;s bring your home into the future of
              entertainment and automation.
            </p>
          </div>
          <div className='w-full max-w-sm space-y-2'>
            <Button className='w-full' asChild>
              <Link href='/contact'>Get in Touch!</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
