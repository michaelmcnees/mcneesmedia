import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Tv, Home, Settings, Volume2, Laptop } from 'lucide-react'

export function Services() {
  return (
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
                Transform your living space into a cinematic paradise. Our comprehensive home theater services include:
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
                Ensure fast, reliable, and secure internet throughout your entire home. Our networking services include:
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
  )
}
