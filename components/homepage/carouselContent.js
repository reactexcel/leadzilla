import Image from 'next/image'

function CarouselContent() {
  return (
    <div className='flex flex-row pb-10'>
      <div>
        <Image src="/assets/doubleQuotes.svg" width="180" height="160" alt='image' />
      </div>
      <div className='flex flex-row items-center pt-16'>
        <div>
          <Image src="/assets/person.png" width='650' height='650' alt='profile picture' />
        </div>
        <div className='pl-20'>
          <p className='text-black text-2xl'>"After checking all the alternatives, Leadzilla was the
            only solution to provide so much more than that. On top
            of that, it was also the only solution that didn’t involve so much pain during integration, so quick and easy,
            my team loves it."
          </p>
          <p className='font-semibold text-2xl text-black'>James Smith</p>
          <p className='text-sm text-gray-500'>Sales Manager @Company name</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselContent;