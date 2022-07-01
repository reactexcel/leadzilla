import Image from 'next/image'

function CarouselContent() {
  return (
    <div className='flex flex-row pb-10'>
      <div>
        <Image src="/assets/doubleQuotes.svg" width="180" height="160" alt='image' />
      </div>
      <div className='flex flex-row items-center pt-10'>
        <div className='ml-3'>
          <Image src="/assets/personleadzilla.svg" width='650' height='650' alt='profile picture' />
        </div>
        <div className='pl-2 mx-10'>
          <p className='text-black text-2xl'>"After checking out a number of contact data products, Leadzilla was the
            only solution that gave us the accuracy that we needed. On top
            of that, it was also the only solution with the personalized AI-written emails that I've seen so far.
            My team loves it."
          </p>
          <p className='font-semibold text-2xl text-black'>Connor Hevingham</p>
          <p className='text-sm text-gray-500'>Sales Manager @ Alphaletz</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselContent;