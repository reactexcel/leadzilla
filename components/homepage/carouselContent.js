import Image from "next/image";

const CarouselContent = ({ val }) => {
  return (
    <div className="flex flex-row pb-10">
      <div>
        <Image
          src="/assets/doubleQuotes.svg"
          width="180"
          height="160"
          alt="image"
        />
      </div>
      <div className='flex flex-row items-center pt-10 sm:block md:block'>
        <div className='ml-3 w-1/4 sm:w-2/4'>
          <Image src={val.img} width='500' height='500' alt='profile picture' />
        </div>
        <div className='pl-2 md:pl-0 sm:pl-0 sm:mx-0 sm:w-full mx-10 md:mx-0 w-3/4 md:w-full'>
          <p className='text-2xl md:text-lg'>{val.description}</p>
          <p className='font-semibold text-2xl'>{val.name}</p>
          <p className='text-sm text-gray-500'>{val.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
