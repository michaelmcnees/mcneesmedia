import Image from 'next/image'

export function LogoCloud() {
  return (
    <section className='hidden md:block w-full pt-12 md:pt-24 lg:pt-32 bg-gray-100'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex flex-row flex-wrap justify-around items-center gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14'>
          <Image
            alt='Ubiquiti'
            src='/assets/img/ubiquiti.png'
            width={158}
            height={48}
            className='max-h-12 object-contain'
          />
          {/* <Image
                alt='Home Assistant'
                src='/assets/img/home-assistant.png'
                width={158}
                height={48}
                className='max-h-12 object-contain'
              /> */}
          {/* <Image
                alt='HomeKit'
                src='/assets/img/homekit.png'
                width={158}
                height={48}
                className='max-h-12 object-contain'
              /> */}
          <Image
            alt='Matter'
            src='/assets/img/matter.png'
            width={158}
            height={48}
            className='max-h-12 object-contain'
          />
          <Image
            alt='Lutron'
            src='/assets/img/lutron.jpg'
            width={158}
            height={48}
            className='max-h-12 object-contain'
          />
          <Image alt='LG' src='/assets/img/lg.jpeg' width={158} height={48} className='max-h-12 object-contain' />
          <Image
            alt='Klipsch'
            src='/assets/img/klipsch.png'
            width={158}
            height={48}
            className='max-h-12 object-contain'
          />
        </div>
      </div>
    </section>
  )
}
