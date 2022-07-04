import Image from 'next/image';

const CarouselContent = ({val}) => {
  return (
    <div className='flex flex-row pb-10'>
      <div>
        <Image
          src='/assets/doubleQuotes.svg'
          width='180'
          height='160'
          alt='image'
        />
      </div>
      <div className='flex flex-row items-center pt-10'>
        <div className='ml-3 w-1/4'>
          <Image src={val.img} width='650' height='650' alt='profile picture' />
        </div>
        <div className='pl-2 mx-10 w-3/4'>
          <p className='text-2xl'>{val.description}</p>
          <p className='font-semibold text-2xl'>{val.name}</p>
          <p className='text-sm text-gray-500'>{val.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
