import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CITIES } from '@/lib/const'
import { Tv, Home, Settings, MapPin, Volume2, Laptop } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const hero =
  'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

export default function LandingPage() {
  return (
    <main className='flex-1'>
      {/* Hero */}
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
                  <Link href='#contact'>Get a Quote</Link>
                </Button>
                <Button variant='outline' asChild>
                  <Link href='#services'>Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className='w-full pt-12 md:pt-24 lg:pt-32 bg-gray-100'>
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

      {/* Services */}
      <section id='services' className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
        <div className='container px-4 md:px-6 mx-auto'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
            Our Featured Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card>
              <CardHeader className='flex flex-row items-center space-x-4'>
                <div className='w-8 h-8'>
                  <Tv className='w-full h-full' />
                </div>
                <CardTitle>Home Theater</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transform your living space into a cinematic paradise. Our comprehensive home theater services
                  include:
                  <ul className='list-disc list-inside mt-2 space-y-1'>
                    <li>TV mounting</li>
                    <li>Universal remote programming</li>
                    <li>Audio/video calibration</li>
                    <li>Custom system design and installation</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center space-x-4'>
                <div className='w-8 h-8'>
                  <Home className='w-full h-full' />
                </div>
                <CardTitle>Smart Home</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transform your house into an intelligent, efficient home. Our smart home services include:
                  <ul className='list-disc list-inside mt-2 space-y-1'>
                    <li>System integration</li>
                    <li>Smart switch installation</li>
                    <li>Smart lighting installation</li>
                    <li>Home Assistant configuration</li>
                    <li>Homebridge setup and configuration</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center space-x-4'>
                <div className='w-8 h-8'>
                  <Settings className='w-full h-full' />
                </div>
                <CardTitle>Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ensure fast, reliable, and secure internet throughout your entire home. Our networking services
                  include:
                  <ul className='list-disc list-inside mt-2 space-y-1'>
                    <li>Router setup and configuration</li>
                    <li>Custom network system design</li>
                    <li>WiFi analysis and optimization</li>
                    <li>Remote network management</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center space-x-4'>
                <div className='w-8 h-8'>
                  <Volume2 className='w-full h-full' />
                </div>
                <CardTitle>Audio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Immerse yourself in crystal-clear sound throughout your home. Our audio services include:
                  <ul className='list-disc list-inside mt-2 space-y-1'>
                    <li>Whole home audio systems</li>
                    <li>Smart speaker setup and integration</li>
                    <li>High-fidelity audio installations</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className='md:col-span-2'>
              <CardHeader className='flex flex-row items-center space-x-4'>
                <div className='w-8 h-8'>
                  <Laptop className='w-full h-full' />
                </div>
                <CardTitle>Technical Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Elevate your business with our technical expertise. Our consulting services include:
                  <ul className='list-disc list-inside mt-2 space-y-1'>
                    <li>Software development</li>
                    <li>Web hosting solutions</li>
                    <li>Business software implementation</li>
                    <li>Office hardware setup and maintenance</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id='about' className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Serving West Michigan</h2>
              <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                McNees Media is proud to provide top-notch home technology services to the West Michigan area. From
                Grand Rapids to the lakeshore, we&apos;re here to enhance your home entertainment experience.
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

      {/* CTA */}
      <section id='contact' className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Ready to Upgrade Your Home?
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Contact us today for a free consultation and quote. Let&apos;s bring your home into the future of
                entertainment and automation.
              </p>
            </div>
            <div className='w-full max-w-sm space-y-2'>
              <Button className='w-full' asChild>
                <Link href='#contact'>Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
