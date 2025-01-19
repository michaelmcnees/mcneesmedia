import { PageHeading } from '@/src/components/page-heading'

export default function AboutPage() {
  return (
    <main className='flex-1 py-4 px-6'>
      <PageHeading title='About Us' />
      <div className='container px-4 md:px-6 mx-auto space-y-4'>
        <p>
          McNees Media is a family-owned business based in Hudsonville Michigan run by Michael McNees and his wife
          Hannah.
        </p>
        <p>
          It all started in 2017 in Fort Wayne Indiana helping local businesses create websites and expanded to
          eventually include technical consulting services.
        </p>
        <p>
          Starting in 2025 we&apos;ve expanded again to offer our expertise in the areas of Home Theater, Smart Home,
          Networking, and Audio to our local community.
        </p>
      </div>
    </main>
  )
}
