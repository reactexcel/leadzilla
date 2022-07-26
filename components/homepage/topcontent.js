import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
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
      className='bg-pink-bg w-full h-240px md:h-auto bg-cover relative'
      style={{height: '871px' }}
    >
      <Header />
      <div className='pt-16 text-center text-7xl md:text-4xl sm:text-left md:text-left sm:pl-6 md:pl-6'>
        {starImage.map((val, key) => {
          return (
            <Image src='/assets/starlandingpage.svg' alt='' width='40' height='40' className='py-3 p-2' key={key}/>
          );
        })}
        <div className='font-extrabold font-gilroybold'>More than just accurate,</div>
        <div className='py-1 font-gilroylight'>verified contact data </div>
      </div>
      <div className='text-2xl text-center sm:text-left sm:text-lg md:text-left md:text-lg p-6'>
        <div>
          Leadzilla gives you 95%+ accurate contact data and uses AI to write
          highly
        </div>
        <div>
          personalized emails for them. Sit back and enjoy warm leads in your
          inbox.
        </div>
      </div>
      <span className='absolute top-1/2 right-3/4 sm:hidden md:hidden'><Image src="/assets/bigArrowTwisted.png" alt="arrow" height="100" width="170" /></span>
      <div className='text-center p-6 mb-10'>
        <Link href="https://app.leadzilla.ai/login"> 
        <button className='bg-black p-3 px-5 text-2xl sm:text-lg font-bold relative cursor-pointer transform hover: transition duration-500 hover:scale-125'>
          Sign up and get 20 free leads now
          <button className='bg-yellow-500 p-3 px-4 text-2xl sm:text-lg font-bold absolute bottom-2 left-2 whitespace-nowrap cursor-pointer'>
            Sign up and get 20 free leads now!
          </button>
        </button>
        </Link>
      </div>
      <span className='absolute top-1/2 left-3/4 animate-bounce sm:hidden md:hidden'><Image src="/assets/eye.svg" alt="eye" height="50" width="60" /></span>
      <div className='flex justify-center' style={{ marginTop: '-80px'}}>
        <Image src='/assets/updatecooler.svg' alt='' height='800px' width='1100px' />
      </div>
    </div>
  );
};

export default TopContent;
