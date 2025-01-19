import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
      <p className='text-xs text-gray-500'>© 2025 McNees Media. All rights reserved.</p>
      <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
        <Link className='text-xs hover:underline underline-offset-4 text-gray-500' href='tel:6164044335'>
          <Phone className='w-4 h-4 inline-block mr-1' />
          (616) 404-GEEK
        </Link>
        <Link className='text-xs hover:underline underline-offset-4 text-gray-500' href='mailto:info@mcneesmedia.com'>
          <Mail className='w-4 h-4 inline-block mr-1' />
          info@mcneesmedia.com
        </Link>
      </nav>
    </footer>
  )
}
