import React from 'react';
import Image from 'next/image';

const MiddleTopSection = () => {
  return (
    <>
      <div
        className='mt-80 text-5xl text-center md:mt-20 sm:text-2xl md:text-4xl sm:mt-10 sm:text-left'
      >
        <div className='py-1 sm:pl-4 md:pl-4 font-gilroylight'>Let’s get real</div>
        <div className='p-2.5 sm:pl-4 md:pl-4 font-gilroylight'>You don’t need contact data.</div>
        <div className='font-gilroybold sm:pl-4 md:pl-4'>
          You need meetings with good fit buyers.
        </div>
      </div>
      <div className='my-12 flex sm:block md:block sm:px-4 justify-center'>
        <div className='mr-2 md:mb-4 md:flex md:justify-center md:items-center'>
          <Image
            src='/assets/current.svg'
            alt=''
            width='486px'
            height='420px'
          />
        </div>
        <div className='ml-2 md:flex md:justify-center md:items-center'>
          <Image
            src='/assets/process.svg'
            alt=''
            width='486px'
            height='420px'
            className='ml-2'
          />
        </div>
      </div>

      <div className='flex sm:block md:block justify-center items-center py-20 sm:py-0 sm:pb-20'>
        <div className='px-3 sm:hidden md:hidden'>
          <Image
            src='/assets/whychoosethis.svg'
            alt=''
            width='432px'
            height='490px'
          />
        </div>
        <div className='px-10'>
          <div className='text-5xl sm:text-3xl md:text-4xl sm:text-justify'>
            <span className='font-gilroybold'>Why choose us </span> over
            <div className='font-gilroylight'>hundreds of other options?</div>
          </div>
          <div className='text-base sm:text-justify'>
            <div className='mt-7'>
              Look, we get it. We’re a team of outbound sales professionals and
              <div>we have struggled with getting meetings as well.</div>
            </div>
            <div className='py-4'>
              There are tons of contact data tools in the market, but we were
              still <br />
              spending hours and thousands of dollars personalizing emails every
              <br /> week, but struggling to get meetings.
            </div>
            <div>
              Now, we get 3-5 highly qualified meetings a week just using
              Leadzilla
            </div>
          </div>
          {/* <div>
            <div className='mt-8 relative' style={{ width: '620px' }}>
              <input
                type='text'
                className='w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-black m-0'
                id='exampleFormControlInput1'
                placeholder='Enter Your Email'
              />
              <button
                className='absolute bg-yellow-500 px-5 py-2 border-2 border-black text-base font-bold  right-0.5 hover:text-white'
                type='submit'
              >
                Contact us
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MiddleTopSection;
