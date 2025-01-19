import Image from 'next/image'

export function LogoCloud() {
  const logos = [
    { id: 1, src: '/assets/img/ubiquiti.png', alt: 'Ubiquiti' },
    { id: 2, src: '/assets/img/home-assistant.png', alt: 'Home Assistant' },
    { id: 3, src: '/assets/img/homekit.png', alt: 'HomeKit' },
    { id: 4, src: '/assets/img/matter.png', alt: 'Matter' },
    { id: 5, src: '/assets/img/lutron.jpg', alt: 'Lutron' },
    { id: 6, src: '/assets/img/lg.jpeg', alt: 'LG' },
    { id: 7, src: '/assets/img/klipsch.png', alt: 'Klipsch' }
  ]

  return (
    <section className='hidden sm:block pt-12 md:pt-24 lg:pt-32 bg-gray-100'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <ul className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'>
            {logos.map(logo => (
              <li key={logo.id}>
                <Image src={logo.src} alt={logo.alt} width={250} height={48} className='h-16 w-auto' />
              </li>
            ))}
          </ul>
          <ul
            className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'
            aria-hidden='true'>
            {logos.map(logo => (
              <li key={logo.id}>
                <Image src={logo.src} alt={logo.alt} width={250} height={48} className='h-16 w-auto' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
