import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className='px-4 lg:px-6 h-16 flex items-center shadow'>
      <Link className='flex items-center justify-center' href='/'>
        <span className='sr-only'>McNees Media</span>
        <Image src='/assets/logo/default-monochrome-black.svg' alt='McNees Media' width={220} height={40} />
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
        <Link className='text-sm font-medium hover:underline underline-offset-4' href='/services'>
          Services
        </Link>
        <Link className='text-sm font-medium hover:underline underline-offset-4' href='/about'>
          About
        </Link>
        <Link className='text-sm font-medium hover:underline underline-offset-4' href='/contact'>
          Contact
        </Link>
      </nav>
    </header>
  )
}
