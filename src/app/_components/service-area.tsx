import { CITIES } from '@/src/lib/const'
import { MapPin } from 'lucide-react'

export function ServiceArea() {
  return (
    <section id='about' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Serving West Michigan</h2>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              McNees Media is proud to provide top-notch home technology services to the West Michigan area. From Grand
              Rapids to the lakeshore, we&apos;re here to enhance your home entertainment experience.
            </p>
          </div>
          <div className='flex flex-wrap justify-center max-w-[700px] mx-auto gap-2 text-sm text-gray-500'>
            <MapPin className='w-5 h-5' />
            {CITIES.sort().map(city => (
              <span key={city} className='bg-gray-200 px-2 py-1 rounded-full'>
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
