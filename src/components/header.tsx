'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '../lib/utils'
import { Phone } from 'lucide-react'

export function Header() {
  const segment = useSelectedLayoutSegment()

  return (
    <header className='px-4 lg:p-6 py-3 space-y-4 sm:space-y-0 sm:flex items-center shadow'>
      <Link className='flex items-center justify-center' href='/'>
        <span className='sr-only'>McNees Media</span>
        <Image src='/assets/logo/default-monochrome-black.svg' alt='McNees Media' width={220} height={40} />
      </Link>
      <nav className='sm:ml-auto flex items-center justify-center gap-4 sm:gap-6'>
        <Link
          className={cn('sm:text-sm font-medium hover:underline underline-offset-4', {
            underline: segment === 'services'
          })}
          href='/services'>
          Services
        </Link>
        <Link
          className={cn('sm:text-sm font-medium hover:underline underline-offset-4', {
            underline: segment === 'about'
          })}
          href='/about'>
          About
        </Link>
        <Link
          className={cn('sm:text-sm font-medium hover:underline underline-offset-4', {
            underline: segment === 'contact'
          })}
          href='/contact'>
          Contact
        </Link>
        <Link
          className='hidden sm:block sm:text-sm font-medium hover:underline underline-offset-4'
          href='tel:6164044335'>
          <Phone className='w-4 h-4 inline-block mr-1 opacity-80' />
          (616) 404-GEEK
        </Link>
      </nav>
    </header>
  )
}
