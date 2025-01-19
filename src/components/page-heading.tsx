export function PageHeading({ title }: { title: string }) {
  return (
    <div className='pt-2'>
      <h2 className='text-3xl text-center font-semibold tracking-tight text-gray-900 sm:text-4xl'>{title}</h2>
    </div>
  )
}
