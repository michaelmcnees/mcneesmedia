import { Hero } from './_components/hero'
import { LogoCloud } from './_components/logo-cloud'
import { Services } from './_components/services'
import { ServiceArea } from './_components/service-area'
import { CTA } from './_components/call-to-action'

export default function LandingPage() {
  return (
    <main className='flex-1'>
      <Hero />
      <LogoCloud />
      <Services />
      <ServiceArea />
      <CTA />
    </main>
  )
}
