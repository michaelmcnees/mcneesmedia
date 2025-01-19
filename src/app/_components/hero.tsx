import { Button } from '@/src/components/ui/button'
import Link from 'next/link'

const hero = '/assets/img/home-theater.jpg'

export function Hero() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white relative'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('${hero}')`,
          opacity: 0.5
        }}
      />
      <div className='relative z-10'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                Your Home, Smarter and More Entertaining
              </h1>
              <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl'>
                McNees Media installs and services home theater, audio, networking, and smart home equipment in West
                Michigan.
              </p>
            </div>
            <div className='space-x-4'>
              <Button asChild>
                <Link href='/contact'>Get in Touch!</Link>
              </Button>
              <Button variant='outline' asChild>
                <Link href='#services'>Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
