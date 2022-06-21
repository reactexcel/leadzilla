import React from 'react';
import Image from 'next/image';

const TopContent = () => {
  const starImage = [
    'starImage1',
    'starImage2',
    'starImage3',
    'starImage4',
    'starImage5',
  ];
  return (
    <div
      className='bg-pink-bg w-full h-240px md:h-auto bg-center bg-no-repeat bg-cover'
      style={{ fontFamily: 'Manrope', height: '871px' }}
    >
      <div className='pt-16 text-center text-7xl'>
        {starImage.map((val) => {
          return (
            <Image src='/assets/star.png' alt='' width='40px' height='40px' className='py-3 p-2'/>
          );
        })}
        <div className='font-bold'>More than just accurate,</div>
        <div className='py-1'>verified contact data </div>
      </div>
      <div className='text-2xl text-center p-6'>
        <div className=''>
          Leadzilla gives you 95%+ accurate contact data and uses AI to write
          highly
        </div>
        <div className=''>
          personalized emails for them. Sit back and enjoy warm leads in your
          inbox.
        </div>
      </div>
      <div className='text-center p-6'>
        <button className='bg-black p-3 px-5 text-2xl font-bold relative'>
          Sign up and get 20 free leads now
          <button className='bg-yellow-500 p-3 px-4 text-2xl font-bold absolute bottom-2 left-2 whitespace-nowrap'>
            Sign up and get 20 free leads now!
          </button>
        </button>
      </div>
      <div className='flex justify-center' style={{ marginTop: '-63px' }}>
        <Image src='/assets/group.png' alt='' height='800px' width='1100px' />
      </div>
    </div>
  );
};

export default TopContent;
