const hometheater = '/assets/img/home-theater.jpg'
const smarthome = '/assets/img/smart-home.jpg'
const networking = '/assets/img/networking.jpg'
const audio = '/assets/img/audio.jpg'
const consulting = '/assets/img/consulting.jpg'

export default function ServicesPage() {
  return (
    <main className='flex-1 py-4 px-6 space-y-6'>
      <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white relative'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('${hometheater}')`,
            opacity: 0.5
          }}
        />
        <div className='relative z-10'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Home Theater
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl'>
                  We offer a full range of home theater services including TV mounting, universal remote programming,
                  and custom system design and installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white relative'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('${smarthome}')`,
            opacity: 0.5
          }}
        />
        <div className='relative z-10'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Smart Home
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl'>
                  Smart Home technology can be complex! We can help you integrate your smart home devices and make your
                  home more efficient. We work with all virtual assistant platforms and can help integrate even the most
                  complex smart home devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white relative'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('${networking}')`,
            opacity: 0.5
          }}
        />
        <div className='relative z-10'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Networking
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl'>
                  Home is where the WiFi connects automatically. We can help you make sure your home is connected and
                  secure with the best possible speeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white relative'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('${audio}')`,
            opacity: 0.5
          }}
        />
        <div className='relative z-10'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>Audio</h1>
                <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl'>
                  We can help you create the perfect audio experience in your home. From whole home audio systems to
                  high-fidelity audio installations, we have you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white relative'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('${consulting}')`,
            opacity: 0.5
          }}
        />
        <div className='relative z-10'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Technology Consulting
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl'>
                  If you&apos;re looking for something beyond our standard services, we offer technology consulting
                  services to help you with your unique needs. Small Business and Home Office solutions are our
                  specialty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
